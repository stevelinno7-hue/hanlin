// mockdata/paper_generator.js
(function (global) {
    'use strict';

    const log = (...args) => console.log("📄 [PaperGen]", ...args);
    const warn = (...args) => console.warn("⚠️ [PaperGen]", ...args);
    const err = (...args) => console.error("❌ [PaperGen]", ...args);

    function waitForGenerator(cb) {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.templates || !G.generateFromTemplate) {
            setTimeout(() => waitForGenerator(cb), 100);
            return;
        }
        cb(G);
    }

    function generatePaper(params) {
        const {
            subject,
            grade,
            count = 10,
            templatePrefix // optional
        } = params;

        const G = global.RigorousGenerator;

        if (!subject || !grade) {
            err("缺少 subject 或 grade", params);
            return [];
        }

        log("generatePaper()", params);

        // 1️⃣ 找出可用 templates
        const templates = Object.keys(G.templates).filter(name => {
            if (templatePrefix && !name.startsWith(templatePrefix)) return false;
            return name.includes(grade);
        });

        if (templates.length === 0) {
            err("找不到任何 template", { grade, subject });
            return [];
        }

        log("可用 templates", templates);

        // 2️⃣ 開始出題（允許重複 template）
        const paper = [];

        for (let i = 0; i < count; i++) {
            let q = null;
            let tries = 0;

            while (!q && tries < 10) {
                const tplName = templates[Math.floor(Math.random() * templates.length)];
                try {
                    q = G.generateFromTemplate(tplName);
                } catch (e) {
                    warn("template 失敗", tplName, e);
                }
                tries++;
            }

            if (!q) {
                err("單題出題失敗，但不 fallback", i);
                continue;
            }

            paper.push({
                id: i + 1,
                ...q
            });
        }

        log(`完成出題 ${paper.length}/${count}`);
        return paper;
    }

    // 3️⃣ 對外掛載（只提供一個 API）
    global.PaperGenerator = {
        generatePaper
    };

    log("🔥 PAPER GEN VERSION 2025-01-SAFE（NO FALLBACK）已載入");

})(window);
