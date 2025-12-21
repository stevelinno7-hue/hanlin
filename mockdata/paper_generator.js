(function(global) {
    'use strict';

    // 1. 取得核心引擎
    const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);

    // 2. 科目映射表
    const SUBJECT_MAP = {
        'social': ['history', 'geography', 'civics', '歷史', '地理', '公民', '社會'],
        'natural': ['physics', 'chemistry', 'biology', 'earth_science', '物理', '化學', '生物', '地科', '自然'],
        'math': ['math', '數學'],
        'chinese': ['chinese', '國文'],
        'english': ['english', '英文']
    };

    const PaperGeneratorV2 = {
        // =========================
        // 主生成函式
        // =========================
        generate: function(subjectReq, gradeReq) {
            // 等待引擎就緒
            if (!G || !G._templates || Object.keys(G._templates).length === 0) {
                console.warn("[PaperGeneratorV2] 核心模板尚未就緒，使用 fallback 題目");
                return [this.createFallbackQuestion(subjectReq, gradeReq, "題庫尚未載入")];
            }

            const targetTags = SUBJECT_MAP[subjectReq] || [subjectReq];
            const allIds = Object.keys(G._templates);

            // 過濾符合標籤的模板
            let candidates = allIds.filter(id => {
                const qTags = G._templateTags[id] || [];
                const hasSub = qTags.some(t => targetTags.some(target => String(t).toLowerCase().includes(String(target).toLowerCase())));
                const hasGrade = !gradeReq || qTags.some(t => String(t).includes(gradeReq));
                return hasSub && hasGrade;
            });

            // 若找不到，降級策略：只比對科目
            if (candidates.length === 0) {
                candidates = allIds.filter(id => {
                    const qTags = G._templateTags[id] || [];
                    return qTags.some(t => targetTags.some(target => String(t).toLowerCase().includes(String(target).toLowerCase())));
                });
            }

            // 還找不到，回傳 fallback
            if (candidates.length === 0) {
                return [this.createFallbackQuestion(subjectReq, gradeReq, "題庫中無符合標籤之題目")];
            }

            // 隨機挑一個模板生成題目
            const templateId = candidates[Math.floor(Math.random() * candidates.length)];
            const questionData = G.generateQuestion(templateId);

            return [{
                ...questionData,
                subject: subjectReq,
                grade: gradeReq
            }];
        },

        // =========================
        // 保底題目
        // =========================
        createFallbackQuestion: function(sub, grd, reason) {
            return {
                question: `<div style="color:red">【系統訊息：${reason}】</div>
                           請確認 <b>templates_${sub}_core.js</b> 是否正確載入。<br>
                           尋找標籤：${sub}, ${grd}`,
                options: ["請檢查檔案路徑", "請確認標籤定義", "請確認 Adapter 註冊狀態", "重新整理"],
                answer: 0,
                concept: "除錯提示"
            };
        },

        // =========================
        // 等待模板就緒
        // =========================
        ready: function(callback) {
            const interval = setInterval(() => {
                if (G && G._templates && Object.keys(G._templates).length > 0) {
                    clearInterval(interval);
                    callback();
                }
            }, 50);
        }
    };

    // 導出
    global.PaperGeneratorV2 = PaperGeneratorV2;
    console.log("✅ [PaperGeneratorV2] 已就緒，可安全生成題目");

    // 觸發事件
    document.dispatchEvent(new CustomEvent("PaperGeneratorReady"));

})(this);
