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
├── scripts/
│   └── generate-questions.js                                 # Script to sync markdown questions into questions.js
├── guess_the_prophet_by_emoji_100_islamic_quiz_questions.md  # Source database of 100 Islamic quiz questions
├── IDEAS.md                                                  # Brainstorming notes
└── README.md                                                 # Project documentation
```
