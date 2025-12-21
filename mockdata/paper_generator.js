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

        // 2️⃣ 出題（🚫 題幹不重複，🛑 抽不到就停）
const paper = [];
const usedQuestions = new Set();

let safety = 0;
let consecutiveFail = 0;
const MAX_ATTEMPTS = count * 20;
const MAX_CONSECUTIVE_FAIL = 10; // ⭐ 關鍵：抽不到新題就停

while (paper.length < count && safety < MAX_ATTEMPTS) {
    safety++;

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

    if (!q || !q.question) {
        consecutiveFail++;
        if (consecutiveFail >= MAX_CONSECUTIVE_FAIL) break;
        continue;
    }

    // 🚫 題幹重複
    if (usedQuestions.has(q.question)) {
        consecutiveFail++;
        if (consecutiveFail >= MAX_CONSECUTIVE_FAIL) break;
        continue;
    }

    // ✅ 成功取得新題
    consecutiveFail = 0;
    usedQuestions.add(q.question);

    paper.push({
        id: paper.length + 1,
        ...q
    });
}


    // 3️⃣ 對外掛載（只提供一個 API）
    global.PaperGenerator = {
        generatePaper
    };

    log("🔥 PAPER GEN VERSION 2025-01-SAFE（NO FALLBACK）已載入");

})(window);
