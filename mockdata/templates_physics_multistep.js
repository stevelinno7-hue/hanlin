(function(global){
    'use strict';
    function init() {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate) { setTimeout(init, 100); return; }
        const { randInt, shuffle, generateNumericOptions } = G.utils;

        const phyDB = [
            { t: "運動學", q: (v,t)=>`速度 ${v} m/s 行駛 ${t} 秒，位移？`, a: (v,t)=>v*t, u: "m", tag:["國九","運動"] },
            { t: "牛頓定律", q: (m,a)=>`質量 ${m} kg，加速度 ${a} m/s²，受力？`, a: (m,a)=>m*a, u: "N", tag:["國九","力學"] },
            { t: "波動", q: (f,l)=>`頻率 ${f} Hz，波長 ${l} m，波速？`, a: (f,l)=>f*l, u: "m/s", tag:["國八","波動"] }
        ];

        phyDB.forEach((p, i) => {
            G.registerTemplate(`phy_q${i}`, (ctx, rnd) => {
                const v1 = randInt(2, 10), v2 = randInt(2, 10);
                const ans = p.a(v1, v2);
                const opts = shuffle(generateNumericOptions(ans, 'float'));
                return {
                    question: `【物理】${p.q(v1, v2)}`,
                    options: opts, answer: opts.indexOf(ans), concept: p.t,
                    explanation: [`答案：${ans} ${p.u}`]
                };
            }, ["physics", "物理", "自然", ...p.tag]);
        });
        console.log("✅ 物理題庫已載入");
    }
    init();
})(window);
