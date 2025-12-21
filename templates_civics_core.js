(function(global){
    'use strict';

    function init() {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate) {
            setTimeout(init, 100);
            return;
        }

        const { pick, shuffle } = G.utils;

        const civicsDB = [
            { q: "性別刻板印象是指？", a: "對特定性別的僵化看法", o: ["性別平等", "性騷擾"], t: ["國七","社會"] },
            { q: "家庭教導子女社會規範與價值觀的過程稱為？", a: "社會化", o: ["教育", "撫養"], t: ["國七","社會"] },
            { q: "國家對內擁有最高統治權，對外獨立自主，是指？", a: "主權", o: ["政府", "領土"], t: ["國八","政治"] },
            { q: "行為時法律未規定者，不得處罰，這是什麼原則？", a: "罪刑法定主義", o: ["無罪推定", "法律保留"], t: ["國八","法律"] },
            { q: "做出選擇時，所放棄的選項中價值最高者，稱為？", a: "機會成本", o: ["沉沒成本", "生產成本"], t: ["國九","經濟"] },
            { q: "價格上漲，需求量減少，這是什麼法則？", a: "需求法則", o: ["供給法則", "邊際效益"], t: ["國九","經濟"] },
            { q: "國家權力行使手段必須必要且適當，損害最小，這是？", a: "比例原則", o: ["信賴保護", "法律優位"], t: ["高一","法律"] }
        ];

        G.registerTemplate('civics_basic', (ctx, rnd) => {
            const item = pick(civicsDB);
            // 補足選項
            let options = [...item.o];
            while(options.length < 3) options.push("其他");
            const opts = shuffle([item.a, ...options]);
            
            return {
                question: `【公民 - ${item.t[1]}】${item.q}`,
                options: opts,
                answer: opts.indexOf(item.a),
                concept: item.t[1],
                explanation: [`正確答案：${item.a}`]
            };
        }, ["civics", "公民", "社會", "國七", "國八", "國九", "高一"]);

        console.log("✅ 公民題庫已載入完成。");
    }

    init();
})(window);
