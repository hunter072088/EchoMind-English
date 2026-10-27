# 🎧 EchoMind English - 英文式思考與 Shadowing 影子跟讀訓練器

> **專案簡介**：本專案為開源純前端 PWA 英語學習應用，支援完全離線運行與 GitHub Pages 靜態託管。完整內建 100 天共 1,000 個 **CEFR A2（生活必備）至 B1（自然流暢）** 短小道地語塊（**2~5 個單字**）、母語連音音標分析、三階段 Shadowing 影子跟讀工坊與免恐慌求生錦囊，所有學習進度與自訂卡頓庫 100% 留存於本地瀏覽器端，享有最高等級隱私保護。

---

## 📖 1. 專案核心理念與設計宗旨

本專案深度取材自 YouTube 經典英語教學頻道 **[English Podcast 1314]** 之核心思維，專為渴望告別「死記硬背、逐字心算翻譯」的學習者設計：

### 🛑 拒絕逐字心算翻譯 (Reject Word-by-Word Translation)
- **痛點剖析**：傳統學習者習慣把聽到的每個英文單字先在大腦翻成中文（*例如聽到 "How's it going?"，大腦還在卡在 "它正在如何走..."*）。此時對方已經講到下一句，導致全盤漏聽與巨大社交恐慌（Panic）。
- **解法**：建立 **Short Chunk（2~5 字短語塊）** 認知。將高頻片語結構視為一個不可分割的「語意積木」，一句呼吸就能直覺輸出，反應時間縮短至 **0.3 ~ 0.5 秒**。

### 🧩 CEFR A2 & B1 實戰分級 (CEFR A2/B1 Framework)
- **Phase 1~2 (Days 1 - 40) • CEFR A2**：生活日常起居、早晨出門、咖啡廳點餐、免恐慌叫停澄清、爭取思考時間、連音形變（*gonna, wanna, gotta, flap-T*）、同理共鳴與讚美。
- **Phase 3~5 (Days 41 - 100) • CEFR B1/B1+**：生活交涉與妥協（*It's up to you, Sleep on it*）、建立好習慣、踏出舒適圈、休閒旅遊與問路、母語道地短語（*Play it by ear, Call it a day, It is what it is*）與自言自語訓練。

### 🎙️ 三階段 Shadowing 影子跟讀 & 口腔肌肉記憶
- 先讓耳朵純聽音捕捉「音樂性語感與連音變形」，再透過 0.2 秒同步跟隨出聲馴化口腔肌肉，最後實現無逐字稿盲說。徹底實踐 English Podcast 1314 提倡之「訓練舌頭與口腔肌肉反射」。

### 🛡️ 免恐慌生存應對錦囊 (No-Panic Survival Toolkit)
- 聽不懂時絕不假裝點頭（Fake Nodding），而是從容使用「叫停 (Hold on)、澄清 (Clarify)、確認語意 (Verify)、爭取思考時間 (Sleep on it)」的生存短句，讓對話永遠不中斷、不當機。

---

## 🎯 2. 目標管理系統 (Goal Setting Framework)

App 頂部與儀表板深度整合了多維度階梯式學習指標：

| 維度 | 核心量化指標 | 預期達到的思維狀態 |
| :--- | :--- | :--- |
| **📅 每日 (Daily)** | 掌握並打卡 **10 個 2~5 字短語塊**；完成至少 **3 次 Shadowing 循環跟讀** | 口腔肌肉每天都有出聲記憶，建立連續打卡習慣 |
| **🗓️ 每週 (Weekly)** | 累積學習 **50 個自然 Chunk**；完成一次**無逐字稿盲測 Role-play** | 能在隨機生活情境中直覺拋出生存求救句 |
| **📊 每月 (Monthly)** | 掌握 **200 個高頻短語塊**；將聽音反應時間縮短至 **0.5 秒內** | 聽到句首立刻反射情境義，告別中文介入 |
| **🏆 每季 (Quarterly)** | 突破 A2-B1 聽力盲點；清空個人化**「卡頓句型庫」** | 面對母語者快速連音與日常交涉不再慌張 |
| **🚀 半年 (Half-Year)** | 能流暢進行 **10 分鐘以上全英文日常交流** | 具備主動開話題、接話、換話題與優雅收尾能力 |
| **👑 年度 (Annual)** | **徹底根除中英逐字翻譯習慣** | 內化英文原生大腦，實現即時反應與母語級從容 |

---

## 🛠️ 3. 四大核心功能模組 (Core Features)

### 模組一：Chunk 每日精選與高效輸入 (10 Chunks/Day)
- **卡片式專注學習**：
  - 每天自動解鎖 10 個核心短語塊（涵蓋 A2 生活日常與 B1 自然流暢）。
  - **🏷️ CEFR 等級標籤**：每張卡片清楚標示 `A2 • 生活必備` 或 `B1 • 自然表達`。
  - **⚡ 等級快速篩選列**：支援一鍵切換 `全部`、`🟢 A2 生活必備 (Days 1-40)`、`🔵 B1 自然流暢 (Days 41-100)`。
- **多維度深度解構**：
  - **❌ 死板逐字直譯 vs. ✅ 自然情境語義**：深度對比為何逐字翻會鬧笑話，直指母語文化情境。
  - **⚡ Fast Speech Shape（快速連音與弱化形變）**：標註老外實際說話時的音變法則（例如 *What have you been up to? ➔ What'cha been up to?*）。
  - **💡 實戰免恐慌指南**：精準解說在社交或生活情境中何時該丟出這句話作為安全防護。
  - **二重奏情境例句**：提供 A/B 自然對白與一鍵發音試聽。

### 模組二：Shadowing 影子跟讀工坊 (Shadowing Studio)
- **嚴謹三階段科學跟讀法**：
  1. **Stage 1: Listen & Recognize（純聽音辨識）**：預設套用高斯模糊遮蔽文字，逼大腦用耳朵抓取聲調起伏與連音，建立聽覺預測模型。
  2. **Stage 2: Echo & Sync（同步口腔肌肉跟讀）**：提供 3-2-1 倒數計時音效，母語原音響起後 0.2 秒口腔肌肉同步跟出聲，並同步啟動即時錄音。
  3. **Stage 3: Independent Output（無音檔盲朗讀）**：移走母語原音支架，由大腦直接驅動獨立發音並錄音。
- **高保真語音錄音與視覺化對比**：
  - 整合 HTML5 Web Audio API `AudioContext` & `AnalyserNode`，即時繪製麥克風波形。
  - **Track 1 原音 (Native) vs Track 2 我的錄音 (My Voice)** 雙軌隨時點擊切換對比。
  - 結合 Web Speech API 語音辨識，即時計算**發音與語塊匹配準確率（Accuracy %）**。

### 模組三：智慧間隔複習 (Smart Review & SRS)
- **間隔重複演算法 (Spaced Repetition)**：
  - 抽認卡自評：🔴 完全卡住（1天，自動納入卡頓庫）、🟡 還可以（3天）、🟢 熟練掌握（7天）、⚡ 完美秒殺（15天）。
  - **⚠️ 個人化「卡頓句型庫」專區**：凡是卡住的句型集中列管，支援一鍵直接送入 Shadowing Studio 進行定點爆破訓練。
- **情境模擬測驗 (Panic Simulation Quiz)**：
  - 模擬老外 1.1x 快速講話的生活狀況題。
  - 啟動 **5~6 秒緊張感倒數計時條**，強迫在時限內選出正確的應對求生語句。
  - 詳細剖析常見陷阱（如「假裝聽懂隨便點頭 Fake Nodding」造成的尷尬）。

### 模組四：情境 Role-Play 實戰考驗 (No-Panic Survival)
- **三大日常實戰情境**：
  - ☕ *咖啡廳日常點餐與客製 (Cafe Ordering & Customization)*
  - 👩‍🎨 *茶水間與外國朋友閒聊 (Casual Small Talk & Chatting)*
  - 🚲 *週末聚會邀約與隨機應變 (Weekend Plans & Making Decisions)*
- **免恐慌生存求救錦囊 (Pinned Survival Kit)**：
  - 固定置底快捷按鈕：【爭取思考時間】、【沒聽懂請求重述】、【確認理解】、【委婉預警】，點擊即可直接發送。
  - 支援打字輸入與 **Web Speech 麥克風即時語音辨識輸入**。
  - AI 即時提供「戰術與心理素質分析回饋」，鼓勵維持英文思維不中斷。

---

## 📂 4. 完整專案結構

```
learning english/
├── index.html                   # 應用程式主入口 (React 18 + Tailwind CSS + Web Speech API)
├── chunks-data.js               # 100 天大綱 (Syllabus)、情境測驗與角色扮演
├── chunks-phase1.js             # Phase 1: Days 1-20 (CEFR A2 生活起居與生存破冰 200 塊)
├── chunks-phase2.js             # Phase 2: Days 21-40 (CEFR A2-B1 連音弱化與情緒共鳴 200 塊)
├── chunks-phase3.js             # Phase 3: Days 41-60 (CEFR B1 生活交涉與習慣建立 200 塊)
├── chunks-phase4.js             # Phase 4: Days 61-80 (CEFR B1 休閒旅遊與全情境聽說 200 塊)
├── chunks-phase5.js             # Phase 5: Days 81-100 (CEFR B1+ 母語直覺、幽默與思維 200 塊)
├── 100_DAYS_ROADMAP.md          # 100 天完整學習里程碑藍圖
├── start-server.ps1             # 零相依本機 HTTP 伺服器腳本 (PowerShell .NET HttpListener)
├── start-server.bat             # Windows 一鍵雙擊啟動批次檔 (自動打開瀏覽器)
├── manifest.json                # PWA 本地應用資訊清單
├── README.md                    # 本文件 (完整架構與操作說明)
└── assets/                      # 圖示與樣式資源
```

---

## 🚀 5. 本地端執行方式 (Local Run Guide)

本專案採用**零外部相依設計**（不需要 Node.js、不需要 npm、不需要 Python），在任何 Windows 電腦上皆能開箱即用！

### 方式 1：一鍵雙擊啟動（最推薦，完整解鎖麥克風權限）
1. 在檔案總管中，直接對 `start-server.bat` 連按兩下滑鼠左鍵。
2. 系統會透過 Windows 內建的 PowerShell 自動在後台啟動微型 HTTP 伺服器：
   ```
   http://localhost:8000/
   ```
3. 預設瀏覽器（Edge / Chrome）將自動開啟 EchoMind English 介面。
   > 💡 透過 `localhost` 伺服器開啟時，瀏覽器會以安全上下文（Secure Context）完整賦予麥克風錄音與語音合成之完整權限。

### 方式 2：使用 PowerShell 命令列啟動
開啟 PowerShell 終端機，執行：
```powershell
.\start-server.ps1
```

### 方式 3：直接開啟 HTML 檔
直接以 Chrome 或 Edge 瀏覽器開啟 `index.html` 即可立即瀏覽 Chunk 與聆聽發音。

---

## 🔒 6. 隱私與本機資料說明
- **資料庫**：所有打卡紀錄、掌握狀態、卡頓清單均透過 `localStorage` 存放於使用者自身瀏覽器中。
- **無雲端傳輸**：完全不將音訊或學習紀錄上傳任何第三方伺服器。
- **開源與版本控制**：專案支援推送至 GitHub 進行遠端版本管理與 GitHub Pages 靜態託管。
