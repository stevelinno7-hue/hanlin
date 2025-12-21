// mockdata/paper_generator.js
(function (global) {
    'use strict';

    console.log("📄 PAPER GEN（Rigorous 相容版）初始化中...");

    /**
     * config = {
     *   subject: "chinese" | "biology" | ...
     *   total: number,
     *   tags: [string]
     * }
     */
    function generatePaper(config) {
        const G = global.RigorousGenerator;
        if (!G || !G.templates) {
            throw new Error("RigorousGenerator 尚未載入");
        }

        const total = config.total || 10;
        const tags = config.tags || [];

        // 1️⃣ 找出可用模板（依 tag）
        const candidates = Object.values(G.templates).filter(tpl => {
            if (!tpl.tags) return false;
            return tags.some(tag => tpl.tags.includes(tag));
        });

        if (!candidates.length) {
            console.warn("⚠️ 找不到符合條件的模板", tags);
            return [];
        }

        const paper = [];
        const usedStems = new Set();
        let tries = 0;
        const MAX_TRIES = total * 10;

        // 2️⃣ 開始出題
        while (paper.length < total && tries < MAX_TRIES) {
            tries++;

            const tpl = candidates[Math.floor(Math.random() * candidates.length)];

            let q;
            try {
                q = tpl.generator();
            } catch (e) {
                console.warn("⚠️ 模板執行失敗", tpl.name, e);
                continue;
            }

            if (!q || typeof q.question !== "string") continue;

            const stem = q.question.trim();
            if (usedStems.has(stem)) continue; // 🚫 題幹不重複

            usedStems.add(stem);
            paper.push({
                id: paper.length + 1,
                ...q
            });
        }

        // 3️⃣ 題目不足就停（不 fallback）
        if (paper.length < total) {
            console.warn(`⚠️ 題目不足，只能出 ${paper.length} 題`);
        }

        console.log(`✅ 完成出題 ${paper.length}/${total}`);
        return paper;
    }

    // 🔑 對外掛載（這行非常重要）
    global.generatePaper = generatePaper;

    console.log("🔥 PAPER GEN VERSION 2025-01-RIGOROUS 已載入");

})(window);
