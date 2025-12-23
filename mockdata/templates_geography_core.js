(function (global) {
    'use strict';

    // 等待引擎就緒
    function waitForEngine(callback) {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate) {
            setTimeout(() => waitForEngine(callback), 100);
            return;
        }
        callback(G);
    }

    // 地理核心資料庫 (確保這裡沒有數學題)
    const geoDB = [
         // ----------------------------------------------------
        { s:"地理", t:["國七","地形"], e:"河谷地形", y:"V型谷", p:"河流侵蝕", k:"上游", d:"河流上游侵蝕力強，下切形成深谷" },
        { s:"地理", t:["國七","地形"], e:"沖積扇", y:"扇狀堆積", p:"河流堆積", k:"谷口", d:"河流出谷口流速減緩，泥沙堆積成扇狀" },
        { s:"地理", t:["國七","地形"], e:"三角洲", y:"河口堆積", p:"河流", k:"出海口", d:"河流入海處流速極慢，泥沙堆積成三角形" },
        { s:"地理", t:["國七","地形"], e:"石灰岩地形", y:"喀斯特", p:"溶蝕作用", k:"鐘乳石", d:"地下水溶蝕石灰岩層形成的特殊地形" },
        { s:"地理", t:["國七","地形"], e:"沙洲與潟湖", y:"波浪堆積", p:"沿海", k:"濱外沙洲", d:"沿岸流與波浪搬運堆積形成的海積地形" },
        { s:"地理", t:["國七","氣候"], e:"季風氣候", y:"夏雨冬乾", p:"海陸性質差異", k:"轉向", d:"夏季吹海風多雨，冬季吹陸風乾燥" },
        { s:"地理", t:["國七","氣候"], e:"地形雨", y:"迎風坡多雨", p:"地形抬升", k:"背風坡", d:"氣流受山脈阻擋抬升，冷卻凝結降雨" },
        { s:"地理", t:["國七","產業"], e:"集約農業", y:"投入多產出高", p:"水稻", k:"勞力密集", d:"單位面積投入大量勞力與資金的農業" },
        { s:"地理", t:["國八","中國"], e:"黃土高原", y:"窯洞", p:"風力堆積", k:"水土流失", d:"土質疏鬆，易受流水侵蝕，形成溝壑縱橫" },
        { s:"地理", t:["國八","中國"], e:"坎兒井", y:"乾燥氣候", p:"新疆", k:"暗渠", d:"減少水分蒸發的古老水利設施" },
        { s:"地理", t:["國八","中國"], e:"長江三角洲", y:"水鄉澤國", p:"水運", k:"魚米之鄉", d:"河網密布，中國經濟最發達的地區" },
        { s:"地理", t:["國九","世界"], e:"熱帶雨林", y:"亞馬遜", p:"赤道", k:"對流雨", d:"全年高溫多雨，生物多樣性高" },
        { s:"地理", t:["國九","世界"], e:"熱帶莽原", y:"乾溼分明", p:"獅子斑馬", k:"薩凡納", d:"受赤道低壓與副熱帶高壓交替控制，乾溼季明顯" },
        { s:"地理", t:["國九","世界"], e:"地中海型氣候", y:"夏乾冬雨", p:"西風帶", k:"橄欖葡萄", d:"夏季乾燥少雨，冬季受西風吹拂多雨" },
        { s:"地理", t:["國九","世界"], e:"溫帶海洋性", y:"全年有雨", p:"西歐", k:"西風吹拂", d:"終年受西風與暖流影響，氣候溫和濕潤" },
        { s:"地理", t:["高一","地圖"], e:"麥卡托投影", y:"角度正確", p:"航海", k:"高緯放大", d:"適合航海導航，但高緯度面積嚴重變形" },
        { s:"地理", t:["高一","地圖"], e:"等高線", y:"地形起伏", p:"地形圖", k:"閉合曲線", d:"連線上海拔高度相同的點，顯示地形坡度" },
        { s:"地理", t:["高一","GIS"], e:"向量資料", y:"點線面", p:"GIS", k:"幾何圖形", d:"用座標與點線面來儲存地理資訊" },
        { s:"地理", t:["高一","GIS"], e:"網格資料", y:"像元", p:"衛星影像", k:"解析度", d:"將地表切割成網格，紀錄屬性數值" },

    ];

    // ⭐ 專屬地理的生成器 (函式名稱加上 _Safe 避免衝突)
    function generateGeoOptions_Safe(G, db, item, field) {
        const { shuffle } = G.utils;
        const correctAns = item[field].trim();
        
        // 建立 Set 避免重複
        const selected = new Set();
        selected.add(correctAns);
        const wrongOpts = [];

        // 策略 A: 優先找「地理資料庫內」且「同單元」的錯誤選項
        // (例如考 GIS 就找其他 GIS 的關鍵字，考氣候就找氣候的)
        const sameUnit = shuffle(db.filter(x => x.t[1] === item.t[1]));
        
        for(const cand of sameUnit) {
            const txt = cand[field].trim();
            if(!selected.has(txt)) {
                wrongOpts.push(txt);
                selected.add(txt);
            }
            if(wrongOpts.length >= 3) break;
        }

        // 策略 B: 如果不夠，從「整個地理資料庫」找
        // (絕對不會去抓數學或歷史的資料)
        if(wrongOpts.length < 3) {
            const allGeo = shuffle(db);
            for(const cand of allGeo) {
                const txt = cand[field].trim();
                if(!selected.has(txt)) {
                    wrongOpts.push(txt);
                    selected.add(txt);
                }
                if(wrongOpts.length >= 3) break;
            }
        }

        const finalOpts = shuffle([correctAns, ...wrongOpts]);
        return {
            options: finalOpts,
            answer: finalOpts.indexOf(correctAns)
        };
    }

    // 註冊模板
    function registerGeoTemplates(G, geoDB) {
        const { pick } = G.utils;

        // 1. 地理敘述題
        G.registerTemplate('geo_feat', () => {
            const item = pick(geoDB);
            // 呼叫專屬生成器
            const { options, answer } = generateGeoOptions_Safe(G, geoDB, item, 'y');

            return {
                question: `【地理】關於「${item.e}」，下列敘述何者正確？`,
                options: options,
                answer: answer,
                concept: item.t[1],
                explanation: [`正確答案：${item.y}`, `說明：${item.d}`]
            };
        }, ["geography", "地理", "社會", "國七", "國八", "國九", "高一"]);

        // 2. 地理關鍵字題
        G.registerTemplate('geo_key', () => {
            const item = pick(geoDB);
            // 呼叫專屬生成器
            const { options, answer } = generateGeoOptions_Safe(G, geoDB, item, 'k');

            return {
                question: `【地理】提到「${item.e}」，通常會聯想到哪個關鍵詞？`,
                options: options,
                answer: answer,
                concept: item.t[1],
                explanation: [`${item.e} 關鍵詞：${item.k}`, `成因：${item.p}`]
            };
        }, ["geography", "地理", "社會", "國七", "國八", "國九", "高一"]);
    }

    // 啟動
    waitForEngine(G => {
        registerGeoTemplates(G, geoDB);
        console.log("🌏 地理題庫 (GIS 概念修正 + 變數隔離版) 已載入！");
    });

})(window);
