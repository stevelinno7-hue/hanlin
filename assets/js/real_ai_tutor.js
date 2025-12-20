const RealAITutor = {
    name: "翰林 AI 助教（教學展示完整版）",

    /* ===============================
     * 基本設定
     * =============================== */
    gradeLevel: "senior", // junior | senior
    examMode: "gsat",     // gsat | ast
    studentLevel: "basic", // basic | advanced
    teacherMode: true,

    /* ===============================
     * AI 狀態 / 表情
     * =============================== */
    aiStatus: {
        thinking: "🤔 AI 助教思考中...",
        guiding: "🧭 AI 助教引導理解中...",
        hinting: "💡 AI 助教提示重點中..."
    },

    answeredQuestions: new Set(),

    /* ===============================
     * Dashboard（假班級資料）
     * =============================== */
    dashboard: {
        questionTypes: {
            choice: 38,
            calculation: 44,
            essay: 18
        },
        commonMistakes: {
            "概念混淆": "41%",
            "公式誤用": "33%",
            "題意誤解": "26%"
        }
    },

    /* ===============================
     * 題型判斷
     * =============================== */
    detectQuestionType(title, content) {
        const text = title + content;
        if (/(A|B|C|D)|下列何者|選項/.test(text)) return "choice";
        if (/計算|求|算出|=/.test(text)) return "calculation";
        if (/說明|解釋|比較|為何|為什麼/.test(text)) return "essay";
        return "general";
    },

    /* ===============================
     * 關鍵字 → 單元
     * =============================== */
    unitKeywords: {
        "微分": ["seniorCalculus"],
        "極限": ["seniorCalculus"],
        "牛頓": ["physicsNewton"],
        "化學平衡": ["chemEquilibrium"],
        "光合作用": ["bioPhotosynthesis"],
        "氣候": ["geoClimate"],
        "工業革命": ["historyIndustry"],
        "民主": ["civicsDemocracy"],
        "閱讀": ["chineseReading"],
        "時態": ["englishTense"]
    },

    /* ===============================
     * 高中 9 科單元庫（展示核心）
     * =============================== */
    unitDB: {

        general: {
            name: "通用學習能力",
            ability: "題意拆解、概念理解",
            mistakes: ["急著解題，未理解題意"],
            wrongConcepts: ["記住步驟就等於理解（錯）"]
        },

        /* ---------- 國文 ---------- */
        chineseReading: {
            name: "閱讀理解",
            ability: "文本分析、推論能力",
            mistakes: ["斷章取義"],
            wrongConcepts: ["答案一定在原文（錯）"]
        },

        /* ---------- 英文 ---------- */
        englishTense: {
            name: "時態判斷",
            ability: "語言邏輯、句意判斷",
            mistakes: ["只看時間副詞"],
            wrongConcepts: ["看到 yesterday 一定過去式（錯）"]
        },

        /* ---------- 數學 ---------- */
        seniorCalculus: {
            name: "微分概念",
            ability: "變化率理解",
            examFocus: {
                gsat: "觀念與圖像理解",
                ast: "計算與公式操作"
            },
            mistakes: ["只背公式"],
            wrongConcepts: ["微分只是技巧（錯）"]
        },

        /* ---------- 物理 ---------- */
        physicsNewton: {
            name: "牛頓運動定律",
            ability: "因果推理、物理量辨識",
            mistakes: ["混淆力與運動"],
            wrongConcepts: ["沒有力就不能動（錯）"]
        },

        /* ---------- 化學 ---------- */
        chemEquilibrium: {
            name: "化學平衡",
            ability: "動態平衡理解",
            mistakes: ["認為平衡＝停止"],
            wrongConcepts: ["反應停止才叫平衡（錯）"]
        },

        /* ---------- 生物 ---------- */
        bioPhotosynthesis: {
            name: "光合作用",
            ability: "系統整合、生理流程",
            mistakes: ["只背反應式"],
            wrongConcepts: ["植物只靠葉子呼吸（錯）"]
        },

        /* ---------- 地理 ---------- */
        geoClimate: {
            name: "氣候系統",
            ability: "資料判讀、因果分析",
            mistakes: ["天氣氣候混淆"],
            wrongConcepts: ["氣候就是每天的天氣（錯）"]
        },

        /* ---------- 歷史 ---------- */
        historyIndustry: {
            name: "工業革命",
            ability: "時序分析、多因理解",
            mistakes: ["單一原因解釋"],
            wrongConcepts: ["工業革命只和科技有關（錯）"]
        },

        /* ---------- 公民 ---------- */
        civicsDemocracy: {
            name: "民主制度",
            ability: "制度理解、多觀點思考",
            mistakes: ["民主等於投票"],
            wrongConcepts: ["多數一定正確（錯）"]
        }
    },

    /* ===============================
     * 偵測單元
     * =============================== */
    detectUnit(title, content) {
        const text = title + content;
        for (const k in this.unitKeywords) {
            if (text.includes(k)) {
                return this.unitKeywords[k][0];
            }
        }
        return "general";
    },

    /* ===============================
     * 打字效果
     * =============================== */
    async typing(text, onUpdate) {
        let out = "";
        for (const c of text) {
            out += c;
            onUpdate(out);
            await new Promise(r => setTimeout(r, 15));
        }
    },

    /* ===============================
     * 主入口
     * =============================== */
    async askGemini(title, content, onUpdate) {

        const key = title + content;
        if (this.answeredQuestions.has(key)) {
            onUpdate("🙂 這題我們已經討論過了，先想想再繼續喔！");
            return;
        }
        this.answeredQuestions.add(key);

        onUpdate(this.aiStatus.thinking);
        await new Promise(r => setTimeout(r, 600));

        const qType = this.detectQuestionType(title, content);
        const unitKey = this.detectUnit(title, content);
        const unit = this.unitDB[unitKey];

        onUpdate(this.aiStatus.guiding);
        await new Promise(r => setTimeout(r, 600));

        const levelHint = this.studentLevel === "basic"
            ? "先掌握核心概念即可"
            : "可以進一步思考延伸與比較";

        let teacherBlock = "";
        if (this.teacherMode) {
            teacherBlock = `
🧑‍🏫【教師 Dashboard】
📊 題型分布：
• 選擇題：${this.dashboard.questionTypes.choice}%
• 計算題：${this.dashboard.questionTypes.calculation}%
• 申論題：${this.dashboard.questionTypes.essay}%

📉 常見錯誤：
${Object.entries(this.dashboard.commonMistakes)
    .map(([k, v]) => `• ${k}：${v}`)
    .join("\n")}
`;
        }

        const finalText = `
${this.aiStatus.hinting}

📘【${this.name}】

📌 題型：${qType}
📚 單元：${unit.name}

⚠️ 常見錯誤：
${unit.mistakes.map(m => "• " + m).join("\n")}

❌ 錯誤觀念：
${unit.wrongConcepts.map(c => "• " + c).join("\n")}

🧠 學習建議（${this.studentLevel === "basic" ? "基礎" : "進階"}）：
• ${levelHint}
• 嘗試用自己的話解釋概念

🎓 考試取向：${this.examMode === "gsat" ? "學測（理解導向）" : "指考（計算導向）"}

${teacherBlock}

💪 看懂錯誤，比做對一題更重要！
`.trim();

        await this.typing(finalText, onUpdate);
    }
};
