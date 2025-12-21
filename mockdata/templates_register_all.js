(function () {
  const F = window.AutoTemplateFissionFactory;
  if (!F) {
    console.error("❌ Factory not found");
    return;
  }

  function register(subject, grade, fn) {
    F.register(subject, grade, fn);
  }

  // ===== 國文 =====
  if (window.ChineseTemplates) {
    Object.entries(window.ChineseTemplates).forEach(([grade, list]) => {
      list.forEach(fn => register("chinese", grade, fn));
    });
  }

  // ===== 英文 =====
  if (window.EnglishTemplates) {
    Object.entries(window.EnglishTemplates).forEach(([grade, list]) => {
      list.forEach(fn => register("english", grade, fn));
    });
  }

  // 👉 其他科照這個模式補

  console.log("🧩 [Adapter] 所有模板已註冊進 Factory");
})();
