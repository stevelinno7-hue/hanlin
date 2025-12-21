// mockdata/paper_generator.js
(function (global) {
    'use strict';

    console.log("📄 [PaperGen] Rigorous 相容版初始化");

    function generatePaper(config) {
        const G = global.RigorousGenerator;
        if (!G || !G.templates) {
            console.error("❌ RigorousGenerator 尚未就緒");
            return [];
        }

        const total = config.total || 10;
        const tags = config.tags || [];

        const templates = Object.values(G.templates).filter(tpl => {
            return Array.isArray(tpl.tags) && tags.some(t => tpl.tags.includes(t));
        });

        if (!templates.length) {
            console.warn("⚠️ 無可用模板", tags);
            return [];
        }

        const paper = [];
        const usedStems = new Set();
        let attempts = 0;

        while (paper.length < total && attempts < total * 10) {
            attempts++;

            const tpl = templates[Math.floor(Math.random() * templates.length)];
            let q;

            try {
                q = tpl.generator();
            } catch {
                continue;
            }

            if (!q || typeof q.question !== 'string') continue;

            const stem = q.question.trim();
            if (usedStems.has(stem)) continue;

            usedStems.add(stem);
            paper.push({ id: paper.length + 1, ...q });
        }

        return paper;
    }

    // ⭐ 給 exam.html 使用
    global.generatePaper = generatePaper;

    console.log("🔥 PAPER GEN READY");

})(window);
