(function(global){
    'use strict';

    function generatePaper(config) {
        const G = global.RigorousGenerator;
        if (!G) { console.error("❌ PaperGen: Engine not found"); return []; }

        const { subject, total, tags } = config;
        let questions = [];
        
        const templateMap = G._templates || {}; 
        const templateTagMap = G._templateTags || {};
        const allIds = Object.keys(templateMap);

        // ==========================================
        // 1. 定義對照表 (白名單)
        // ==========================================
        const subjectWhitelist = {
            'math': ['math', '數學'],
            'physics': ['physics', '物理', '理化'],
            'chemistry': ['chemistry', '化學', '理化'],
            'biology': ['biology', '生物', '自然'],
            'earth': ['earth', '地科', '地球科學'],
            'chinese': ['chinese', '國文', '語文'],
            'english': ['english', '英文', '英語'],
            'history': ['history', '歷史'],
            'geography': ['geography', '地理'],
            'civics': ['civics', '公民']
        };

        const allGrades = ["國七", "國八", "國九", "高一", "高二", "高三"];

        // ==========================================
        // 2. 解析需求
        // ==========================================
        const targetKeywords = subjectWhitelist[subject.toLowerCase()] || [subject.toLowerCase()];
        const targetGrade = tags.find(t => allGrades.includes(t));

        console.log(`🔒 [PaperGen] 鎖定條件 -> 科目:[${targetKeywords}], 年級:${targetGrade || "無限制"}`);

        // ==========================================
        // 3. 嚴格篩選 (Strict Filter)
        // ==========================================
        const candidates = allIds.filter(id => {
            const tTags = templateTagMap[id] || [];
            
            // 條件一：檢查科目
            const isCorrectSubject = tTags.some(tag => 
                targetKeywords.some(k => tag.toLowerCase().includes(k))
            );
            if (!isCorrectSubject) return false;

            // 條件二：檢查年級 (鎖定)
            if (targetGrade) {
                if (!tTags.includes(targetGrade)) return false;
            }

            return true;
        });

        // ==========================================
        // 4. 生成題目 (含 Fallback)
        // ==========================================
        if (candidates.length === 0) {
            console.warn(`[PaperGen] 找不到嚴格符合的題目，嘗試同科備援...`);
            // Fallback: 只找科目，不鎖年級
            const fallbackIds = allIds.filter(id => {
                const tTags = templateTagMap[id] || [];
                return tTags.some(tag => targetKeywords.some(k => tag.toLowerCase().includes(k)));
            });

            if (fallbackIds.length > 0) {
                for (let i = 0; i < total; i++) {
                    const tid = fallbackIds[Math.floor(Math.random() * fallbackIds.length)];
                    try {
                        // ★★★ 修復點：確保 Fallback 也有傳 tags ★★★
                        const q = G.generateQuestion(tid, { tags: tags }); 
                        if (q) questions.push(q);
                    } catch(e) {}
                }
                return questions;
            }
            return [];
        }

        // 正常生成
        for (let i = 0; i < total; i++) {
            const tid = candidates[Math.floor(Math.random() * candidates.length)];
            
            try { 
                // ★★★ 修復點：確保這裡傳入了物件 ★★★
                const q = G.generateQuestion(tid, { tags: tags });
                if (q) questions.push(q);
            } catch (e) { 
                console.error(`題目生成失敗 (${tid}):`, e); 
            }
        }

        return questions;
    }

    global.generatePaper = generatePaper;
    console.log("✅ Paper Generator v3.0 (Robust Fix) 已就緒");

})(window);
