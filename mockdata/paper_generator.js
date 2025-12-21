(function (window) {
  'use strict';

  console.log("🔥 FINAL PaperGen LOADED");

  const GRADE_ALIAS = {
    "國七上": "國七", "國七下": "國七",
    "國八上": "國八", "國八下": "國八",
    "國九上": "國九", "國九下": "國九",
    "高一上": "高一", "高一下": "高一",
    "高二上": "高二", "高二下": "高二",
    "高三上": "高三", "高三下": "高三"
  };

  const CORE_GRADES = ["國七", "國八", "國九", "高一", "高二", "高三"];

  const normalizeTags = (tags = []) =>
    tags.map(t => GRADE_ALIAS[t] || t);

  /* ================================
   * 主入口（⚠️ G 在這裡才拿）
   * ================================ */
  window.generatePaper = function ({ subject, total = 10, tags = [] }) {
    const G = window.RigorousGenerator || window.global?.RigorousGenerator;

    if (!G || !G.templates) {
      console.warn("⚠️ PaperGen：RigorousGenerator 尚未就緒");
      return null;
    }

    const normTags = normalizeTags(tags);

    console.log("📥 PaperGen Request", {
      subject,
      rawTags: tags,
      normalizedTags: normTags
    });

    const allTemplates = Object.values(G.templates);

    // 👉 以下你的邏輯全部可以原封不動
  };

})();
