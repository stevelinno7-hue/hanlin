(function (global) {
    'use strict';

    const log  = (...a) => console.log("📄 [PaperGen]", ...a);
    const err  = (...a) => console.error("❌ [PaperGen]", ...a);

    // ==========================================
    // 核心出題函式：改為同步檢索 (假設 Generator 已就緒)
    // ==========================================
    function generatePaper(params) {
        const {
            subject,
            count = 10,
            tags = [] // 接收來自 exam.html 的課程標籤
        } = params || {};

        const G = global.RigorousGenerator;
        if (!G || !G.templates) {
            err("Generator 尚未就緒，請檢查 Script 載入順序");
            return [];
        }

        log("開始生成考卷", { subject, tags, count });

        // 過濾邏輯：優先找符合 tags 的模板，若無則找符合 subject 的
        let availableTemplates = Object.keys(G.templates).filter(name => {
            // 如果有傳入標籤 (如 '國八', '多項式')，則進行關鍵字比對
            if (tags.length > 0) {
                return tags.some(tag => name.includes(tag));
            }
            return name.toLowerCase().includes(subject.toLowerCase());
        });

        // 備用機制：若標籤過濾不到，拿該科目的所有題目
        if (availableTemplates.length === 0) {
            availableTemplates = Object.keys(G.templates);
        }

        let result = [];
        const usedStems = new Set();
        let attempts = 0;
        const MAX_ATTEMPTS = count * 30;

        while (result.length < count && attempts < MAX_ATTEMPTS) {
            attempts++;
            const tplName = availableTemplates[Math.floor(Math.random() * availableTemplates.length)];
            
            try {
                const q = G.generateFromTemplate(tplName);
                if (!q || usedStems.has(q.question)) continue;

                usedStems.add(q.question);
                result.push({
                    id: result.length + 1,
                    ...q
                });
            } catch (e) { continue; }
        }

        log(`成功生成 ${result.length} 題`);
        return result;
    }

    global.PaperGenerator = { generatePaper };
    global.paperGenerator = global.PaperGenerator;
    global.PAPER_GENERATOR_READY = true;
    window.dispatchEvent(new Event("PaperGeneratorReady"));
})(window);
