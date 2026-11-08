const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'guess_the_prophet_by_emoji_100_islamic_quiz_questions.md');
const outPath = path.join(__dirname, '..', 'questions.js');

const content = fs.readFileSync(mdPath, 'utf8');
const lines = content.split(/\r?\n/);

let currentLevel = null;
let currentQuestion = null;
const questions = [];

for (const line of lines) {
  if (line.startsWith('## Easy Level')) {
    currentLevel = 'easy';
  } else if (line.startsWith('## Medium Level')) {
    currentLevel = 'medium';
  } else if (line.startsWith('## Advanced Level')) {
    currentLevel = 'advanced';
  } else if (line.startsWith('## Educator')) {
    currentLevel = null;
  }

  const qMatch = line.match(/^### Question (\d+)/);
  if (qMatch && currentLevel) {
    if (currentQuestion) {
      questions.push(currentQuestion);
    }
    currentQuestion = {
      id: parseInt(qMatch[1], 10),
      level: currentLevel,
      emojis: '',
      question: '',
      answer: '',
      context: ''
    };
    continue;
  }

  if (currentQuestion && currentLevel) {
    const emojiMatch = line.match(/^\*\s+\*\*Emojis:\*\*\s*(.+)$/);
    if (emojiMatch) {
      currentQuestion.emojis = emojiMatch[1].trim();
      continue;
    }

    const questionMatch = line.match(/^\*\s+\*\*Question:\*\*\s*(.+)$/);
    if (questionMatch) {
      currentQuestion.question = questionMatch[1].trim();
      continue;
    }

    const answerMatch = line.match(/^\*\s+\*\*Answer:\*\*\s*(.+)$/);
    if (answerMatch) {
      // Remove surrounding ** if present
      let ans = answerMatch[1].trim();
      ans = ans.replace(/^\*\*(.+)\*\*$/, '$1');
      currentQuestion.answer = ans;
      continue;
    }

    const contextMatch = line.match(/^\*\s+\*\*Context:\*\*\s*(.+)$/);
    if (contextMatch) {
      currentQuestion.context = contextMatch[1].trim();
      continue;
    }
  }
}

if (currentQuestion) {
  questions.push(currentQuestion);
}

const counts = {
  easy: questions.filter(q => q.level === 'easy').length,
  medium: questions.filter(q => q.level === 'medium').length,
  advanced: questions.filter(q => q.level === 'advanced').length,
  total: questions.length
};

console.log('Parsed questions:', counts);

// Validate every question has all fields
for (const q of questions) {
  if (!q.emojis || !q.question || !q.answer || !q.context) {
    console.error('Incomplete question:', q);
    process.exit(1);
  }
}

const jsOutput = `// Auto-generated from guess_the_prophet_by_emoji_100_islamic_quiz_questions.md
// Works offline across all browsers without requiring network or fetch()
window.PROPHET_QUIZ_DATA = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outPath, jsOutput, 'utf8');
console.log('Successfully wrote questions.js');

