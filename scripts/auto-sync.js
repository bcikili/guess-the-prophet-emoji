/**
 * Live File Watcher & GitHub Pages Auto-Sync Daemon
 *
 * Watches your game files for any edits:
 * - guess_the_prophet_by_emoji_100_islamic_quiz_questions.md
 * - index.html
 * - style.css
 * - app.js
 *
 * Whenever you save a change:
 * 1. Automatically regenerates `questions.js` from the Markdown file
 * 2. Runs the automated test suite (`scripts/test-game.js`) to ensure zero bugs
 * 3. Commits and pushes the changes to GitHub (`git push`), triggering instant GitHub Pages deployment!
 *
 * Usage:
 *   node scripts/auto-sync.js          (watch continuously and push on every save)
 *   node scripts/auto-sync.js --once   (sync and push once immediately)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const WATCHED_FILES = new Set([
  'guess_the_prophet_by_emoji_100_islamic_quiz_questions.md',
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'README.md',
  'LICENSE',
  '.github/workflows/deploy-pages.yml'
]);

let debounceTimer = null;
let isSyncing = false;
let pendingSync = false;

function syncNow(reason = 'Manual sync') {
  if (isSyncing) {
    pendingSync = true;
    return;
  }
  isSyncing = true;

  try {
    console.log(`\n[${new Date().toLocaleTimeString()}] Change detected (${reason}). Syncing...`);

    // 1. Rebuild questions.js from markdown
    execSync('node scripts/generate-questions.js', { cwd: ROOT_DIR, stdio: 'inherit' });

    // 2. Verify game integrity before pushing
    execSync('node scripts/test-game.js', { cwd: ROOT_DIR, stdio: 'inherit' });

    // 3. Check if git working tree has changes
    const status = execSync('git status --porcelain', { cwd: ROOT_DIR, encoding: 'utf8' }).trim();
    if (!status) {
      console.log(`[${new Date().toLocaleTimeString()}] No new changes to push.`);
    } else {
      execSync('git add -A', { cwd: ROOT_DIR, stdio: 'inherit' });
      const changedFiles = status
        .split(/\r?\n/)
        .map((line) => line.trim().replace(/^[A-Z?]+\s+/, ''))
        .join(', ');
      const commitMsg = `Auto-sync update: ${changedFiles}`.slice(0, 120);
      execSync(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, { cwd: ROOT_DIR, stdio: 'inherit' });
      execSync('git push', { cwd: ROOT_DIR, stdio: 'inherit' });
      console.log(`[${new Date().toLocaleTimeString()}] Pushed to GitHub! GitHub Pages is updating now.`);
    }
  } catch (err) {
    console.error(`[${new Date().toLocaleTimeString()}] Auto-sync error:`, err.message);
  } finally {
    isSyncing = false;
    if (pendingSync) {
      pendingSync = false;
      scheduleSync('Pending file changes');
    }
  }
}

function scheduleSync(filename) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    syncNow(filename);
  }, 1500);
}

if (process.argv.includes('--once')) {
  syncNow('One-time sync');
  process.exit(0);
}

console.log('=============================================================');
console.log(' Live GitHub Pages Auto-Sync Watcher Active!');
console.log(' Watching for changes in:');
for (const f of WATCHED_FILES) {
  console.log(`   - ${f}`);
}
console.log(' Any file you save will automatically update questions.js,');
console.log(' run tests, commit, and push live to GitHub Pages!');
console.log('=============================================================\n');

// Verify .git write access on startup
const lockTestPath = path.join(ROOT_DIR, '.git', 'autosync-perm-check.tmp');
fs.writeFileSync(lockTestPath, 'ok');
fs.unlinkSync(lockTestPath);

// Perform an initial sync check on startup
syncNow('Initial startup check');

fs.watch(ROOT_DIR, { persistent: true }, (eventType, filename) => {
  if (!filename) return;
  const normalized = filename.replace(/\\/g, '/');
  if (WATCHED_FILES.has(normalized)) {
    scheduleSync(normalized);
  }
});
