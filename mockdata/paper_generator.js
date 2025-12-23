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
            'physics': ['physics', '物理', '理化', '自然'],
            'chemistry': ['chemistry', '化學', '理化', '自然'],
            'biology': ['biology', '生物', '自然'],
            'earth': ['earth', '地科', '地球科學', '自然'],
            'chinese': ['chinese', '國文', '語文'],
            'english': ['english', '英文', '英語'],
            'history': ['history', '歷史', '社會'],
            'geography': ['geography', '地理', '社會'],
            'civics': ['civics', '公民', '社會']
        };

        const allGrades = ["國七", "國八", "國九", "高一", "高二", "高三", "七年級", "八年級", "九年級"];

        // ==========================================
        // 2. 解析需求
        // ==========================================
        const targetKeywords = subjectWhitelist[subject.toLowerCase()] || [subject.toLowerCase()];
        const targetGrade = tags.find(t => allGrades.includes(t));

        console.log(`🔒 [PaperGen] 鎖定條件 -> 科目關鍵字:[${targetKeywords}], 年級:${targetGrade || "無限制"}`);

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
        // 4. 生成題目
        // ==========================================
        if (candidates.length === 0) {
            console.warn(`[PaperGen] 找不到符合條件的題目。`);
            return [];
        }

        for (let i = 0; i < total; i++) {
            const tid = candidates[Math.floor(Math.random() * candidates.length)];
            
            try { 
                // ★★★ 關鍵修復：必須傳入 context 物件 (包含 tags) ★★★
                // 之前的錯誤是因為只傳了 tid，導致模板裡的 ctx 是 undefined
                const q = G.generateQuestion(tid, { tags: tags });
                if (q) questions.push(q);
            } catch (e) { 
                console.error(`題目生成失敗 (${tid}):`, e); 
            }
        }

        return questions;
    }

    global.generatePaper = generatePaper;
    console.log("✅ Paper Generator v2.9 (Context Fix) 已就緒");

})(window);
