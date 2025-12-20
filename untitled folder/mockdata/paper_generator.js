(function(window){
    'use strict';
    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    if (!G) return;

    window.generatePaper = function(config) {
        const { subject, total = 10, tags = [], distribution } = config;
        
        console.log(`[PaperGen] 收到組卷請求: 科目=${subject}, 標籤=[${tags.join(',')}]`);

        const allTemplates = Object.values(G.templates);
        
        // 1. 科目對應
        const prefixMap = { 
            'math': 'math', 'physics': 'phy', 'chemistry': 'chm', 'biology': 'bio', 
            'english': 'eng', 'chinese': 'chi', 'history': 'his', 'geography': 'geo', 
            'civics': 'civ', 'earth': 'ear', 'earth_science': 'ear' 
        };
        const subjectKey = prefixMap[subject] || subject;

        // 2. 科目初步篩選
        let pool = allTemplates.filter(t => {
            const idMatch = t.id.toLowerCase().includes(subjectKey);
            const tagMatch = t.tags && t.tags.some(tag => 
                tag.toLowerCase() === subjectKey || 
                tag.toLowerCase() === subject ||
                // 中文容錯
                (subject==='math' && tag==='數學') ||
                (subject==='chinese' && tag==='國文') ||
                (subject==='english' && tag==='英文') ||
                (subject==='physics' && tag==='物理') ||
                (subject==='chemistry' && tag==='化學') ||
                (subject==='biology' && tag==='生物') ||
                (subject==='earth' && tag==='地科') ||
                (subject==='history' && tag==='歷史') ||
                (subject==='geography' && tag==='地理') ||
                (subject==='civics' && tag==='公民')
            );
            return idMatch || tagMatch;
        });

        // 3. 【強制年級鎖定】 (Strict Grade Filter)
        const gradeKeywords = ['國七','國八','國九','高一','高二','高三'];
        
        // 從 tags 中尋找年級標籤 (允許 "國七上" 匹配 "國七")
        const targetGrade = tags.find(t => gradeKeywords.some(k => t.includes(k)));

        if (targetGrade) {
            // 提取核心年級 (例如: "國七上" -> "國七")
            const coreGrade = gradeKeywords.find(k => targetGrade.includes(k));
            console.log(`🔒 年級鎖定: ${coreGrade} (來源: ${targetGrade})`);
            
            // 過濾：題目標籤必須包含這個核心年級
            pool = pool.filter(t => t.tags.includes(coreGrade));
        } else {
            console.warn("⚠️ 未偵測到年級標籤，可能導致跨年級出題！");
        }

        if (pool.length === 0) {
            console.warn(`[PaperGen] 找不到 [${subject} - ${targetGrade}] 的題目。請確認 curriculum_integrated.js 與 templates 的標籤是否一致 (例如：都有「國七」)`);
            return fallback(total, `題庫擴充中... (${subject} ${targetGrade})`);
        }

        // 4. 單元篩選
        const unitTags = tags.filter(t => 
            !gradeKeywords.some(g => t.includes(g)) && 
            t !== subject && t !== subjectKey && 
            !['數學','國文','英文','自然','社會','學測核心','會考核心','模考'].includes(t)
        );

        let finalPool = pool;
        if (unitTags.length > 0) {
            const strictPool = pool.filter(t => unitTags.some(ut => t.tags.some(tt => tt.includes(ut))));
            if (strictPool.length > 0) finalPool = strictPool;
        }

        // 5. 選題
        let paperQuestions = [];
        let safetyLoop = 0;
        while (paperQuestions.length < total && safetyLoop < 200) {
            addRandomQuestion(finalPool, paperQuestions);
            safetyLoop++;
        }

        return G.utils.shuffle(paperQuestions).map((q, i) => ({ ...q, id: i + 1 }));
    };

    function addRandomQuestion(pool, list) {
        if (!pool || pool.length === 0) return;
        const tmpl = pool[Math.floor(Math.random() * pool.length)];
        try {
            const q = tmpl.func({}, Math.random);
            q.templateId = tmpl.id;
            list.push(q);
        } catch (e) {}
    }

    function fallback(count, msg) {
        return Array(count).fill(0).map((_, i) => ({
            id: i + 1, question: msg, options: ["A", "B", "C", "D"], answer: 0, concept: "系統訊息"
        }));
    }

})(window);