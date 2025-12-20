// assets/js/generator_engine.js
(function(global){
    'use strict';

    const RigorousGenerator = {
        // 儲存所有註冊的模板
        templates: {},

        // 1. 基礎註冊功能
        registerTemplate: function(name, func, tags = []) {
            if (typeof func !== 'function') return;
            // 儲存結構包含 func, tags, 和 meta (供裂變工廠使用)
            this.templates[name] = {
                id: name,
                func: func,
                tags: tags || [],
                meta: {} 
            };
        },

        // 2. 取得所有模板 (供 paper_generator 使用)
        getAllTemplates: function() {
            return Object.values(this.templates);
        },

        // 3. 取得特定情境模板 (供舊版邏輯使用)
        getTemplatesByContext: function(subject, requiredTags = []) {
            const all = this.getAllTemplates();
            // 簡易篩選
            return all.filter(t => {
                // 檢查 ID 或 Tags 是否包含科目關鍵字
                const matchSubject = t.id.includes(subject) || (t.tags && t.tags.includes(subject));
                // 如果有指定 tags，檢查是否包含
                const matchTags = requiredTags.length === 0 || requiredTags.some(rt => t.tags.includes(rt));
                return matchSubject && matchTags;
            }).map(t => t.id); // 回傳 ID 列表
        },

        // 4. 舊版單題生成 (Fallback)
        generate: function(subject, tags = []) {
            const ids = this.getTemplatesByContext(subject, tags);
            if (ids.length === 0) return this.fallbackQuestion(subject);
            
            const id = ids[Math.floor(Math.random() * ids.length)];
            const tmpl = this.templates[id];
            try {
                const q = tmpl.func({}, Math.random);
                return { ...q, templateId: id };
            } catch(e) { console.error(e); return this.fallbackQuestion(subject); }
        },

        fallbackQuestion: (subj) => ({
            question: `目前 [${subj}] 題庫擴充中...`,
            options: ["A","B","C","D"], answer: 0, concept: "系統訊息"
        }),

        // 5. 工具箱 (供裂變工廠與模板使用) - 這是關鍵！
        utils: {
            randInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
            pick: (arr) => arr[Math.floor(Math.random() * arr.length)],
            shuffle: (arr) => arr.sort(() => Math.random() - 0.5),
            generateNumericOptions: (ans, type='int') => {
                let s = new Set([ans]);
                let safety = 0;
                while(s.size < 4 && safety < 20) {
                    let d = Math.floor(Math.random()*10)-5;
                    if(d===0) d=1;
                    let v = Number(ans)+d;
                    if(type!=='int') v = parseFloat(v.toFixed(2));
                    s.add(v);
                    safety++;
                }
                return Array.from(s).sort(()=>Math.random()-0.5);
            }
        }
    };

    global.RigorousGenerator = RigorousGenerator;
    console.log("✅ Generator Engine v2.0 (Core) 已載入");

})(this);