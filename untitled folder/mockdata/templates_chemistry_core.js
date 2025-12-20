(function(global){
    const G = global.RigorousGenerator;
    if (!G) return;
    const { pick, shuffle, randInt, generateNumericOptions } = G.utils;

    // A. 元素知識庫 (可擴充更多)
    const elements = [
        { s: "H", n: "氫", d: "最輕的氣體" },
        { s: "He", n: "氦", d: "填充氣球的惰性氣體" },
        { s: "C", n: "碳", d: "有機化合物的骨幹" },
        { s: "N", n: "氮", d: "空氣中含量最多的氣體" },
        { s: "O", n: "氧", d: "助燃、供給呼吸" },
        { s: "Na", n: "鈉", d: "鹼金族，遇水劇烈反應" },
        { s: "Al", n: "鋁", d: "地殼中含量最豐富的金屬" },
        { s: "Au", n: "金", d: "延展性最好的金屬" }
    ];

    // B. 化學計量工廠
    const chemCalc = [
        { topic: "莫耳濃度", q: (mol, vol) => `${mol} 莫耳溶質溶於 ${vol} 公升水，濃度(M)？`, calc: (m,v) => parseFloat((m/v).toFixed(2)) },
        { topic: "質量計算", q: (mol, mw) => `${mol} 莫耳的物質 (分子量 ${mw})，質量多少克？`, calc: (m,mw) => m*mw },
        { topic: "氣體體積", q: (mol) => `STP下，${mol} 莫耳氣體的體積約多少公升？(1mol=22.4L)`, calc: (m) => parseFloat((m*22.4).toFixed(1)) }
    ];

    // 1. 元素符號題
    G.registerTemplate('chem_symbol', () => {
        const el = pick(elements);
        const opts = shuffle([el.n, ...shuffle(elements.filter(e=>e!==el)).slice(0,3).map(e=>e.n)]);
        return { type: 'concept', question: `化學符號「${el.s}」代表什麼元素？`, options: opts, answer: opts.indexOf(el.n), concept: "元素符號", explanation: [`${el.s} 是 ${el.n}`] };
    });

    // 2. 元素性質題
    G.registerTemplate('chem_prop', () => {
        const el = pick(elements);
        const opts = shuffle([el.d, ...shuffle(elements.filter(e=>e!==el)).slice(0,3).map(e=>e.d)]);
        return { type: 'concept', question: `關於元素「${el.n}」的特性，下列何者正確？`, options: opts, answer: opts.indexOf(el.d), concept: "元素性質", explanation: [`${el.n}：${el.d}`] };
    });

    // 3. 計算題工廠
    chemCalc.forEach((p, idx) => {
        G.registerTemplate(`chem_calc_${idx}`, () => {
            const v1 = randInt(1, 5);
            const v2 = randInt(2, 10); // 分子量或體積
            const ans = p.calc(v1, v2);
            const opts = shuffle(generateNumericOptions(ans, Number.isInteger(ans)?'int':'float'));
            return { type: 'skill', question: p.q(v1, v2), options: opts, answer: opts.indexOf(ans), concept: p.topic, explanation: [`計算結果為 ${ans}`] };
        });
    });
})(this);