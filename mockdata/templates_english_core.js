(function(global){
    'use strict';
    function init() {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate) { setTimeout(init, 100); return; }
        const { pick, shuffle } = G.utils;

        const engDB = [
            { q: "He _____ a student.", a: "is", o: ["are", "am"], t: "國七" },
            { q: "They _____ to the park yesterday.", a: "went", o: ["go", "gone"], t: "國七" },
            { q: "I enjoy _____ music.", a: "listening to", o: ["listen to", "listened to"], t: "國八" },
            { q: "The book _____ by him.", a: "was written", o: ["wrote", "writing"], t: "國八" }
        ];

        G.registerTemplate('eng_grammar', (ctx, rnd) => {
            const item = pick(engDB);
            const opts = shuffle([item.a, ...item.o]);
            return {
                question: `【Grammar】${item.q}`,
                options: opts, answer: opts.indexOf(item.a), concept: "文法",
                explanation: [`Answer: ${item.a}`]
            };
        }, ["english", "英文", "文法", "國七", "國八"]);

        console.log("✅ 英文題庫已載入完成。");
    }
    init();
})(window);
