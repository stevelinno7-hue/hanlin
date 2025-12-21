// mockdata/templates_register_all.js
// ======================================================
// AutoTemplateFissionFactory Adapter
// 功能：把「各科 SAFE Templates」正式註冊進 Factory
// ======================================================

(function () {
    const Factory = window.AutoTemplateFissionFactory;

    if (!Factory || typeof Factory.register !== "function") {
        console.error("❌ [Adapter] AutoTemplateFissionFactory 尚未就緒");
        return;
    }

    let registerCount = 0;

    function registerGroup(subject, templatesByGrade) {
        if (!templatesByGrade) return;

        Object.entries(templatesByGrade).forEach(([grade, list]) => {
            if (!Array.isArray(list)) return;

            list.forEach(fn => {
                if (typeof fn === "function") {
                    Factory.register(subject, grade, fn);
                    registerCount++;
                }
            });
        });
    }

    // =========================
    // 國文
    // =========================
    registerGroup("chinese", window.ChineseTemplates);

    // =========================
    // 英文
    // =========================
    registerGroup("english", window.EnglishTemplates);

    // =========================
    // 數學
    // =========================
    registerGroup("math", window.MathTemplates);

    // =========================
    // 物理
    // =========================
    registerGroup("physics", window.PhysicsTemplates);

    // =========================
    // 化學
    // =========================
    registerGroup("chemistry", window.ChemistryTemplates);

    // =========================
    // 生物
    // =========================
    registerGroup("biology", window.BiologyTemplates);

    // =========================
    // 歷史
    // =========================
    registerGroup("history", window.HistoryTemplates);

    // =========================
    // 地理
    // =========================
    registerGroup("geography", window.GeographyTemplates);

    // =========================
    // 公民
    // =========================
    registerGroup("civics", window.CivicsTemplates);

    console.log(
        `🧩 [Adapter] Templates 已註冊完成，共 ${registerCount} 題型`
    );

    // 主動宣告 Factory Ready（保證 bootstrap 不 race）
    Factory.ready = true;
    window.dispatchEvent(new Event("AutoTemplateFissionFactoryReady"));
})();
