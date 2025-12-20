這是一份專業且結構完整的 README.md 文件，專為您的「翰林雲端學院 - 智慧評量系統」專案設計。

這份文件涵蓋了專案簡介、核心功能、技術架構、檔案結構以及如何安裝與使用。您可以直接將其複製並存為專案根目錄下的 README.md。

📚 翰林雲端學院 - 智慧評量模擬系統 (Hanlin Smart LMS)
這是一個純前端架構的 智慧學習管理系統 (LMS) 模擬專案。透過 JavaScript 實現了 「無限題庫裂變引擎」，能夠根據單一題目模板自動生成數千種不同數值、情境與認知層次（記憶、理解、應用、分析）的題目。系統同時整合了 Google Gemini API，提供即時的 AI 解題助教功能。

✨ 核心特色 (Key Features)
1. 🚀 無限題庫裂變引擎 (Infinite Question Fission Engine)
動態生成：題目不再是死板的資料庫，而是由程式碼動態生成的。數學題的數字隨機變化，確保每次測驗都不相同。

認知層次裂變：透過 AutoTemplateFissionFactory，單一核心觀念自動裂變為「基礎記憶」、「觀念理解」、「生活應用」、「進階分析」四種題型。

智慧組卷：Paper Generator 支援依照「難度配比」（例如：20% 記憶 + 30% 應用）自動組卷。

2. 🏫 完整學制與課綱結構
全學制覆蓋：包含 國中 (七、八、九年級) 與 高中 (高一、高二、高三)。

六冊分流：精準對應台灣學制（上/下學期），如「國八上 (Book 3)」。

年級鎖定機制：嚴格的篩選邏輯，確保國一學生不會寫到高三微積分，生物課不會出現物理題。

3. 🤖 AI 智慧解題論壇
Gemini 1.5 整合：內建真實 LLM 串接，學生發問後，AI 助教能即時以蘇格拉底式教學法引導解題。

Markdown 渲染：支援數學公式與程式碼的漂亮排版。

4. 📊 學習診斷與補救
雷達圖分析：測驗後自動生成五力分析雷達圖（運算、邏輯、圖表等）。

錯題自動歸檔：做錯的題目會自動進入「錯題補救庫」，並附上完整解析。

5. 🎨 現代化 UI/UX
Tailwind CSS：採用響應式設計 (RWD)，支援手機與電腦版。

MathJax：完美渲染複雜的數學公式（分數、根號、積分符號）。

互動體驗：擬真的答題卡、倒數計時器、交卷動畫。

🛠️ 技術棧 (Tech Stack)
Frontend: HTML5, Vanilla JavaScript (ES6+)

Styling: Tailwind CSS (CDN)

Icons: FontAwesome 6

Math Rendering: MathJax 3

Charts: Chart.js

AI Model: Google Gemini API (Free Tier)

Persistence: Browser LocalStorage (無後端資料庫，資料存於瀏覽器)

📂 專案結構 (File Structure)
Plaintext

/
├── index.html                  # 登入頁面
├── register.html               # 註冊頁面 (僅限學生)
├── dashboard.html              # 學生儀表板 (課程總覽)
├── exam.html                   # 測驗介面 (核心答題區)
├── analysis.html               # 成績分析與雷達圖
├── remedial.html               # 錯題補救庫
├── forum.html                  # 解題論壇 (含 AI 助教)
│
├── assets/
│   └── js/
│       ├── auth.js             # 會員登入註冊邏輯
│       ├── generator_engine.js # 基礎出題引擎
│       └── real_ai_tutor.js    # Google Gemini API 串接模組
│
└── mockdata/
    ├── users.js                # 預設使用者資料
    ├── curriculum_integrated.js # 完整課綱結構 (國/高全科 Book 1-6)
    │
    │   # --- 核心邏輯 ---
    ├── AutoTemplateFissionFactory.js # 題目裂變工廠 (1變4)
    ├── auto_fission_bootstrap.js     # 註冊攔截器
    ├── paper_generator.js            # 智慧組卷與年級鎖定邏輯
    │
    │   # --- 各科題庫模板 ---
    ├── templates_math_algebra_geometry.js # 數學全學制
    ├── templates_biology_core.js          # 自然科 (生/地/理/化)
    ├── templates_history_core.js          # 社會科 (史/地/公)
    ├── templates_english_core.js          # 英文文法與對話
    ├── templates_english_vocab_7000.js    # 英文單字庫
    └── templates_chinese_core.js          # 國文 (成語/古文/修辭)
🚀 如何執行 (How to Run)
由於本專案是純前端架構，無需安裝 Node.js 或 Python 後端。

下載專案：將所有檔案下載到您的電腦。

開啟網頁：直接雙擊 index.html 在瀏覽器中開啟。

登入帳號：

學生帳號：student / 123

老師帳號：teacher / steve

家長帳號：parent / 123

體驗 AI 功能：

進入「解題論壇」。

系統已內建 API Key (測試用)，直接發文即可體驗 AI 回覆。

📝 開發者筆記 (Developer Notes)
如何新增題目？
您不需要手寫 JSON，而是撰寫 生成函數。 例如，在 templates_math_algebra_geometry.js 中：

JavaScript

// 註冊一個一元一次方程式模板
G.registerTemplate('math_linear_eq', (ctx, rnd) => {
    const a = rnd.randInt(2, 9); // 隨機生成係數
    const b = rnd.randInt(1, 20);
    // 回傳題目物件
    return {
        question: `若 ${a}x + ${b} = 0，求 x？`,
        options: shuffle([...]), // 自動生成選項
        answer: 0
        // ...
    };
}, ["數學", "國七"]); // 加上標籤
系統會自動將其裂變為記憶題、應用題等不同版本。

如何調整 AI 助教？
修改 assets/js/real_ai_tutor.js 中的 systemInstruction 變數，可以改變 AI 的人設（例如：變得更嚴格，或是只用英文回答）。

⚠️ 免責聲明 (Disclaimer)
本專案名為「翰林雲端學院」僅為 UI 介面模擬與程式練習用途，所有商標、Logo 與課程名稱僅作為展示範例，與真實的「翰林出版事業股份有限公司」無直接關聯。本系統內之題目內容均為演算法隨機生成或公開知識庫彙整。

Created by Steve
