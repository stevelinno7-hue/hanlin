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

        // 定義所有可能的年級標籤 (用於鎖定)
        const allGrades = ["國七", "國八", "國九", "高一", "高二", "高三", "七年級", "八年級", "九年級"];

        // ==========================================
        // 2. 解析需求
        // ==========================================
        // A. 找出科目關鍵字
        const targetKeywords = subjectWhitelist[subject.toLowerCase()] || [subject.toLowerCase()];
        
        // B. ★關鍵★ 找出使用者請求中的「年級標籤」
        // 例如 tags = ["math", "國七", "核心"] -> targetGrade = "國七"
        const targetGrade = tags.find(t => allGrades.includes(t));

        console.log(`🔒 [PaperGen] 鎖定條件 -> 科目:${targetKeywords}, 年級:${targetGrade || "無限制"}`);

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

            // 條件二：檢查年級 (如果有指定年級，則必須完全符合)
            if (targetGrade) {
                // 如果題目沒有該年級標籤，直接剔除！(這就是防止跨年級的關鍵)
                if (!tTags.includes(targetGrade)) return false;
            }

            return true;
        });

        // ==========================================
        // 4. 生成題目
        // ==========================================
        if (candidates.length === 0) {
            console.warn(`[PaperGen] 找不到符合 [${subject}] + [${targetGrade}] 的題目。`);
            return [];
        }

        // 隨機選題 (允許重複選取不同模板，直到湊滿數量)
        // 如果候選題目少於要求數量，我們會重複利用候選名單，但生成參數會隨機，所以題目數字會不同
        for (let i = 0; i < total; i++) {
            // 如果題庫夠多，就隨機選；如果題庫少，就循環選
            const tid = candidates[Math.floor(Math.random() * candidates.length)];
            
            try { 
                const q = G.generateQuestion(tid);
                if (q) questions.push(q);
            } catch (e) { 
                console.error(e); 
            }
        }

        return questions;
    }

    global.generatePaper = generatePaper;
    console.log("✅ Paper Generator v2.6 (Grade Locked) 已就緒");

})(window);
