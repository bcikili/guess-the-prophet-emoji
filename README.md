# 🌟 Guess the Islamic Prophets (Version 1.0) 🕌

A fun, bright, and educational emoji-based quiz game created for and designed by **Ihsan** (age 11)!

---

## 🎮 How to Play (Version 1 Rules)
1. **Start Page & Rules:** Read the simple instructions on the home screen and pick your difficulty level:
   - 🟢 **Easy Level** (Questions 1–35)
   - 🟡 **Medium Level** (Questions 36–70)
   - 🔴 **Advanced Level** (Questions 71–100)
2. **10 Random Questions per Session:** Each game pulls **10 random questions** from your chosen level so every game feels fresh!
3. **Guess from the Big Emojis First:** Each question starts by displaying large, colorful emojis on a bright background for kids of all ages.
4. **Click "Next" (Bottom-Right Corner) to Reveal the Question:** Clicking the **Next** button in the bottom-right corner makes the **Question** appear on screen.
5. **Click "Answer" to Reveal Prophet & Context:** Clicking the **Answer** button reveals the **Name of the Prophet** and the **`Context:`** from the Qur'an and Sunnah!

---

## 📱 How to Play on iPad, iPhone, Tablet, or Any Device (GitHub Pages)
The game is hosted live on **GitHub Pages** and stays actively synced with this repository:
- 🌐 **Live Game Link:** [https://bcikili.github.io/guess-the-prophet-emoji/](https://bcikili.github.io/guess-the-prophet-emoji/)
- 📲 **Install as an iPad App (Full-Screen):**
  1. Open the link above in **Safari** on your iPad.
  2. Tap the **Share** button (square with an upward arrow) at the top-right.
  3. Tap **"Add to Home Screen"** → **Add**.
  4. A **Prophets Quiz 🕋** app icon will appear on your iPad Home Screen and launch full-screen like a real app!

---

## 🔄 Instant Auto-Sync with GitHub Pages
Any change you make to the game or questions is automatically synced and deployed to GitHub Pages:
- **Live Watcher (`start-auto-sync.bat` or `node scripts/auto-sync.js`):** Watches [`guess_the_prophet_by_emoji_100_islamic_quiz_questions.md`](./guess_the_prophet_by_emoji_100_islamic_quiz_questions.md), [`index.html`](./index.html), [`style.css`](./style.css), and [`app.js`](./app.js). Every time you save a file, it automatically:
  1. Rebuilds [`questions.js`](./questions.js) from your Markdown questions
  2. Runs the automated test suite ([`scripts/test-game.js`](./scripts/test-game.js))
  3. Commits and pushes the changes to GitHub
- **GitHub Actions (`.github/workflows/deploy-pages.yml`):** Even if you edit [`guess_the_prophet_by_emoji_100_islamic_quiz_questions.md`](./guess_the_prophet_by_emoji_100_islamic_quiz_questions.md) directly on GitHub.com from your iPad, GitHub Actions automatically rebuilds `questions.js`, tests the game, and publishes the updated site!

---

## 💻 How to Play Offline on Any Computer or Browser
This game is built with **100% standalone HTML, CSS, and JavaScript** with zero internet dependencies:
- **On this computer:** Simply double-click [`index.html`](./index.html) to open it in Chrome, Edge, Firefox, Brave, or Safari — **no internet required**!
- **On other computers / tablets:** Copy this folder (or zip it) onto a USB drive or send it to another computer, and double-click `index.html`.
- **Updating questions:** If you edit [`guess_the_prophet_by_emoji_100_islamic_quiz_questions.md`](./guess_the_prophet_by_emoji_100_islamic_quiz_questions.md), run `node scripts/generate-questions.js` to regenerate `questions.js`.

---

## 📁 Project Structure

```text
guess-the-prophet-emoji/
├── index.html                                                # Main playable game app (works offline!)
├── style.css                                                 # Bright, kid-friendly responsive styling
├── app.js                                                    # Game flow & 10-question randomizer logic
├── questions.js                                              # All 100 questions compiled for offline browser support
├── manifest.json                                             # iPad / PWA home screen web app metadata
├── LICENSE                                                   # Proprietary All Rights Reserved & Prior Art notice
├── scripts/
│   ├── generate-questions.js                                 # Script to sync markdown questions into questions.js
│   ├── test-game.js                                          # Automated end-to-end game flow test suite
│   ├── auto-sync.js                                          # Live file watcher to auto-sync updates to GitHub Pages
│   └── setup-github-pages.js                                 # One-step GitHub Pages repository & workflow setup
├── guess_the_prophet_by_emoji_100_islamic_quiz_questions.md  # Source database of 100 Islamic quiz questions
├── QUESTION_AUDIT_REVIEW.md                                  # Side-by-side audit and revision review log
├── IDEAS.md                                                  # Brainstorming notes
└── README.md                                                 # Project documentation
```

---

## ⚖️ Ownership, Intellectual Property & All Rights Reserved Notice

**Copyright © 2026 Burhan Cikili & Ihsan (`bcikili`). All Rights Reserved.**

- **Proprietary Work — No Open-Source License:** No permission or license (express or implied, under copyright, trademark, or patent) is granted to copy, clone, redistribute, republish, modify, create derivative works from, scrape/train AI models on, or commercially exploit this game, its code, its UI layout, or its quiz question compilation without prior written permission from the Owners.
- **Permitted Use:** Personal, family, and non-commercial classroom gameplay directly via [https://bcikili.github.io/guess-the-prophet-emoji/](https://bcikili.github.io/guess-the-prophet-emoji/).
- **Defensive Prior Art:** The timestamped Git commit history and public GitHub Pages publication document the Owners' authorship and creation date against any third-party patent or ownership claims. See [`LICENSE`](./LICENSE) for full terms.
