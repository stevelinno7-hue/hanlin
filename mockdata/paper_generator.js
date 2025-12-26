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
        // 1. 定義「絕對」對照表 (移除所有廣義詞)
        // ==========================================
        const subjectWhitelist = {
            // 數學
            'math': ['math', '數學'],
            
            // 自然科 (絕對分開)
            'physics': ['physics', '物理'], 
            'chemistry': ['chemistry', '化學'],
            'biology': ['biology', '生物'],
            'earth': ['earth', '地科', '地球科學'],
            
            // 語文
            'chinese': ['chinese', '國文', '語文'],
            'english': ['english', '英文', '英語'],
            
            // 社會科 (絕對分開，拿掉「社會」這個共用詞)
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

        console.log(`🔒 [PaperGen] 鎖定 -> 科目:[${targetKeywords}] | 年級:[${targetGrade || "全"}]`);

        // ==========================================
        // 3. 嚴格篩選 (Strict Filter)
        // ==========================================
        const candidates = allIds.filter(id => {
            const tTags = templateTagMap[id] || [];
            
            // A. 科目檢查 (必須包含指定的科目關鍵字)
            // 這裡使用 some，只要標籤中有一個符合科目關鍵字即可
            const isSubjectMatch = tTags.some(tag => targetKeywords.includes(tag));
            if (!isSubjectMatch) return false;

            // B. 排除檢查 (避免歷史題混入公民)
            // 如果我選歷史，但這個題目有「公民」標籤，直接踢掉
            if (subject === 'history' && tTags.includes('公民')) return false;
            if (subject === 'civics' && tTags.includes('歷史')) return false;
            if (subject === 'geography' && tTags.includes('歷史')) return false;

            // C. 年級檢查 (強制鎖定)
            if (targetGrade) {
                if (!tTags.includes(targetGrade)) return false;
            }

            return true;
        });

        // ==========================================
        // 4. 生成題目
        // ==========================================
        if (candidates.length === 0) {
            console.warn(`[PaperGen] 找不到 [${subject}] + [${targetGrade}] 的題目。`);
            return [];
        }

        for (let i = 0; i < total; i++) {
            const tid = candidates[Math.floor(Math.random() * candidates.length)];
            try { 
                const q = G.generateQuestion(tid, { tags: tags });
                if (q) questions.push(q);
            } catch (e) { 
                console.error(`Error generating ${tid}:`, e); 
            }
        }

        return questions;
    }

    global.generatePaper = generatePaper;
    console.log("✅ Paper Generator v4.0 (Absolute Isolation) 已就緒");

})(window);
