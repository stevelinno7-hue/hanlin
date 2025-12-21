(function(global) {
    'use strict';

    // 1. 取得核心引擎 (若無則建立空物件以免報錯)
    const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator) || {
        _templates: {},
        _templateTags: {},
        utils: { pick: (arr) => arr[0] }
    };

    console.log("🛠️ [PaperGen] 載入中... 目前已註冊樣板數:", Object.keys(G._templates).length);

    // 2. 定義科目映射表 (HTML 傳來的 subject -> 題目裡的 tags)
    // 這張表能解決「選社會卻抓不到歷史」的問題
    const SUBJECT_MAP = {
        'social': ['history', 'geography', 'civics', '歷史', '地理', '公民', '社會'],
        'natural': ['physics', 'chemistry', 'biology', 'earth_science', '理化', '生物', '地科', '自然'],
        'math': ['math', '數學'],
        'chinese': ['chinese', '國文'],
        'english': ['english', '英文']
    };

    /**
     * PaperGeneratorV2 - 萬能選題器
     */
    const PaperGeneratorV2 = {
        /**
         * 生成單一題目 (被 HTML 的 loop 呼叫)
         * @param {string} subjectReq - HTML 傳來的科目 (e.g. "social")
         * @param {string} gradeReq - HTML 傳來的年級 (e.g. "國七")
         */
        generate: function(subjectReq, gradeReq) {
            
            // A. 準備搜尋標籤
            // 如果是 social，就展開成 ['history', 'geography', ...]
            // 如果是 math，就展開成 ['math', '數學']
            // 若不在表中，就直接用原字串
            const targetTags = SUBJECT_MAP[subjectReq] || [subjectReq];
            
            // B. 搜尋符合的模板 ID
            const allIds = Object.keys(G._templates);
            
            // 篩選邏輯：題目的 tags 必須「包含 targetTags 其中之一」 且 「包含 gradeReq」
            let candidates = allIds.filter(id => {
                const qTags = G._templateTags[id] || [];
                
                // 1. 科目吻合 (只要中一個即可)
                const isSubjectMatch = qTags.some(t => 
                    targetTags.some(target => t.toLowerCase().includes(target.toLowerCase()))
                );
                
                // 2. 年級吻合 (若 HTML 沒傳年級，則忽略此條件)
                const isGradeMatch = !gradeReq || qTags.some(t => t.includes(gradeReq));

                return isSubjectMatch && isGradeMatch;
            });

            // C.【降級策略】如果找不到該年級，嘗試只找科目 (放寬年級限制)
            if (candidates.length === 0) {
                console.warn(`⚠️ [PaperGen] 找不到 [${gradeReq}] [${subjectReq}]，嘗試放寬年級限制...`);
                candidates = allIds.filter(id => {
                    const qTags = G._templateTags[id] || [];
                    return qTags.some(t => 
                        targetTags.some(target => t.toLowerCase().includes(target.toLowerCase()))
                    );
                });
            }

            // D.【最終保底】如果連科目都找不到 (例如還沒載入 js 檔)
            if (candidates.length === 0) {
                console.error(`❌ [PaperGen] 題庫為空！請檢查 templates_*.js 是否有載入。需求:`, targetTags);
                return this.createFallbackQuestion(subjectReq, gradeReq, "無符合題庫");
            }

            // E. 正式生成
            try {
                // 隨機選一個模板
                const templateId = candidates[Math.floor(Math.random() * candidates.length)];
                // 執行生成函式
                const questionData = G.generateQuestion(templateId);

                // 回傳標準格式
                return {
                    id: templateId,
                    question: questionData.question || "題目生成發生異常",
                    options: questionData.options || ["選項載入失敗"],
                    answer: typeof questionData.answer === 'number' ? questionData.answer : 0,
                    concept: questionData.concept || subjectReq,
                    subject: subjectReq,
                    grade: gradeReq || "通用"
                };
            } catch (e) {
                console.error("生成過程發生錯誤:", e);
                return this.createFallbackQuestion(subjectReq, gradeReq, "生成腳本錯誤");
            }
        },

        // 產生一張「錯誤提示卡」，讓畫面不會空白
        createFallbackQuestion: function(sub, grd, reason) {
            return {
                question: `【系統提示：${reason}】<br>無法找到科目：<b>${sub}</b><br>年級：<b>${grd}</b><br>請確認 mockdata 資料夾內的 templates_*.js 是否已載入 HTML。<br>或按 F12 檢查 Console。`,
                options: ["重新整理", "檢查 Console Log", "聯絡管理員", "略過此題"],
                answer: 0,
                concept: "系統除錯"
            };
        }
    };

    // 3. 綁定到全域
    global.PaperGeneratorV2 = PaperGeneratorV2;
    global.PAPER_GENERATOR_READY = true;

    // 4. 通知 HTML 可以開始了
    console.log("🚀 [PaperGen] V2 引擎就緒 (Auto-Mapping Enabled)");
    
    // 延遲一點點發送事件，確保 HTML 監聽器已經架好
    setTimeout(() => {
        document.dispatchEvent(new CustomEvent("PaperGeneratorReady"));
    }, 100);

})(this);
