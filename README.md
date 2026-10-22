# 🎙️ English AI Studio (智慧英語學習與沉浸式聽力工坊)

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?logo=github)](https://pages.github.com/)
[![React 18](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini API](https://img.shields.io/badge/Powered%20by-Gemini%20API-orange?logo=google)](https://aistudio.google.com/)
[![Web Speech API](https://img.shields.io/badge/Native-Web%20Speech%20API-purple)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 一款現代化響應式英語學習 Web App。結合 **Google Gemini 2.0 / 1.5 系列大語言模型** 與瀏覽器原生的 **Web Speech API (`SpeechSynthesis`)**，專為提升英語學習者的寫作、多維表達與「沉浸式聽力/聽寫能力」而設計。
> 
> **零後端依賴**、無須伺服器，直接透過 **GitHub Pages** 即可免費全球高速託管！

---

## 🌟 核心設計特色

- 🟢 **免金鑰即用模式（預設推薦）**：完全不需要申請或輸入任何 API Key，開箱即用！內建智慧語義轉換與公共翻譯引擎，手機與電腦隨開秒學。
- 🟣 **進階自訂 Gemini API（選用）**：支援 Gemini 2.0 Flash / 1.5 Flash，若 API 遭遇問題系統亦具備自動平滑降級至免金鑰引擎，永遠順暢不中斷。
- 🎧 **原生 Web Speech 沉浸式聽力**：深度整合瀏覽器原生的語音合成引擎，無須額外付費購買 TTS 服務。支援 **0.8x 慢速跟讀**、**1.0x 標準自然**、**1.2x 進階挑戰**，並可自由切換 **美式 (`en-US`)** 與 **英式 (`en-GB`)** 口音。
- 👁️ **創新的「盲聽聽寫練習模式 (Listening Dictation Mode)」**：開啟後全域英文自動套用毛玻璃模糊遮罩，使用者透過聽取語音並在輸入框完成聽寫，系統會進行逐字比對計算正確率（%）並標示錯漏字。
- ⭐ **本地書籤收藏與歷程備份**：隨時收藏優秀例句與單字，支援 **一鍵匯出 Markdown 筆記（相容 Obsidian / Notion）** 與 **JSON 完整備份**。
- 🌓 **深色/淺色自適應現代介面**：採用類似 Notion / Duolingo 的精緻卡片式視覺，支援快捷鍵 (`Ctrl + Enter`) 與快速示範體驗。

---

## 🚀 三大核心學習模組

```
┌────────────────────────────────────────────────────────┐
│                   English AI Studio                    │
├────────────────────┬────────────────────┬──────────────┤
│ 🇨🇳 ➡️ 🇺🇸 中翻英擴充 │ ✍️ ➡️ 💎 英中糾錯潤飾 │ 📚 ➡️ 🧠 單字情境 │
└────────────────────┴────────────────────┴──────────────┘
```

### 1. 🇨🇳 ➡️ 🇺🇸 中翻英（多維度表達擴充）
告別死板直譯！當你輸入一段中文時，AI 會以結構化 JSON 回傳：
- **📌 核心標準直譯**：最準確無誤的標準英文。
- **💼 商務/正式 (Formal)**：適合職場商業郵件、會議與專案報告的高格調用字。
- **💬 道地口語 (Casual)**：母語人士在日常咖啡廳、社交對話中最習慣的自然說法。
- **✨ 進階/精煉 (Idiomatic)**：運用高分片語、修辭與精鍊句型。
- **💡 關鍵解析**：深入剖析幾種說法的語氣差異、選字邏輯與文化習慣。

### 2. ✍️ ➡️ 💎 英翻中與母語潤飾（糾錯與升級）
適合檢驗自己的英語寫作或商務信件：
- **精準繁體中譯**：忠實呈現原句語意。
- **語法與用字修正 (Grammar & Polish)**：即時標記原句的語法錯誤、贅字、介系詞誤用及台式英文 (Chinglish)，並提供修訂後版本與詳細原因分析。
- **3 種進階換句話說**：
  - 🌸 **委婉禮貌 (Diplomatic)**：謙和顧及對方的體貼語氣。
  - ⚡ **直接果斷 (Decisive)**：明快有力、展現自信領導力。
  - 🌟 **地道慣用 (Native)**：自然流暢的母語級表達。

### 3. 📚 ➡️ 🧠 陌生單字深度練習（多情境應用）
不再只是死背單字字典：
- **單字解構卡**：包含 IPA/KK 音標、詳細詞性、核心繁體中文語意、字根字首 (Etymology) 或趣味記憶訣竅 (Memory Hook)。
- **4 大情境深度應用例句**：
  - ☕ **日常社交 (Daily Social)**
  - 💼 **職場溝通 (Workplace / Business)**
  - 📰 **新聞時事 (News / Current Affairs)**
  - 🔬 **學術/技術 (Academic / Technical)**
  - 每個情境均附有完整的英文例句（單字高亮標記）、精準中譯與情境應用小撇步。

---

## 🎧 互動式聽力與盲聽練習 (Listening & Dictation)

針對所有生成的英文句子、不同語氣改寫版本與情境例句，均可進行互動式聽力訓練：
1. **逐句語音控制器**：
   - 🔊 **播放 / 暫停按鈕**：點擊即可立即發音。
   - 🐢 **語速切換**：`0.8x`（慢速跟讀練習）/ `1.0x`（正常）/ `1.2x`（進階聽力）。
   - 🌎 **口音切換**：`美式 (en-US)` 與 `英式 (en-GB)`。
2. **盲聽練習模式 (Listening Dictation Mode)**：
   - 點擊頂部導航列的「👁️ 盲聽模式」按鈕。
   - 開啟後，所有英文句子將以高斯模糊（`blur-sm`）遮蔽，僅保留「🔊 聽音訊」按鈕與「聽寫輸入框」。
   - 聽完音訊後，在輸入框中打出你聽到的句子，點擊「比對」：
     - 自動計算正確率（例如：`95% 🎉`）。
     - 逐字比對反饋：綠色（完全正確）、紅色刪除線（漏聽或拼錯）、黃色（多打的字）。
   - 若遇到卡關，可隨時點擊「看答案」解除模糊。

---

## 🔑 如何取得免費 Gemini API Key

本專案使用 Google 官方提供的 Gemini API，個人學習享有非常寬裕的**免費額度 (Free Tier)**：

1. 前往 [Google AI Studio (aistudio.google.com/app/apikey)](https://aistudio.google.com/app/apikey)。
2. 使用 Google 帳號登入。
3. 點擊 **"Create API key"**（建立 API 金鑰）。
4. 複製金鑰後，回到本應用程式右上角的「⚙️ API Key 設定」，貼上並儲存即可！
   > 💡 即使尚未取得金鑰，也可以點擊輸入框下方的「**載入示範資料快速體驗**」搶先體驗所有功能！

---

## 💻 本地運行步驟 (Local Development)

由於本專案採用現代純靜態架構（HTML5 + React 18 + Tailwind CSS + Lucide Icons），在本地運行極其簡單：

### 方式 1：使用 Python 內建 HTTP 伺服器（推薦）
在專案根目錄開啟終端機（PowerShell 或 CMD），執行：
```bash
# Windows
py -m http.server 3000

# macOS / Linux
python3 -m http.server 3000
```
開啟瀏覽器訪問：`http://localhost:3000`

### 方式 2：使用 VS Code Live Server
若使用 VS Code，安裝延伸模組 **Live Server**，在 `index.html` 上按右鍵選擇 **"Open with Live Server"** 即可。

### 方式 3：直接雙擊開啟
直接於檔案總管雙擊 `index.html` 亦可瀏覽與測試。

---

## 🚀 部署至 GitHub Pages (免費靜態託管)

將此專案部署至 GitHub Pages 僅需兩分鐘：

### 步驟 1：建立 GitHub 儲存庫並推送程式碼
```bash
git init
git add .
git commit -m "feat: initial release of English AI Studio"
git branch -M main
git remote add origin https://github.com/<你的使用者名稱>/<你的儲存庫名稱>.git
git push -u origin main
```

### 步驟 2：啟用 GitHub Pages（選擇以下任一種方式）

#### 方式 A：直接透過儲存庫分支發布（最簡單、免等待）
1. 進入 GitHub 儲存庫頁面，點擊 **Settings**（設定）。
2. 在左側選單點選 **Pages**。
3. 在 **Build and deployment** > **Source** 選擇 **"Deploy from a branch"**。
4. **Branch** 選擇 `main`，資料夾選擇 `/ (root)`，點擊 **Save**。
5. 等待 1~2 分鐘重新整理頁面，頂部即可看到您的專屬網址：
   `https://<你的使用者名稱>.github.io/<你的儲存庫名稱>/`

#### 方式 B：透過 GitHub Actions 自動發布
專案已內建 `.github/workflows/deploy.yml`。
1. 在 **Settings** > **Pages** 中，將 **Source** 切換為 **"GitHub Actions"**。
2. 每次推送程式碼至 `main` 分支時，GitHub Actions 會自動完成驗證與部署！

---

## 📂 專案檔案結構

```
learning-english/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自動部署工作流
├── .gitignore              # Git 版本控制忽略設定
├── index.html              # 核心 Single Page App (React 18 + Tailwind CSS + Web Speech API)
└── README.md               # 專案中文與使用手冊
```

---

## 🌐 瀏覽器相容性說明

- **Web Speech API (`SpeechSynthesis`)**：
  - **Google Chrome / Microsoft Edge**：原生支援極佳，提供多種高品質自然語音（Google US/UK, Microsoft Jenny/Oliver 等）。
  - **Apple Safari (iOS / macOS)**：原生支援 Samantha 等語音。
  - **Mozilla Firefox**：支援原生語音合成。
- 本 Web App 支援各尺寸手機、平板與桌上型電腦，自適應深色模式與直式/橫式閱讀。

---

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 授權釋出，歡迎自由分叉 (Fork)、客製化或應用於個人教學與學習用途。
