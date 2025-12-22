(function(global){
    'use strict';

    // 負責從題庫中挑選符合條件的題目
    function generatePaper(config) {
        const G = global.RigorousGenerator;
        if (!G) { 
            console.error("❌ PaperGen Error: Engine not found"); 
            return []; 
        }

        const { subject, total, tags } = config;
        let questions = [];
        
        // 1. 搜尋符合標籤的模板 ID
        // 邏輯：模板的標籤必須包含「科目」(例如 math) 且包含「年級」(例如 國七)
        const candidates = Object.keys(G._templates).filter(id => {
            const tTags = G._templateTags[id] || [];
            
            // A. 檢查科目 (寬鬆比對)
            const hasSubject = tTags.some(t => t.toLowerCase().includes(subject.toLowerCase()));
            
            // B. 檢查年級/標籤 (必須包含請求標籤中的至少一個年級)
            const hasGrade = tags.some(reqTag => tTags.includes(reqTag));
            
            return hasSubject && hasGrade;
        });

        if (candidates.length === 0) {
            console.warn(`[PaperGen] 找不到 [${subject}] 且符合 [${tags}] 的題目。`);
            return [];
        }

        // 2. 隨機選題生成
        for (let i = 0; i < total; i++) {
            const tid = candidates[Math.floor(Math.random() * candidates.length)];
            const q = G.generateQuestion(tid);
            if (q) questions.push(q);
        }

        return questions;
    }

    // 掛載到全域
    global.generatePaper = generatePaper;
    console.log("✅ Paper Generator v2.0 已就緒");

})(window);
