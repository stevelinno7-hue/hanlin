(function (global) {
  'use strict';

  const PaperGenerator = {
    ready: false,

    init() {
      const G = global.RigorousGenerator;
      if (!G || !G.registerTemplate || !G.utils) {
        setTimeout(() => this.init(), 50);
        return;
      }

      this.G = G;
      this.ready = true;

      console.log("📄 [PaperGen] 🔥 PAPER GEN VERSION 2025-01-SAFE（NO DUP STEM / NO FALLBACK）已載入");

      // 通知外部「我已就緒」
      window.dispatchEvent(new Event("PaperGeneratorReady"));
      console.log("🚦 PaperGeneratorReady dispatched");
    },

    /**
     * 產生整份試卷
     * @param {Object} cfg
     * @param {String} cfg.subject
     * @param {String} cfg.grade
     * @param {Number} cfg.count
     * @param {Array} cfg.tags
     */
    generate(cfg) {
      if (!this.ready) {
        throw new Error("[PaperGen] Generator 尚未就緒");
      }

      const { subject, grade, count } = cfg;

      // ① 找出所有可用模板
      const templates = this.G.getTemplates({
        subject,
        grade
      });

      if (!templates || templates.length === 0) {
        throw new Error("題庫回傳空陣列");
      }

      const questions = [];
      const usedStems = new Set();
      let guard = 0;

      // ② 安全抽題（不重複題幹）
      while (questions.length < count && guard++ < count * 10) {
        const tpl = this.G.utils.pick(templates);
        const q = tpl();

        if (!q || !q.question) continue;
        if (usedStems.has(q.question)) continue;

        usedStems.add(q.question);
        questions.push(q);
      }

      if (questions.length === 0) {
        throw new Error("生成題目失敗：所有模板皆回傳 null");
      }

      console.log(`✅ [PaperGen] 成功產生 ${questions.length} 題`);
      return questions;
    }
  };

  // 掛到全域
  global.PaperGenerator = PaperGenerator;

  // 啟動
  PaperGenerator.init();

})(window);
