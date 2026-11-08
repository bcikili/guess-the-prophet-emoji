/**
 * One-step GitHub Repository + GitHub Pages Provisioner
 * Uses the user's configured Git Credential Manager token to:
 * 1. Create or verify the public `guess-the-prophet-emoji` repository on GitHub
 * 2. Configure the `origin` remote and push the current branch
 * 3. Enable GitHub Pages (GitHub Actions workflow deployment + branch source)
 */

const { execSync, spawnSync } = require('child_process');
const https = require('https');

const REPO_NAME = 'guess-the-prophet-emoji';

function getGitHubCredentials() {
  const res = spawnSync('git', ['credential', 'fill'], {
    input: 'protocol=https\nhost=github.com\n\n',
    encoding: 'utf8'
  });
  if (res.status !== 0 || !res.stdout) {
    throw new Error('Could not retrieve GitHub credentials from Git Credential Manager.');
  }
  const creds = {};
  for (const line of res.stdout.split(/\r?\n/)) {
    const idx = line.indexOf('=');
    if (idx > 0) {
      creds[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }
  if (!creds.password) {
    throw new Error('No password/token returned by git credential fill.');
  }
  return creds;
}

function githubRequest(method, apiPath, token, body = null) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : null;
    const req = https.request(
      {
        hostname: 'api.github.com',
        path: apiPath,
        method,
        headers: {
          'User-Agent': 'guess-the-prophet-emoji-sync',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          ...(payload ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } : {})
        }
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          let parsed = null;
          try {
            parsed = data ? JSON.parse(data) : null;
          } catch (_) {
            parsed = data;
          }
          resolve({ status: res.statusCode, data: parsed });
        });
      }
    );
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('1. Checking GitHub credentials via Git Credential Manager...');
  const creds = getGitHubCredentials();
  const token = creds.password;

  const userRes = await githubRequest('GET', '/user', token);
  if (userRes.status !== 200) {
    throw new Error(`GitHub API /user returned status ${userRes.status}: ${JSON.stringify(userRes.data)}`);
  }
  const owner = userRes.data.login;
  console.log(`   Authenticated as GitHub user: ${owner}`);

  console.log(`2. Checking if repository ${owner}/${REPO_NAME} exists...`);
  let repoRes = await githubRequest('GET', `/repos/${owner}/${REPO_NAME}`, token);
  if (repoRes.status === 404) {
    console.log(`   Creating public repository ${owner}/${REPO_NAME}...`);
    repoRes = await githubRequest('POST', '/user/repos', token, {
      name: REPO_NAME,
      description: 'Guess the Islamic Prophets - Interactive Emoji Quiz Game for iPad, Mobile & Web',
      private: false,
      has_issues: true,
      has_pages: true
    });
    if (repoRes.status !== 201) {
      throw new Error(`Failed to create repository (${repoRes.status}): ${JSON.stringify(repoRes.data)}`);
    }
    console.log(`   Created repository: ${repoRes.data.html_url}`);
  } else if (repoRes.status === 200) {
    console.log(`   Repository already exists: ${repoRes.data.html_url}`);
  } else {
    throw new Error(`Unexpected response checking repo (${repoRes.status}): ${JSON.stringify(repoRes.data)}`);
  }

  const remoteUrl = `https://github.com/${owner}/${REPO_NAME}.git`;
  console.log(`3. Configuring git remote origin -> ${remoteUrl}`);
  try {
    execSync('git remote get-url origin', { stdio: 'ignore' });
    execSync(`git remote set-url origin ${remoteUrl}`, { stdio: 'inherit' });
  } catch (_) {
    execSync(`git remote add origin ${remoteUrl}`, { stdio: 'inherit' });
  }

  console.log('4. Staging, committing, and pushing latest game files to GitHub...');
  execSync('node scripts/generate-questions.js', { stdio: 'inherit' });
  execSync('node scripts/test-game.js', { stdio: 'inherit' });
  execSync('git add -A', { stdio: 'inherit' });
  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
  if (status) {
    execSync('git commit -m "Configure GitHub Pages auto-sync and iPad web app support"', { stdio: 'inherit' });
  }
  const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  execSync(`git push -u origin ${branch}`, { stdio: 'inherit' });

  console.log('5. Enabling GitHub Pages...');
  const pagesGet = await githubRequest('GET', `/repos/${owner}/${REPO_NAME}/pages`, token);
  if (pagesGet.status === 404) {
    const pagesCreate = await githubRequest('POST', `/repos/${owner}/${REPO_NAME}/pages`, token, {
      build_type: 'workflow',
      source: {
        branch,
        path: '/'
      }
    });
    if (pagesCreate.status === 201 || pagesCreate.status === 200) {
      console.log(`   GitHub Pages enabled! Live URL: ${pagesCreate.data.html_url}`);
    } else {
      console.log(`   Note: GitHub Pages API returned ${pagesCreate.status}: ${JSON.stringify(pagesCreate.data)}`);
    }
  } else if (pagesGet.status === 200) {
    await githubRequest('PUT', `/repos/${owner}/${REPO_NAME}/pages`, token, {
      build_type: 'workflow',
      source: {
        branch,
        path: '/'
      }
    });
    console.log(`   GitHub Pages is active! Live URL: ${pagesGet.data.html_url}`);
  }

  console.log(`\n=============================================================`);
  console.log(`SUCCESS! Your game is synced to GitHub Pages:`);
  console.log(`Repository: https://github.com/${owner}/${REPO_NAME}`);
  console.log(`Live Game URL (iPad/Mobile/PC): https://${owner}.github.io/${REPO_NAME}/`);
  console.log(`=============================================================\n`);
}

main().catch((err) => {
  console.error('Setup failed:', err.message);
  process.exit(1);
});
