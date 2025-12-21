(function(global){
    'use strict';

    // 定義啟動函式
    function init() {
        // 1. 檢查引擎是否就緒 (等待機制)
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        
        // 如果引擎還沒好，等待 100ms 後重試
        if (!G || !G.registerTemplate) {
            setTimeout(init, 100);
            return;
        }

        // 引擎已就緒，取出工具
        const { randInt, shuffle, generateNumericOptions } = G.utils;

        // ==========================================
        // 物理科計算題資料庫 (Physics Calculation DB)
        // ==========================================
        const phyDB = [
            // ----------------------------------------------------
            // [國九] 運動學與力學 (Kinematics & Dynamics)
            // ----------------------------------------------------
            { t: "運動學", q: (v,t)=>`一輛車以速度 ${v} m/s 等速行駛 ${t} 秒，請問位移為多少？`, a: (v,t)=>v*t, u: "m", tag:["國九","運動"] },
            { t: "牛頓第二定律", q: (m,a)=>`質量 ${m} kg 的物體，受到合力作用產生 ${a} m/s² 的加速度，請問合力大小？`, a: (m,a)=>m*a, u: "N", tag:["國九","力學"] },
            { t: "作功", q: (f,d)=>`沿水平方向施力 ${f} 牛頓，推動箱子前進 ${d} 公尺，請問作功多少？`, a: (f,d)=>f*d, u: "J", tag:["國九","能量"] },
            { t: "功率", q: (w,t)=>`某機器在 ${t} 秒內作功 ${w*10} 焦耳，請問其功率為多少？`, a: (w,t)=>parseFloat((w*10/t).toFixed(1)), u: "W", tag:["國九","能量"] },
            { t: "重力位能", q: (m,h)=>`質量 ${m} kg 的物體置於 ${h} 公尺高處，其重力位能約為多少？(g=10)`, a: (m,h)=>m*10*h, u: "J", tag:["國九","能量"] },
            
            // ----------------------------------------------------
            // [國九] 電學 (Electricity)
            // ----------------------------------------------------
            { t: "歐姆定律", q: (i,r)=>`電路中電流為 ${i} 安培，電阻為 ${r} 歐姆，請問電阻兩端電壓？`, a: (i,r)=>i*r, u: "V", tag:["國九","電學"] },
            { t: "電功率", q: (v,i)=>`電器接在 ${v*10} 伏特電源，流過電流 ${i} 安培，請問電功率？`, a: (v,i)=>(v*10)*i, u: "W", tag:["國九","電學"] },
            { t: "電能消耗", q: (p,t)=>`功率 ${p*100} 瓦特的電器使用 ${t} 小時，消耗多少度電？(1度=1千瓦小時)`, a: (p,t)=>parseFloat((p*100*t/1000).toFixed(2)), u: "度", tag:["國九","電學"] },

            // ----------------------------------------------------
            // [國八] 波動、熱學與基本測量 (Waves, Heat, Basics)
            // ----------------------------------------------------
            { t: "波動公式", q: (f,l)=>`一連續週期波頻率為 ${f} Hz，波長為 ${l} 公尺，請問波速？`, a: (f,l)=>f*l, u: "m/s", tag:["國八","波動"] },
            { t: "回聲測距", q: (v,t)=>`聲音速度 ${300+v*10} m/s，對山壁大喊 ${t*2} 秒後聽到回聲，請問距離？`, a: (v,t)=>(300+v*10)*t, u: "m", tag:["國八","波動"] },
            { t: "密度計算", q: (d,v)=>`某物體體積 ${v} cm³，質量 ${d*v} g，請問密度為何？`, a: (d,v)=>d, u: "g/cm³", tag:["國八","測量"] },
            { t: "虎克定律", q: (k,x)=>`彈簧彈力常數 ${k} gw/cm，掛重物伸長 ${x} cm，請問受力多少？`, a: (k,x)=>k*x, u: "gw", tag:["國八","力學"] },
            { t: "壓力", q: (f,a)=>`重量 ${f*100} gw 的物體平放在面積 ${a*10} cm² 的桌面上，壓力為何？`, a: (f,a)=>parseFloat((f*100/(a*10)).toFixed(1)), u: "gw/cm²", tag:["國八","力學"] },
            { t: "熱量計算", q: (m,t)=>`質量 ${m*100} 克的水，溫度上升 ${t} ℃，吸收多少熱量？(水比熱=1)`, a: (m,t)=>m*100*t, u: "cal", tag:["國八","熱學"] }
        ];

        // 註冊邏輯：自動遍歷資料庫生成模板
        phyDB.forEach((p, i) => {
            // 使用具體 ID 避免衝突
            const templateId = `phy_calc_${i}`;
            
            G.registerTemplate(templateId, (ctx, rnd) => {
                // 隨機生成變數 v1, v2 (範圍 2~10，避免數字太醜或太小)
                const v1 = randInt(2, 10);
                const v2 = randInt(2, 10);
                
                // 計算正確答案
                const ans = p.a(v1, v2);
                
                // 自動生成數值誘答選項 (利用 helper 工具)
                const opts = shuffle(generateNumericOptions(ans, Number.isInteger(ans) ? 'int' : 'float'));
                
                return {
                    question: `【物理】${p.q(v1, v2)}`,
                    options: opts,
                    answer: opts.indexOf(ans),
                    concept: p.t,
                    explanation: [
                        `計算觀念：${p.t}`,
                        `正確答案：${ans} ${p.u}`
                    ]
                };
            }, ["physics", "物理", "自然", "理化", ...p.tag]);
        });

        console.log("✅ 物理題庫 (完整版) 已載入完成。");
    }

    // 啟動！
    init();

})(window);
