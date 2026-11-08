/**
 * Automated End-to-End Game Flow Test Suite for "Guess the Islamic Prophets" (v1.0)
 * Tests:
 * 1. Question database integrity (100 questions: 35 Easy, 35 Medium, 30 Advanced)
 * 2. Start Screen & Rules display
 * 3. Difficulty level selection (Easy, Medium, Advanced)
 * 4. Random 10 questions per session, strictly from the chosen level, with no duplicates
 * 5. Step-by-step UI flow:
 *    - Emojis shown first (Question & Answer hidden)
 *    - Clicking bottom-right Next button reveals the Question
 *    - Clicking Answer button reveals the Prophet's name and Context:
 *    - Clicking bottom-right Next button advances to the next question
 *    - Completing 10 questions displays the Summary screen
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Load HTML and verify structure
const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Create lightweight DOM simulation to run app.js directly
class MockElement {
  constructor(id, tagName = 'DIV') {
    this.id = id;
    this.tagName = tagName;
    this.textContent = '';
    this._innerHTML = '';
    this.style = {};
    this.attributes = {};
    this.children = [];
    this.listeners = {};
    Object.defineProperty(this, 'innerHTML', {
      get: () => this._innerHTML,
      set: (val) => {
        this._innerHTML = String(val);
        if (val === '') this.children = [];
      }
    });
    const classSet = new Set();
    this.classList = {
      add: (...cls) => cls.forEach(c => classSet.add(c)),
      remove: (...cls) => cls.forEach(c => classSet.delete(c)),
      contains: (c) => classSet.has(c)
    };
    Object.defineProperty(this, 'className', {
      get: () => Array.from(classSet).join(' '),
      set: (val) => {
        classSet.clear();
        String(val).split(/\s+/).filter(Boolean).forEach(c => classSet.add(c));
      }
    });
  }
  appendChild(child) {
    this.children.push(child);
  }
  addEventListener(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
  }
  click() {
    (this.listeners['click'] || []).forEach(fn => fn());
  }
  getAttribute(attr) {
    return this.attributes[attr];
  }
  setAttribute(attr, val) {
    this.attributes[attr] = val;
  }
}

const elements = {};
const ids = [
  'start-screen', 'game-screen', 'summary-screen',
  'level-badge', 'progress-text', 'progress-dots',
  'emoji-stage-card', 'emoji-showcase', 'stage-helper-text',
  'question-card', 'question-text',
  'answer-card', 'answer-text', 'context-text',
  'btn-answer', 'btn-next-corner', 'btn-home',
  'btn-play-again', 'btn-change-level',
  'summary-subtitle', 'recap-list'
];

ids.forEach(id => {
  assert(html.includes(`id="${id}"`), `index.html must contain id="${id}"`);
  elements[id] = new MockElement(id);
});

// Initialize default classes from index.html
elements['start-screen'].className = 'screen active';
elements['game-screen'].className = 'screen';
elements['summary-screen'].className = 'screen';
elements['question-card'].className = 'reveal-card question-card hidden';
elements['answer-card'].className = 'reveal-card answer-card hidden';
elements['btn-next-corner'].style.display = 'none';

const levelButtons = ['easy', 'medium', 'advanced'].map(lvl => {
  const btn = new MockElement(`btn-level-${lvl}`, 'BUTTON');
  btn.setAttribute('data-level', lvl);
  return btn;
});

global.window = {
  scrollTo: () => {}
};
global.document = {
  getElementById: (id) => elements[id],
  createElement: (tag) => new MockElement('', tag),
  querySelectorAll: (sel) => {
    if (sel === '[data-level]') return levelButtons;
    return [];
  }
};

// Load questions.js and app.js
require('../questions.js');
require('../app.js');

console.log('=== Running Guess the Islamic Prophets v1.0 Automated Tests ===\n');

// Test 1: Verify Question Database
const data = global.window.PROPHET_QUIZ_DATA;
assert.strictEqual(data.length, 100, 'Should have 100 total questions');
const easyPool = data.filter(q => q.level === 'easy');
const mediumPool = data.filter(q => q.level === 'medium');
const advancedPool = data.filter(q => q.level === 'advanced');
assert.strictEqual(easyPool.length, 35, 'Easy level should have 35 questions');
assert.strictEqual(mediumPool.length, 35, 'Medium level should have 35 questions');
assert.strictEqual(advancedPool.length, 30, 'Advanced level should have 30 questions');
console.log('PASS [1/5]: All 100 questions loaded (35 Easy, 35 Medium, 30 Advanced).');

// Test 2: Verify Start Screen Initial State
assert(elements['start-screen'].classList.contains('active'), 'Start screen should be active initially');
assert(!elements['game-screen'].classList.contains('active'), 'Game screen should be hidden initially');
assert(html.includes('How to Play &amp; Game Rules'), 'Start screen must explain how to play and rules');
console.log('PASS [2/5]: Start screen is active and displays game explanation & rules.');

// Test 3: Play a full 10-question session on Easy, Medium, and Advanced levels
['easy', 'medium', 'advanced'].forEach((level, idx) => {
  const btn = levelButtons[idx];
  btn.click();

  assert(elements['game-screen'].classList.contains('active'), `Game screen should be active for ${level}`);
  assert.strictEqual(elements['btn-next-corner'].style.display, 'inline-flex', 'Bottom-right Next button should be visible during game');

  const seenEmojisAndQuestions = new Set();
  const validPoolQuestions = new Set(data.filter(q => q.level === level).map(q => q.question));

  for (let qNum = 1; qNum <= 10; qNum++) {
    // Check progress indicator
    assert.strictEqual(elements['progress-text'].textContent, `Question ${qNum} of 10`);

    // Stage 1: Emojis are shown first, Question and Answer are hidden
    assert(elements['emoji-showcase'].children.length > 0, 'Emojis should be displayed on screen');
    assert(elements['question-card'].classList.contains('hidden'), 'Question should be hidden initially when emojis first appear');
    assert(elements['answer-card'].classList.contains('hidden'), 'Answer & Context should be hidden initially');
    assert(!elements['btn-answer'].classList.contains('hidden'), 'Answer button should be visible');

    // Stage 2: Click bottom-right Next button -> Question appears!
    elements['btn-next-corner'].click();
    assert(!elements['question-card'].classList.contains('hidden'), 'Clicking bottom-right Next button must make the Question appear');
    assert(elements['answer-card'].classList.contains('hidden'), 'Answer should still be hidden until Answer button is clicked');

    // Verify question belongs to the selected level and has no duplicates in this 10-question session
    const rawQuestionRendered = elements['question-text'].innerHTML.replace(/<\/?em>/g, '*');
    assert(validPoolQuestions.has(rawQuestionRendered), `Question "${rawQuestionRendered}" must come from level "${level}"`);
    assert(!seenEmojisAndQuestions.has(rawQuestionRendered), 'Questions in a 10-question session must not repeat');
    seenEmojisAndQuestions.add(rawQuestionRendered);

    // Stage 3: Click Answer button -> Prophet name and Context appear!
    elements['btn-answer'].click();
    assert(!elements['answer-card'].classList.contains('hidden'), 'Clicking Answer button must reveal the Prophet name and Context');
    assert(elements['answer-text'].innerHTML.length > 0, 'Prophet name should not be empty');
    assert(elements['context-text'].innerHTML.length > 0, 'Context should not be empty');

    // Advance to next question (or summary on Q10) using bottom-right Next button
    elements['btn-next-corner'].click();
  }

  assert.strictEqual(seenEmojisAndQuestions.size, 10, `Should have asked 10 unique questions for ${level}`);
  assert(elements['summary-screen'].classList.contains('active'), `Summary screen should appear after 10 questions (${level})`);
  assert.strictEqual(elements['recap-list'].children.length, 10, 'Summary screen should list all 10 questions played');

  // Return to start screen to test next level
  elements['btn-change-level'].click();
  assert(elements['start-screen'].classList.contains('active'), 'Should return to start screen');
});

console.log('PASS [3/5]: All 3 levels (Easy, Medium, Advanced) pull 10 unique random questions strictly from their level.');
console.log('PASS [4/5]: Emoji -> Next (Question appears) -> Answer (Prophet & Context appear) -> Next Question flow verified.');
console.log('PASS [5/5]: Session completion after 10 questions & level switching verified.\n');
console.log('ALL TESTS PASSED SUCCESSFULLY!');
