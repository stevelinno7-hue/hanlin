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
        
        // ★ 升級：找出所有符合的年級標籤，而不只是第一個
        const targetGrades = tags.filter(t => allGrades.includes(t));

        console.log(`🔒 [PaperGen] 鎖定條件 -> 科目:[${targetKeywords}], 年級:[${targetGrades.length > 0 ? targetGrades : "無限制"}]`);

        // ==========================================
        // 3. 嚴格篩選 (Strict Filter)
        // ==========================================
        const candidates = allIds.filter(id => {
            const tTags = templateTagMap[id] || [];
            
            // 條件一：檢查科目 (必須符合)
            const isCorrectSubject = tTags.some(tag => 
                targetKeywords.some(k => tag.toLowerCase().includes(k))
            );
            if (!isCorrectSubject) return false;

            // 條件二：檢查年級 (強制鎖定)
            // 如果有指定年級，題目必須包含 *其中一個* 指定的年級
            if (targetGrades.length > 0) {
                const hasMatchingGrade = tTags.some(t => targetGrades.includes(t));
                if (!hasMatchingGrade) return false;
            }

            return true;
        });

        // ==========================================
        // 4. 生成題目
        // ==========================================
        if (candidates.length === 0) {
            console.warn(`[PaperGen] 找不到符合 [${subject}] + [${targetGrades}] 的題目。停止生成。`);
            return [];
        }

        // 隨機選題
        for (let i = 0; i < total; i++) {
            const tid = candidates[Math.floor(Math.random() * candidates.length)];
            
            try { 
                // 傳入 tags 讓模板知道上下文
                const q = G.generateQuestion(tid, { tags: tags });
                if (q) questions.push(q);
            } catch (e) { 
                console.error(`題目生成失敗 (${tid}):`, e); 
            }
        }

        return questions;
    }

    global.generatePaper = generatePaper;
    console.log("✅ Paper Generator v3.3 (Multi-Grade Support) 已就緒");

})(window);
