/* =====================================================
 * 翰林 AI 助教（Gemini 核心驅動版）
 * ===================================================== */

// 請在此填入您的 Google Gemini API Key
const API_KEY = "AIzaSyCfEILOin4gSmH_stCv-zuE9dORTHJ4RjA"; 

const RealAITutor = {

    /* ===============================
     * 基本設定
     * =============================== */
    name: "翰林 AI 助教 (GenAI)",
    gradeLevel: "senior",
    teacherMode: true,

    /* ===============================
     * 狀態追蹤 (保留本地記錄功能)
     * =============================== */
    history: [],
    mastery: {}, // 動態記錄各單元對錯 { "微積分": {correct:1, wrong:0} }
    
    /* ===============================
     * LLM 核心溝通層
     * =============================== */
    async callGeminiAPI(prompt) {
        if (API_KEY === "YOUR_GEMINI_API_KEY") {
            return "⚠️ 請先設定 API Key 才能啟動真 AI 模式。";
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
        
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.7, // 控制創意度，0.7 適合教學引導
                        maxOutputTokens: 800
                    }
                })
            });
            
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error("API Error:", error);
            return "🤖 系統連線忙碌中，請稍後再試。";
        }
    },

    /* ===============================
     * Prompt 工程 (AI 的大腦設定)
     * =============================== */
    constructPrompt(question, studentAns, correctAnswer, previousStuckCount) {
        return `
        你現在是【翰林出版的 AI 專業助教】。
        
        【任務目標】：
        1. 分析學生的題目與答案。
        2. 判斷這題屬於哪個學科單元（如：微積分、牛頓定律、遺傳學等）。
        3. 不要直接給答案！必須使用「蘇格拉底教學法」進行引導。
        4. 根據學生的卡關次數 (Level ${previousStuckCount}) 給予不同深度的提示：
           - Level 0: 引導思考方向，確認題意。
           - Level 1: 提示關鍵概念或公式。
           - Level 2: 給予具體步驟提示，並推薦補救方向。

        【輸入資訊】：
        - 題目：${question}
        - 學生答案：${studentAns || "學生尚未作答"}
        - 正確答案：${correctAnswer || "未提供 (請自行判斷)"}
        - 老師模式開啟：${this.teacherMode}

        【輸出格式 (請嚴格遵守)】：
        📘【翰林 AI 助教】
        📚 偵測單元：[單元名稱]
        📌 題型判斷：[選擇/計算/觀念]
        
        🤔 引導與回饋：
        [這裡針對學生的回答給予引導，若答錯請指出思考盲點，若答對請給予肯定並延伸思考]

        ${previousStuckCount >= 2 ? "🆘 補救建議：\n[給出具體的複習建議]" : ""}

        ${this.teacherMode ? `
        🧑‍🏫 教師診斷數據：
        • 核心能力指標：[分析這題考什麼能力]
        • 錯誤類型分析：[若是錯誤，屬於計算錯/觀念錯/審題錯？]
        ` : ""}
        `;
    },

    /* ===============================
     * 主入口 (改為 Async)
     * =============================== */
    async ask(question, options = {}) {
        const { answer, correctAnswer } = options;
        
        // 1. 簡易的本地單元偵測 (用於狀態 Key，也可改由 AI 回傳)
        // 這裡暫時用簡易雜湊當 Key，實際應用可解析 AI 回傳的單元
        const tempUnitKey = "dynamic_unit"; 

        // 2. 更新本地狀態
        if (!this.mastery[tempUnitKey]) {
            this.mastery[tempUnitKey] = { stuck: 0, correct: 0, wrong: 0 };
        }
        
        // 判斷對錯 (若有標準答案)
        let isCorrect = false;
        if (correctAnswer && answer) {
            isCorrect = (answer === correctAnswer);
            if (isCorrect) {
                this.mastery[tempUnitKey].stuck = 0;
                this.mastery[tempUnitKey].correct++;
            } else {
                this.mastery[tempUnitKey].stuck++;
                this.mastery[tempUnitKey].wrong++;
            }
        }

        // 3. 構建 Prompt
        const prompt = this.constructPrompt(
            question, 
            answer, 
            correctAnswer, 
            this.mastery[tempUnitKey].stuck
        );

        // 4. 呼叫真 AI
        console.log("🧠 AI 思考中...");
        const aiResponse = await this.callGeminiAPI(prompt);

        // 5. 儲存歷史
        this.history.push({ q: question, a: aiResponse, time: new Date() });

        return aiResponse;
    }
};

/* ===============================
 * 使用範例
 * =============================== */

// 模擬執行
async function demo() {
    // 設置角色
    RealAITutor.teacherMode = true;

    // 情境：學生做錯了一題微積分
    console.log("--- 學生第一次提問 (答錯) ---");
    const response1 = await RealAITutor.ask(
        "函數 f(x) = x^2 在 x=2 的導數是多少？", 
        { answer: "2", correctAnswer: "4" }
    );
    console.log(response1);

    // 情境：學生再次提問 (還是不懂)
    console.log("\n--- 學生第二次提問 (追問) ---");
    const response2 = await RealAITutor.ask(
        "我還是不懂，為什麼不是 2？次方拿下來不是 2 嗎？", 
        { answer: "2", correctAnswer: "4" } // 模擬連續錯誤
    );
    console.log(response2);
}

// 執行 Demo (請先填入 API Key)
// demo();
