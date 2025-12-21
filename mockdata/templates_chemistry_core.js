(function (global) {
  'use strict';

  function init() {
    const G = global.RigorousGenerator || global?.global?.RigorousGenerator;
    if (!G || !G.registerTemplate) return setTimeout(init, 100);

    const { pick, shuffle } = G.utils;

    /* === 你的 elementDB === */
    const elementDB = [{ g:"國八", s:"H",  n:"氫" }, { g:"國八", s:"O",  n:"氧" }, { g:"國八", s:"N",  n:"氮" }, { g:"國八", s:"C",  n:"碳" }, { g:"國八", s:"Na", n:"鈉" }, { g:"國八", s:"Cl", n:"氯" }, { g:"國八", s:"Ca", n:"鈣" }, { g:"國八", s:"Fe", n:"鐵" }, { g:"國八", s:"Cu", n:"銅" }, { g:"國八", s:"Al", n:"鋁" }];

    /* === 你的 chemConceptDB === */
    const chemConceptDB = [
// ==========================================
        // 4. 化學 (Chemistry)
        // ==========================================
        // [國八] 物質與反應
        { s:"化學", t:["國八","物質"], q: "空氣中含量最多的氣體", a: "氮氣" },
        { s:"化學", t:["國八","物質"], q: "惰性氣體 (鈍氣)", a: "氦、氖、氬" },
        { s:"化學", t:["國八","物質"], q: "純物質", a: "有固定的組成與性質" },
        { s:"化學", t:["國八","物質"], q: "混合物", a: "無固定的熔點與沸點" },
        { s:"化學", t:["國八","原子"], q: "道耳頓原子說", a: "原子不可分割 (後被修正)" },
        { s:"化學", t:["國八","原子"], q: "原子核內帶正電粒子", a: "質子" },
        { s:"化學", t:["國八","原子"], q: "原子核內不帶電粒子", a: "中子" },
        { s:"化學", t:["國八","原子"], q: "繞核旋轉帶負電粒子", a: "電子" },
        { s:"化學", t:["國八","原子"], q: "質量數", a: "質子數 + 中子數" },
        { s:"化學", t:["國八","原子"], q: "原子序", a: "質子數" },
        { s:"化學", t:["國八","週期表"], q: "週期表縱行稱為", a: "族 (化學性質相似)" },
        { s:"化學", t:["國八","週期表"], q: "週期表橫列稱為", a: "週期" },
        { s:"化學", t:["國八","反應"], q: "質量守恆定律", a: "反應前後總質量不變" },
        { s:"化學", t:["國八","反應"], q: "莫耳 (Mole)", a: "6 x 10²³ 個粒子" },
        { s:"化學", t:["國八","反應"], q: "吸熱反應", a: "周圍溫度下降" },
        { s:"化學", t:["國八","反應"], q: "放熱反應", a: "周圍溫度上升" },

        // [國九] 電解質與酸鹼
        { s:"化學", t:["國九","電解質"], q: "電解質定義", a: "溶於水能導電的化合物" },
        { s:"化學", t:["國九","酸鹼"], q: "酸的定義 (阿瑞尼士)", a: "溶於水產生氫離子(H+)" },
        { s:"化學", t:["國九","酸鹼"], q: "鹼的定義 (阿瑞尼士)", a: "溶於水產生氫氧根離子(OH-)" },
        { s:"化學", t:["國九","酸鹼"], q: "pH值小於7", a: "酸性" },
        { s:"化學", t:["國九","酸鹼"], q: "pH值大於7", a: "鹼性" },
        { s:"化學", t:["國九","酸鹼"], q: "酸鹼中和產物", a: "鹽 + 水 (+熱)" },
        { s:"化學", t:["國九","氧化"], q: "氧化反應", a: "物質與氧結合 (失去電子)" },
        { s:"化學", t:["國九","氧化"], q: "還原反應", a: "失去氧 (得到電子)" },
        { s:"化學", t:["國九","氧化"], q: "抗氧化劑", a: "自身發生氧化，保護其他物質" },
        { s:"化學", t:["國九","有機"], q: "有機化合物", a: "含碳的化合物 (除CO, CO2, 碳酸鹽等)" },
        { s:"化學", t:["國九","有機"], q: "烴類", a: "只含碳、氫的有機物" },
        { s:"化學", t:["國九","有機"], q: "天然氣主要成分", a: "甲烷 (CH4)" },
        { s:"化學", t:["國九","有機"], q: "液化石油氣(桶裝瓦斯)", a: "丙烷、丁烷" },
        { s:"化學", t:["國九","有機"], q: "發酵法製酒", a: "醣類分解為酒精與二氧化碳" },
        { s:"化學", t:["國九","有機"], q: "皂化反應", a: "油脂 + 鹼 -> 肥皂 + 甘油" },

        // [高中] 進階化學
        { s:"化學", t:["高一","鍵結"], q: "離子鍵", a: "金屬與非金屬間的靜電吸引力" },
        { s:"化學", t:["高一","鍵結"], q: "共價鍵", a: "非金屬間共用電子對" },
        { s:"化學", t:["高一","鍵結"], q: "金屬鍵", a: "電子海與金屬陽離子" },
        { s:"化學", t:["高一","計量"], q: "限量試劑", a: "反應中先被耗盡的反應物" },
        { s:"化學", t:["高二","氣體"], q: "理想氣體方程式", a: "PV = nRT" },
        { s:"化學", t:["高二","氣體"], q: "波以耳定律", a: "定溫下，PV = 定值" },
        { s:"化學", t:["高二","氣體"], q: "查理定律", a: "定壓下，V/T = 定值" },
        { s:"化學", t:["高二","反應"], q: "反應速率影響因素", a: "本性、濃度、溫度、催化劑、表面積" },
        { s:"化學", t:["高二","平衡"], q: "勒沙特列原理", a: "平衡移動以抵銷外加因素" },
        { s:"化學", t:["高二","酸鹼"], q: "緩衝溶液", a: "能抵抗pH值劇烈變化的溶液" }
    ];





    function gradeMatch(itemGrade, targetGrade) {
      if (targetGrade === "國八") return itemGrade === "國八";
      if (targetGrade === "國九") return itemGrade === "國九";
      if (targetGrade === "高中") return ["國八","國九","高一","高二","高三"].includes(itemGrade);
      return false;
    }

    function makeConceptQ(grade) {
      const pool = chemConceptDB.filter(x => gradeMatch(x.t[0], grade));
      if (pool.length < 4) return null;

      const item = pick(pool);
      const wrong = shuffle(pool.filter(x => x !== item)).slice(0,3).map(x => x.a);
      const opts = shuffle([item.a, ...wrong]);

      return {
        question: `【化學｜${grade}】${item.q}`,
        options: opts,
        answer: opts.indexOf(item.a),
        explanation: [`正確答案：${item.a}`]
      };
    }

    function makeElementQ() {
      const el = pick(elementDB);
      const wrong = shuffle(elementDB.filter(x => x !== el)).slice(0,3).map(x => x.n);
      const opts = shuffle([el.n, ...wrong]);

      return {
        question: `【化學】符號「${el.s}」代表什麼？`,
        options: opts,
        answer: opts.indexOf(el.n),
        explanation: [`${el.s} 是 ${el.n}`]
      };
    }

    G.registerTemplate("chem_g8", () => makeConceptQ("國八"), ["化學","國八"]);
    G.registerTemplate("chem_g9", () => makeConceptQ("國九"), ["化學","國九"]);
    G.registerTemplate("chem_h",  () => makeConceptQ("高中"), ["化學","高中"]);
    G.registerTemplate("chem_el", makeElementQ, ["化學","元素"]);

    console.log("✅ 化學題庫載入完成");
  }

  init();
})(window);

