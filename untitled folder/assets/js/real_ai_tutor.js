// assets/js/real_ai_tutor.js

const RealAITutor = {
    name: "翰林 Gemini 助教",
    
    // 【重要】請將您的 Google Gemini API Key 填入下方引號中
    // ⚠️ 警告：將 API Key 寫在前端程式碼中極不安全，僅適合演示或個人測試使用
    apiKey: "在此貼上您的_AIza開頭_的API_KEY", 

    // 系統提示詞 (System Prompt)
    systemInstruction: `
        你現在是「翰林雲端學院」的專業 AI 助教。
        
        【你的角色設定】：
        1. 語氣親切、專業、充滿鼓勵性 (像一位有耐心的資深教師)。
        2. 使用「繁體中文 (台灣)」回答。
        3. 專長科目：國文、英文、數學、物理、化學、生物、地科、歷史、地理、公民。
        
        【回答規則】：
        1. 不要直接給出簡答，要嘗試引導學生思考 (蘇格拉底教學法)。
        2. 如果是數學或理化題，請一步步列出解題思路。
        3. 篇幅控制在 300 字以內，重點清晰，適當使用條列式。
        4. 結尾可以加上一句鼓勵的話。
    `,

    // 呼叫 Gemini API (不再需要 userApiKey 參數)
    askGemini: async function(userTitle, userContent) {
        // 檢查是否已設定 Key
        if (!this.apiKey || this.apiKey.includes("AIzaSyCJY9pC7oXq-k7vJnRsRVgj9DZU_BDUFRE")) {
            return "【系統提示】管理者尚未設定 API Key，請通知管理員至程式碼中填入金鑰。";
        }

        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;

        const prompt = `
            學生標題：${userTitle}
            學生問題內容：${userContent}
            
            請根據上述內容，以老師的身份給予指導與詳解。
        `;

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: this.systemInstruction + "\n\n" + prompt }]
                    }]
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                console.error("API Error:", errData);
                return "【連線錯誤】AI 腦袋打結了，請檢查您的 API Key 額度或網路連線。";
            }

            const data = await response.json();
            const aiText = data.candidates[0].content.parts[0].text;
            
            return aiText;

        } catch (error) {
            console.error("Fetch Error:", error);
            return "【系統錯誤】無法連接到 AI 伺服器，請稍後再試。";
        }
    }
};