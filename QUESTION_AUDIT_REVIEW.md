# Question Audit & Revision Review

This review summarizes all audit findings and approved revisions applied locally to [`guess_the_prophet_by_emoji_100_islamic_quiz_questions.md`](guess_the_prophet_by_emoji_100_islamic_quiz_questions.md) and regenerated into [`questions.js`](questions.js).

> [!NOTE]
> All changes have been applied locally and verified with `node scripts/generate-questions.js` and `node scripts/test-game.js` (all 5 automated suites passing). Nothing has been committed or pushed to GitHub Pages pending your review.

## Overview & Summary Table

| Metric / Category | Easy (Q1–Q35) | Medium (Q36–Q70) | Advanced (Q71–Q100) | Total |
|---|---:|---:|---:|---:|
| **Total Questions Audited** | 35 | 35 | 30 | **100** |
| **Part 1: Non-Prophet / Unconfirmed-Prophet Answer Rewrites** *(incl. Q39 & Q51 Quick-List fixes)* | 0 | 9 | 16 | **25** |
| **Part 2: Source / Authenticity / Emoji / Difficulty / Deduplication Revisions** *(incl. 4 minor polishes on Q2, Q11, Q19, Q62)* | 32 | 23 | 14 | **69** |
| **Part 3: Advanced Context Expansions (7-Year-Old Readability)** *(overlaps Parts 1 & 2 for all Advanced items)* | — | — | 30 | **30** |
| **Part 4: Verified Clean & Completely Untouched** | 3 | 3 | 0 | **6** |
| **Total Unique Questions Accounted For (Parts 1 + 2 + 4)** | 35 | 35 | 30 | **100** |

- **Header & Table Updates:** Updated the Advanced Level subtitle (`"Covers intricate Quranic dialogues, authentic Sunnah episodes, and lesser-known prophets."`) and updated all 100 cells in the **Educator & Host Answer Key Quick-List** table so every entry matches its question.
- **Game Compatibility Verified:** Ensured every `Emojis:` line contains only space-separated emojis (zero English words), `Question:` avoids `**bold**` and `&`/`<`/`>` and never leaks its prophet's name, and `Answer:`/`Context:` use only `*italics*` inside body text.

---

## Part 1 — Questions Where the Answer Was Not a Prophet's Name (Side-by-Side Review)

Every question whose original `Answer:` (or `Educator & Host Answer Key Quick-List` entry) was not a confirmed Prophet's name (25 total: 9 Medium, 16 Advanced) is shown below with its original text and updated text.

### Medium — Question 36
- **Problem Found:** Non-Prophet Answer (`Habil (Abel)`) + Question revealed Prophet Adam + extra-Quranic details ("healthy sheep", "inferior crops", "fire from heaven")
- **Why / Resolution:** All quiz answers must name a Prophet, and Surah Al-Ma'idah (5:27–31) does not specify Abel's name, sheep vs. crops, or fire from heaven. Rewritten around 5:27–31 with Prophet Adam (AS) as the answer and updated emojis.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🌾 🐑 🎁 🔥 😡 🪨 | 🎁 ✅ ❌ 😡 🐦‍⬛ 🕳️ |
| **Question** | In the story of Prophet Adam's family, whose sincere sacrifice of a healthy sheep was accepted by fire from heaven? | Which prophet's two sons offered sacrifices to Allah—one accepted from the righteous brother who said *"Allah only accepts from the righteous,"* and the other rejected? |
| **Answer** | **Habil (Abel) [Son of Prophet Adam (AS)]** | **Prophet Adam (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Ma'idah (27). Habil gave from the best of his flock, while his brother Qabil gave inferior crops resentfully. | Surah Al-Ma'idah (5:27–31). When one son became envious and killed his brother, Allah sent a raven scratching the earth to show him how to bury his brother's body. |
| **Quick-List** | `Habil (Abel)` | `Adam (AS)` |

### Medium — Question 37
- **Problem Found:** Non-Prophet Answer (`A Raven / Crow`) + Question revealed Adam + awkward `🤲` emoji + overlapped Q36
- **Why / Resolution:** Reassigned to Prophet Dawud (AS) based on *Sahih al-Bukhari* (1131, 3420) and *Sahih Muslim* (1159) regarding his balanced routine of fasting every other day and praying one-third of the night (avoiding overlap with Advanced Q80).

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🐦‍⬛ 🪨 🕳️ 😢 🤲 🩸 | 🌙 🤲 ☀️ 🍽️ 🚫 ⚖️ |
| **Question** | Following the world's first tragedy, what creature did Allah send to show Adam's son how to bury a deceased body in the dirt? | Which prophet's balanced routine of fasting every other day and praying a third of the night—sleeping half before and a sixth after—was praised as most beloved to Allah? |
| **Answer** | **A Raven / Crow (Story of Adam's sons)** | **Prophet Dawud (David) (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Ma'idah (31). Allah sent a raven scratching the ground to demonstrate human burial. | *Sahih al-Bukhari* (1131, 3420) and *Sahih Muslim* (1159). Prophet Muhammad ﷺ praised this prophet's voluntary fasting and night prayer (*Tahajjud*) as the finest balance of worship and rest. |
| **Quick-List** | `Raven / Crow` | `Dawud (AS)` |

### Medium — Question 39
- **Problem Found:** Quick-List had Non-Prophet entry (`Nuh's Son`) contradicting main Answer (`Prophet Nuh`) + wording precision against Surah Hud (11:43)
- **Why / Resolution:** Corrected Quick-List cell to `Nuh (AS)`. Refined Question and Context to match Surah Hud (11:42–43): his son *claimed* he would take refuge on a mountain before waves came between them.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🏔️ 🌊 👦 🚫 🚢 💔 | 🏔️ 🌊 👦 🚫 🚢 💔 |
| **Question** | Which prophet called out with grief to his disobedient son as floodwaters rose, but the son climbed a mountain and drowned? | Which prophet called out to his disbelieving son to board the Ark as towering waves rose, only for his son to claim a mountain would protect him before the waves came between them? |
| **Answer** | **Prophet Nuh (Noah) (ʿAlayhi as-Salām)** | **Prophet Nuh (Noah) (ʿAlayhi as-Salām)** |
| **Context** | Surah Hud (42–43). The son said: *"I will seek refuge on a mountain to protect me from the water,"* to which Nuh replied there was no protector that day except Allah. | Surah Hud (11:42–43). His son refused to board and said, *"I will take refuge on a mountain to protect me from the water."* Nuh replied that none could protect anyone from Allah's decree that day except whom He shows mercy, and the waves overwhelmed his son. |
| **Quick-List** | `Nuh's Son` | `Nuh (AS)` |

### Medium — Question 40
- **Problem Found:** Non-Prophet Answer (`Mount Judi`) + Question revealed Prophet Nuh + Biblical dove/olive branch (`🌿 🕊️`) and modern flag (`🇹🇷`)
- **Why / Resolution:** Rewritten around Surah Hud (11:44) so the answer is Prophet Nuh (AS), replacing the olive branch/dove and modern Turkish flag with Quranic flood/Ark/mountain emojis.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🚢 ⛰️ 🌿 🕊️ ⚓ 🇹🇷 | 🚢 🌍 💧 ☁️ ⛰️ ⚓ |
| **Question** | On which specific mountain did Prophet Nuh's Ark come to rest safely when the floodwaters receded? | Which prophet's Ark settled safely upon Mount Judi (*Al-Judi*) after Allah commanded the earth to swallow its water and the sky to withhold its rain? |
| **Answer** | **Mount Judi (Jabal Al-Judi) (Story of Prophet Nuh)** | **Prophet Nuh (Noah) (ʿAlayhi as-Salām)** |
| **Context** | Surah Hud (44). *"And it rested on Mount Judi, and it was said, 'Away with the wrongdoing people.'"* | Surah Hud (11:44). *"And it was said, 'O earth, swallow your water, and O sky, withhold [your rain].' And the water subsided, and the matter was accomplished, and the ship came to rest on Mount Judi."* |
| **Quick-List** | `Mount Judi` | `Nuh (AS)` |

### Medium — Question 51
- **Problem Found:** Quick-List had Non-Prophet entry (`Sarah / Ibrahim (AS)`) + emoji inaccuracies (`🐑`, `😂`) + spoiled Ishaq in Question
- **Why / Resolution:** Corrected Quick-List cell to `Ibrahim (AS)`. Swapped `🐑` to `🐄` (roasted calf per Surah Hud 11:69 & 51:26), swapped undignified `😂` to `😊`, removed the Ishaq spoiler from Question, and cited *Sahih al-Bukhari* (3358).

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 👵 👴 👼 🎁 👂 😂 🐑 | 🍽️ 🐄 👵 👴 ✨ 😊 👶 |
| **Question** | Which prophet's wife, Sarah, was given glad tidings of giving birth to Prophet Ishaq in extreme old age by visiting angels? | Which prophet and his elderly wife Sarah hosted angelic guests with a roasted calf and received glad tidings of a prophet son and grandson in their old age? |
| **Answer** | **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)** | **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)** |
| **Context** | Surah Hud (69–73) and Surah Adh-Dhariyat (28–30). The angels were en route to the cities of Prophet Lut. | Surah Hud (11:69–73), Surah Adh-Dhariyat (51:24–30), and *Sahih al-Bukhari* (3358, which names Sarah). The angels did not eat the roasted calf and announced the birth of Prophet Ishaq and, after him, Prophet Ya'qub before departing to the people of Prophet Lut. |
| **Quick-List** | `Sarah / Ibrahim (AS)` | `Ibrahim (AS)` |

### Medium — Question 60
- **Problem Found:** Non-Prophet Answer (`Golden Locusts`) + Question revealed Prophet Ayyub + inaccurate "solid gold ... from the sky"
- **Why / Resolution:** Rewritten directly around *Sahih al-Bukhari* (279, 3391) so the answer is Prophet Ayyub (AS) and the wording matches the narration of golden locusts falling upon him while bathing.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🤒 🦗 🪙 🌧️ 💰 🤲 | 🚿 🦗 🪙 ✨ 👕 🤲 |
| **Question** | When Prophet Ayyub completed his severe trial, with what miraculous creatures made of solid gold did Allah shower him from the sky? | Which prophet was showered with golden locusts while bathing after his trial and gathered them in his garment, saying he could never do without Allah's blessing? |
| **Answer** | **Golden Locusts (Prophet Ayyub)** | **Prophet Ayyub (Job) (ʿAlayhi as-Salām)** |
| **Context** | Sahih al-Bukhari. While bathing, a shower of golden locusts fell upon him, and he collected them gratefully in his garment. | *Sahih al-Bukhari* (279 / 3391). When Allah asked whether He had not already enriched him, Ayyub replied: *"Yes, by Your Might! But I cannot do without Your blessing."* |
| **Quick-List** | `Golden Locusts` | `Ayyub (AS)` |

### Medium — Question 63
- **Problem Found:** Non-Prophet Answer (`Maqam Ibrahim`) + Question revealed Prophet Ibrahim + modern flag (`🇸🇦`)
- **Why / Resolution:** Rewritten around Surah Al-Baqarah (2:125), Surah Ali 'Imran (3:97), and *Sahih al-Bukhari* (3364) so the answer is Prophet Ibrahim (AS), and removed the anachronistic `🇸🇦` flag.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🪨 👣 🕋 🧱 🤲 🇸🇦 | 🪨 👣 🕋 🧱 🤲 |
| **Question** | Upon which special stone did Prophet Ibrahim stand while building the upper walls of the Kaaba, which softened to record his footprints? | Which prophet stood upon a special stone—now known as his *Maqam* (Station)—while raising the upper walls of the Kaaba, leaving his footprints upon it as a lasting sign? |
| **Answer** | **Maqam Ibrahim (Station of Ibrahim)** | **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Baqarah (125) and Surah Ali 'Imran (97). Believers are commanded to take the Station of Ibrahim as a place of prayer. | Surah Al-Baqarah (2:125), Surah Ali 'Imran (3:97), and *Sahih al-Bukhari* (3364). Ismail brought this stone for his father to stand on as the walls grew tall, and Allah commanded believers to take the Station of Ibrahim as a place of prayer. |
| **Quick-List** | `Maqam Ibrahim` | `Ibrahim (AS)` |

### Medium — Question 66
- **Problem Found:** Non-Prophet Answer (`Al-Buraq`) + Question revealed Prophet Muhammad ﷺ + duplicated Easy Q19 + inaccurate "winged" (`🪽`) / "faster than light"
- **Why / Resolution:** Reassigned to Prophet Ya'qub (AS) using Surah Al-Baqarah (2:133) (his deathbed pledge from his children to worship the One God), balancing prophet distribution across Medium.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🐴 ⚡ 🌌 🕊️ 🪽 👑 | 🛏️ 👨‍👦‍👦 ❓ 🕌 ☝️ 🤲 |
| **Question** | What was the name of the winged heavenly creature that transported Prophet Muhammad ﷺ faster than light from Makkah to Jerusalem? | Which prophet asked his children on his deathbed, *"What will you worship after me?"*, receiving their pledge to worship the One God of their forefathers? |
| **Answer** | **Al-Buraq (Miraculous steed of the Isra & Mi'raj)** | **Prophet Ya'qub (Jacob) / Isra'il (ʿAlayhi as-Salām)** |
| **Context** | Sahih al-Bukhari and Sahih Muslim. Described as a white steed whose stride reached as far as its eye could see. | Surah Al-Baqarah (2:133). His children replied: *"We will worship your God and the God of your fathers, Ibrahim, Ismail, and Ishaq—one God. And we are Muslims [in submission] to Him."* |
| **Quick-List** | `Al-Buraq` | `Ya'qub (AS)` |

### Medium — Question 70
- **Problem Found:** Non-Prophet Answer (`3 Days`) + Question revealed Prophet Salih + irrelevant `🍼` emoji
- **Why / Resolution:** Rewritten around Surah Hud (11:65–68) so the answer is Prophet Salih (AS) warning Thamud of three days before *as-Sayhah*, with accurate emojis.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🐪 🥛 🍼 ⛰️ ⚡ 3️⃣ | 🐪 🔪 🏠 3️⃣ ⚡ 💥 |
| **Question** | How many days did Prophet Salih warn his rebellious people they had left to enjoy their homes before their punishment arrived? | After his rebellious people hamstrung the miraculous she-camel, which prophet warned them: *"Enjoy yourselves in your homes for three days. That is a promise not to be denied"*? |
| **Answer** | **3 Days (Prophet Salih and the people of Thamud)** | **Prophet Salih (ʿAlayhi as-Salām)** |
| **Context** | Surah Hud (65). *"Enjoy yourselves in your homes for three days. That is a promise not to be denied."* | Surah Hud (11:65–68). On the fourth morning, a mighty blast (*as-Sayhah*) seized the wrongdoers of Thamud, while Allah saved Salih and those who believed with him. |
| **Quick-List** | `3 Days (Salih)` | `Salih (AS)` |

### Advanced — Question 71
- **Problem Found:** Unconfirmed Prophet (`Uzair (Ezra)`) + exegetical identification + `💀`/`💯` emojis + brief Context
- **Why / Resolution:** Surah Al-Baqarah (2:259) does not name the man, and in *Sunan Abi Dawud* (4674, Sahih per Al-Albani) Prophet Muhammad ﷺ said *"I do not know whether 'Uzair was a prophet or not."* Reassigned to Prophet Hud (AS) on the dark cloud mistaken for rain (Surah Al-Ahqaf: 24–25; Surah Al-Haqqah: 6–7), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 💀 🫏 🍇 ⏳ 💯 ☀️ 🦴 | ☁️ 🌧️ ❓ 🌪️ 💨 🏚️ |
| **Question** | Which righteous man was caused to sleep for 100 years alongside his donkey and fresh food, then revived as a sign of resurrection? | Whose arrogant people rejoiced when they saw a dark cloud moving toward their valleys, exclaiming, "This cloud will bring us rain!"—not realizing it held a fierce, destructive wind? |
| **Answer** | **Uzair (Ezra) (ʿAlayhi as-Salām)** | **Prophet Hud (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Baqarah (259). He passed by a ruined city and wondered how Allah would revive it; Allah showed him the miraculous reassembly of his donkey's bones. | Prophet Hud taught the strong people of 'Ad to worship Allah alone, but they ignored him and kept doing wrong. After a dry spell, they saw a big dark cloud coming toward their valleys and cheered, thinking it would bring helpful rain. Instead, Allah sent a freezing, roaring wind inside that cloud that blew for seven nights and eight days, destroying their homes while keeping Prophet Hud and the believers safe (Surah Al-Ahqaf: 24–25; Surah Al-Haqqah: 6–7). |
| **Quick-List** | `Uzair (AS)` | `Hud (AS)` |

### Advanced — Question 80
- **Problem Found:** Non-Prophet Answer (`Majma' al-Bahrayn`) + duplicated Medium Q48 Musa/Al-Khidr theme
- **Why / Resolution:** Reassigned to Prophet Dawud (AS) on the two unexpected visitors climbing his *Mihrab* wall with the 99-ewes parable (Surah Sad: 21–25), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🌊 🎣 🐟 🪨 🥪 🚶‍♂️ | 🕌 🧗‍♂️ 🐑 🐑 ⚖️ 🙇‍♂️ |
| **Question** | In the journey of Musa, at what specific landmark did their salted, cooked fish jump back to life and slide into the sea? | Into whose private prayer chamber (*Mihrab*) did two unexpected visitors climb over the wall, presenting a parable of one brother with ninety-nine ewes demanding the single ewe of his brother? |
| **Answer** | **The Junction of the Two Seas (*Majma' al-Bahrayn*)** | **Prophet Dawud (David) (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Kahf (60–63). The fish reviving served as the divine sign marking their meeting point with Al-Khidr. | Prophet Dawud was a wise king who loved setting aside quiet time alone to worship Allah in his *Mihrab* (private prayer room). One day, two men surprised him by climbing right over the wall! They asked him to judge a case about a rich brother with 99 *ewes* (female sheep) who still wanted his poor brother's only sheep. As soon as Prophet Dawud gave his judgment, he realized Allah was testing him to judge carefully and never rush—so he dropped down in *sujud* (prostration) and asked Allah to forgive him, and Allah forgave him and brought him even closer (Surah Sad: 21–25). |
| **Quick-List** | `Majma' al-Bahrayn` | `Dawud (AS)` |

### Advanced — Question 81
- **Problem Found:** Non-Prophet Answer (`To protect it from an oppressive king...` / Quick-List `Khidr (Protect boat)`) + pirate flag `🏴‍☠️`
- **Why / Resolution:** Reassigned to Prophet Shu'aib (AS) on *Ashab al-Aykah* (Companions of the Wood) and *Yawm az-Zullah* (Surah Ash-Shu'ara: 176–189; *Tafsir Ibn Kathir*), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | ⛵ 🔨 🌊 🕳️ 👑 🏴‍☠️ | 🌳 ⚖️ 🗣️ ☁️ 🌑 ⚡ |
| **Question** | Why did Al-Khidr damage the wooden boat of the poor fishermen while traveling with Prophet Musa? | Which prophet warned the "Companions of the Wood" (*Ashab al-Aykah*) to measure fairly and stop cheating, only for them to mock him and perish on the Day of the Canopy (*Yawm az-Zullah*)? |
| **Answer** | **To protect it from an oppressive king who confiscated sound ships (Story of Musa & Al-Khidr)** | **Prophet Shu'aib (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Kahf (79). By making the boat appear defective, the tyrant king rejected seizing it. | Prophet Shu'aib was sent to guide people living near a lush, leafy forest called *Al-Aykah* (the Wood). Many of them cheated customers when weighing goods on scales and laughed at Prophet Shu'aib, daring him to make a piece of the sky drop onto them! When they refused to repent, Allah sent a terrible heat wave followed by a dark *Zullah* (a covering cloud or canopy) that they thought would cool them down—instead, it brought the punishment of the Day of the Canopy, while Allah kept Prophet Shu'aib and the believers safe (Surah Ash-Shu'ara: 176–189; *Tafsir Ibn Kathir*). |
| **Quick-List** | `Khidr (Protect boat)` | `Shu'aib (AS)` |

### Advanced — Question 82
- **Problem Found:** Non-Prophet Answer (`To protect hidden treasure...` / Quick-List `Khidr (Orphans' wall)`)
- **Why / Resolution:** Reassigned to Prophet Nuh (AS) on his final *wasiyyah* to his son regarding *"La ilaha illallah"* outweighing the seven heavens and seven earths (*Al-Adab al-Mufrad*: 548; *Musnad Ahmad*: 7101, Sahih), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🧱 🧱 🪙 🕳️ 👦 👦 🤲 | 👴 🗣️ 👦 ⚖️ 🌍 🤲 |
| **Question** | Why did Al-Khidr rebuild a falling wall in an unwelcoming town without demanding wages? | Near the end of his life, which prophet gave his son two priceless instructions—to hold fast to *"La ilaha illallah,"* which outweighs the seven heavens and seven earths, and *"SubhanAllahi wa bihamdihi,"* the prayer of all creation? |
| **Answer** | **To protect hidden treasure belonging to two righteous orphan boys until they matured** | **Prophet Nuh (Noah) (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Kahf (82). Their father had been a righteous man, and Allah decreed their inheritance remain protected. | Before Prophet Nuh passed away, he called his son close to share the most important lessons from his whole life. He told his son to always say *"La ilaha illallah"* (there is no god worthy of worship except Allah), explaining that if all seven heavens and seven earths were placed on one side of a scale and those words on the other, *"La ilaha illallah"* would weigh even more! He also advised him to say *"SubhanAllahi wa bihamdihi"* (Glory and praise be to Allah), and warned him to stay far away from *shirk* (worshipping anything besides Allah) and *kibr* (pride/arrogance) (*Al-Adab al-Mufrad*: 548; *Musnad Ahmad*: 7101, graded Sahih). |
| **Quick-List** | `Khidr (Orphans' wall)` | `Nuh (AS)` |

### Advanced — Question 83
- **Problem Found:** Non-Prophet Answer (`As-Samiri`)
- **Why / Resolution:** Reassigned to Prophet Harun (AS) on Surah Ta-Ha (20:90–94) and Surah Al-A'raf (7:150) (*"O son of my mother, do not seize me by my beard or my head!"*), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | ⛺ 🐮 🪙 👂 👂 🪄 ⏳ | 🗣️ 🧔 ✋ 🐮 😢 🤝 |
| **Question** | What was the name of the instigator who crafted the golden calf from melted jewelry while Musa was away at Mount Sinai? | Which prophet was grabbed by the head and beard by his angry brother returning from Mount Sinai, and pleaded: "O son of my mother, do not seize me by my beard or my head!" because he feared dividing the community? |
| **Answer** | **As-Samiri (Story of Prophet Musa & Harun)** | **Prophet Harun (Aaron) (ʿAlayhi as-Salām)** |
| **Context** | Surah Ta-Ha (85–96). Samiri cast dirt from the hoofprint of Angel Jibril’s steed into the molten metal. | When Prophet Musa went up Mount Sinai to receive Allah's guidance, he left his older brother Prophet Harun in charge of the Children of Israel. While Musa was gone, a wicked man tricked many people into worshipping a golden calf. Prophet Harun bravely warned them to stop, even though they threatened to hurt him! When Musa came back upset and grabbed his brother by his hair and beard, Harun gently called him "O son of my mother" and explained he only avoided a fight so the people would not split apart—showing us that the Qur'an clears Prophet Harun of any blame (Surah Ta-Ha: 90–94; Surah Al-A'raf: 150). |
| **Quick-List** | `As-Samiri` | `Harun (AS)` |

### Advanced — Question 85
- **Problem Found:** Non-Prophet Answer (`Maryam bint 'Imran`)
- **Why / Resolution:** Reassigned to Prophet Ishaq (AS) on Sarah's amazed laugh at the angels' news and the four-generation noble prophetic chain (Surah Hud: 71; Surah As-Saffat: 112–113; *Sahih al-Bukhari*: 3382), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🌴 💧 🥥 🤰 🤫 🤲 | 👵 😂 👼 🎁 🔗 🌟 |
| **Question** | Which honorable woman retreated to an eastern desert location, where Allah provided fresh ripe dates and a cool stream during childbirth? | Which prophet's birth was announced by angelic visitors—making his elderly mother Sarah laugh in amazement—and stood as the second link in the four-generation noble prophetic chain praised in *Sahih al-Bukhari*? |
| **Answer** | **Maryam bint 'Imran (Mary, Mother of Prophet Isa)** | **Prophet Ishaq (Isaac) (ʿAlayhi as-Salām)** |
| **Context** | Surah Maryam (22–26). Shook the trunk of the date palm to receive fresh dates by divine mercy. | Prophet Ishaq was the second son of Prophet Ibrahim, born as a miracle when both his father and mother Sarah were very old. When angels visited in human form to bring the happy news that Sarah would have a baby named Ishaq—and even a grandson named Ya'qub after him—Sarah laughed in joyful surprise! (Surah Hud: 71; Surah As-Saffat: 112–113). Prophet Muhammad ﷺ later praised this blessed family line as four generations of prophets in a row: "The noble one, son of the noble one, son of the noble one, son of the noble one: Yusuf, son of Ya'qub, son of Ishaq, son of Ibrahim" (*Sahih al-Bukhari*: 3382). |
| **Quick-List** | `Maryam bint 'Imran` | `Ishaq (AS)` |

### Advanced — Question 86
- **Problem Found:** Non-Prophet Answer (`The Ark of the Covenant (*Tabut as-Sakinah*)`)
- **Why / Resolution:** Reassigned to Prophet Lut (AS) on wishing for a strong support (*Rukn Shadid*) to protect his angelic guests (Surah Hud: 80; *Sahih al-Bukhari*: 3372), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 👑 📦 🕊️ 🛡️ 🎺 📜 | 🚪 🏘️ 😰 🛡️ 💪 🤲 |
| **Question** | What sacred relic containing relics of Musa and Harun (*At-Tabut* / Ark of the Covenant) did angels carry to inaugurate King Talut? | Facing an aggressive crowd outside his home to protect his angelic guests, which prophet cried out *"If only I had strength against you or could take refuge in a strong support"*—prompting Prophet Muhammad ﷺ to say he already relied on the Strongest Support? |
| **Answer** | **The Ark of the Covenant (*Tabut as-Sakinah*)** | **Prophet Lut (Lot) (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Baqarah (248). Brought by angels to instill tranquility and confirm Talut's legitimate leadership. | When angels came as handsome guests to Prophet Lut's house, a wicked mob surrounded his door. Trying hard to protect his guests, Prophet Lut wished out loud for strong relatives or a *Rukn Shadid* (a strong pillar of support) to help him stop the crowd (Surah Hud: 80). Centuries later, Prophet Muhammad ﷺ lovingly said: "May Allah have mercy on Lut! He was already taking refuge in a Strong Support [Allah]!" (*Sahih al-Bukhari*: 3372). Right afterward, the angels told Lut not to worry and led him and his faithful family safely out before dawn. |
| **Quick-List** | `Tabut as-Sakinah` | `Lut (AS)` |

### Advanced — Question 88
- **Problem Found:** Non-Prophet Answer (`Al-Qaswa (The Prophet's Camel)`)
- **Why / Resolution:** Reassigned to Prophet Ismail (AS) on growing up near Zamzam and Prophet Muhammad ﷺ praising his archery legacy (*Sahih al-Bukhari*: 3373), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🐫 🐪 🛑 ⛺ 🕌 🤝 | 🏹 🎯 🏜️ 💧 👥 🌟 |
| **Question** | What was the name of Prophet Muhammad's camel that knelt on its own accord to choose the location of the Prophet's Mosque in Madinah? | Which prophet—who grew up in the barren valley of Makkah near Zamzam—was honored centuries later when Prophet Muhammad ﷺ told a group practicing archery: *"Shoot, O sons of this prophet, for your father was a skilled archer!"*? |
| **Answer** | **Al-Qaswa (The Prophet's Camel)** | **Prophet Ismail (Ishmael) (ʿAlayhi as-Salām)** |
| **Context** | Classical Seerah (The Hijrah to Madinah). The Prophet ﷺ said: *"Let her walk, for she is commanded by Allah."* | Prophet Ismail grew up in the desert valley of Makkah beside the blessed spring of Zamzam, where he learned to speak Arabic and became famous for his skill with a bow and arrow. Many hundreds of years later, Prophet Muhammad ﷺ walked past some companions from the tribe of Aslam who were having an archery contest. He cheered them on by reminding them of their noble ancestor Prophet Ismail: "Shoot, O sons of Ismail, for your father was an archer!" (*Sahih al-Bukhari*: 3373). |
| **Quick-List** | `Al-Qaswa` | `Ismail (AS)` |

### Advanced — Question 89
- **Problem Found:** Non-Prophet Answer (`The Battle of Badr`)
- **Why / Resolution:** Reassigned to Prophet Ayyub (AS) on gathering a bundle of 100 thin grass stems (*dighth*) to fulfill his oath mercifully (Surah Sad: 44; *Tafsir Ibn Kathir*), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🕊️ 🦅 👼 🪨 ⚔️ 3️⃣ 1️⃣ 3️⃣ | 🌾 ✋ 🤝 🩹 💚 🤲 |
| **Question** | At which historic battle did Allah send 1,000 angels descending in ranks to assist Prophet Muhammad ﷺ and 313 believers? | After enduring years of severe illness, which prophet was mercifully instructed by Allah to gather a bundle of thin blades of grass (*dighth*) and tap once to fulfill a difficult oath without hurting his faithful wife? |
| **Answer** | **The Battle of Badr (Ghazwat Badr)** | **Prophet Ayyub (Job) (ʿAlayhi as-Salām)** |
| **Context** | Surah Ali 'Imran (123–125) and Surah Al-Anfal (9). Occurred on the 17th of Ramadan, 2 AH. | During his long years of sickness, Prophet Ayyub's loyal wife stayed by his side and worked hard to care for him. Once, when upset, he swore an oath by Allah to strike her a hundred times after he got well. After Allah healed him, Prophet Ayyub did not want to hurt his kind wife—yet he did not want to break a promise made in Allah's name either! Out of mercy, Allah told him to gather a *dighth* (one neat bundle of 100 thin grass stems) and gently tap her once with it, keeping his promise without causing any harm (Surah Sad: 44; *Tafsir Ibn Kathir*). |
| **Quick-List** | `Battle of Badr` | `Ayyub (AS)` |

### Advanced — Question 91
- **Problem Found:** Non-Prophet Answer (`Nineveh`) + cluttered `1️⃣ 0️⃣ 0️⃣ 0️⃣ 0️⃣ 0️⃣` + irrelevant `🐪`
- **Why / Resolution:** Rewritten around Surah Yunus (10:98) and Surah As-Saffat (37:147–148) so the answer is Prophet Yunus (AS) (the only town whose residents all believed before punishment struck), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🐪 🏜️ 1️⃣ 0️⃣ 0️⃣ 0️⃣ 0️⃣ 0️⃣ | 🏙️ 👥 🙏 ☁️ ☀️ 💚 |
| **Question** | To which historical city of 100,000 believers was Prophet Yunus sent back after being rescued from the whale? | Sent to a vast city of a hundred thousand or more people, whose community is described in the Qur'an as the ONLY town whose residents all believed before punishment arrived, so Allah lifted their torment and blessed them? |
| **Answer** | **Nineveh (Ninawa, modern-day Iraq)** | **Prophet Yunus (Jonah) (ʿAlayhi as-Salām)** |
| **Context** | Surah As-Saffat (147–148). The entire population repented and believed, being spared punishment. | After Allah rescued Prophet Yunus from the great fish, Allah sent him back to a huge city of 100,000 or more people—often identified by scholars like Ibn Kathir as Nineveh. Unlike other nations that ignored warnings until it was too late, every single person in this city sincerely repented and asked Allah for forgiveness! Because they truly believed, the Qur'an tells us they became the only entire town saved right before punishment struck, and Allah let them live happily in peace (Surah Yunus: 98; Surah As-Saffat: 147–148). |
| **Quick-List** | `Nineveh` | `Yunus (AS)` |

### Advanced — Question 94
- **Problem Found:** Non-Prophet Answer (`Khadijah bint Khuwaylid (RA)`)
- **Why / Resolution:** Reassigned to Prophet Adam (AS) on being created 60 cubits tall and establishing *As-Salamu 'Alaykum* with the angels (*Sahih al-Bukhari*: 3326; *Sahih Muslim*: 2841), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 👵 🤝 💼 🐪 💖 🕊️ | 📏 👼 🤝 💬 🕊️ 🌍 |
| **Question** | Who was the noble noblewoman, merchant, and first believer who comforted Prophet Muhammad ﷺ after his terrifying first revelation at Cave Hira? | Which prophet was created sixty cubits tall and instructed by Allah to walk over and greet a gathering of angels—establishing *"As-Salamu 'Alaykum"* and receiving *"wa Rahmatullah"* as the timeless greeting of humanity? |
| **Answer** | **Khadijah bint Khuwaylid (Radiyallahu 'Anha)** | **Prophet Adam (ʿAlayhi as-Salām)** |
| **Context** | Sahih al-Bukhari. She assured him: *"Never! By Allah, Allah will never disgrace you. You maintain family ties, help the poor, and support the truth."* | When Allah created the very first human being, Prophet Adam, He made him sixty cubits tall (about as tall as a very tall building!). Allah told Prophet Adam to go greet a group of angels and listen closely to their answer, because that would become the special greeting for him and all his children forever. Prophet Adam said: *"As-Salamu 'Alaykum"* (Peace be upon you), and the angels warmly added: *"As-Salamu 'Alayka wa Rahmatullah"* (Peace and Allah's mercy be upon you)—the exact greeting Muslims still share with one another every day (*Sahih al-Bukhari*: 3326; *Sahih Muslim*: 2841). |
| **Quick-List** | `Khadijah (RA)` | `Adam (AS)` |

### Advanced — Question 95
- **Problem Found:** Non-Prophet Answer (`Qudar ibn Salif`, whose name is not in the Qur'an) + literal English word `Thamud` in `Emojis:`
- **Why / Resolution:** Rewritten around Surah An-Naml (27:45–53) so the answer is Prophet Salih (AS) (the nine leaders' nighttime assassination plot foiled by Allah) and removed non-emoji text from `Emojis:`, with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🐪 🥩 🩸 💔 🌩️ 💥 Thamud | 9️⃣ 🗡️ 🌙 🤫 🛡️ 💥 |
| **Question** | Which corrupt criminal among the people of Thamud wielded the blade that hamstrung Prophet Salih's miraculous she-camel? | Against which prophet did nine corrupt leaders in his city swear a secret nighttime oath to assassinate him and his family—only for Allah to foil their plot, rescue the believers, and destroy the wrongdoers? |
| **Answer** | **Qudar ibn Salif (The Wretched Man of Thamud)** | **Prophet Salih (ʿAlayhi as-Salām)** |
| **Context** | Surah Ash-Shams (11–14). Referred to in the Qur'an as the most wretched of them (*Ashqaha*). | Among the people of Thamud, there were nine troublemaking leaders who refused to listen to Prophet Salih. One night, they made a sneaky secret promise to attack and harm Prophet Salih and his family while everyone slept, then lie about it afterward. Little did they know that Allah sees every secret! Allah protected Prophet Salih and all the faithful believers by saving them safely, while the nine wicked plotters and their rebellious crowd were destroyed and left in silent, empty ruins (Surah An-Naml: 45–53). |
| **Quick-List** | `Qudar ibn Salif` | `Salih (AS)` |

### Advanced — Question 96
- **Problem Found:** Non-Prophet Answer (`Zulaikha / Wife of Al-Aziz`, "Zulaikha" not in Qur'an/Sahih Hadith) + literal English word `Egypt` in `Emojis:`
- **Why / Resolution:** Rewritten around Surah Yusuf (12:69–76) so the answer is Prophet Yusuf (AS) (hiding the royal measuring cup in his younger brother's grain sack) and removed non-emoji text from `Emojis:`, with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 📜 🩸 🔒 🌾 🫂 🤲 Egypt | 👑 🏆 🎒 🐪 ⚖️ 🤝 |
| **Question** | What was the name of the Egyptian governor's wife who attempted to seduce Prophet Yusuf before he sought refuge in Allah and preferred prison? | Which prophet placed the king's royal measuring cup inside his younger brother's grain sack under Allah's wise plan so he could keep his brother safely with him and reunite his family? |
| **Answer** | **Zulaikha / Wife of Al-Aziz (Story of Yusuf)** | **Prophet Yusuf (Joseph) (ʿAlayhi as-Salām)** |
| **Context** | Surah Yusuf (23–33). Yusuf prayed: *"My Lord, prison is more to my liking than that to which they invite me."* | Years after becoming a wise leader in Egypt, Prophet Yusuf finally met his brothers again when they came to buy food during a famine. He quietly told his full younger brother who he really was! To keep his younger brother with him without hurting his older brothers' feelings, Allah guided Prophet Yusuf to hide the king's special measuring cup inside his younger brother's camel bag. According to the brothers' own rule, whoever had the cup stayed behind—allowing Prophet Yusuf to protect his brother and later bring his whole family happily back together (Surah Yusuf: 69–76). |
| **Quick-List** | `Zulaikha / Al-Aziz` | `Yusuf (AS)` |

### Advanced — Question 97
- **Problem Found:** Non-Prophet Answer (`Asif ibn Barkhiya`, name not in Qur'an/Sahih Hadith)
- **Why / Resolution:** Reassigned to Prophet Ya'qub (AS) on advising his sons to enter Egypt through separate gates and complaining only to Allah (Surah Yusuf: 12:67, 86), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 👑 👸 🎁 🕊️ 🪑 ⚡ | 🚪 🚪 🚪 🚶‍♂️ 😢 🤲 |
| **Question** | In the court of Prophet Sulaiman, who was able to transport the heavy golden throne of Queen Bilqis in the blink of an eye? | Which prophet taught the balance of wise planning and trust in Allah (*Tawakkul*) by advising his sons to enter Egypt through separate city gates, while declaring in grief: *"I only complain of my suffering and sorrow to Allah"*? |
| **Answer** | **Asif ibn Barkhiya / A knowledgeable court believer (*Alladhi 'indahu 'ilmun min al-Kitab*)** | **Prophet Ya'qub (Jacob) (ʿAlayhi as-Salām)** |
| **Context** | Surah An-Naml (40). He stated: *"I will bring it to you before your glance returns to you."* | When Prophet Ya'qub sent his eleven strong, handsome sons back to Egypt to buy grain, he gave them smart, caring advice: enter the big city through different gates instead of all walking in together, so they wouldn't draw envy or trouble. Yet he reminded them that human plans only work if Allah wills! Even when he missed his lost sons terribly and cried until his eyes turned white, he never gave up hope—saying *"I only complain of my sadness and grief to Allah, and I know from Allah what you do not know"* (Surah Yusuf: 67, 86). |
| **Quick-List** | `Asif ibn Barkhiya` | `Ya'qub (AS)` |

### Advanced — Question 99
- **Problem Found:** Non-Prophet Answer (`40 Years`)
- **Why / Resolution:** Reassigned to Prophet Isa (AS) on confirming the Torah and bringing glad tidings of a coming messenger named *"Ahmad"* (Surah As-Saff: 61:6), with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🪨 💧 🕊️ 🐍 🪄 ⛺ 4️⃣ 0️⃣ | 📖 🗣️ ✨ 🕊️ 📜 🌟 |
| **Question** | How many years were Bani Isra'il made to wander the Sinai wilderness (*At-Tih*) after refusing Prophet Musa's command to enter the Holy Land? | Which prophet addressed the Children of Israel to confirm the Torah that came before him and bring joyful glad tidings of a final messenger coming after him whose name would be *"Ahmad"*? |
| **Answer** | **40 Years** | **Prophet Isa (Jesus) (ʿAlayhi as-Salām)** |
| **Context** | Surah Al-Ma'idah (26). Forbidden from entry while wandering the desert until a faithful new generation emerged. | Prophet Isa taught the Children of Israel to love Allah, follow the truth of the Torah that came before him, and get ready for the very last prophet who would arrive after him. He gave them an exciting clue—telling them that the coming messenger's name would be *"Ahmad"* (Surah As-Saff: 6). Both *Ahmad* and *Muhammad* mean "the one who is praised most" and refer to Prophet Muhammad ﷺ, showing how all of Allah's prophets supported one another like one big family! |
| **Quick-List** | `40 Years (Sinai)` | `Isa (AS)` |

### Advanced — Question 100
- **Problem Found:** Non-Prophet Answer (`Sidrat al-Muntaha`)
- **Why / Resolution:** Rewritten around Surah An-Najm (53:13–18), *Sahih al-Bukhari* (3207, 3887), and *Sahih Muslim* (162, 164a) so the answer is Prophet Muhammad ﷺ ascending past *Al-Bayt al-Ma'mur* and beyond *Sidrat al-Muntaha*, with kid-friendly Context.

| Field | Original | Updated |
|---|---|---|
| **Emojis** | 🌳 🪶 🕊️ 🌌 👑 🤲 🕌 | 🌌 ☁️ 🕌 🌳 🕊️ 🤲 |
| **Question** | During the ascension (*Mi'raj*), at what ultimate boundary tree did Angel Jibril halt, unable to advance further while Prophet Muhammad ﷺ was drawn near to Allah? | Guided past all seven heavens to *Al-Bayt al-Ma'mur*—where seventy thousand angels worship daily—which prophet alone ascended beyond *Sidrat al-Muntaha* (the Lote Tree of the Utmost Boundary) where even Angel Jibril halted? |
| **Answer** | **Sidrat al-Muntaha (The Lote Tree of the Utmost Boundary)** | **Prophet Muhammad ﷺ** |
| **Context** | Surah An-Najm (14–18) and Sahih Muslim. The highest station in the heavens where the creation ends. | On the miraculous Night Journey (*Al-Isra wal-Mi'raj*), Allah honored Prophet Muhammad ﷺ above every created being. After meeting earlier prophets across the seven heavens, he saw *Al-Bayt al-Ma'mur* (the Frequented House in heaven where 70,000 brand-new angels pray every single day) and reached *Sidrat al-Muntaha* (the amazing Lote Tree at the furthest boundary of creation, with giant leaves and flowing rivers). Even mighty Angel Jibril stopped there, while Prophet Muhammad ﷺ went forward to receive Allah's direct revelation and the gift of the five daily prayers (Surah An-Najm: 13–18; *Sahih al-Bukhari*: 3207, 3887; *Sahih Muslim*: 162, 164a). |
| **Quick-List** | `Sidrat al-Muntaha` | `Muhammad ﷺ` |

---

## Part 2 — Questions Updated for Trusted Islamic Sources, Appropriate Emojis, Difficulty Standards, or Cross-Level Deduplication

All remaining 69 modified questions across Easy (32), Medium (23), and Advanced (14) are detailed below.

### Easy Level Revisions

#### Question 1 — Source/Authenticity, Emoji, Difficulty
- **Reason / Source Reference:** Surah Nuh does not mention building the Ark (the Ark is in Surah Hud 11:37–40 & Surah Al-Mu'minun 23:27); replaced Biblical dove `🕊️` (Genesis 8) with `🐘`; simplified "great deluge" to "great flood" for ages 5–8.
- **Original:**
  - **Emojis:** 🚢 🌊 🌧️ 🦁 🐑 🕊️
  - **Question:** Which prophet was commanded by Allah to build a giant ship on dry land and rescue pairs of animals from a great deluge?
  - **Answer:** **Prophet Nuh (Noah) (ʿAlayhi as-Salām)**
  - **Context:** Mentioned repeatedly in the Qur'an (Surah Hud & Surah Nuh). He built the Ark through divine inspiration while his disbelieving people mocked him.
- **New:**
  - **Emojis:** 🚢 🌊 🌧️ 🦁 🐑 🐘
  - **Question:** Which prophet was commanded by Allah to build a giant ship and rescue believers and pairs of animals from a great flood?
  - **Answer:** **Prophet Nuh (Noah) (ʿAlayhi as-Salām)**
  - **Context:** Surah Hud (11:37–40) and Surah Al-Mu'minun (23:27). He built the Ark through Allah's guidance while his disbelieving people mocked him.

#### Question 2 — Minor Polish (Verified Clean)
- **Reason / Source Reference:** Originally verified clean; applied optional polish adding `Surah As-Saffat: 142–146` for the gourd plant (*Yaqtin*) and briefly explaining the triple darkness (night, deep sea, whale's belly).
- **Original:**
  - **Emojis:** 🐋 🌊 🌑 🤲 🌿
  - **Question:** Which prophet was swallowed by a massive sea creature and made a famous prayer from the triple darkness?
  - **Answer:** **Prophet Yunus (Jonah) / Dhun-Nun (ʿAlayhi as-Salām)**
  - **Context:** Swallowed whole by a whale; he called out: *"La ilaha illa Anta, Subhanaka, inni kuntu min adh-dhalimin"* (Surah Al-Anbiya: 87). Allah caused a leafy gourd plant (*Yaqtin*) to shade him on shore.
- **New:**
  - **Emojis:** 🐋 🌊 🌑 🤲 🌿
  - **Question:** Which prophet was swallowed by a massive sea creature and made a famous prayer from the triple darkness?
  - **Answer:** **Prophet Yunus (Jonah) / Dhun-Nun (ʿAlayhi as-Salām)**
  - **Context:** Swallowed whole by a whale; he called out from the triple darkness (darkness of the night, the deep sea, and the whale's belly): *"La ilaha illa Anta, Subhanaka, inni kuntu min adh-dhalimin"* (Surah Al-Anbiya: 87). Allah rescued him and caused a leafy gourd plant (*Yaqtin*) to shade him on shore (Surah As-Saffat: 142–146).

#### Question 3 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed `🌸` (extra-scriptural/*Isra'iliyyat* flower-garden legend) and removed unspecified "stone idols with an axe" (`🪓`) since Surah Al-Anbiya (21:58–69) does not specify the tool.
- **Original:**
  - **Emojis:** 🪓 🗿 💥 🔥 ❄️ 🌸
  - **Question:** Which prophet smashed the stone idols with an axe and was thrown into a fiery pit that Allah made cool and peaceful?
  - **Answer:** **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Anbiya (68–69). Allah commanded: *"O fire, be coolness and safety upon Ibrahim."*
- **New:**
  - **Emojis:** 🗿 💥 🔥 ❄️ 🛡️ 🤲
  - **Question:** Which prophet smashed his people's idols into pieces and was thrown into a raging fire that Allah made cool and safe?
  - **Answer:** **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Anbiya (21:58–69). Allah commanded: *"O fire, be coolness and safety upon Ibrahim."*

#### Question 4 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed `🐊` (no basis in Qur'an/Hadith/Ibn Kathir); changed Biblical "basket" (`🧺`) to Quranic *Tabut* chest (`📦`, Surah Ta-Ha 20:39); cited Surah Ta-Ha (20:38–40), Surah Al-Qasas (28:7–13), and *Sahih al-Bukhari* (3411).
- **Original:**
  - **Emojis:** 🧺 🌊 🐊 🏰 🤱
  - **Question:** Which baby prophet was placed into a wooden chest/basket on the River Nile and ended up in Pharaoh's palace?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Qasas (7–9). His mother trusted Allah's promise, and Asiya (the wife of Pharaoh) adopted him and hired his biological mother as his wet-nurse.
- **New:**
  - **Emojis:** 👶 📦 🌊 🏰 🤱
  - **Question:** Which baby prophet was placed inside a wooden chest (*Tabut*) on the river and ended up raised in Pharaoh's palace?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ta-Ha (20:38–40), Surah Al-Qasas (28:7–13), and *Sahih al-Bukhari* (3411). His mother trusted Allah's promise; Asiya (Pharaoh's wife) took him in, and Allah returned him safely to his own mother to nurse him.

#### Question 5 — Source/Authenticity
- **Reason / Source Reference:** Changed "dry well" (Genesis 37:24) to "deep well" matching Surah Yusuf (12:15) and *Tafsir Ibn Kathir* (which states the well contained water).
- **Original:**
  - **Emojis:** 🕳️ 🐺 🩸 👕 😢
  - **Question:** Which prophet was thrown down a dry well by his envious brothers, who showed their father a fake blood-stained shirt?
  - **Answer:** **Prophet Yusuf (Joseph) (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (10–18). The brothers claimed a wolf ate him, while their father Prophet Ya'qub exercised beautiful patience (*Sabr Jameel*).
- **New:**
  - **Emojis:** 🕳️ 🐺 🩸 👕 😢
  - **Question:** Which prophet was thrown down a deep well by his envious brothers, who showed their father a fake blood-stained shirt?
  - **Answer:** **Prophet Yusuf (Joseph) (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (12:10–18). The brothers claimed a wolf ate him, while their father Prophet Ya'qub showed beautiful patience (*Sabr Jameel*).

#### Question 6 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Surah An-Naml (27:18–19) mentions "an ant" (`namlah`, not "queen ant") and says Sulaiman smiled and prayed in gratitude without stating he "halted his entire marching army" (`🛑` swapped to `🤲`).
- **Original:**
  - **Emojis:** 👑 🐜 🐜 🗣️ 🛑 😊
  - **Question:** Which prophet-king understood the speech of animals and halted his entire marching army so a tiny ant colony would not be crushed?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah An-Naml (18–19). Sulaiman smiled upon hearing the queen ant warn her fellow ants and thanked Allah for His bounty.
- **New:**
  - **Emojis:** 👑 🐜 🐜 🗣️ 😊 🤲
  - **Question:** Which prophet-king understood the speech of animals and smiled in gratitude when he heard an ant warn its fellow ants to go inside so his army would not crush them?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah An-Naml (27:18–19). Sulaiman smiled upon hearing the ant warn the others and thanked Allah for His blessings.

#### Question 7 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed "young shepherd", "giant", and "sling and stones" (`🪨 🪃` boomerang), which Ibn Kathir on Surah Al-Baqarah (2:249–251) notes come from *Isra'iliyyat*; grounded strictly in 2:249–251.
- **Original:**
  - **Emojis:** 👦 🪨 🪃 🤺 👑
  - **Question:** Which young shepherd defeated the giant tyrant warrior Jalut (Goliath) using a sling and stones?
  - **Answer:** **Prophet Dawud (David) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (251). Allah granted young Dawud authority and wisdom following this decisive victory.
- **New:**
  - **Emojis:** 💪 ⚔️ 🛡️ 🏆 👑
  - **Question:** Which brave believer defeated the mighty warrior Jalut (Goliath) in battle by Allah's permission, and was later granted kingship and wisdom?
  - **Answer:** **Prophet Dawud (David) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (2:249–251). Allah gave Dawud kingship and wisdom after he defeated Jalut (*Tafsir Ibn Kathir* notes that details about a slingshot come from *Isra'iliyyat* accounts).

#### Question 8 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced `🪴` (potted plant) and `👑` with `👤 🏺` for clay creation; added Surah Ar-Rahman (55:14) alongside Surah Al-Baqarah (2:30–33).
- **Original:**
  - **Emojis:** 🌍 🪴 🤲 🔤 👑
  - **Question:** Who was the very first human being and prophet, created from soil/clay and taught the names of everything?
  - **Answer:** **Prophet Adam (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (30–33). Allah taught him the names of all things, elevating his station before the angels.
- **New:**
  - **Emojis:** 👤 🏺 🌍 🔤 🤲
  - **Question:** Who was the very first human being and prophet, created from clay and taught the names of everything?
  - **Answer:** **Prophet Adam (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (2:30–33) and Surah Ar-Rahman (55:14). Allah taught him the names of all things, honoring him before the angels.

#### Question 9 — Emoji, Difficulty
- **Reason / Source Reference:** Replaced factually wrong `🥥` (coconut) with `📖` (Scripture) to match Surah Maryam (19:25–33) ripe dates; simplified wording for ages 5–8.
- **Original:**
  - **Emojis:** 🌴 🥥 👶 🗣️ 🤱
  - **Question:** Which miraculous baby spoke eloquently from his cradle to defend the honor of his righteous mother?
  - **Answer:** **Prophet Isa (Jesus) (ʿAlayhi as-Salām)**
  - **Context:** Surah Maryam (29–33). Baby Isa announced: *"Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet."*
- **New:**
  - **Emojis:** 🌴 👶 🗣️ 📖 🤱
  - **Question:** Which miraculous newborn baby spoke clearly from his cradle to defend his righteous mother?
  - **Answer:** **Prophet Isa (Jesus) (ʿAlayhi as-Salām)**
  - **Context:** Surah Maryam (19:29–33). Baby Isa announced: *"Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet."*

#### Question 10 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced Christian cherub `👼`, `🕯️`, and `🧗‍♂️` with `⛰️ 🕳️ ✨ 📖 🕋`; added specific citations Surah Al-Alaq (96:1–5) and *Sahih al-Bukhari* (3).
- **Original:**
  - **Emojis:** 🧗‍♂️ 🪨 🕯️ 👼 📖
  - **Question:** Which final prophet received the very first revelation of the Qur'an (*"Iqra!"*) from Angel Jibril in Cave Hira?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Alaq (1–5) and Sahih al-Bukhari. The first revelation marked the beginning of his noble prophethood in Makkah.
- **New:**
  - **Emojis:** ⛰️ 🕳️ ✨ 📖 🕋
  - **Question:** Which final prophet received the very first revelation of the Qur'an (*"Iqra!"*) from Angel Jibril in Cave Hira?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Alaq (96:1–5) and *Sahih al-Bukhari* (3). The first revelation marked the beginning of his noble prophethood in Makkah.

#### Question 11 — Minor Polish (Verified Clean)
- **Reason / Source Reference:** Originally verified clean; applied optional Arabic dual grammar polish in Answer: `ʿAlayhim as-Salām` -> `ʿAlayhimā as-Salām`.
- **Original:**
  - **Emojis:** 🕋 🧱 🏗️ 👣 🤲
  - **Question:** Which father-and-son prophet team rebuilt the foundations of the sacred Kaaba in Makkah?
  - **Answer:** **Prophets Ibrahim & Ismail (ʿAlayhim as-Salām)**
  - **Context:** Surah Al-Baqarah (127). As they raised the walls, they prayed: *"Our Lord, accept this from us. Indeed You are the Hearing, the Knowing."*
- **New:**
  - **Emojis:** 🕋 🧱 🏗️ 👣 🤲
  - **Question:** Which father-and-son prophet team rebuilt the foundations of the sacred Kaaba in Makkah?
  - **Answer:** **Prophets Ibrahim & Ismail (ʿAlayhimā as-Salām)**
  - **Context:** Surah Al-Baqarah (127). As they raised the walls, they prayed: *"Our Lord, accept this from us. Indeed You are the Hearing, the Knowing."*

#### Question 12 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced magic wand `🪄` with `🪵` (wooden staff); changed "Red Sea" to "the sea" per Surah Ash-Shu'ara (26:63) and added Surah Ta-Ha (20:77) + *Tafsir Ibn Kathir* (Ibn Abbas) for the twelve paths.
- **Original:**
  - **Emojis:** 🌊 🪄 🌊 🚶‍♂️ 🏃‍♂️ 🌊
  - **Question:** Which prophet struck the Red Sea with his staff, splitting the water into towering walls to save Bani Isra'il?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ash-Shu'ara (63). The sea parted, providing twelve dry paths through which the believers escaped Pharaoh.
- **New:**
  - **Emojis:** 🌊 🪵 🌊 🚶‍♂️ 🏃‍♂️ 🌊
  - **Question:** Which prophet struck the sea with his wooden staff, splitting the water into towering walls so Bani Isra'il could cross safely?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ash-Shu'ara (26:63) and Surah Ta-Ha (20:77). The sea parted into dry ground like towering mountains (*Tafsir Ibn Kathir* cites Ibn Abbas that twelve paths opened for the twelve tribes) while Pharaoh's army drowned.

#### Question 14 — Source/Authenticity
- **Reason / Source Reference:** Adjusted "the greatest role model" to "a shining role model" so it does not overstate beyond Qur'an/Sunnah; added "with his foot" and "and drink" from Surah Sad (38:41–44).
- **Original:**
  - **Emojis:** 🤒 ⏳ 🤲 💧 🦶 🩹
  - **Question:** Which prophet is famous as the greatest role model of patience (*Sabr*) through years of severe illness and family loss?
  - **Answer:** **Prophet Ayyub (Job) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Anbiya (83–84) and Surah Sad (41–42). He was healed when Allah commanded him to strike the earth to produce a cool bath.
- **New:**
  - **Emojis:** 🤒 ⏳ 🤲 💧 🦶 🩹
  - **Question:** Which prophet is renowned as a shining role model of patience (*Sabr*) through years of severe illness and family loss?
  - **Answer:** **Prophet Ayyub (Job) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Anbiya (21:83–84) and Surah Sad (38:41–44). He was healed when Allah commanded him to strike the ground with his foot to bring forth a spring of cool water to bathe in and drink.

#### Question 15 — Emoji, Source/Authenticity, Difficulty
- **Reason / Source Reference:** Replaced `🌙 ✂️` with `🌕 ☝️ 🌓 🌗 🌌`; changed "full moon cleaving" to "moon splitting into two halves" matching Surah Al-Qamar (54:1–2) and *Sahih al-Bukhari* (3868, 4864).
- **Original:**
  - **Emojis:** 🌙 ✂️ 🌓 🌌 ☝️
  - **Question:** Which prophet was granted the sign of the full moon cleaving in two when the people of Quraysh demanded proof?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Qamar (1–2) and Sahih al-Bukhari. The moon split visibly over the hills of Makkah.
- **New:**
  - **Emojis:** 🌕 ☝️ 🌓 🌗 🌌
  - **Question:** Which prophet was granted the miracle of the moon splitting into two halves when the people of Quraysh asked for a sign?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Qamar (54:1–2) and *Sahih al-Bukhari* (3868, 4864). The moon visibly split into two halves above the mountains of Makkah.

#### Question 16 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Fixed factual contradiction: *Sahih al-Bukhari* (3364) states Angel Jibril struck the earth with his heel/wing—not baby Ismail's feet! Removed `🦶` and revised Question & Context.
- **Original:**
  - **Emojis:** 🏜️ 👩‍👦 🏃‍♀️ 👶 🦶 💧
  - **Question:** Under whose infant feet did the holy, refreshing spring of Zamzam miraculously gush out in the barren desert of Makkah?
  - **Answer:** **Prophet Ismail (Ishmael) (ʿAlayhi as-Salām)**
  - **Context:** Sahih al-Bukhari (Story of Hajar running between Safa and Marwa until Angel Jibril struck the soil).
- **New:**
  - **Emojis:** 🏜️ 👩‍👦 🏃‍♀️ 👶 💧 ✨
  - **Question:** For which thirsty baby prophet did the spring of Zamzam miraculously gush out in the desert of Makkah while his mother Hajar searched between Safa and Marwa?
  - **Answer:** **Prophet Ismail (Ishmael) (ʿAlayhi as-Salām)**
  - **Context:** *Sahih al-Bukhari* (3364). After Hajar ran seven times between Safa and Marwa looking for water, Angel Jibril struck the earth with his heel (or wing), causing the Zamzam spring to flow.

#### Question 17 — Emoji
- **Reason / Source Reference:** Changed Musa's staff from magic wand `🪄` to `🪵` so his prophetic miracle is visually distinct from Pharaoh's magicians' illusions.
- **Original:**
  - **Emojis:** 🪄 🐍 👑 🪄 🪢 😲
  - **Question:** Which prophet's wooden staff turned into a real, massive serpent that swallowed the deceptive illusions of the royal magicians?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (107–122) and Surah Ta-Ha (65–70). Seeing true divine power, the magicians fell into prostration.
- **New:**
  - **Emojis:** 🪵 🐍 👑 🪄 🪢 😲
  - **Question:** Which prophet's wooden staff turned into a real, massive serpent that swallowed the false tricks of the royal magicians?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (7:107–122) and Surah Ta-Ha (20:65–70). Seeing true power from Allah, the magicians fell into prostration and believed.

#### Question 18 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced plastic baby bottle `🍼` with `🥛`; clarified that "pregnant" and "solid rock" are detailed in *Tafsir Ibn Kathir* on Surah Al-A'raf (7:73) & Surah Ash-Shu'ara (26:141–158).
- **Original:**
  - **Emojis:** 🪨 ⚡ 🐪 🍼 🏜️
  - **Question:** For which prophet did Allah cause a massive, pregnant she-camel to miraculously step out of a solid rock face?
  - **Answer:** **Prophet Salih (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (73) and Surah Ash-Shu'ara (141–158). Sent as a clear sign to the tribe of Thamud.
- **New:**
  - **Emojis:** 🪨 ⚡ 🐪 🥛 🏜️
  - **Question:** For which prophet did Allah cause a miraculous she-camel to emerge from a solid rock as a clear sign to the tribe of Thamud?
  - **Answer:** **Prophet Salih (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (7:73), Surah Ash-Shu'ara (26:141–158), and *Tafsir Ibn Kathir*, which records that Thamud challenged him to bring a pregnant she-camel out of a solid rock.

#### Question 19 — Minor Polish (Verified Clean)
- **Reason / Source Reference:** Originally verified clean; applied optional polish adding *Sahih al-Bukhari* (3207, 3887) and *Sahih Muslim* (162) citations to Context.
- **Original:**
  - **Emojis:** 🐎 ⚡ 🌌 🕌 ☁️ ⬆️
  - **Question:** Which prophet traveled through the night from Makkah to Jerusalem on the Buraq and ascended through the seven heavens (*Al-Isra wal-Mi'raj*)?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Isra (1) and Surah An-Najm. During this journey, Allah commanded the five daily prayers (*Salah*).
- **New:**
  - **Emojis:** 🐎 ⚡ 🌌 🕌 ☁️ ⬆️
  - **Question:** Which prophet traveled through the night from Makkah to Jerusalem on the Buraq and ascended through the seven heavens (*Al-Isra wal-Mi'raj*)?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Isra (1), Surah An-Najm, *Sahih al-Bukhari* (3207, 3887), and *Sahih Muslim* (162). During this journey, Allah commanded the five daily prayers (*Salah*).

#### Question 20 — Emoji
- **Reason / Source Reference:** Replaced `🪴` (potted plant) with `🏺` (clay) and refined wording to "by Allah's permission" / "people with leprosy".
- **Original:**
  - **Emojis:** 🪴 🕊️ 💨 🩺 👁️ 🤲
  - **Question:** Which prophet made a bird out of soft clay, blew into it to make it fly with Allah's permission, and cured the blind and leper?
  - **Answer:** **Prophet Isa (Jesus) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ali 'Imran (49) and Surah Al-Ma'idah (110). All miracles were performed strictly with the leave of Allah (*Bi-idhni-llah*).
- **New:**
  - **Emojis:** 🏺 🕊️ 💨 🩺 👁️ 🤲
  - **Question:** Which prophet shaped a bird out of clay, breathed into it so it flew by Allah's permission, and healed the blind and people with leprosy?
  - **Answer:** **Prophet Isa (Jesus) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ali 'Imran (3:49) and Surah Al-Ma'idah (5:110). All these miracles happened strictly by the permission of Allah (*Bi-idhni-llah*).

#### Question 21 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Removed Biblical/extra-scriptural apple `🍎` and snake `🐍` (Genesis 3)—neither appears in the Qur'an or Sahih Hadith; grounded in Surah Al-A'raf (7:19–24) and Al-Baqarah (2:35–37).
- **Original:**
  - **Emojis:** 🌳 🍎 🐍 😢 🤲 🌏
  - **Question:** Which prophet and his wife slipped by eating from the forbidden tree in Paradise, repented immediately, and were placed on Earth?
  - **Answer:** **Prophet Adam (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (19–23). They recited: *"Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."*
- **New:**
  - **Emojis:** 🌳 🚫 🍃 😢 🤲 🌍
  - **Question:** Which prophet and his wife slipped after Shaytan whispered to them to eat from the forbidden tree in Paradise, repented right away, and were sent down to Earth?
  - **Answer:** **Prophet Adam (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (7:19–24) and Surah Al-Baqarah (2:35–37). Neither an apple nor a snake appears in the Qur'an; they immediately prayed: *"Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."*

#### Question 22 — Emoji, Source/Authenticity, Difficulty
- **Reason / Source Reference:** Removed wine glass `🍷` and peace dove `🕊️`; changed "royal baker and cupbearer" in Question to Quranic "two fellow prisoners" (noting Tafsir identification in Context) per Surah Yusuf (12:36–41).
- **Original:**
  - **Emojis:** 🔒 🍞 🍇 🍷 💭 🕊️
  - **Question:** Which prophet accurately interpreted the dreams of a royal baker and cupbearer while unjustly imprisoned in Egypt?
  - **Answer:** **Prophet Yusuf (Joseph) (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (36–41). He utilized this opportunity to call his prison companions to monotheism before interpreting their dreams.
- **New:**
  - **Emojis:** 🔒 🍇 🍞 🐦 💭 👑
  - **Question:** While unjustly jailed in Egypt, which prophet accurately explained the dreams of two fellow prisoners—one pressing grapes and the other carrying bread on his head?
  - **Answer:** **Prophet Yusuf (Joseph) (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (12:36–41). Before explaining their dreams, he invited his prison companions (*Tafsir Ibn Kathir* identifies them as the king's cupbearer and baker) to worship Allah alone.

#### Question 23 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Removed `🔨` (hammer) and `🦺` (safety vest) since *Tafsir Ibn Kathir* on Surah Saba (34:10–11) notes iron softened without fire or hammer; cited *Sahih al-Bukhari* (2072) for earning from his own manual labor.
- **Original:**
  - **Emojis:** ⛓️ 🛡️ 🔨 🤲 🦺
  - **Question:** Which prophet was blessed with hands so miraculous that hard iron turned soft as warm dough for him to craft linked armor?
  - **Answer:** **Prophet Dawud (David) (ʿAlayhi as-Salām)**
  - **Context:** Surah Saba (10–11). Allah taught him to make protective coats of chainmail armor without taking payment from public funds.
- **New:**
  - **Emojis:** ⛓️ 👐 🛡️ 👑 🤲
  - **Question:** Which prophet was blessed with hands so miraculous that hard iron turned soft like dough for him to shape protective chainmail armor?
  - **Answer:** **Prophet Dawud (David) (ʿAlayhi as-Salām)**
  - **Context:** Surah Saba (34:10–11) and *Sahih al-Bukhari* (2072). *Tafsir Ibn Kathir* notes iron softened in his hands without fire or a hammer, and he ate from the earnings of his own hand's work.

#### Question 24 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Swapped dove `🕊️` to `🐦` for Hoopoe; noted in Context that "Bilqis" comes from classical histories/*Tafsir Ibn Kathir* while Surah An-Naml (27:20–31) calls her Queen of Saba.
- **Original:**
  - **Emojis:** 👑 📜 🪶 🕊️ ✉️ 👸
  - **Question:** Which prophet sent an official letter carried by the Hoopoe (*Hudhud*) bird inviting Queen Bilqis of Saba to Islam?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah An-Naml (20–31). The letter began: *"In the name of Allah, the Entirely Merciful, the Especially Merciful..."*
- **New:**
  - **Emojis:** 👑 📜 🪶 🐦 ✉️ 👸
  - **Question:** Which prophet sent a letter carried by the Hoopoe (*Hudhud*) bird inviting the Queen of Saba and her people to submit to Allah?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah An-Naml (27:20–31). The letter began: *"In the name of Allah, the Entirely Merciful, the Especially Merciful..."* (Classical histories and *Tafsir Ibn Kathir* record the queen's name as Bilqis.)

#### Question 25 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Swapped ZWJ `🐦‍⬛` and `🐪` for `🕋 🐦`; aligned "army and its elephant" with Surah Al-Fil (105:1–5) & *Tafsir Ibn Kathir*, and changed exact "570 CE" to "around 570 CE".
- **Original:**
  - **Emojis:** 🐘 🐦‍⬛ 🪨 👶 🤱 🐪
  - **Question:** In the year of which prophet's birth did Allah send flocks of birds (*Ababil*) with baked stones to destroy Abrahah’s army of elephants?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Fil. Occurred in 570 CE, historically recognized as *'Am al-Fil* (The Year of the Elephant).
- **New:**
  - **Emojis:** 🐘 🕋 🐦 🪨 👶
  - **Question:** In the year of which prophet's birth did Allah send flocks of birds (*Ababil*) carrying baked clay stones to stop an army and its elephant from attacking the Kaaba?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Fil (105:1–5) and classical Seerah / *Tafsir Ibn Kathir*. Occurred around 570 CE, known as *'Am al-Fil* (The Year of the Elephant), when Allah protected His Sacred House from Abrahah's army.

#### Question 27 — Difficulty, Source/Authenticity
- **Reason / Source Reference:** Simplified "obstinate people to monotheism" for ages 5–8 and added Surah Nuh (71:5–7) to explain the fingers-in-ears clue (`👂 🚫`).
- **Original:**
  - **Emojis:** ⏳ 👴 🗣️ 👂 🚫 9️⃣ 5️⃣ 0️⃣
  - **Question:** Which prophet called his obstinate people to monotheism patiently for 950 continuous years?
  - **Answer:** **Prophet Nuh (Noah) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Ankabut (14). He persevered through centuries of ridicule before the great flood occurred.
- **New:**
  - **Emojis:** ⏳ 👴 🗣️ 👂 🚫 9️⃣ 5️⃣ 0️⃣
  - **Question:** Which prophet patiently called his stubborn people to worship Allah alone for 950 years?
  - **Answer:** **Prophet Nuh (Noah) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Ankabut (29:14) and Surah Nuh (71:5–7). Even when his people put their fingers in their ears and mocked him, he kept calling them for centuries before the great flood.

#### Question 28 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced Yusuf-focused `🌾 🪙 👑` with Ya'qub-focused `👴 😢 👕 👁️ ✨ 🫂`; changed "scented shirt" to "long-lost son's shirt" so it does not sound perfumed rather than the miracle of sensing Yusuf's scent (Surah Yusuf 12:93–96).
- **Original:**
  - **Emojis:** 🌾 🪙 👕 👁️ 🫂 👑
  - **Question:** Which prophet had his eyesight restored when his lost son's scented shirt was cast across his face?
  - **Answer:** **Prophet Ya'qub (Jacob) / Isra'il (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (93–96). Ya'qub smelled the fragrance of Yusuf on the breeze before the caravan arrived.
- **New:**
  - **Emojis:** 👴 😢 👕 👁️ ✨ 🫂
  - **Question:** Which prophet had his eyesight miraculously restored when his long-lost son's shirt was placed over his face?
  - **Answer:** **Prophet Ya'qub (Jacob) / Isra'il (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (12:93–96). Ya'qub smelled the scent of his son Yusuf from afar before the caravan arrived, and immediately regained his sight when the shirt reached him.

#### Question 29 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed spiderweb (`🕷️ 🕸️`) and nesting dove (`🕊️`) at Cave Thawr (absent from Qur'an/*Sahihayn* and graded weak/*munkar* by Hadith critics); rewritten around Surah At-Tawbah (9:40) and *Sahih al-Bukhari* (3653).
- **Original:**
  - **Emojis:** 🏜️ 🐪 🕳️ 🕷️ 🕸️ 🕊️
  - **Question:** During the Hijrah, which prophet and his loyal companion Abu Bakr were protected in Cave Thawr by a spiderweb and nesting dove?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah At-Tawbah (40) and classical Seerah literature (*Al-Bidayah wan-Nihayah*).
- **New:**
  - **Emojis:** 🏜️ 🐪 ⛰️ 🕳️ 👣 🤲
  - **Question:** During the Hijrah, which prophet hid in Cave Thawr with his companion Abu Bakr and comforted him when pursuers stood right outside, saying: *"Do not grieve; indeed Allah is with us"*?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah At-Tawbah (9:40) and *Sahih al-Bukhari* (3653). When Abu Bakr feared an enemy looking down at his feet would spot them, the Prophet ﷺ reassured him that Allah was with them and sent down calm (*Sakinah*).

#### Question 30 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced dead log `🪵` and slipper `🥿` with living tree `🌳` (*Tafsir Ibn Kathir*) and sandal `👡`; grounded in Surah Ta-Ha (20:9–23) and Surah Al-Qasas (28:29–32).
- **Original:**
  - **Emojis:** ⛰️ 🪵 🔥 🥿 ✋ 💡
  - **Question:** Which prophet saw a burning bush on Mount Sinai, removed his sandals, and had his hand glow bright white as a miracle?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ta-Ha (9–23). His hand emerged brilliant white without disease or blemish (*Bayda' min ghayri su'*).
- **New:**
  - **Emojis:** ⛰️ 🌳 🔥 👡 ✋ ✨
  - **Question:** Which prophet saw a miraculous fire glowing in a tree near Mount Tur (Sinai), took off his sandals, and had his hand shine bright white as a sign from Allah?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ta-Ha (20:9–23) and Surah Al-Qasas (28:29–32). Allah spoke to him in the sacred valley of Tuwa, and his hand came out shining bright white without any illness (*Bayda' min ghayri su'*).

#### Question 32 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced music notes `🎵 🎶` and `🦅` with `🗣️ 🐦`; refined "sang praises... in chorus" to Quranic echoing *tasbih* and added Surah An-Nisa (4:163) for the *Zabur*.
- **Original:**
  - **Emojis:** 📖 🎵 🎶 🦅 🏔️ 🤲
  - **Question:** Which prophet was revealed the *Zabur* (Psalms), reciting praises so beautifully that birds and mountains joined him in chorus?
  - **Answer:** **Prophet Dawud (David) (ʿAlayhi as-Salām)**
  - **Context:** Surah Saba (10) and Surah Sad (18–19). The birds hovered and sang praises along with his divine melodies.
- **New:**
  - **Emojis:** 📖 🗣️ 🐦 🏔️ ✨ 🤲
  - **Question:** Which prophet was given the *Zabur* (Psalms) and praised Allah with a voice so beautiful that the birds and mountains echoed Allah's praises with him?
  - **Answer:** **Prophet Dawud (David) (ʿAlayhi as-Salām)**
  - **Context:** Surah An-Nisa (4:163), Surah Saba (34:10), and Surah Sad (38:18–19). The mountains and assembled birds repeated praises of Allah alongside him morning and evening.

#### Question 33 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Removed unverified `🍇` (Ibn Abbas specifies bread and fish); clarified in Context both views in *Tafsir Ibn Kathir* on Surah Al-Ma'idah (5:112–115) rather than calling it a "recurring sign and feast".
- **Original:**
  - **Emojis:** 🍽️ 🍞 🐟 🍇 ☁️ ⬇️
  - **Question:** For which prophet did Allah send down a heavenly banquet table (*Al-Ma'idah*) from the sky at the request of his disciples?
  - **Answer:** **Prophet Isa (Jesus) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Ma'idah (112–115). Sent as a recurring sign and feast for the true believers.
- **New:**
  - **Emojis:** 🍽️ 🍞 🐟 ☁️ ⬇️ 🤲
  - **Question:** For which prophet did Allah promise to send down a table spread with food (*Al-Ma'idah*) from heaven when his followers asked for a sign?
  - **Answer:** **Prophet Isa (Jesus) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Ma'idah (5:112–115). Prophet Isa prayed for the table to be a sign and a joyful feast for his people; *Tafsir Ibn Kathir* cites Ibn Abbas that it descended with bread and fish (while noting Hasan al-Basri and Mujahid held they feared the warning so it did not come down).

#### Question 34 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced axe `🪓` and `💚` with `🪵` and `📖` because *Sahih al-Bukhari* (2478, 4287) records Prophet Muhammad ﷺ knocking idols down with a stick (or bow); changed "peacefully" to "humbly".
- **Original:**
  - **Emojis:** 🕋 🕊️ 🪓 🗿 ❌ 💚
  - **Question:** Which prophet entered Makkah peacefully during the Conquest (*Fath Makkah*) and toppled 360 idols around the Kaaba?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Sahih al-Bukhari. He recited: *"Truth has arrived, and falsehood has perished. Indeed falsehood is bound to perish"* (Surah Al-Isra: 81).
- **New:**
  - **Emojis:** 🕋 🕊️ 🪵 🗿 ❌ 📖
  - **Question:** Which prophet entered Makkah humbly during the Conquest (*Fath Makkah*) and knocked down 360 idols around the Kaaba with a stick in his hand?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** *Sahih al-Bukhari* (2478, 4287). As he struck the idols with a stick (or bow), he recited: *"Truth has come, and falsehood has vanished. Indeed, falsehood is bound to vanish"* (Surah Al-Isra: 17:81).

#### Question 35 — Source/Authenticity
- **Reason / Source Reference:** Replaced "towering giants" (folkloric height exaggerations) with Quranic "tall, mighty people" and added Surah Al-A'raf (7:65–69) alongside Surah Al-Haqqah (69:6–7).
- **Original:**
  - **Emojis:** 🏛️ 💪 🌪️ 💨 ❄️ 🏜️
  - **Question:** Which prophet was sent to the mighty, towering giants of 'Ad, who were punished by a freezing, howling wind?
  - **Answer:** **Prophet Hud (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Haqqah (6–7). The howling wind blew for seven nights and eight continuous days.
- **New:**
  - **Emojis:** 🏛️ 💪 🌪️ 💨 ❄️ 🏜️
  - **Question:** Which prophet was sent to the tall, mighty people of 'Ad, who were punished by a freezing, roaring wind?
  - **Answer:** **Prophet Hud (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (7:65–69) and Surah Al-Haqqah (69:6–7). Allah made 'Ad tall and strong, yet they grew arrogant and were destroyed by a freezing, violent wind (*Sarsar*, per *Tafsir Ibn Kathir*) for seven nights and eight days.

### Medium Level Revisions

#### Question 38 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed unverified extra-scriptural claims ("first human to write with a pen, sew tailored cloth", "(Enoch)"); anchored strictly in Surah Maryam (19:56–57), Surah Al-Anbiya (21:85), *Sahih al-Bukhari* (3207/3887), and *Sahih Muslim* (162a).
- **Original:**
  - **Emojis:** ✍️ 📜 🪡 🧵 📚 ⬆️
  - **Question:** Which prophet was known as the first human to write with a pen, sew tailored cloth garments, and was raised to a high station?
  - **Answer:** **Prophet Idris (Enoch) (ʿAlayhi as-Salām)**
  - **Context:** Surah Maryam (56–57) and classical accounts in *Qisas al-Anbiya*. Known for introducing writing and sewing.
- **New:**
  - **Emojis:** 📖 🌟 4️⃣ ☁️ ⬆️ 🤝
  - **Question:** Which patient and truthful prophet did Allah raise to a high station, and whom Prophet Muhammad ﷺ met in the fourth heaven during *Al-Mi'raj*?
  - **Answer:** **Prophet Idris (ʿAlayhi as-Salām)**
  - **Context:** Surah Maryam (19:56–57), Surah Al-Anbiya (21:85), *Sahih al-Bukhari* (3207 / 3887), and *Sahih Muslim* (162a). He welcomed Prophet Muhammad ﷺ in the fourth heaven and prayed for his well-being.

#### Question 41 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced bucket `🪣` (not in Qur'an) with `📅`; cited Surah Ash-Shu'ara (26:155), Al-Qamar (54:28), Ash-Shams (91:11–14), and *Sahih al-Bukhari* (4942), clarifying "Qudar ibn Salif" as classical commentary.
- **Original:**
  - **Emojis:** 💧 🪣 🐪 🚫 🗡️ 🌩️
  - **Question:** Which prophet warned his people that a miraculous she-camel had an allocated day to drink from the city well, and they had the next?
  - **Answer:** **Prophet Salih (ʿAlayhi as-Salām)**
  - **Context:** Surah Ash-Shu'ara (155) and Surah Ash-Shams (13). The wicked leader Qudar hamstrung the camel, sealing their destruction.
- **New:**
  - **Emojis:** 💧 🐪 📅 🚫 ⚔️ ⚡
  - **Question:** Which prophet warned his people that a miraculous she-camel had her own appointed day to drink from their water supply, while they had the next day?
  - **Answer:** **Prophet Salih (ʿAlayhi as-Salām)**
  - **Context:** Surah Ash-Shu'ara (26:155), Surah Al-Qamar (54:28), Surah Ash-Shams (91:11–14), and *Sahih al-Bukhari* (4942). When the most wicked man among them (identified in classical commentaries as Qudar ibn Salif) hamstrung the camel, Thamud was destroyed.

#### Question 43 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced four specific bird species `🦅 🕊️ 🦆 🐓` and `✂️` with `🐦 4️⃣` since Surah Al-Baqarah (2:260) does not specify species.
- **Original:**
  - **Emojis:** 🦅 🕊️ 🦆 🐓 🏔️ ✂️
  - **Question:** Which prophet was commanded to take four birds, tame them, place their portions on separate peaks, and call them to see Allah revive the dead?
  - **Answer:** **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (260). Ibrahim asked Allah to show him how He revives the dead to bring tranquility to his heart.
- **New:**
  - **Emojis:** 🐦 4️⃣ 🏔️ 🗣️ 🪽 ✨
  - **Question:** Which prophet was commanded to take four birds, tame them, place their portions on separate peaks, and call them to see Allah revive the dead?
  - **Answer:** **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (2:260). Ibrahim asked Allah to show him how He revives the dead to bring tranquility to his heart; the Qur'an mentions four birds without specifying their species.

#### Question 44 — Source/Authenticity, Emoji, Cross-Level Deduplication
- **Reason / Source Reference:** Removed uncertain `(Jethro)` identification and weak *Khatib al-Anbiya* attribution; swapped `📉` for `🌍 💥 🏠`; focused on Madyan's earthquake & blast (Surah Hud 11:84–94; Al-A'raf 7:85–91) to avoid overlapping Advanced Q81 (*Yawm az-Zullah*).
- **Original:**
  - **Emojis:** ⚖️ 💰 📉 🚫 ☁️ 💥
  - **Question:** Which prophet was sent to the merchants of Madyan to command them to stop shortchanging people on scales and measures?
  - **Answer:** **Prophet Shu'aib (Jethro) (ʿAlayhi as-Salām)**
  - **Context:** Surah Hud (84–87) and Surah Al-A'raf (85). Known as *Khatib al-Anbiya* (The Orator of the Prophets) for his eloquent logic.
- **New:**
  - **Emojis:** ⚖️ 💰 🚫 🌍 💥 🏠
  - **Question:** Which prophet was sent to the people of Madyan to command them to worship Allah alone and give full measure and weight, before an earthquake and mighty blast seized the wrongdoers?
  - **Answer:** **Prophet Shu'aib (ʿAlayhi as-Salām)**
  - **Context:** Surah Hud (11:84–94) and Surah Al-A'raf (7:85–91). He called Madyan to honesty in trade and monotheism; when they rejected him, Allah saved him and the believers while the earthquake (*ar-rajfah*) and mighty blast (*as-sayhah*) seized the wrongdoers.

#### Question 45 — Source/Authenticity, Emoji, Cross-Level Deduplication
- **Reason / Source Reference:** Replaced overlapping golden-calf storyline (covered in Advanced Q83) with Prophet Musa praying for Prophet Harun to be appointed his eloquent helper and partner before Pharaoh (Surah Ta-Ha 20:25–36; Al-Qasas 28:34–35; Maryam 19:53).
- **Original:**
  - **Emojis:** 🗣️ 🤝 👑 🐮 🪙 😡
  - **Question:** Which eloquent prophet, chosen by Allah to support his brother Musa before Pharaoh, defended the community when Samiri molded a golden calf?
  - **Answer:** **Prophet Harun (Aaron) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ta-Ha (90–94). He pleaded with Bani Isra'il not to commit polytheism while Musa was away receiving the tablets.
- **New:**
  - **Emojis:** 🤲 🗣️ 🤝 👑 📖 ✨
  - **Question:** Which eloquent prophet did Prophet Musa pray for Allah to appoint as his helper and partner in delivering the message before Pharaoh?
  - **Answer:** **Prophet Harun (Aaron) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ta-Ha (20:25–36), Surah Al-Qasas (28:34–35), and Surah Maryam (19:53). Musa asked Allah to send his brother because he was *"more eloquent in speech than I,"* and Allah granted his request out of mercy, making Harun a prophet alongside him.

#### Question 46 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Replaced Biblical "river blood" and `🌾` with Quranic sequence in Surah Al-A'raf (7:133): floodwaters (`🌊`), locusts, lice, frogs, and blood; added Surah Al-Isra (17:101).
- **Original:**
  - **Emojis:** 🐸 🦗 🩸 🌾 🦟 👑
  - **Question:** Which prophet warned Pharaoh as Egypt was struck by plagues of river blood, swarms of jumping frogs, lice, and crop-devouring locusts?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (133). Nine signs were sent, but Pharaoh remained haughty and stubborn.
- **New:**
  - **Emojis:** 🌊 🦗 🦟 🐸 🩸 👑
  - **Question:** Which prophet warned Pharaoh and his people as Egypt was struck by distinct signs of floodwaters, locusts, lice, frogs, and blood?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (7:133) and Surah Al-Isra (17:101). Allah sent nine clear signs, yet Pharaoh and his chiefs remained arrogant and refused to believe.

#### Question 47 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Replaced magic wand `🪄` with staff `🦯` and removed unrelated `🍞`; aligned with Surah Al-Baqarah (2:57, 2:60) and Surah Al-A'raf (7:160).
- **Original:**
  - **Emojis:** 🪄 🪨 💧 1️⃣ 2️⃣ ⛺ 🍞
  - **Question:** Which prophet struck a desert rock with his staff, causing twelve bubbling freshwater springs to flow for each traveling tribe?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (60). Each tribe knew its designated drinking place while being sustained by Manna and Salwa.
- **New:**
  - **Emojis:** 🦯 🪨 💧 1️⃣ 2️⃣ ⛺
  - **Question:** Which prophet struck a stone with his staff by Allah's command, causing twelve springs of water to gush forth for the twelve tribes?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (2:57, 2:60) and Surah Al-A'raf (7:160). Each tribe knew its designated drinking place while Allah shaded them with clouds and sent down *Manna* and *Salwa*.

#### Question 48 — Source/Authenticity
- **Reason / Source Reference:** Corrected "scuttled a boat" (deliberately sank) to "damaged a boat (making a defect)" per Surah Al-Kahf (18:60–82) and added *Sahih al-Bukhari* (122).
- **Original:**
  - **Emojis:** 🐟 🚶‍♂️ ⛵ 🔨 🧒 🧱
  - **Question:** Which prophet took a long journey to meet the knowledgeable servant Al-Khidr, observing three puzzling actions with hidden divine wisdom?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Kahf (60–82). Al-Khidr scuttled a boat, took a youth's life, and repaired a leaning wall for orphan boys.
- **New:**
  - **Emojis:** 🐟 🚶‍♂️ ⛵ 🔨 🧒 🧱
  - **Question:** Which prophet took a long journey to meet the knowledgeable servant Al-Khidr, observing three puzzling actions with hidden divine wisdom?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Kahf (18:60–82) and *Sahih al-Bukhari* (122). Al-Khidr damaged a boat (making a defect so an oppressive king would not seize it), took a boy's life by Allah's command, and repaired a leaning wall for two orphan boys.

#### Question 49 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Corrected "tucked up her skirts" to Quranic *"uncovered her shins"* (*kashafat 'an saqayha*, Surah An-Naml 27:44); called her Queen of Saba (noting Bilqis as historical); updated `💨 ⚡` to `👑 🏛️ 💎 🌊 ☀️ 🤲`.
- **Original:**
  - **Emojis:** 🪑 💨 ⚡ 🏛️ 💎 🌊
  - **Question:** In the court of which prophet did a palace floor constructed from glass look so much like flowing water that Queen Bilqis tucked up her skirts?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah An-Naml (44). She realized her error in worshiping the sun and submitted: *"I submit with Sulaiman to Allah, Lord of the worlds."*
- **New:**
  - **Emojis:** 👑 🏛️ 💎 🌊 ☀️ 🤲
  - **Question:** In the palace of which prophet did a smooth glass floor look so much like a deep pool of water that the Queen of Saba uncovered her shins before realizing it was glass?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah An-Naml (27:24, 27:44). The Queen of Saba (called Bilqis in historical accounts) recognized her wrong in worshiping the sun and declared: *"My Lord, indeed I have wronged myself, and I submit with Sulaiman to Allah, Lord of the worlds."*

#### Question 50 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Removed unrelated `💨 🪙` and Disney-style `🧞‍♂️`; specified it became clear to the Jinn and mankind per Surah Saba (34:14).
- **Original:**
  - **Emojis:** 💨 🧞‍♂️ 🪙 🪵 🦯 🐜
  - **Question:** Which prophet-king passed away standing upright supported by his staff, keeping the Jinn working until a wood termite gnawed through it?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah Saba (14). Proved to all creation that the Jinn possess no independent knowledge of the unseen (*Ghayb*).
- **New:**
  - **Emojis:** 👑 🏛️ ⚒️ 🦯 🐜 💥
  - **Question:** Which prophet-king passed away leaning upon his staff, keeping the Jinn laboring until a wood-eating creature of the earth gnawed through the staff and he fell?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah Saba (34:14). When he fell, it became clear to the Jinn and mankind that the Jinn possess no knowledge of the unseen (*Ghayb*).

#### Question 52 — Source/Authenticity
- **Reason / Source Reference:** Replaced Biblical "brimstone" (Genesis 19:24) with Quranic stones of baked clay (*hijaratan min sijjil*) and sharpened "faithful daughters" to "believing family—except his disobedient wife" (Surah Hud 11:77–83; Al-Hijr 15:59–74).
- **Original:**
  - **Emojis:** 🏙️ ☄️ 🪨 🌧️ 💥 ⚠️
  - **Question:** Which prophet pleaded with his corrupt city to abandon their unnatural indecency, before the town was turned upside down by raining brimstone?
  - **Answer:** **Prophet Lut (Lot) (ʿAlayhi as-Salām)**
  - **Context:** Surah Hud (77–83) and Surah Al-Hijr (73–74). The angels rescued Lut and his faithful daughters by night.
- **New:**
  - **Emojis:** 🏙️ ☄️ 🪨 🌧️ 💥 ⚠️
  - **Question:** Which prophet pleaded with his corrupt city to abandon their unnatural indecency before their towns were turned upside down and pelted with stones of baked clay?
  - **Answer:** **Prophet Lut (Lot) (ʿAlayhi as-Salām)**
  - **Context:** Surah Hud (11:77–83) and Surah Al-Hijr (15:59–74). The angels rescued Lut and his believing family by night—except his disobedient wife—before raining down marked stones of baked clay (*hijaratan min sijjil*).

#### Question 53 — Emoji, Source/Authenticity
- **Reason / Source Reference:** Removed `📿` and `🌿`; aligned "three days and nights—while physically sound—except by gestures" with Surah Ali 'Imran (3:41) and Surah Maryam (19:10–11).
- **Original:**
  - **Emojis:** 📿 🤫 3️⃣ 🌙 👴 👶 🌿
  - **Question:** Which elderly prophet was given the divine sign that he would be unable to speak to anyone for three days except by hand gestures?
  - **Answer:** **Prophet Zakariya (Zechariah) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ali 'Imran (41) and Surah Maryam (10). A miraculous precursor to the conception of Yahya.
- **New:**
  - **Emojis:** 🤲 🤫 3️⃣ 🌙 👴 👶
  - **Question:** Which elderly prophet was given the divine sign that he would not speak to people for three days and nights—while physically sound—except by gestures?
  - **Answer:** **Prophet Zakariya (Zechariah) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ali 'Imran (3:41) and Surah Maryam (19:10–11). Allah granted him this sign after giving him the glad tidings of his righteous son Yahya.

#### Question 54 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed Christian title "(John the Baptist)" and Gospel-derived "wilderness" (`🌿`, `🚫 👑`); grounded strictly in Surah Maryam (19:12–15).
- **Original:**
  - **Emojis:** 👶 📖 🕊️ 🌿 💖 🚫 👑
  - **Question:** Which prophet was granted divine wisdom and deep compassion while still a young boy, living a pure, ascetic life in the wilderness?
  - **Answer:** **Prophet Yahya (John the Baptist) (ʿAlayhi as-Salām)**
  - **Context:** Surah Maryam (12–15). *"O Yahya, hold on to the Scripture firmly! And We gave him wisdom while yet a child."*
- **New:**
  - **Emojis:** 👶 📖 💖 🤝 🕊️ ✨
  - **Question:** Which prophet was commanded to hold firmly to the Scripture, granted wisdom while still a child, and praised in the Qur'an for his compassion, purity, and dutifulness to his parents?
  - **Answer:** **Prophet Yahya (John) (ʿAlayhi as-Salām)**
  - **Context:** Surah Maryam (19:12–15). Allah gave him wisdom in childhood, affection (*hanan*), and purity (*zakah*), describing him as pious, dutiful to his parents, and never arrogant or disobedient.

#### Question 56 — Source/Authenticity, Emoji, Difficulty
- **Reason / Source Reference:** Replaced weak/*mursal* orchard-vine/`🍇` story and awkward grammar with the *Sahih al-Bukhari* (3231) and *Sahih Muslim* (1795) Angel of the Mountains narration in Ta'if.
- **Original:**
  - **Emojis:** 🧗‍♂️ 🪨 😢 🩸 🍇 🤲 🕊️
  - **Question:** When which prophet was stoned and rejected in the mountain city of Ta'if, did he make an emotional prayer of devotion under an orchard vine?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Classical Seerah (The Year of Sorrow). He forgave the residents, praying that their future generations would worship Allah alone.
- **New:**
  - **Emojis:** 🏘️ 💔 ☁️ ⛰️ ⛰️ 🤲
  - **Question:** Which prophet suffered harsh rejection in Ta'if and mercifully refused when the Angel of the Mountains offered to crush its people between two mountains?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** *Sahih al-Bukhari* (3231) and *Sahih Muslim* (1795). When the Angel of the Mountains offered to close the two mountains (*Al-Akhshabayn*) over the townspeople, the Prophet ﷺ refused, hoping Allah would bring forth descendants from them who would worship Allah alone.

#### Question 57 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed "signed" and pen `🖋️` (contradicts *ummi* status); *Sahih al-Bukhari* (2700, 4177) and *Sahih Muslim* (1783) record Ali ibn Abi Talib (RA) writing under the Prophet's dictation; cited Surah Al-Fath (48:1–4).
- **Original:**
  - **Emojis:** 📜 🖋️ 🕊️ 🚫 ⚔️ 🤝 🕋
  - **Question:** Which prophet signed the historic Treaty of Hudaybiyyah with the Quraysh, which the Qur'an designated as a "Clear Victory" (*Fathan Mubina*)?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Fath (1–4). The treaty established peace, allowing Islam to spread swiftly across Arabia.
- **New:**
  - **Emojis:** 📜 🕊️ 🚫 ⚔️ 🤝 🕋
  - **Question:** Which prophet concluded the historic Treaty of Hudaybiyyah with the Quraysh, which the Qur'an designated as a "Clear Victory" (*Fathan Mubina*)?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Fath (48:1–4), *Sahih al-Bukhari* (2700 / 4177), and *Sahih Muslim* (1783). Ali ibn Abi Talib (RA) wrote the terms under the Prophet's dictation, and the peace treaty opened the way for Islam to spread swiftly across Arabia.

#### Question 59 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed "heavy well" (`🪨`, Genesis 29 motif) absent from Surah Al-Qasas (28:23–28); added *Sahih al-Bukhari* (2684) confirming Musa completed the full 10-year term.
- **Original:**
  - **Emojis:** 🚶‍♂️ 🏜️ 🐑 💧 🪨 👰
  - **Question:** Which prophet fled Egypt across the desert to Madyan, helped two sisters draw water for their sheep from a heavy well, and worked for 10 years?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Qasas (23–28). He made the prayer: *"My Lord, indeed I am in desperate need of whatever good You would send down to me."*
- **New:**
  - **Emojis:** 🚶‍♂️ 🏜️ 🐑 💧 🤲 ⏳
  - **Question:** Which prophet fled Egypt to Madyan, watered the flocks of two sisters waiting apart from the shepherds, and completed the full ten-year term of service?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Qasas (28:23–28) and *Sahih al-Bukhari* (2684). After watering their flock, he prayed: *"My Lord, indeed I am, for whatever good You would send down to me, in need."* When offered marriage for eight years—or ten voluntarily—Ibn Abbas confirmed he completed the longer, better term of ten years.

#### Question 61 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Removed "three times in a row" and "raging sea storm" (not in Surah As-Saffat 37:140–144 or Sahih Hadith); swapped gambling dice `🎲` for `⚖️`.
- **Original:**
  - **Emojis:** 🚢 🎲 🌊 ⛈️ 👤 🐋
  - **Question:** Which prophet had his name drawn three times in a row when ship passengers cast lots (*Qur'ah*) during a raging sea storm?
  - **Answer:** **Prophet Yunus (Jonah) (ʿAlayhi as-Salām)**
  - **Context:** Surah As-Saffat (141). *"And he drew lots, and was among the losers."*
- **New:**
  - **Emojis:** 🚢 🌊 ⚖️ 👤 🐋 🤲
  - **Question:** Which prophet boarded a laden ship after leaving his people, drew lots (*Qur'ah*) with those aboard, lost the draw into the sea, and was swallowed by a great fish?
  - **Answer:** **Prophet Yunus (Jonah) (ʿAlayhi as-Salām)**
  - **Context:** Surah As-Saffat (37:140–144). The Qur'an states he fled to the laden ship, drew lots (*fasahama*), and was among the losers before calling out to Allah in repentance from inside the fish.

#### Question 62 — Minor Polish (Verified Clean)
- **Reason / Source Reference:** Originally verified clean; applied minor wording polish in Context: `"Sourced from"` -> `"Adopted from"`.
- **Original:**
  - **Emojis:** ⛏️ 🕳️ 🐎 🌪️ 🛡️ 🤝
  - **Question:** Which prophet endorsed digging a deep trench around Madinah to defend against a coalition of 10,000 confederate soldiers (*Ghazwat al-Khandaq*)?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Ahzab (9–25). Sourced from the strategic counsel of Salman al-Farsi (RA).
- **New:**
  - **Emojis:** ⛏️ 🕳️ 🐎 🌪️ 🛡️ 🤝
  - **Question:** Which prophet endorsed digging a deep trench around Madinah to defend against a coalition of 10,000 confederate soldiers (*Ghazwat al-Khandaq*)?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Surah Al-Ahzab (9–25). Adopted from the strategic counsel of Salman al-Farsi (RA).

#### Question 64 — Source/Authenticity, Emoji
- **Reason / Source Reference:** Fixed factual error against Surah Yusuf (12:100): Yusuf did NOT bow—he raised his parents onto the throne while they and his 11 brothers bowed in greeting to him! Removed `🌾` (Biblical sheaves) and `👦`.
- **Original:**
  - **Emojis:** 🌾 👦 👑 ☀️ 🌙 1️⃣ 1️⃣
  - **Question:** Which prophet bowed in humble gratitude in an Egyptian throne room when eleven stars, the sun, and the moon prostrated to him in reality?
  - **Answer:** **Prophet Yusuf (Joseph) (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (100). Fulfilling the true divine dream he received during his early childhood.
- **New:**
  - **Emojis:** 👑 👨‍👩‍👦 ☀️ 🌙 ⭐ 1️⃣ 1️⃣
  - **Question:** Which prophet raised his parents onto the throne in Egypt as they and his eleven brothers bowed in greeting, fulfilling his childhood dream of eleven stars, the sun, and the moon?
  - **Answer:** **Prophet Yusuf (Joseph) (ʿAlayhi as-Salām)**
  - **Context:** Surah Yusuf (12:4, 12:100). After reuniting with his family in Egypt, he praised Allah and said to his father: *"O my father, this is the explanation of my vision of before. My Lord has made it reality."*

#### Question 65 — Emoji, Difficulty
- **Reason / Source Reference:** Removed `🩸 🥩 🎁 📿` (no blood was shed; ransomed with a ram per Surah As-Saffat 37:102–107) and added respectful title "Prophet Ibrahim".
- **Original:**
  - **Emojis:** 🐑 🩸 🥩 🎁 🔪 📿
  - **Question:** Which son of Ibrahim willingly submitted, saying: *"O my father, do as you are commanded; you will find me, if Allah wills, of the steadfast"*?
  - **Answer:** **Prophet Ismail (Ishmael) (ʿAlayhi as-Salām)**
  - **Context:** Surah As-Saffat (102). The epitome of filial piety, patience, and submission to divine will.
- **New:**
  - **Emojis:** 💭 👦 🤲 🔪 🐏 ✨
  - **Question:** Which son of Prophet Ibrahim willingly submitted, saying: *"O my father, do as you are commanded; you will find me, if Allah wills, of the steadfast"*?
  - **Answer:** **Prophet Ismail (Ishmael) (ʿAlayhi as-Salām)**
  - **Context:** Surah As-Saffat (37:102–107). Both father and son submitted completely to Allah's command before Allah ransomed him with a great sacrifice (*dhibh 'azim*).

#### Question 67 — Source/Authenticity, Emoji, Cross-Level Deduplication
- **Reason / Source Reference:** Removed Biblical dove/olive branch (`🕊️ 🌿`, Genesis 8); reassigned to Prophet Hud (AS) confronting 'Ad over building vain landmarks on high places and fortresses (Surah Ash-Shu'ara 26:123–139) to avoid overlapping Advanced Q71.
- **Original:**
  - **Emojis:** 🕊️ 🌿 🌊 🚢 ⛰️ 🤲
  - **Question:** Which prophet released a bird from the Ark to determine whether the floodwaters had dried out and vegetation was growing?
  - **Answer:** **Prophet Nuh (Noah) (ʿAlayhi as-Salām)**
  - **Context:** Classical commentaries of the Qur'an and *Qisas al-Anbiya* (Ibn Kathir).
- **New:**
  - **Emojis:** 🏛️ 🏔️ 🏰 ⏳ 🗣️ 🌪️
  - **Question:** Which prophet confronted his people for building vain landmarks on every high place and mighty fortresses as if they would live forever?
  - **Answer:** **Prophet Hud (ʿAlayhi as-Salām)**
  - **Context:** Surah Ash-Shu'ara (26:123–139). Sent to the people of 'Ad, he urged them to fear Allah and not behave as merciless tyrants; when they rejected him, they were destroyed while the believers were saved.

#### Question 68 — Difficulty, Source/Authenticity
- **Reason / Source Reference:** Softened "wiser legal ruling" alongside "King Dawud" so it aligns with Surah Al-Anbiya (21:78–79) (*"to each of them We gave judgment and knowledge"*), clarifying "crop field" vs. *Tafsir Ibn Kathir* "vineyard".
- **Original:**
  - **Emojis:** 👑 ⚖️ 🐑 🌾 🍇 🧑‍⚖️
  - **Question:** Which youthful prophet offered a wiser legal ruling on sheep destroying a neighbor's vineyard, alongside his father King Dawud?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Anbiya (78–79). Allah endowed Sulaiman with deeper legal understanding of the restitution case.
- **New:**
  - **Emojis:** 👑 ⚖️ 🐑 🌾 🍇 🧑‍⚖️
  - **Question:** Which prophet, alongside his father Prophet Dawud, was granted understanding by Allah of a restorative ruling when straying sheep ruined someone's crop field at night?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Anbiya (21:78–79). Allah gave both prophets judgment and knowledge, and guided Sulaiman (explained in *Tafsir Ibn Kathir* as a vineyard) to have the sheep owners restore the field while its owner benefited from the sheep in the meantime, then return both.

#### Question 69 — Cross-Level Deduplication, Source/Authenticity
- **Reason / Source Reference:** Original duplicated Easy Q30 (burning tree & sandals) and over-represented Musa in Medium. Reassigned to Prophet Muhammad ﷺ leading the earlier prophets in prayer at Bayt al-Maqdis (*Sahih Muslim* 172a).
- **Original:**
  - **Emojis:** 🥿 🥿 ⛰️ 🪵 🔥 🗣️
  - **Question:** Which prophet was commanded by Allah: *"Indeed, I am your Lord, so take off your sandals; you are in the sacred valley of Tuwa"*?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ta-Ha (12). Occurred during the divine call at Mount Sinai.
- **New:**
  - **Emojis:** 🕌 🌌 👥 🤲 ⭐ 👑
  - **Question:** Which prophet led all the earlier prophets in prayer as their *Imam* at Bayt al-Maqdis (Jerusalem) during the Night Journey (*Al-Isra*)?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** *Sahih Muslim* (172a). During the Night Journey, he saw earlier prophets including Ibrahim, Musa, and Isa praying, and when the time for prayer arrived, he led them as their *Imam*.

### Advanced Level Revisions

#### Question 72 — Source/Authenticity, Difficulty, Emoji, Kid-Friendly Context
- **Reason / Source Reference:** Removed uncertain `(Ezekiel)` identification, spoiled `(*Dhul-Kifl*)` in Question, and unauthenticated *Isra'ili* fasting/sleeping details (`🛏️ 🚪 👑`); anchored strictly in Surah Al-Anbiya (21:85–86) & Surah Sad (38:48) with expanded Context.
- **Original:**
  - **Emojis:** ⏳ ⚖️ 🛏️ 🚪 👑 🤲
  - **Question:** Which prophet is praised in the Qur'an alongside Ismail and Idris for his extraordinary steadfastness, fulfilling every vow (*Dhul-Kifl*)?
  - **Answer:** **Prophet Dhul-Kifl (Ezekiel) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Anbiya (85–86) and Surah Sad (48). Renowned for fasting by day, praying through the night, and judging disputes justly without anger.
- **New:**
  - **Emojis:** ⏳ 💚 📖 🌟 🤲
  - **Question:** Which prophet is praised twice in the Qur'an alongside Prophets Ismail, Idris, and Al-Yasa'—highlighted specifically among the steadfastly patient (*As-Sabirin*) and the best of people (*Al-Akhyar*)?
  - **Answer:** **Prophet Dhul-Kifl (ʿAlayhi as-Salām)**
  - **Context:** Prophet Dhul-Kifl is one of the noble prophets mentioned by name in the Qur'an, even though we are only told a little about his life. Allah praised him alongside Prophet Ismail and Prophet Idris for being deeply patient (*As-Sabirin*, meaning people who stay calm and obey Allah even when life is hard) and welcomed them into His mercy (Surah Al-Anbiya: 85–86). In another verse, Allah calls him one of *Al-Akhyar* (the very best and most chosen servants) alongside Ismail and Al-Yasa' (Surah Sad: 48).

#### Question 73 — Source/Authenticity, Emoji, Kid-Friendly Context
- **Reason / Source Reference:** Removed Biblical 1 Kings 18 elements ("King Ahab", "Mount Carmel", `☀️ ⚡ 🌧️ 🏔️`); anchored strictly in Surah As-Saffat (37:123–132) with expanded Context.
- **Original:**
  - **Emojis:** 🗿 ☀️ ⚡ 🌧️ 🏔️ 🚫
  - **Question:** Which prophet challenged King Ahab and the worshippers of the false sun/storm idol Baal (*Ba'l*) on Mount Carmel?
  - **Answer:** **Prophet Ilyas (Elijah) (ʿAlayhi as-Salām)**
  - **Context:** Surah As-Saffat (123–132). *"Do you call upon Ba'l and leave the best of creators?"*
- **New:**
  - **Emojis:** 🗿 🚫 🗣️ ☝️ 🕊️ 📜
  - **Question:** Which messenger confronted his people over worshipping an idol called Ba'l, asking them: "Will you call upon Ba'l and leave the Best of creators—Allah, your Lord and the Lord of your forefathers?"
  - **Answer:** **Prophet Ilyas (Elijah) (ʿAlayhi as-Salām)**
  - **Context:** Prophet Ilyas was a messenger sent to guide the Children of Israel when many of them started bowing to a stone idol named Ba'l instead of Allah. He gently reminded them that Allah is the Best of Creators who made them and all their parents before them. Because Prophet Ilyas stayed loyal and brave even when most people rejected him, Allah honored his memory forever with the special greeting: "Peace (*Salam*) be upon Ilyasin!" (Surah As-Saffat: 123–132).

#### Question 74 — Source/Authenticity, Emoji, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Removed inaccurate `👑` and vague `🌿 🏞️`; separated Quranic honors (Surah Al-An'am 6:86; Surah Sad 38:48) from *Tafsir Ibn Kathir* noting he guided after Ilyas, with expanded Context.
- **Original:**
  - **Emojis:** 👑 📜 🤲 🕊️ 🌿 🏞️
  - **Question:** Which prophet was appointed to continue the prophetic guidance of Bani Isra'il immediately following the ministry of Prophet Ilyas?
  - **Answer:** **Prophet Al-Yasa' (Elisha) (ʿAlayhi as-Salām)**
  - **Context:** Mentioned with high honor in Surah Al-An'am (86) and Surah Sad (48).
- **New:**
  - **Emojis:** 📖 🌟 🤝 🕊️ ☝️
  - **Question:** Which prophet is honored twice by name in the Qur'an—once alongside Ismail, Yunus, and Lut as preferred above the worlds, and once alongside Ismail and Dhul-Kifl among the best (*Al-Akhyar*)—known in classical *Tafsir* as guiding Bani Isra'il after Prophet Ilyas?
  - **Answer:** **Prophet Al-Yasa' (Elisha) (ʿAlayhi as-Salām)**
  - **Context:** Prophet Al-Yasa' is a true and honored prophet named twice in the Holy Qur'an. Allah tells us that He chose Al-Yasa' alongside other great prophets and favored them over the people of their time because of their faith and goodness (Surah Al-An'am: 86), and calls him one of *Al-Akhyar* (the best of Allah's servants) (Surah Sad: 48). In *Tafsir Ibn Kathir* (scholarly explanations of the Qur'an), scholars mention that he helped and carried on guiding the Children of Israel after Prophet Ilyas.

#### Question 75 — Source/Authenticity, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Kept Quranic phrasing in Question since Surah Al-Baqarah (2:258) does not name Nimrud (noting *Tafsir Ibn Kathir* identification in Context), with expanded Context.
- **Original:**
  - **Emojis:** 👑 ☀️ 💀 🌅 🌄 🗣️
  - **Question:** Which prophet disputed logically with King Nimrud, challenging him: *"Allah brings the sun from the East, so bring it from the West!"*?
  - **Answer:** **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (258). The arrogant king was left utterly dumbfounded.
- **New:**
  - **Emojis:** 👑 🗣️ 💀 ☀️ 🌅 🌄
  - **Question:** Which prophet debated an arrogant king who claimed power over life and death, silencing the ruler with the challenge: "Indeed, Allah brings the sun from the East, so bring it from the West!"?
  - **Answer:** **Prophet Ibrahim (Abraham) (ʿAlayhi as-Salām)**
  - **Context:** Prophet Ibrahim once spoke with a proud king who boasted that he was just as powerful as Allah because he could decide whether a prisoner lived or died. Prophet Ibrahim gave a smart and simple answer: Allah makes the sun rise in the East every morning, so if the king was truly mighty, he should make it rise in the West instead! The king had nothing to say back and was completely stunned because only Allah controls the whole universe (Surah Al-Baqarah: 258; *Tafsir Ibn Kathir* notes historians often identified this king as Nimrud).

#### Question 76 — Source/Authenticity, Emoji, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Removed `⚔️ 🗡️` ("warhorses"); Surah Sad (38:31–33) & *Tafsir Ibn Kathir* neutrally explain both scholarly views (Ibn Abbas/Al-Tabari on gentle stroking vs. giving them up for Allah), with expanded Context.
- **Original:**
  - **Emojis:** 🐎 🐎 ⚔️ ☀️ 🌇 🗡️ 🤲
  - **Question:** Which prophet-king was inspecting magnificent thoroughbred warhorses until the sun set, then refocused his heart wholly upon Allah?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah Sad (31–33). Renowned for inspecting his military steeds prepared in the cause of Allah.
- **New:**
  - **Emojis:** 🐎 🐎 👑 ☀️ 🌇 🤲
  - **Question:** Which prophet-king admired swift, noble horses displayed before him in the late afternoon until the sun set, then called them back and turned his heart wholly back to remembering Allah?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** One afternoon, beautiful, fast horses were brought out for Prophet Sulaiman to look over. Watching them kept him busy until the sun went down, and he felt sad that he had loved looking at them so much that it took his mind away from remembering Allah's afternoon prayer time. So he asked for the horses to be brought back and passed his hand over their legs and necks—some scholars like Ibn Abbas explain he gently patted them with love while turning back to Allah, and others say he gave them up for Allah's sake—and Allah blessed him greatly for putting worship first (Surah Sad: 31–33; *Tafsir Ibn Kathir*).

#### Question 77 — Emoji, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Replaced inaccurate `🌋` volcano and Disney-style `🧞‍♂️` with `👑 🔥 ⛲ 💨 🏛️ 🍲` matching Surah Saba (34:12–13), with expanded Context.
- **Original:**
  - **Emojis:** 🌋 🥉 🫗 ⛲ 💨 🧞‍♂️
  - **Question:** For which prophet did Allah cause a fountain of molten copper (*'Ayn al-Qitr*) to gush forth, with which the Jinn built lofty sanctuaries?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Surah Saba (12). A miracle alongside his command over the morning and evening winds.
- **New:**
  - **Emojis:** 👑 🔥 ⛲ 💨 🏛️ 🍲
  - **Question:** For which prophet-king did Allah cause a spring of liquid, molten copper (*'Ayn al-Qitr*) to flow like water while commanding the morning and evening winds and having Jinn build great arches and giant cauldrons?
  - **Answer:** **Prophet Sulaiman (Solomon) (ʿAlayhi as-Salām)**
  - **Context:** Allah gave Prophet Sulaiman amazing gifts to help him rule wisely. The wind carried him a whole month's travel in just one morning and another month's travel in the afternoon! Allah also made hot melted copper flow out of the ground for him like a water fountain so his workers and the *Jinn* (unseen beings created by Allah) could craft tall prayer arches, grand pools, and huge cooking pots big enough to feed whole crowds of people (Surah Saba: 12–13).

#### Question 78 — Emoji, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Replaced disrespectful zombie emoji `🧟‍♂️` with `🐮 🟡 ❓ 🔪 🗣️ ⚖️` for the Surah Al-Baqarah (2:67–73) cow episode, with expanded Context.
- **Original:**
  - **Emojis:** 🐮 🟡 🌾 🔍 🔪 🧟‍♂️
  - **Question:** Which prophet commanded Bani Isra'il to sacrifice a bright yellow cow, whose meat was struck against a murder victim to revive him?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-Baqarah (67–73). Solved an unsolved murder mystery and demonstrated Allah's power over life and death.
- **New:**
  - **Emojis:** 🐮 🟡 ❓ 🔪 🗣️ ⚖️
  - **Question:** Which prophet instructed his community to sacrifice a specific bright-yellow cow—after they kept asking repeated questions about its age, color, and work—and strike a slain man with part of it so Allah revived him to name his killer?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** When a man among the Children of Israel was secretly killed and nobody knew who did it, Prophet Musa told them Allah's command: sacrifice a cow. Instead of obeying right away, they kept asking picky questions—what age, what exact bright yellow shade, and whether it plowed the fields—making the task harder for themselves! When they finally sacrificed the cow and touched the dead man with a piece of it, Allah brought him back to life just long enough to point out his killer, proving that Allah can bring the dead back to life (Surah Al-Baqarah: 67–73).

#### Question 79 — Emoji, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Replaced disrespectful yawning/sleeping `🥱 💤` with `⛰️ ✨ 💥 💨 🙇‍♂️ 🤲` for Musa falling unconscious at the mountain (Surah Al-A'raf 7:143), with expanded Context.
- **Original:**
  - **Emojis:** ⛰️ 💥 ⚡ 🥱 💤 🙇‍♂️
  - **Question:** Which prophet requested to see Allah directly, but collapsed unconscious when the divine glory manifested upon Mount Sinai, crumbling it to dust?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Surah Al-A'raf (143). When he awoke, Musa repented: *"Exalted are You! I turn to You in repentance, and I am the first of the believers."*
- **New:**
  - **Emojis:** ⛰️ ✨ 💥 💨 🙇‍♂️ 🤲
  - **Question:** Which prophet asked, "My Lord, show me Yourself that I may look at You," and fell unconscious when Allah revealed His majesty to the mountain, crumbling it into dust?
  - **Answer:** **Prophet Musa (Moses) (ʿAlayhi as-Salām)**
  - **Context:** Because Allah spoke directly to Prophet Musa, Musa loved Allah deeply and wished to see Him with his own eyes. Allah gently told him that humans in this world cannot bear to see Him, and showed just a tiny glimpse of His greatness to a solid mountain instead. Right away, the mighty mountain shattered into fine dust, and Prophet Musa fell down unconscious from the shock! When he woke up, he bowed in humble apology and praised Allah's greatness (Surah Al-A'raf: 143).

#### Question 84 — Emoji, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Removed inaccurate `👑` (not a king) and `👶` (duplicated Q54), plus "born to Zakariya" spoiler; combined Surah Ali 'Imran (3:39), *Sahih al-Bukhari* (3430), and *Sunan at-Tirmidhi* (2863, Sahih) on the 5 commands at *Bayt al-Maqdis*.
- **Original:**
  - **Emojis:** 👶 📜 🕊️ 🌿 👑 🛡️ 🤲
  - **Question:** Who was the righteous cousin of Isa, born to Zakariya, whom the Qur'an characterizes as a chaste, honorable leader and prophet (*Sayyidan wa Hasuran*)?
  - **Answer:** **Prophet Yahya (John) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ali 'Imran (39). Renowned for his asceticism, humility, and defense of divine law.
- **New:**
  - **Emojis:** 📜 🕌 🗣️ 5️⃣ 🛡️ 🤲
  - **Question:** Which chaste, honorable prophet (*Sayyidan wa Hasuran*)—described as a maternal cousin of Prophet Isa—gathered the Children of Israel in *Bayt al-Maqdis* to deliver Allah's five great commands on *Tawhid*, prayer, fasting, charity, and *Dhikr*?
  - **Answer:** **Prophet Yahya (John) (ʿAlayhi as-Salām)**
  - **Context:** Allah blessed Prophet Yahya with deep wisdom and kindness, calling him *Sayyidan wa Hasuran* (a noble leader who kept himself completely pure from sin) (Surah Ali 'Imran: 39). Prophet Muhammad ﷺ met him alongside his cousin Prophet Isa in the second heaven during the Night Journey (*Sahih al-Bukhari*: 3430), and told us that Prophet Yahya once filled the mosque in *Bayt al-Maqdis* (Jerusalem) to teach people five commands from Allah: worship Allah alone, pray with focus, fast (telling them Allah loves a fasting person's breath more than sweet musk!), give charity to free yourself from harm, and remember Allah (*Dhikr*) like running safely inside a strong castle (*Sunan at-Tirmidhi*: 2863, graded Sahih).

#### Question 87 — Emoji, Source/Authenticity, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Replaced Kaaba `🕋` (Maryam's *Mihrab* was in *Bayt al-Maqdis*, Jerusalem) and `🥖 👶` with `🕌 🍇 🍊 ❄️ ☀️ 🤲`; clarified winter/summer fruits as *Tafsir Ibn Kathir* on Surah Ali 'Imran (3:37–38), with expanded Context.
- **Original:**
  - **Emojis:** 📿 🥖 🫒 👶 🕌 🕋
  - **Question:** Which prophet was the legal guardian of Maryam, finding miraculous, out-of-season fruits and provisions inside her prayer sanctuary?
  - **Answer:** **Prophet Zakariya (Zechariah) (ʿAlayhi as-Salām)**
  - **Context:** Surah Ali 'Imran (37). She explained: *"It is from Allah. Indeed, Allah provides for whom He wills without measure."*
- **New:**
  - **Emojis:** 🕌 🍇 🍊 ❄️ ☀️ 🤲
  - **Question:** Which prophet served as the devoted guardian of Maryam in Jerusalem's sanctuary, astonishingly finding miraculous provisions (*rizq*) beside her whenever he entered her private prayer room (*Mihrab*)?
  - **Answer:** **Prophet Zakariya (Zechariah) (ʿAlayhi as-Salām)**
  - **Context:** Prophet Zakariya was chosen to look after Maryam in her quiet prayer room (*Mihrab*) at *Bayt al-Maqdis* (Jerusalem). Every time he visited her, he saw fresh, special food there—early scholars in *Tafsir Ibn Kathir* explain he would find summer fruits during winter and winter fruits during summer! When he asked where it came from, Maryam answered: "It is from Allah. Indeed, Allah provides for whom He wills without limit." Seeing that Allah can give anything at any time filled elderly Prophet Zakariya with hope, so he raised his hands right there and prayed for a righteous son of his own (Surah Ali 'Imran: 37–38).

#### Question 90 — Emoji, Source/Authenticity, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Replaced anachronistic flags `🇾🇪 🇸🇾` with `⛏️ 🪨 ⚡ ✨ 🏰 🌍`; aligned lands with *Sunan an-Nasa'i* (3176, Hasan) & *Musnad Ahmad* (Ash-Sham, Persia, Yemen—not "Rome") and boulder crumbling with *Sahih al-Bukhari* (4101).
- **Original:**
  - **Emojis:** 🪨 🪓 ⚡ 💡 🏛️ 🇾🇪 🇸🇾
  - **Question:** During the digging of the trench, which prophet struck a stubborn boulder with a pickaxe, releasing flashes of light that revealed the palaces of Persia, Rome, and Yemen?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Sahih Hadith (Musnad Ahmad and Sunan an-Nasa'i) during the preparation for the Battle of the Trench.
- **New:**
  - **Emojis:** ⛏️ 🪨 ⚡ ✨ 🏰 🌍
  - **Question:** While helping his companions dig a defensive trench around Madinah, which prophet struck a huge unbreakable boulder with a pickaxe, sending out flashes of light that revealed the future lands of Ash-Sham, Persia, and Yemen?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Before the Battle of the Trench (*Al-Khandaq*), the Muslims were hungry, cold, and digging hard to protect Madinah when they hit a giant rock none of their tools could break. Prophet Muhammad ﷺ climbed into the trench and swung the pickaxe himself. Each strike sent out a bright spark of light, and he joyfully promised his tired companions that Allah had shown him the future keys to Greater Syria (*Ash-Sham*), the White Palace of Persia, and Yemen (*Sunan an-Nasa'i*: 3176, graded Hasan by Al-Albani; *Musnad Ahmad*), and the rock crumbled into soft sand (*Sahih al-Bukhari*: 4101).

#### Question 92 — Emoji, Source/Authenticity, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Replaced `🏔️` with `🕌`; clarified *Sahih al-Bukhari* (3124) & *Sahih Muslim* (1747) narrate the miracle of "one of the prophets", while *Musnad Ahmad* explicitly names Yusha', with expanded Context.
- **Original:**
  - **Emojis:** ☀️ 🛑 ⏳ ⚔️ 🏔️ 🕌
  - **Question:** Which successor to Prophet Musa led Bani Isra'il into the Holy Land, for whom Allah miraculously caused the sun to stop setting until victory?
  - **Answer:** **Prophet Yusha ibn Nun (Joshua) (ʿAlayhi as-Salām)**
  - **Context:** Sahih Muslim and Musnad Ahmad. The sun was detained for no human except Yusha when he marched to conquer Jerusalem.
- **New:**
  - **Emojis:** ☀️ ✋ ⏳ 🌇 🛡️ 🕌
  - **Question:** Which successor to Prophet Musa led the Children of Israel toward *Bayt al-Maqdis* late on a Friday afternoon and prayed to Allah to pause the setting sun—becoming the only human for whom the sun was held back until victory?
  - **Answer:** **Prophet Yusha ibn Nun (Joshua) (ʿAlayhi as-Salām)**
  - **Context:** Prophet Yusha ibn Nun was Prophet Musa's faithful student who later led the Children of Israel toward the sacred city of *Bayt al-Maqdis* (Jerusalem). As Friday evening came close, he worried that sunset would begin the Sabbath (Saturday), a holy day when fighting was not allowed. So he looked up at the sun and said: "You follow Allah's command, and I follow Allah's command. O Allah, hold it back for us!" Allah answered his prayer and paused the sun until they won (*Sahih al-Bukhari*: 3124; *Sahih Muslim*: 1747; named explicitly as Yusha' in *Musnad Ahmad*, graded authentic by Ibn Kathir and Al-Albani).

#### Question 93 — Emoji, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Replaced unrelated `📜 🖋️ 👑 🕋 🐪` with `👼 🫀 🥣 💧 ✨ 📖` and cited *Sahih Muslim* (162–163) and *Sahih al-Bukhari* (349), with expanded Context.
- **Original:**
  - **Emojis:** 📜 🖋️ 👑 🕋 🐪 🫀
  - **Question:** Which prophet had his chest opened and heart cleansed with Zamzam water by Angel Jibril as a child and before the Night Journey?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Sahih al-Bukhari and Sahih Muslim (*Shaqq as-Sadr*). Purified with faith and wisdom.
- **New:**
  - **Emojis:** 👼 🫀 🥣 💧 ✨ 📖
  - **Question:** Which prophet had his chest gently opened by Angel Jibril (*Shaqq as-Sadr*)—both in childhood and before the Night Journey—so his heart could be washed with Zamzam water in a golden basin filled with wisdom and faith?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Allah prepared Prophet Muhammad ﷺ in a very special way so his heart would be completely pure and ready to carry the final message of Islam. When he was a young boy, and again right before his Night Journey (*Al-Isra wal-Mi'raj*), Angel Jibril gently opened his chest (*Shaqq as-Sadr*), removed any tiny trace of Shaytan's whisper, washed his heart with blessed Zamzam water inside a shiny golden bowl, and filled it with *hikmah* (wisdom) and *iman* (strong faith) (*Sahih Muslim*: 162–163; *Sahih al-Bukhari*: 349).

#### Question 98 — Emoji, Source/Authenticity, Difficulty, Kid-Friendly Context
- **Reason / Source Reference:** Removed unverified `1️⃣ 2️⃣ 4️⃣ 0️⃣ 0️⃣ 0️⃣` headcount (using "a huge crowd of Muslims" in Context); corrected "atop Mount Rahmah" to the **Valley of Uranah** (*Sahih Muslim* 1218) and correctly cited *Musnad Ahmad* (23489, Sahih) in Mina for *"An Arab is no better than a non-Arab..."*.
- **Original:**
  - **Emojis:** ⛰️ 🐫 📜 🕋 1️⃣ 2️⃣ 4️⃣ 0️⃣ 0️⃣ 0️⃣
  - **Question:** On the plains of Arafat atop Mount Rahmah, which prophet delivered the historic Farewell Sermon (*Khutbat al-Wada'*) declaring racial and human equality?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** Sahih Muslim (10 AH). He declared: *"An Arab has no superiority over a non-Arab, nor a non-Arab over an Arab... except by piety and good action."*
- **New:**
  - **Emojis:** ⛰️ 🐪 👥 🗣️ 📜 ⚖️
  - **Question:** Riding his camel through the Valley of Uranah at Arafat during his Farewell Pilgrimage (*Hajjat al-Wada'*), which prophet delivered a timeless message on human equality, brotherhood, and holding fast to Allah's Book?
  - **Answer:** **Prophet Muhammad ﷺ**
  - **Context:** In the tenth year after moving to Madinah, a huge crowd of Muslims joined Prophet Muhammad ﷺ for *Hajjat al-Wada'* (the Farewell Pilgrimage). Standing in the Valley of Uranah near Arafat, he reminded everyone that all people's lives and belongings are sacred, that husbands and wives must treat each other with kindness, and that holding tightly to the Qur'an keeps us guided forever (*Sahih Muslim*: 1218). During those Hajj days in Mina, he also taught that an Arab is no better than a non-Arab—only *Taqwa* (good character and loving Allah) makes anyone truly special (*Musnad Ahmad*: 23489, graded Sahih).

---

## Part 3 — Advanced Level (Q71–Q100) Expanded Kid-Friendly Contexts (7-Year-Old Readability)

All 30 Advanced questions (Q71–Q100) had their `Context:` rewritten in warm, clear storytelling language understandable by a 7-year-old while preserving exact Qur'an, *Sahih* Hadith, and *Tafsir* attributions.

- **Q71 (Hud (AS)):** Prophet Hud taught the strong people of 'Ad to worship Allah alone, but they ignored him and kept doing wrong. After a dry spell, they saw a big dark cloud coming toward their valleys and cheered, thinking it would bring helpful rain. Instead, Allah sent a freezing, roaring wind inside that cloud that blew for seven nights and eight days, destroying their homes while keeping Prophet Hud and the believers safe (Surah Al-Ahqaf: 24–25; Surah Al-Haqqah: 6–7).
- **Q72 (Dhul-Kifl (AS)):** Prophet Dhul-Kifl is one of the noble prophets mentioned by name in the Qur'an, even though we are only told a little about his life. Allah praised him alongside Prophet Ismail and Prophet Idris for being deeply patient (*As-Sabirin*, meaning people who stay calm and obey Allah even when life is hard) and welcomed them into His mercy (Surah Al-Anbiya: 85–86). In another verse, Allah calls him one of *Al-Akhyar* (the very best and most chosen servants) alongside Ismail and Al-Yasa' (Surah Sad: 48).
- **Q73 (Ilyas (AS)):** Prophet Ilyas was a messenger sent to guide the Children of Israel when many of them started bowing to a stone idol named Ba'l instead of Allah. He gently reminded them that Allah is the Best of Creators who made them and all their parents before them. Because Prophet Ilyas stayed loyal and brave even when most people rejected him, Allah honored his memory forever with the special greeting: "Peace (*Salam*) be upon Ilyasin!" (Surah As-Saffat: 123–132).
- **Q74 (Al-Yasa' (AS)):** Prophet Al-Yasa' is a true and honored prophet named twice in the Holy Qur'an. Allah tells us that He chose Al-Yasa' alongside other great prophets and favored them over the people of their time because of their faith and goodness (Surah Al-An'am: 86), and calls him one of *Al-Akhyar* (the best of Allah's servants) (Surah Sad: 48). In *Tafsir Ibn Kathir* (scholarly explanations of the Qur'an), scholars mention that he helped and carried on guiding the Children of Israel after Prophet Ilyas.
- **Q75 (Ibrahim (AS)):** Prophet Ibrahim once spoke with a proud king who boasted that he was just as powerful as Allah because he could decide whether a prisoner lived or died. Prophet Ibrahim gave a smart and simple answer: Allah makes the sun rise in the East every morning, so if the king was truly mighty, he should make it rise in the West instead! The king had nothing to say back and was completely stunned because only Allah controls the whole universe (Surah Al-Baqarah: 258; *Tafsir Ibn Kathir* notes historians often identified this king as Nimrud).
- **Q76 (Sulaiman (AS)):** One afternoon, beautiful, fast horses were brought out for Prophet Sulaiman to look over. Watching them kept him busy until the sun went down, and he felt sad that he had loved looking at them so much that it took his mind away from remembering Allah's afternoon prayer time. So he asked for the horses to be brought back and passed his hand over their legs and necks—some scholars like Ibn Abbas explain he gently patted them with love while turning back to Allah, and others say he gave them up for Allah's sake—and Allah blessed him greatly for putting worship first (Surah Sad: 31–33; *Tafsir Ibn Kathir*).
- **Q77 (Sulaiman (AS)):** Allah gave Prophet Sulaiman amazing gifts to help him rule wisely. The wind carried him a whole month's travel in just one morning and another month's travel in the afternoon! Allah also made hot melted copper flow out of the ground for him like a water fountain so his workers and the *Jinn* (unseen beings created by Allah) could craft tall prayer arches, grand pools, and huge cooking pots big enough to feed whole crowds of people (Surah Saba: 12–13).
- **Q78 (Musa (AS)):** When a man among the Children of Israel was secretly killed and nobody knew who did it, Prophet Musa told them Allah's command: sacrifice a cow. Instead of obeying right away, they kept asking picky questions—what age, what exact bright yellow shade, and whether it plowed the fields—making the task harder for themselves! When they finally sacrificed the cow and touched the dead man with a piece of it, Allah brought him back to life just long enough to point out his killer, proving that Allah can bring the dead back to life (Surah Al-Baqarah: 67–73).
- **Q79 (Musa (AS)):** Because Allah spoke directly to Prophet Musa, Musa loved Allah deeply and wished to see Him with his own eyes. Allah gently told him that humans in this world cannot bear to see Him, and showed just a tiny glimpse of His greatness to a solid mountain instead. Right away, the mighty mountain shattered into fine dust, and Prophet Musa fell down unconscious from the shock! When he woke up, he bowed in humble apology and praised Allah's greatness (Surah Al-A'raf: 143).
- **Q80 (Dawud (AS)):** Prophet Dawud was a wise king who loved setting aside quiet time alone to worship Allah in his *Mihrab* (private prayer room). One day, two men surprised him by climbing right over the wall! They asked him to judge a case about a rich brother with 99 *ewes* (female sheep) who still wanted his poor brother's only sheep. As soon as Prophet Dawud gave his judgment, he realized Allah was testing him to judge carefully and never rush—so he dropped down in *sujud* (prostration) and asked Allah to forgive him, and Allah forgave him and brought him even closer (Surah Sad: 21–25).
- **Q81 (Shu'aib (AS)):** Prophet Shu'aib was sent to guide people living near a lush, leafy forest called *Al-Aykah* (the Wood). Many of them cheated customers when weighing goods on scales and laughed at Prophet Shu'aib, daring him to make a piece of the sky drop onto them! When they refused to repent, Allah sent a terrible heat wave followed by a dark *Zullah* (a covering cloud or canopy) that they thought would cool them down—instead, it brought the punishment of the Day of the Canopy, while Allah kept Prophet Shu'aib and the believers safe (Surah Ash-Shu'ara: 176–189; *Tafsir Ibn Kathir*).
- **Q82 (Nuh (AS)):** Before Prophet Nuh passed away, he called his son close to share the most important lessons from his whole life. He told his son to always say *"La ilaha illallah"* (there is no god worthy of worship except Allah), explaining that if all seven heavens and seven earths were placed on one side of a scale and those words on the other, *"La ilaha illallah"* would weigh even more! He also advised him to say *"SubhanAllahi wa bihamdihi"* (Glory and praise be to Allah), and warned him to stay far away from *shirk* (worshipping anything besides Allah) and *kibr* (pride/arrogance) (*Al-Adab al-Mufrad*: 548; *Musnad Ahmad*: 7101, graded Sahih).
- **Q83 (Harun (AS)):** When Prophet Musa went up Mount Sinai to receive Allah's guidance, he left his older brother Prophet Harun in charge of the Children of Israel. While Musa was gone, a wicked man tricked many people into worshipping a golden calf. Prophet Harun bravely warned them to stop, even though they threatened to hurt him! When Musa came back upset and grabbed his brother by his hair and beard, Harun gently called him "O son of my mother" and explained he only avoided a fight so the people would not split apart—showing us that the Qur'an clears Prophet Harun of any blame (Surah Ta-Ha: 90–94; Surah Al-A'raf: 150).
- **Q84 (Yahya (AS)):** Allah blessed Prophet Yahya with deep wisdom and kindness, calling him *Sayyidan wa Hasuran* (a noble leader who kept himself completely pure from sin) (Surah Ali 'Imran: 39). Prophet Muhammad ﷺ met him alongside his cousin Prophet Isa in the second heaven during the Night Journey (*Sahih al-Bukhari*: 3430), and told us that Prophet Yahya once filled the mosque in *Bayt al-Maqdis* (Jerusalem) to teach people five commands from Allah: worship Allah alone, pray with focus, fast (telling them Allah loves a fasting person's breath more than sweet musk!), give charity to free yourself from harm, and remember Allah (*Dhikr*) like running safely inside a strong castle (*Sunan at-Tirmidhi*: 2863, graded Sahih).
- **Q85 (Ishaq (AS)):** Prophet Ishaq was the second son of Prophet Ibrahim, born as a miracle when both his father and mother Sarah were very old. When angels visited in human form to bring the happy news that Sarah would have a baby named Ishaq—and even a grandson named Ya'qub after him—Sarah laughed in joyful surprise! (Surah Hud: 71; Surah As-Saffat: 112–113). Prophet Muhammad ﷺ later praised this blessed family line as four generations of prophets in a row: "The noble one, son of the noble one, son of the noble one, son of the noble one: Yusuf, son of Ya'qub, son of Ishaq, son of Ibrahim" (*Sahih al-Bukhari*: 3382).
- **Q86 (Lut (AS)):** When angels came as handsome guests to Prophet Lut's house, a wicked mob surrounded his door. Trying hard to protect his guests, Prophet Lut wished out loud for strong relatives or a *Rukn Shadid* (a strong pillar of support) to help him stop the crowd (Surah Hud: 80). Centuries later, Prophet Muhammad ﷺ lovingly said: "May Allah have mercy on Lut! He was already taking refuge in a Strong Support [Allah]!" (*Sahih al-Bukhari*: 3372). Right afterward, the angels told Lut not to worry and led him and his faithful family safely out before dawn.
- **Q87 (Zakariya (AS)):** Prophet Zakariya was chosen to look after Maryam in her quiet prayer room (*Mihrab*) at *Bayt al-Maqdis* (Jerusalem). Every time he visited her, he saw fresh, special food there—early scholars in *Tafsir Ibn Kathir* explain he would find summer fruits during winter and winter fruits during summer! When he asked where it came from, Maryam answered: "It is from Allah. Indeed, Allah provides for whom He wills without limit." Seeing that Allah can give anything at any time filled elderly Prophet Zakariya with hope, so he raised his hands right there and prayed for a righteous son of his own (Surah Ali 'Imran: 37–38).
- **Q88 (Ismail (AS)):** Prophet Ismail grew up in the desert valley of Makkah beside the blessed spring of Zamzam, where he learned to speak Arabic and became famous for his skill with a bow and arrow. Many hundreds of years later, Prophet Muhammad ﷺ walked past some companions from the tribe of Aslam who were having an archery contest. He cheered them on by reminding them of their noble ancestor Prophet Ismail: "Shoot, O sons of Ismail, for your father was an archer!" (*Sahih al-Bukhari*: 3373).
- **Q89 (Ayyub (AS)):** During his long years of sickness, Prophet Ayyub's loyal wife stayed by his side and worked hard to care for him. Once, when upset, he swore an oath by Allah to strike her a hundred times after he got well. After Allah healed him, Prophet Ayyub did not want to hurt his kind wife—yet he did not want to break a promise made in Allah's name either! Out of mercy, Allah told him to gather a *dighth* (one neat bundle of 100 thin grass stems) and gently tap her once with it, keeping his promise without causing any harm (Surah Sad: 44; *Tafsir Ibn Kathir*).
- **Q90 (Muhammad ﷺ):** Before the Battle of the Trench (*Al-Khandaq*), the Muslims were hungry, cold, and digging hard to protect Madinah when they hit a giant rock none of their tools could break. Prophet Muhammad ﷺ climbed into the trench and swung the pickaxe himself. Each strike sent out a bright spark of light, and he joyfully promised his tired companions that Allah had shown him the future keys to Greater Syria (*Ash-Sham*), the White Palace of Persia, and Yemen (*Sunan an-Nasa'i*: 3176, graded Hasan by Al-Albani; *Musnad Ahmad*), and the rock crumbled into soft sand (*Sahih al-Bukhari*: 4101).
- **Q91 (Yunus (AS)):** After Allah rescued Prophet Yunus from the great fish, Allah sent him back to a huge city of 100,000 or more people—often identified by scholars like Ibn Kathir as Nineveh. Unlike other nations that ignored warnings until it was too late, every single person in this city sincerely repented and asked Allah for forgiveness! Because they truly believed, the Qur'an tells us they became the only entire town saved right before punishment struck, and Allah let them live happily in peace (Surah Yunus: 98; Surah As-Saffat: 147–148).
- **Q92 (Yusha ibn Nun (AS)):** Prophet Yusha ibn Nun was Prophet Musa's faithful student who later led the Children of Israel toward the sacred city of *Bayt al-Maqdis* (Jerusalem). As Friday evening came close, he worried that sunset would begin the Sabbath (Saturday), a holy day when fighting was not allowed. So he looked up at the sun and said: "You follow Allah's command, and I follow Allah's command. O Allah, hold it back for us!" Allah answered his prayer and paused the sun until they won (*Sahih al-Bukhari*: 3124; *Sahih Muslim*: 1747; named explicitly as Yusha' in *Musnad Ahmad*, graded authentic by Ibn Kathir and Al-Albani).
- **Q93 (Muhammad ﷺ):** Allah prepared Prophet Muhammad ﷺ in a very special way so his heart would be completely pure and ready to carry the final message of Islam. When he was a young boy, and again right before his Night Journey (*Al-Isra wal-Mi'raj*), Angel Jibril gently opened his chest (*Shaqq as-Sadr*), removed any tiny trace of Shaytan's whisper, washed his heart with blessed Zamzam water inside a shiny golden bowl, and filled it with *hikmah* (wisdom) and *iman* (strong faith) (*Sahih Muslim*: 162–163; *Sahih al-Bukhari*: 349).
- **Q94 (Adam (AS)):** When Allah created the very first human being, Prophet Adam, He made him sixty cubits tall (about as tall as a very tall building!). Allah told Prophet Adam to go greet a group of angels and listen closely to their answer, because that would become the special greeting for him and all his children forever. Prophet Adam said: *"As-Salamu 'Alaykum"* (Peace be upon you), and the angels warmly added: *"As-Salamu 'Alayka wa Rahmatullah"* (Peace and Allah's mercy be upon you)—the exact greeting Muslims still share with one another every day (*Sahih al-Bukhari*: 3326; *Sahih Muslim*: 2841).
- **Q95 (Salih (AS)):** Among the people of Thamud, there were nine troublemaking leaders who refused to listen to Prophet Salih. One night, they made a sneaky secret promise to attack and harm Prophet Salih and his family while everyone slept, then lie about it afterward. Little did they know that Allah sees every secret! Allah protected Prophet Salih and all the faithful believers by saving them safely, while the nine wicked plotters and their rebellious crowd were destroyed and left in silent, empty ruins (Surah An-Naml: 45–53).
- **Q96 (Yusuf (AS)):** Years after becoming a wise leader in Egypt, Prophet Yusuf finally met his brothers again when they came to buy food during a famine. He quietly told his full younger brother who he really was! To keep his younger brother with him without hurting his older brothers' feelings, Allah guided Prophet Yusuf to hide the king's special measuring cup inside his younger brother's camel bag. According to the brothers' own rule, whoever had the cup stayed behind—allowing Prophet Yusuf to protect his brother and later bring his whole family happily back together (Surah Yusuf: 69–76).
- **Q97 (Ya'qub (AS)):** When Prophet Ya'qub sent his eleven strong, handsome sons back to Egypt to buy grain, he gave them smart, caring advice: enter the big city through different gates instead of all walking in together, so they wouldn't draw envy or trouble. Yet he reminded them that human plans only work if Allah wills! Even when he missed his lost sons terribly and cried until his eyes turned white, he never gave up hope—saying *"I only complain of my sadness and grief to Allah, and I know from Allah what you do not know"* (Surah Yusuf: 67, 86).
- **Q98 (Muhammad ﷺ):** In the tenth year after moving to Madinah, a huge crowd of Muslims joined Prophet Muhammad ﷺ for *Hajjat al-Wada'* (the Farewell Pilgrimage). Standing in the Valley of Uranah near Arafat, he reminded everyone that all people's lives and belongings are sacred, that husbands and wives must treat each other with kindness, and that holding tightly to the Qur'an keeps us guided forever (*Sahih Muslim*: 1218). During those Hajj days in Mina, he also taught that an Arab is no better than a non-Arab—only *Taqwa* (good character and loving Allah) makes anyone truly special (*Musnad Ahmad*: 23489, graded Sahih).
- **Q99 (Isa (AS)):** Prophet Isa taught the Children of Israel to love Allah, follow the truth of the Torah that came before him, and get ready for the very last prophet who would arrive after him. He gave them an exciting clue—telling them that the coming messenger's name would be *"Ahmad"* (Surah As-Saff: 6). Both *Ahmad* and *Muhammad* mean "the one who is praised most" and refer to Prophet Muhammad ﷺ, showing how all of Allah's prophets supported one another like one big family!
- **Q100 (Muhammad ﷺ):** On the miraculous Night Journey (*Al-Isra wal-Mi'raj*), Allah honored Prophet Muhammad ﷺ above every created being. After meeting earlier prophets across the seven heavens, he saw *Al-Bayt al-Ma'mur* (the Frequented House in heaven where 70,000 brand-new angels pray every single day) and reached *Sidrat al-Muntaha* (the amazing Lote Tree at the furthest boundary of creation, with giant leaves and flowing rivers). Even mighty Angel Jibril stopped there, while Prophet Muhammad ﷺ went forward to receive Allah's direct revelation and the gift of the five daily prayers (Surah An-Najm: 13–18; *Sahih al-Bukhari*: 3207, 3887; *Sahih Muslim*: 162, 164a).

---

## Part 4 — Verified Clean Questions

### Verified Clean & Completely Untouched (6 Questions)
These questions required zero changes to emojis, wording, answer, context, or Quick-List:

- **Easy Q13 (Ibrahim (AS)):** 💭 👦 🔪 🐏 🤲 — Which prophet was prepared to sacrifice his beloved son after receiving a divine vision, only for Allah to replace the boy with a ram?
- **Easy Q26 (Zakariya (AS)):** 👴 🧓 🤲 👶 🌿 ✨ — Which elderly prophet was granted a righteous prophet son named Yahya even though he and his wife were advanced in age?
- **Easy Q31 (Yusuf (AS)):** 👑 💭 🐄 🌾 ⏳ 🍞 — Which prophet saved Egypt from starvation by interpreting the King’s dream of seven fat cows and seven green ears of wheat?
- **Medium Q42 (Ibrahim (AS)):** 🌌 🌟 🌙 ☀️ ☝️ 🧠 — Which young prophet reasoned with his people by observing a star, the moon, and the blazing sun, proving created bodies setting can never be gods?
- **Medium Q55 (Isa (AS)):** ☁️ ⬆️ 🛡️ 🌙 ✨ ⏳ — Which prophet was not slain nor crucified, but rather raised up bodily to the heavens by Allah, destined to return before the Day of Judgment?
- **Medium Q58 (Yusuf (AS)):** 🌾 🪙 🐪 🫅 💼 📦 — Which prophet was appointed to manage the national storehouses and grain reserves across the entirety of Egypt?

### Verified Originally Sound with Minor Optional Polishes Applied (4 Questions, Detailed in Part 2)
These 4 questions were already accurate in core content and received small clarity/citation polishes:

- **Easy Q2 (Yunus (AS)):** Originally verified clean; applied optional polish adding `Surah As-Saffat: 142–146` for the gourd plant (*Yaqtin*) and briefly explaining the triple darkness (night, deep sea, whale's belly).
- **Easy Q11 (Ibrahim & Ismail):** Originally verified clean; applied optional Arabic dual grammar polish in Answer: `ʿAlayhim as-Salām` -> `ʿAlayhimā as-Salām`.
- **Easy Q19 (Muhammad ﷺ):** Originally verified clean; applied optional polish adding *Sahih al-Bukhari* (3207, 3887) and *Sahih Muslim* (162) citations to Context.
- **Medium Q62 (Muhammad ﷺ):** Originally verified clean; applied minor wording polish in Context: `"Sourced from"` -> `"Adopted from"`.
