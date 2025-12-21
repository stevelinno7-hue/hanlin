// mockdata/AutoTemplateFissionFactory.js
(function () {
    console.log("🧩 AutoTemplateFissionFactory 初始化中...");

    const Factory = {
        templates: {},
        ready: false,

        register(subject, list) {
            if (!Array.isArray(list)) return;
            if (!this.templates[subject]) {
                this.templates[subject] = [];
            }
            this.templates[subject].push(...list);
        },

        getTemplates(subject) {
            return this.templates[subject] || [];
        }
    };

    // 🔑 掛到 window（關鍵）
    window.AutoTemplateFissionFactory = Factory;

    // 🔔 等下一個 tick，確保所有 template js 都已執行
    setTimeout(() => {
        Factory.ready = true;

        console.log(
            `✅ 自動裂變工廠已啟動：${Object.keys(Factory.templates).length} 種科目`
        );

        // 🚨 發出「我好了」事件（核心）
        window.dispatchEvent(new Event("AutoTemplateFissionFactoryReady"));
    }, 0);
})();
