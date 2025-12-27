/* =====================================================
 * 翰林 AI 助教 (Gemini API Core)
 * ===================================================== */

// ★★★ PLEASE REPLACE THIS WITH YOUR ACTUAL GOOGLE GEMINI API KEY ★★★
const API_KEY = "AIzaSyCfEILOin4gSmH_stCv-zuE9dORTHJ4RjA"; 

const RealAITutor = {

    /* ===============================
     * Basic Settings
     * =============================== */
    name: "翰林 AI 助教 (GenAI)",
    gradeLevel: "senior",
    teacherMode: true,

    /* ===============================
     * State Tracking
     * =============================== */
    history: [],
    mastery: {}, 
    
    /* ===============================
     * Core LLM Communication
     * =============================== */
    async callGeminiAPI(prompt) {
        if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY") {
            console.error("API Key Missing");
            return "⚠️ System Alert: Please configure your Google Gemini API Key in 'assets/js/real_ai_tutor.js' to enable AI responses.";
        }

        const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 800
                    }
                })
            });
            
            const data = await response.json();
            
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                console.error("Gemini Response Error:", data);
                return "🤖 AI is temporarily unavailable. Please check your API key or quota.";
            }

            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error("Network Error:", error);
            return "🤖 Network error. Please try again later.";
        }
    },

    /* ===============================
     * Prompt Engineering
     * =============================== */
    constructPrompt(title, content) {
        return `
        你現在是【翰林出版的 AI 專業助教】，請用繁體中文回答。
        
        【你的任務】：
        1. 分析學生的問題。
        2. 使用「蘇格拉底教學法」進行引導，盡量不要直接給出最終答案，而是引導思考。
        3. 語氣要親切、正面、鼓勵學生。
        4. 如果問題包含學科知識（如數學、理化），請提供結構化的解析步驟。

        【學生提問】：
        - 標題：${title}
        - 內容：${content}

        【回答格式】：
        請直接以 Markdown 格式輸出回答。
        開頭請使用：📘 **【翰林 AI 助教】**
        `;
    },

    /* ===============================
     * Main Entry Point: askGemini
     * =============================== */
    // This is the function your forum.html is trying to call!
    async askGemini(title, content) {
        // 1. Build Prompt
        const prompt = this.constructPrompt(title, content);

        console.log("🧠 AI is thinking...", title);

        // 2. Call AI
        const aiResponse = await this.callGeminiAPI(prompt);

        // 3. Save History
        this.history.push({ 
            q: title + " - " + content, 
            a: aiResponse, 
            time: new Date() 
        });

        // 4. Return Result
        return aiResponse;
    }
};
