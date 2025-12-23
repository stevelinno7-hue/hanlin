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
    // 物理核心題庫 (含計算邏輯)
    // ==========================================
    const phyDB = [
        // --------------------------------------
        // [國中] 基礎物理 (Grade 8-9)
        // --------------------------------------
        { t: "運動學", q: (v,t)=>`一車以速度 ${v} m/s 等速行駛 ${t} 秒，請問位移為多少？`, a: (v,t)=>v*t, u: "m", tag:["國九","運動"] },
        { t: "牛頓第二定律", q: (m,a)=>`質量 ${m} kg 的物體，受力產生 ${a} m/s² 的加速度，請問合力大小？`, a: (m,a)=>m*a, u: "N", tag:["國九","力學"] },
        { t: "功與能量", q: (f,d)=>`施水平力 ${f} N 推動木塊移動 ${d} m，請問作功多少？`, a: (f,d)=>f*d, u: "J", tag:["國九","能量"] },
        { t: "密度測量", q: (m,v)=>`某金屬塊質量 ${m*10} g，體積 ${v} cm³，其密度為何？`, a: (m,v)=>parseFloat((m*10/v).toFixed(1)), u: "g/cm³", tag:["國八","測量"] },
        
        // 波動與聲音：這裡適合搭配波的圖形
        { t: "波動學", q: (f,l)=>`一週期波的頻率為 ${f} Hz，波長為 ${l} m，試求其波速。`, a: (f,l)=>f*l, u: "m/s", tag:["國八","波動"] }, 
        
        // 電路學：這裡適合搭配電路圖
        { t: "歐姆定律", q: (i,r)=>`一電阻器電阻為 ${r} Ω，通過電流為 ${i} A，兩端電壓為何？`, a: (i,r)=>i*r, u: "V", tag:["國九","電學"] },
        { t: "熱學", q: (m,t)=>`質量 ${m} kg 的水，溫度上升 ${t}°C，吸收熱量多少？(水比熱 1 kcal/kg°C)`, a: (m,t)=>m*t, u: "kcal", tag:["國八","熱學"] },

        // --------------------------------------
        // [高中] 進階物理 (Grade 10-12)
        // --------------------------------------
        // 動能：K = 1/2 mv²
        { t: "動能", q: (m,v)=>`質量 ${m} kg 的物體以 ${v} m/s 速率運動，其動能為何？`, a: (m,v)=>0.5*m*v*v, u: "J", tag:["高一","能量"] },
        
        // 重力位能：U = mgh
        { t: "重力位能", q: (m,h)=>`質量 ${m} kg 的物體抬高 ${h} m (g=10)，其重力位能增加多少？`, a: (m,h)=>m*10*h, u: "J", tag:["高一","能量"] },
        
        // 拋體運動：H = 1/2 gt² (自由落體高度)
        { t: "自由落體", q: (t,g)=>`物體由靜止自由落下 ${t} 秒 (g=10)，落下距離約為多少？`, a: (t,g)=>0.5*10*t*t, u: "m", tag:["高二","運動學"] },
        
        // 萬有引力：F = mg (地表附近重量)
        { t: "萬有引力", q: (m,g)=>`質量 ${m} kg 的太空人，在重力加速度 g=2 m/s² 的星球表面，重量為何？`, a: (m,g)=>m*2, u: "N", tag:["高二","引力"] },
        
        // 理想氣體：PV = nRT (簡化考 P 正比於 T)
        { t: "氣體動力論", q: (p,t)=>`定容下，若氣體絕對溫度由 ${t}K 變為 ${t*2}K，原壓力為 ${p} atm，新壓力為何？`, a: (p,t)=>p*2, u: "atm", tag:["高三","熱學"] },
        
        // 波動光學：v = fλ (光速問題)
        { t: "光學", q: (n,v)=>`光在折射率 n=${n} 的介質中傳播，若真空光速 c=3×10⁸ m/s，該介質中光速約為多少？(×10⁸)`, a: (n,v)=>parseFloat((3/n).toFixed(2)), u: "m/s", tag:["高三","光學"] },
        
        // 近代物理：E = hf (光子能量，簡化數值)
        { t: "光子能量", q: (f,h)=>`若光子頻率為 ${f}×10¹⁴ Hz，普朗克常數 h 約 6.6×10⁻³⁴，其能量數量級約為 10 的幾次方？`, a: (f,h)=> -19, u: "", tag:["高三","近代物理"] }
    ];

    // 啟動註冊
    waitForEngine(G => {
        const { randInt, shuffle, generateNumericOptions } = G.utils;

        phyDB.forEach((p, i) => {
            G.registerTemplate(`phy_q${i}`, (ctx, rnd) => {
                // 1. 生成隨機變數 (避免 0 或 1 造成過於簡單)
                const v1 = randInt(2, 9); 
                const v2 = randInt(2, 9);
                
                // 2. 計算答案
                const ans = p.a(v1, v2);
                
                // 3. 生成選項 (判斷是否為整數以決定擾動方式)
                const isInt = Number.isInteger(ans);
                const opts = shuffle(generateNumericOptions(ans, isInt ? 'int' : 'float'));

                return {
                    question: `【物理】${p.q(v1, v2)}`,
                    options: opts,
                    answer: opts.indexOf(ans),
                    concept: p.t,
                    explanation: [
                        `正確答案：${ans} ${p.u}`,
                        // 這裡可以加入通用的公式提示
                        `解題關鍵：${p.t} 相關公式`
                    ]
                };
            }, ["physics", "物理", "自然", "理化", ...p.tag]);
        });

        console.log("⚛️ 物理題庫 (Grade 8-12 + 計算型) 已載入完成。");
    });

})(window);
