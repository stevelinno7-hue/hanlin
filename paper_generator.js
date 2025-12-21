(function(global) {
    'use strict';

    // 確保引擎全域變數存在
    const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator) || {
        _templates: {},
        _templateTags: {},
        utils: {}
    };

    /**
     * PaperGeneratorV2 - 智慧出題引擎
     * 負責從各科檔案（生物、物理、歷史等）中篩選適合的題目
     */
    const PaperGeneratorV2 = {
        /**
         * 生成單一題目
         * @param {string} subject 科目 (e.g., 'math', 'history')
         * @param {string} grade 年級 (e.g., '國七', '高一')
         */
        generate: function(subject, grade) {
            // 1. 取得所有已註冊的模板 ID
            const allIds = Object.keys(G._templates);
            
            // 2. 篩選符合科目與年級標籤的模板
            // 我們會檢查標籤是否包含 "history" 且包含 "國七"
            const candidates = allIds.filter(id => {
                const tags = G._templateTags[id] || [];
                const matchSubject = tags.some(t => 
                    t.toLowerCase() === subject.toLowerCase() || 
                    (subject === 'social' && ['history', 'geography', 'civics'].includes(t.toLowerCase()))
                );
                const matchGrade = tags.includes(grade);
                return matchSubject && matchGrade;
            });

            // 3. 安全退路：如果找不到特定年級，則嘗試只依據科目找題
            let finalSelection = candidates;
            if (finalSelection.length === 0) {
                console.warn(`[Generator] 找不到 ${grade} 的 ${subject} 題目，嘗試放寬條件...`);
                finalSelection = allIds.filter(id => {
                    const tags = G._templateTags[id] || [];
                    return tags.some(t => t.toLowerCase() === subject.toLowerCase());
                });
            }

            // 4. 隨機選取一個模板並生成題目資料
            if (finalSelection.length > 0) {
                const randomId = finalSelection[Math.floor(Math.random() * finalSelection.length)];
                const questionData = G.generateQuestion(randomId, { tags: [grade, subject] });
                
                // 確保返回格式統一，便於 HTML 渲染
                return {
                    id: randomId,
                    question: questionData.question || "題目載入失敗",
                    options: questionData.options || ["選項 A", "選項 B", "選項 C", "選項 D"],
                    answer: questionData.answer !== undefined ? questionData.answer : 0,
                    concept: questionData.concept || "綜合觀念",
                    subject: subject,
                    grade: grade
                };
            }

            // 5. 終極保底（避免當機）
            return {
                question: `【系統提示】暫無符合 ${subject} ${grade} 的題庫資料。`,
                options: ["請檢查 JS 檔案載入", "聯絡管理員", "確認標籤設定", "重新整理"],
                answer: 0,
                concept: "系統錯誤"
            };
        }
    };
    // ... 原有代碼 ...
        const prefixMap = { 
            'math': 'math', 'physics': 'phy', 'chemistry': 'chm', 'biology': 'bio', 
            'english': 'eng', 'chinese': 'chi', 'history': 'his', 'geography': 'geo', 
            'civics': 'civ', 'earth': 'ear', 'earth_science': 'ear' 
        };
        const subjectKey = prefixMap[subject] || subject;

        // 【新增：動態擴展科目匹配】
        // 確保像 his_source 這樣的 ID 也能被 history 選中
        let pool = allTemplates.filter(t => {
            const idLow = t.id.toLowerCase();
            const idMatch = idLow.includes(subjectKey);
// ... 其餘邏輯保持不變 ...
    // 宣告 Ready 狀態，讓 HTML 的 startExamSafely 可以執行
    global.PaperGeneratorV2 = PaperGeneratorV2;
    global.PAPER_GENERATOR_READY = true;
    
    // 發送自定義事件
    console.log("🚀 [PaperGenerator] V2 引擎已就緒");
    document.dispatchEvent(new CustomEvent("PaperGeneratorReady"));

})(this);
