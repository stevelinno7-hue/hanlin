(function(global){
    'use strict';

    function initFactory() {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        // 增加對 G.utils 的檢查
        if (!G || !G.utils) { setTimeout(initFactory, 50); return; }

        const DB = {
            roles: ["AI工程師", "YouTuber", "外送員", "偵探", "太空人", "主廚", "電競選手", "魔法師"],
            places: ["在便利商店", "在火星基地", "在古老圖書館", "在直播間", "在無人島", "在跨年晚會"],
            formats: [
                { type: "news", tpl: (q)=>`【快訊】據報導：\n${q}\n專家表示這將影響重大。` },
                { type: "chat", tpl: (q)=>`A：「考你一題：${q}」\nB：「這簡單...」` },
                { type: "diary", tpl: (q)=>`【日記】今天老師問了一個問題：\n${q}\n我該怎麼回答？` },
                { type: "guide", tpl: (q)=>`【攻略】新手教學：\n${q}\n學會這個就能通關！` }
            ]
        };

        const CONTEXT_WRAPPERS = { 'standard': (q) => q };
        const { pick } = G.utils;

        for (let i = 0; i < 20; i++) {
            CONTEXT_WRAPPERS[`role_py_${i}`] = (q) => {
                const r = pick(DB.roles);
                const p = pick(DB.places);
                return `【情境：${r}】\n你${p}，遇到一個難題：\n「${q}」\n身為專業的${r}，請選出正確答案。`;
            };
        }
        DB.formats.forEach(fmt => { CONTEXT_WRAPPERS[fmt.type] = fmt.tpl; });

        G.autoFissionRegister = function(originalId, originalFunc, tags, rawRegister) {
            rawRegister.call(G, originalId, originalFunc, tags);
            const keys = Object.keys(CONTEXT_WRAPPERS).filter(k => k !== 'standard');
            const key = pick(keys);
            const wrapper = CONTEXT_WRAPPERS[key];
            const fissionId = `${originalId}_fission_${key}`;

            const newFunc = function(ctx, rnd) {
                const data = originalFunc(ctx, rnd);
                if (data && typeof data.question === 'string') {
                    return {
                        ...data,
                        question: wrapper(data.question),
                        concept: `${data.concept || ''} (應用)`,
                        templateId: fissionId
                    };
                }
                return data;
            };
            rawRegister.call(G, fissionId, newFunc, [...tags, "素養", "裂變"]);
        };
        console.log("✅ [Factory] 裂變工廠已就緒");
    }
    initFactory();
})(this);
