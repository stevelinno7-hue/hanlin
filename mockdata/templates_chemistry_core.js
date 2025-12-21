(function(global){
    'use strict';
    function init() {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate) { setTimeout(init, 100); return; }
        const { pick, shuffle } = G.utils;

        const chemDB = [
            { s: "H", n: "氫", d: "最輕的氣體" },
            { s: "O", n: "氧", d: "助燃氣體" },
            { s: "CO2", n: "二氧化碳", d: "造成溫室效應" },
            { s: "Na", n: "鈉", d: "鹼金族，遇水劇烈反應" }
        ];

        G.registerTemplate('chem_symbol', (ctx, rnd) => {
            const el = pick(chemDB);
            const opts = shuffle([el.n, "氮", "氦", "氯"]);
            return {
                question: `【化學】符號「${el.s}」代表什麼？`,
                options: opts, answer: opts.indexOf(el.n), concept: "元素",
                explanation: [`${el.s} 是 ${el.n}`]
            };
        }, ["chemistry", "化學", "自然", "國八"]);
        console.log("✅ 化學題庫已載入完成。");
    }
    init();
})(window);
