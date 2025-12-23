(function(global){
    'use strict';

    // 等待引擎就緒
    function waitForEngine(callback) {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate || !G.utils) {
            setTimeout(() => waitForEngine(callback), 100);
            return;
        }
        callback(G);
    }

    // ==========================================
    // 數學核心題庫 (含計算邏輯)
    // ==========================================
    const mathDB = [
      // [國七]
      { t: "整數運算", q: (a,b)=>`若甲數 = ${a}，乙數 = ${-b}，試求 甲 - 2 × 乙 之值為何？`, a: (a,b)=>a - 2*(-b), tag:["國七","整數"] },
      { t: "數線與絕對值", q: (a,b)=>`數線上兩點 A(${a})、B(${-b})，試求 A、B 兩點間的距離。`, a: (a,b)=>Math.abs(a - (-b)), tag:["國七","數線"] },
      { t: "指數律", q: (a,b)=>`計算 (${a}²)³ × ${a}⁴ ÷ ${a}⁵ 之值為何？`, a: (a,b)=>Math.pow(a, 5), tag:["國七","指數"] },
      { t: "科學記號", q: (a,b)=>`將 ${a}0000 寫成科學記號 a × 10ⁿ，求 n`, a: (a,b)=>4, tag:["國七","數與式"] },
      { t: "因數倍數", q: (a,b)=>`求 ${a*6} 與 ${a*8} 的最大公因數`, a: (a,b)=>a*2, tag:["國七","因數"] },
      { t: "一元一次", q: (a,b)=>`若 x 的方程式 ${a}x + ${b} = ${3*a}x - ${b}，則 x = ?`, a: (a,b)=>b/a, tag:["國七","方程式"] },
      { t: "二元一次", q: (a,b)=>`已知 x=${a}, y=${b} 是方程式 mx - y = 0 的一組解，試求 m 之值。`, a: (a,b)=>b/a, tag:["國七","聯立"] },
      { t: "直角坐標", q: (a,b)=>`點 P(${a}, ${b}) 到 x 軸的距離`, a: (a,b)=>Math.abs(b), tag:["國七","坐標"] },
      { t: "比與比例", q: (a,b)=>`若 x : ${a} = ${b} : 2，求 x`, a: (a,b)=>a*b/2, tag:["國七","比例"] },

      // [國八]
      { t: "乘法公式", q: (a,b)=>`展開 (${a}x + 1)² 的常數項`, a: (a,b)=>1, tag:["國八","多項式"] },
      { t: "多項式運算", q: (a,b)=>`多項式 A = ${a}x² - 5x，B = x² + ${b}x，求 A + B 的 x 項係數。`, a: (a,b)=> -5+b, tag:["國八","多項式"] },
      { t: "根號運算", q: (a,b)=>`計算 √${a*a} + √${b*b} - √${(a+b)*(a+b)} 之值。`, a: (a,b)=>0, tag:["國八","方根"] },
      { t: "畢氏定理", q: (a,b)=>`直角三角形中，兩股長分別為 ${3*a}、${4*a}，試求斜邊長度。`, a: (a,b)=>5*a, tag:["國八","幾何"] },
      { t: "因式分解", q: (a,b)=>`x² + ${a+b}x + ${a*b} 因式分解為 (x+m)(x+n)，求 m+n`, a: (a,b)=>a+b, tag:["國八","因式分解"] },
      { t: "一元二次", q: (a,b)=>`方程式 x² - ${a*2}x = 0 的正根`, a: (a,b)=>a*2, tag:["國八","方程式"] },
      { t: "等差數列", q: (a,b)=>`一等差數列首項為 ${a}，公差為 ${b}，試求第 10 項之值。`, a: (a,b)=>a + 9*b, tag:["國八","數列"] },
      { t: "多邊形內角", q: (a,b)=>`正 ${a+2} 邊形的內角和度數`, a: (a,b)=>(a)*180, tag:["國八","幾何"] },

      // [國九]
      { t: "相似形", q: (a,b)=>`兩相似三角形的對應邊長比為 1 : ${a}，則其面積比為何？`, a: (a,b)=>a*a, tag:["國九","幾何"] },
      { t: "圓形性質", q: (a,b)=>`一圓的半徑為 ${a}，若扇形的圓心角為 60度，則該扇形面積為何？(π以3計算)`, a: (a,b)=>a*a*3/6, tag:["國九","圓"] },
      { t: "圓周角", q: (a,b)=>`圓周角 40度，其對應的圓心角幾度?`, a: (a,b)=>80, tag:["國九","圓"] },
      { t: "二次函數", q: (a,b)=>`關於二次函數 y = (x - ${a})² + ${b} 的圖形，下列敘述何者正確？`, a: (a,b)=>`頂點坐標為 (${a}, ${b})`, type:'text', opts:(a,b)=>[ `頂點坐標為 (${a}, ${b})`,`開口向下`,`對稱軸為 x = -${a}`,`通過原點`], tag:["國九","二次函數"] },
      { t: "機率", q: (a,b)=>`投擲一顆公正骰子，出現點數小於 ${a} (含) 的機率為何？(假設 ${a} < 7)`, a: (a,b)=>a/6, type:'fraction', opts:(a)=>[ `${a}/6`, `${7-a}/6`, `1/6`, `1/2`], tag:["國九","機率"] },
      { t: "統計", q: (a,b)=>`數據 1, 2, 3, ${a}, ${b} 的中位數 (已排序) 為何？`, a: (a,b)=>3, tag:["國九","統計"] },
      { t: "三角形重心", q: (a,b)=>`三角形重心到頂點距離是到對邊中點距離的幾倍？`, type:'text', opts:['2倍','1.5倍','3倍','1倍'], a:()=>0, tag:['國九','幾何'] },

      // [高一]
      { t: "餘式定理", q: (a,b)=>`設 f(x) = x³ + ${a}x + ${b}，試求 f(x) 除以 (x-1) 的餘式。`, a: (a,b)=>1+a+b, tag:["高一","多項式"] },
      { t: "直線斜率", q: (a,b)=>`坐標平面上，通過點 (${a}, 0) 與 (0, ${b}) 的直線斜率為何？`, a: (a,b)=> -b/a, tag:["高一","直線"] },
      { t: "指數運算", q: (a,b)=>`化簡 2^${a} × 4^${b} 為 2 的幾次方？`, a: (a,b)=>a+2*b, tag:["高一","指數"] },
      { t: "對數律", q: (a,b)=>`試求 log₂${Math.pow(2, a)} + log₃${Math.pow(3, b)} 之值。`, a: (a,b)=>a+b, tag:["高一","對數"] },
      { t: "數據分析", q: (a,b)=>`若變數 X 與 Y 的相關係數為 1，則兩變數的關係為何？`, a: (a,b)=>`完全正相關`, type:'text', opts:[`完全正相關`,`完全負相關`,`零相關`,`無法判斷`], tag:["高一","數據"] },
      { t: "算幾不等式", q: (a,b)=>`若 a,b > 0 且 a+b=${2*a}，則 ab 最大值為何？`, a: (a,b)=>a*a, tag:["高一","不等式"] },

      // [高二]
      { t: "三角函數", q: (a,b)=>`試求 sin(30°) + cos(60°) + tan(45°) 之值。`, a: (a,b)=>2, tag:["高二","三角"] },
      { t: "平面向量", q: (a,b)=>`設向量 u = (${a}, 1)，v = (1, ${b})，試求內積 u・v 之值。`, a: (a,b)=>a+b, tag:["高二","向量"] },
      { t: "空間坐標", q: (a,b)=>`空間中一點 P(${a}, ${b}, 5) 到 xy 平面的距離為何？`, a: (a,b)=>5, tag:["高二","空間"] },
      { t: "矩陣運算", q: (a,b)=>`若矩陣 A = [[1, 0], [0, 1]]，則 ${a}A 的行列式值為何？`, a: (a,b)=>a*a, tag:["高二","矩陣"] },
      { t: "正弦定理", q: (a,b)=>`在三角形ABC中，a/sinA = ?`, type:'text', opts:['2R','R','R²','4R'], a:()=>0, tag:['高二','三角'] },
      { t: "柯西不等式", q: (a,b)=>`(|a||b|)² ≥ ?`, type:'text', opts:['(a·b)²','|a·b|','a·b','a+b'], a:()=>0, tag:['高二','向量'] },

      // [高三]
      { t: "極限", q: (a,b)=>`試求 lim(n→∞) (${a}n + 1) / n 之極限值。`, a: (a,b)=>a, tag:["高三","極限"] },
      { t: "微分", q: (a,b)=>`設函數 f(x) = x²，試求 f'(${a}) 之值。`, a: (a,b)=>2*a, tag:["高三","微分"] },
      { t: "積分", q: (a,b)=>`試求定積分 ∫(0 to ${a}) 2x dx 之值。`, a: (a,b)=>a*a, tag:["高三","積分"] },
      { t: "不定積分", q: (a,b)=>`求 ∫ ${a} dx = ?`, type:'text', opts:(a)=>[ `${a}x + C`, `${a} + C`, `x + C`, `${a}x`], a:()=>0, tag:["高三","積分"] },
      { t: "期望值", q: (a,b)=>`擲一骰子，出現 n 點可得 ${a}n 元，期望值為何？`, a: (a,b)=>a*3.5, tag:["高三","機率"] },
      { t: "條件機率", q: (a,b)=>`P(A|B) 的定義為何？`, type:'text', opts:['P(A∩B)/P(B)','P(A∩B)/P(A)','P(A)/P(B)','P(A)P(B)'], a:()=>0, tag:['高三','機率'] }
    ];    // ★ 年級篩選函式
    function filterByGrade(db, userTags) {
        const allGrades = ["國七","國八","國九","高一","高二","高三"];
        const targetGrade = userTags.find(tag => allGrades.includes(tag));
        if (targetGrade) {
            const filtered = db.filter(item => item.tag.includes(targetGrade));
            return filtered.length > 0 ? filtered : db; // 防呆
        }
        return db; // 未指定年級回傳全部
    }

    waitForEngine(G => {
        const { randInt, shuffle, generateNumericOptions } = G.utils;

        // 註冊所有題目模板
        mathDB.forEach((p, i) => {
            G.registerTemplate(`math_q${i}`, (ctx, rnd) => {
                // 先過濾題庫
                const validDB = filterByGrade([p], ctx.tags || []);
                if (!validDB.length) return null;
                const pItem = validDB[0];

                // 隨機參數
                const v1 = randInt(2,9), v2 = randInt(2,9);
                let ans = pItem.a(v1,v2);
                let opts;

                if (pItem.type === 'text' || pItem.type === 'fraction') {
                    const op = typeof pItem.opts === 'function' ? pItem.opts(v1,v2) : pItem.opts;
                    opts = shuffle(op);
                    if (pItem.type === 'fraction') {
                        const correctStr = (typeof pItem.opts === 'function' ? pItem.opts(v1) : pItem.opts)[0];
                        ans = correctStr;
                    } else {
                        ans = op[0];
                    }
                } else {
                    const isInt = Number.isInteger(ans);
                    opts = shuffle(generateNumericOptions(ans, isInt ? 'int' : 'float'));
                }

                return {
                    question: `【數學】${pItem.q(v1,v2)}`,
                    options: opts,
                    answer: opts.indexOf(ans),
                    concept: pItem.t,
                    explanation: [`正確答案：${ans}`]
                };
            }, ["math","數學", ...p.tag]);
        });

        console.log("✅ 數學題庫 (含年級篩選) 已載入完成。");
    });

})(window);
