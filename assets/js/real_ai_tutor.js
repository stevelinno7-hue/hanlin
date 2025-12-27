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

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
        
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
        You are [Hanlin AI Tutor], a professional and encouraging academic assistant.
        
        [TASK]:
        1. Analyze the student's question.
        2. Use the "Socratic Method" to guide them. Do NOT just give the answer directly.
        3. Be friendly, encouraging, and use Traditional Chinese (zh-TW).
        4. If the question is about school subjects (Math, Science, English, etc.), provide a structured explanation.

        [INPUT]:
        - Title: ${title}
        - Question: ${content}

        [OUTPUT FORMAT]:
        Please output the response directly in Markdown format.
        Start with: 📘【翰林 AI 助教】
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
