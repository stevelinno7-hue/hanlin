(function(global){
    const G = global.RigorousGenerator;
    if (!G) return;
    const { randInt, shuffle, generateNumericOptions } = G.utils;

    const scenarios = [
        { t: "運動學", q: (v,t)=>`車子以 ${v} m/s 速度行駛 ${t} 秒，位移？`, a: (v,t)=>v*t, u:"m" },
        { t: "牛頓定律", q: (m,a)=>`質量 ${m} kg 物體，加速度 ${a} m/s²，受力？`, a: (m,a)=>m*a, u:"N" },
        { t: "壓力", q: (f,a)=>`施力 ${f} N 在 ${a} m² 面積上，壓力？`, a: (f,a)=>f/a, u:"Pa" },
        { t: "密度", q: (m,v)=>`質量 ${m} g，體積 ${v} cm³，密度？`, a: (m,v)=>m/v, u:"g/cm³" },
        { t: "歐姆定律", q: (i,r)=>`電流 ${i} A，電阻 ${r} Ω，電壓？`, a: (i,r)=>i*r, u:"V" },
        { t: "波動", q: (f,l)=>`頻率 ${f} Hz，波長 ${l} m，波速？`, a: (f,l)=>f*l, u:"m/s" },
        { t: "功", q: (f,d)=>`施力 ${f} N 移動 ${d} m，作功？`, a: (f,d)=>f*d, u:"J" },
        { t: "熱學", q: (m,t)=>`質量 ${m} g 水升高 ${t}°C，吸熱？(H=msΔT)`, a: (m,t)=>m*t, u:"cal" }
    ];

    scenarios.forEach((s, i) => {
        G.registerTemplate(`phy_scenario_${i}`, (ctx, rnd) => {
            const v1 = randInt(2, 20);
            const v2 = randInt(2, 10);
            let ans = s.a(v1, v2);
            // 處理浮點數
            if (!Number.isInteger(ans)) ans = parseFloat(ans.toFixed(2));
            
            const opts = shuffle(generateNumericOptions(ans, Number.isInteger(ans)?'int':'float').map(n => `${n} ${s.u}`));
            return {
                type: 'skill', question: `【${s.t}】${s.q(v1, v2)}`,
                options: opts, answer: opts.indexOf(`${ans} ${s.u}`), concept: s.t,
                explanation: [`依據公式計算：${ans} ${s.u}`]
            };
        }, ["物理", "自然", s.t]);
    });
})(this);