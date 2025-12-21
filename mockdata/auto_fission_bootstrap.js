// mockdata/auto_fission_bootstrap.js
(function () {
  console.log("⏳ [Bootstrap] 等待 AutoTemplateFissionFactory 與題庫註冊...");

  function isFactoryReallyReady() {
    const F = window.AutoTemplateFissionFactory;
    if (!F || !F.templates) return false;

    // 🚨 核心判斷：至少要有一科
    return Object.keys(F.templates).length > 0;
  }

  function onReady() {
    if (window.AutoTemplateFissionBootstrapped) return;

    window.AutoTemplateFissionBootstrapped = true;

    console.log(
      "🚀 [Bootstrap] Factory Ready，系統完成啟動：",
      Object.keys(window.AutoTemplateFissionFactory.templates)
    );
  }

  function waitLoop() {
    if (isFactoryReallyReady()) {
      onReady();
    } else {
      setTimeout(waitLoop, 30);
    }
  }

  waitLoop();
})();
