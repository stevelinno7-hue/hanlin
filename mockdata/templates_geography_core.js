(function(global){
    'use strict';
    function init() {
        // 等待引擎就緒
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate) { setTimeout(init, 100); return; }
        const { pick, shuffle } = G.utils;

        // 地理題庫
        const geoDB = [
            { q: "台灣位於哪兩個板塊的交界處？", a: "歐亞與菲律賓海板塊", o: ["太平洋與印度洋板塊", "歐亞與太平洋板塊"], t: ["國七","地形"] },
            { q: "等高線越密集代表地勢特徵為何？", a: "坡度越陡", o: ["坡度越緩", "高度越高"], t: ["國七","地圖"] },
            { q: "台灣冬季盛行的季風風向？", a: "東北季風", o: ["西南季風", "東南季風"], t: ["國七","氣候"] },
            { q: "中國地勢特徵？", a: "西高東低，呈階梯狀", o: ["東高西低", "北高南低"], t: ["國八","地形"] },
            { q: "赤道附近的氣候類型？", a: "熱帶雨林氣候", o: ["熱帶沙漠氣候", "溫帶海洋性氣候"], t: ["國九","氣候"] },
            { q: "GIS中用來表示地表位置的點線面資料稱為？", a: "向量資料", o: ["網格資料", "屬性資料"], t: ["高一","GIS"] }
        ];

        G.registerTemplate('geo_universal', (ctx, rnd) => {
            const item = pick(geoDB);
            const opts = shuffle([item.a, ...item.o]);
            return {
                question: `【地理】${item.q}`,
                options: opts, answer: opts.indexOf(item.a), concept: item.t[1],
                explanation: [`正確答案：${item.a}`]
            };
        }, ["geography", "地理", "社會", "國七", "國八", "國九", "高一"]); // 關鍵標籤

        console.log("✅ 地理題庫已載入完成。");
    }
    init();
})(window);
