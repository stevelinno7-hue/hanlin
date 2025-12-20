// mockdata/curriculum_loader.js
// 負責將分散的各科檔案合併為 dashboard 所需的單一資料結構

(function() {
    console.log("正在整合所有課程資料...");

    window.Curriculum108 = [];

    // 定義要合併的資料來源 (變數名稱對應你各個檔案裡的 window.Curriculum108_X)
    const sources = [
        window.Curriculum108_Math,      // 來自 curriculum_math.js
        window.Curriculum108_English,   // 來自 curriculum_english.js
        window.Curriculum108_Chinese,   // 來自 curriculum_chinese.js
        window.Curriculum108_Physics,   // 來自 curriculum_physics.js
        window.Curriculum108_Chemistry, // 來自 curriculum_chemistry.js
        window.Curriculum108_Biology,   // 來自 curriculum_biology.js
        window.Curriculum108_Earth,     // 來自 curriculum_earth.js
        window.Curriculum108_History,   // 來自 curriculum_history.js
        window.Curriculum108_Geography, // 來自 curriculum_geography.js
        window.Curriculum108_Civics     // 來自 curriculum_civics.js (若有)
    ];

    // 1. 合併標準格式的資料
    sources.forEach(source => {
        if (Array.isArray(source)) {
            window.Curriculum108 = window.Curriculum108.concat(source);
        }
    });

    // 2. 特別處理：國中國文 (curriculum_chinese_junior.js)
    // 你的這個檔案結構比較特別，使用了 CurriculumLibrary.data
    if (window.CurriculumLibrary && window.CurriculumLibrary.data) {
        // 遍歷 CurriculumLibrary.data 裡的所有陣列
        Object.values(window.CurriculumLibrary.data).forEach(subjectData => {
            if (Array.isArray(subjectData)) {
                window.Curriculum108 = window.Curriculum108.concat(subjectData);
            }
        });
    }

    console.log(`整合完成！共載入 ${window.Curriculum108.length} 個課程群組。`);
})();