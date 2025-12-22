(function(global){
    'use strict';
    function initFactory() {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G) { setTimeout(initFactory, 50); return; }

        const DB = {
            roles: ["AI工程師", "YouTuber", "外送員", "偵探", "太空人", "主廚", "電競選手"],
            places: ["在便利商店", "在火星基地", "在圖書館", "在直播間", "在無人島"],
            formats: [
                { type: "news", tpl: (q)=>`【快訊】據報導：\n${q}\n專家表示這將影響重大。` },
                { type: "chat", tpl: (q)=>`A：「考你一題：${q}」\nB：「這簡單...」` },
                { type: "diary", tpl: (q)=>`【日記】今天老師問了一個問題：\n${q}\n我該怎麼回答？` }
            ]
        };

        const CONTEXT_WRAPPERS = { 'standard': (q) => q };
        const { pick } = G.utils;

        for (let i = 0; i < 20; i++) {
            CONTEXT_WRAPPERS[`roleplay_${i}`] = (q) => {
                const r = pick(DB.roles);
                const p = pick(DB.places);
                return `【情境：${r}】\n你${p}，遇到一個難題：\n「${q}」\n身為專業的${r}，請選出正確答案。`;
            };
        }
        DB.formats.forEach(fmt => { CONTEXT_WRAPPERS[fmt.type] = fmt.tpl; });

        G.autoFissionRegister = function(originalId, originalFunc, tags, rawRegister) {
            // A. 原始版
            rawRegister.call(G, originalId, originalFunc, [...tags, "基礎題"]);
            // B. 裂變版
            const keys = Object.keys(CONTEXT_WRAPPERS).filter(k => k !== 'standard');
            const key = pick(keys);
            const wrapper = CONTEXT_WRAPPERS[key];
            const fissionId = `${originalId}_fission_${key}`;
            const newFunc = function(ctx, rnd) {
                const data = originalFunc(ctx, rnd);
                if (data && typeof data.question === 'string') {
                    return { ...data, question: wrapper(data.question), concept: `${data.concept||''} (應用)`, templateId: fissionId };
                }
                return data;
            };
            rawRegister.call(G, fissionId, newFunc, [...tags, "素養題", "情境應用"]);
        };
        console.log(`✅ 自動裂變工廠已就緒`);
    }
    initFactory();
})(window);
