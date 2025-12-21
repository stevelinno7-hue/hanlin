(function (global) {
    'use strict';

    const log  = (...a) => console.log("📄 [PaperGen]", ...a);
    const warn = (...a) => console.warn("⚠️ [PaperGen]", ...a);
    const err  = (...a) => console.error("❌ [PaperGen]", ...a);

    // ==========================================
    // 等待 Generator 完全就緒
    // ==========================================
    function waitForGenerator(cb, tries = 0) {
        const G = global.RigorousGenerator;

        if (
            G &&
            G.templates &&
            Object.keys(G.templates).length > 0 &&
            typeof G.generateFromTemplate === 'function'
        ) {
            cb(G);
            return;
        }

        if (tries > 100) {
            err("等待 Generator 逾時");
            cb(null);
            return;
        }

        setTimeout(() => waitForGenerator(cb, tries + 1), 50);
    }

    // ==========================================
    // 核心出題函式
    // ==========================================
    function generatePaper(params) {
        const {
            subject,
            grade,
            count = 10,
            templatePrefix
        } = params || {};

        if (!subject || !grade) {
            err("缺少 subject 或 grade", params);
            return [];
        }

        let result = [];

        waitForGenerator((G) => {
            if (!G) return;

            log("generatePaper()", { subject, grade, count });

            // 只挑符合年級的 template
            const templates = Object.keys(G.templates).filter(name => {
                if (templatePrefix && !name.startsWith(templatePrefix)) return false;
                return name.includes(grade);
            });

            if (templates.length === 0) {
                err("找不到 template", { grade, subject });
                return;
            }

            const usedStems = new Set();
            let attempts = 0;
            const MAX_ATTEMPTS = count * 20;

            while (result.length < count && attempts < MAX_ATTEMPTS) {
                attempts++;

                const tpl = templates[Math.floor(Math.random() * templates.length)];
                let q;

                try {
                    q = G.generateFromTemplate(tpl);
                } catch {
                    continue;
                }

                if (!q || typeof q.question !== 'string') continue;

                const stem = q.question.trim();
                if (usedStems.has(stem)) continue;

                usedStems.add(stem);
                result.push({
                    id: result.length + 1,
                    ...q
                });
            }

            if (result.length < count) {
                warn(`題目不足，只能出 ${result.length} 題`);
            }

            log(`完成出題 ${result.length}/${count}`);
        });

        return result;
    }

    // ==========================================
    // 對外 API
    // ==========================================
    global.PaperGenerator = { generatePaper };
    global.paperGenerator = global.PaperGenerator; // 舊系統相容
    global.PAPER_GENERATOR_READY = true;

    window.dispatchEvent(new Event("PaperGeneratorReady"));

    log("🔥 PAPER GEN VERSION 2025-01-SAFE（NO DUP STEM / NO FALLBACK）已載入");

})(window);
