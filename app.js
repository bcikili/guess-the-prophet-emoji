/* ==========================================================================
   Guess the Islamic Prophets - Version 1.0
   Main Game Logic (100% Offline, Cross-Browser Compatible)
   ========================================================================== */

(function () {
  'use strict';

  const QUESTIONS_PER_SESSION = 10;
  const LEVEL_LABELS = {
    easy: '🟢 Easy Level',
    medium: '🟡 Medium Level',
    advanced: '🔴 Advanced Level'
  };

  // Game State
  let currentLevel = 'easy';
  let sessionQuestions = [];
  let currentIndex = 0;
  let questionVisible = false;
  let answerVisible = false;

  // DOM Elements
  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game-screen');
  const summaryScreen = document.getElementById('summary-screen');

  const levelBadge = document.getElementById('level-badge');
  const progressText = document.getElementById('progress-text');
  const progressDots = document.getElementById('progress-dots');

  const emojiStageCard = document.getElementById('emoji-stage-card');
  const emojiShowcase = document.getElementById('emoji-showcase');
  const stageHelperText = document.getElementById('stage-helper-text');

  const questionCard = document.getElementById('question-card');
  const questionText = document.getElementById('question-text');

  const answerCard = document.getElementById('answer-card');
  const answerText = document.getElementById('answer-text');
  const contextText = document.getElementById('context-text');

  const btnAnswer = document.getElementById('btn-answer');
  const btnNextCorner = document.getElementById('btn-next-corner');
  const btnHome = document.getElementById('btn-home');

  const btnPlayAgain = document.getElementById('btn-play-again');
  const btnChangeLevel = document.getElementById('btn-change-level');
  const summarySubtitle = document.getElementById('summary-subtitle');
  const recapList = document.getElementById('recap-list');

  /**
   * Safely format markdown italics (*word*) into HTML <em> tags
   */
  function formatMarkdownText(rawText) {
    if (!rawText) return '';
    const escaped = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return escaped.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  /**
   * Fisher-Yates shuffle to pick random questions from the selected level
   */
  function getRandomQuestionsForLevel(level, count) {
    const allData = window.PROPHET_QUIZ_DATA || [];
    const pool = allData.filter(function (item) {
      return item.level === level;
    });

    const shuffled = pool.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }

    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  /**
   * Switch visible screen
   */
  function showScreen(screenName) {
    startScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    summaryScreen.classList.remove('active');

    if (screenName === 'start') {
      startScreen.classList.add('active');
      btnNextCorner.style.display = 'none';
    } else if (screenName === 'game') {
      gameScreen.classList.add('active');
      btnNextCorner.style.display = 'inline-flex';
    } else if (screenName === 'summary') {
      summaryScreen.classList.add('active');
      btnNextCorner.style.display = 'none';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Start a new 10-question game session for the selected difficulty
   */
  function startSession(level) {
    currentLevel = level;
    sessionQuestions = getRandomQuestionsForLevel(level, QUESTIONS_PER_SESSION);
    currentIndex = 0;

    levelBadge.className = 'level-badge ' + level;
    levelBadge.textContent = LEVEL_LABELS[level] || level;

    showScreen('game');
    renderCurrentQuestion();
  }

  /**
   * Render progress dots at the top of the game screen
   */
  function renderProgressDots() {
    progressDots.innerHTML = '';
    for (let i = 0; i < sessionQuestions.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'progress-dot';
      if (i < currentIndex) {
        dot.classList.add('completed');
      } else if (i === currentIndex) {
        dot.classList.add('active');
      }
      progressDots.appendChild(dot);
    }
  }

  /**
   * Split emoji clue string into individual visual items
   */
  function renderEmojis(emojiString) {
    emojiShowcase.innerHTML = '';
    const tokens = emojiString.trim().split(/\s+/);
    tokens.forEach(function (token, idx) {
      const span = document.createElement('span');
      span.className = 'emoji-item';
      span.style.animationDelay = (idx * 0.06) + 's';
      span.textContent = token;
      emojiShowcase.appendChild(span);
    });
  }

  /**
   * Render the active question in Stage 1 (Emojis first!)
   */
  function renderCurrentQuestion() {
    const q = sessionQuestions[currentIndex];
    if (!q) return;

    questionVisible = false;
    answerVisible = false;

    // Update header progress
    progressText.textContent = 'Question ' + (currentIndex + 1) + ' of ' + sessionQuestions.length;
    renderProgressDots();

    // Cycle bright colorful background themes
    const themeIndex = currentIndex % 5;
    emojiStageCard.className = 'emoji-stage-card emoji-theme-' + themeIndex;

    // Render big emojis
    renderEmojis(q.emojis);
    stageHelperText.textContent = 'Can you guess the Prophet from these emojis? Click "Next" in the bottom-right corner to see the question, or click "Answer"!';

    // Prepare Question & Answer content (hidden initially)
    questionText.innerHTML = formatMarkdownText(q.question);
    answerText.innerHTML = formatMarkdownText(q.answer);
    contextText.innerHTML = formatMarkdownText(q.context);

    questionCard.classList.add('hidden');
    answerCard.classList.add('hidden');

    // Show Answer button
    btnAnswer.classList.remove('hidden');

    // Update bottom-right Next button for Stage 1 (reveal question)
    updateNextButtonLabel();
  }

  /**
   * Update the bottom-right corner Next button text & style based on current stage
   */
  function updateNextButtonLabel() {
    const isLastQuestion = currentIndex === sessionQuestions.length - 1;

    if (!questionVisible && !answerVisible) {
      btnNextCorner.classList.remove('ready-next-question');
      btnNextCorner.innerHTML = 'Next (Show Question) ➡️';
    } else {
      btnNextCorner.classList.add('ready-next-question');
      if (isLastQuestion) {
        btnNextCorner.innerHTML = 'Finish Game 🏆';
      } else {
        btnNextCorner.innerHTML = 'Next Question ➡️';
      }
    }
  }

  /**
   * Reveal the Question card on screen
   */
  function revealQuestion() {
    questionVisible = true;
    questionCard.classList.remove('hidden');
    if (!answerVisible) {
      stageHelperText.textContent = 'Now read the question below! Click the "Answer" button when you are ready to check!';
    }
    updateNextButtonLabel();
  }

  /**
   * Reveal the Prophet Name (Answer) and **Context:** on screen
   */
  function revealAnswer() {
    answerVisible = true;
    // Also show question card if they clicked Answer directly from emojis
    questionVisible = true;
    questionCard.classList.remove('hidden');
    answerCard.classList.remove('hidden');
    btnAnswer.classList.add('hidden');

    stageHelperText.textContent = 'Awesome job! Check the Prophet name and Context below, then click "Next Question" in the bottom-right corner.';
    updateNextButtonLabel();
  }

  /**
   * Handle clicking the bottom-right Next button:
   * - If the Question is not yet shown, clicking Next makes the Question appear!
   * - Once the Question (or Answer) is on screen, clicking Next advances to the next question!
   */
  function handleNextCornerClick() {
    if (!questionVisible) {
      revealQuestion();
      return;
    }

    // Move to next question or finish session
    if (currentIndex < sessionQuestions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      renderSummaryScreen();
    }
  }

  /**
   * Render end-of-round Summary Screen after completing 10 questions
   */
  function renderSummaryScreen() {
    summarySubtitle.textContent =
      'Masha’Allah! You completed 10 random questions from the ' +
      (LEVEL_LABELS[currentLevel] || currentLevel) +
      '!';

    recapList.innerHTML = '';
    sessionQuestions.forEach(function (q, idx) {
      const item = document.createElement('div');
      item.className = 'recap-item';
      item.innerHTML =
        '<div class="recap-item-top">' +
          '<span class="recap-emojis">' + (idx + 1) + '. ' + q.emojis + '</span>' +
          '<span class="recap-answer">✨ ' + formatMarkdownText(q.answer) + '</span>' +
        '</div>' +
        '<div class="recap-context"><strong>Context:</strong> ' + formatMarkdownText(q.context) + '</div>';
      recapList.appendChild(item);
    });

    showScreen('summary');
  }

  // Event Listeners for Level Selection Buttons
  const levelButtons = document.querySelectorAll('[data-level]');
  levelButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const selectedLevel = btn.getAttribute('data-level');
      startSession(selectedLevel);
    });
  });

  // Answer Button Listener
  btnAnswer.addEventListener('click', function () {
    revealAnswer();
  });

  // Bottom-Right Next Button Listener
  btnNextCorner.addEventListener('click', function () {
    handleNextCornerClick();
  });

  // Home / Change Level Button
  btnHome.addEventListener('click', function () {
    showScreen('start');
  });

  // Summary Screen Buttons
  btnPlayAgain.addEventListener('click', function () {
    startSession(currentLevel);
  });

  btnChangeLevel.addEventListener('click', function () {
    showScreen('start');
  });
})();

