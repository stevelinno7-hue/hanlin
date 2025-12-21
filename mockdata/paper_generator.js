(function () {
  'use strict';

  console.log("🔥 PAPER GEN STABLE 2025-01");

  /* ================================
   * 年級 alias
   * ================================ */
  const GRADE_ALIAS = {
    國七上: "國七", 國七下: "國七",
    國八上: "國八", 國八下: "國八",
    國九上: "國九", 國九下: "國九",
    高一上: "高一", 高一下: "高一",
    高二上: "高二", 高二下: "高二",
    高三上: "高三", 高三下: "高三"
  };

  const CORE_GRADES = ["國七", "國八", "國九", "高一", "高二", "高三"];

  const normalizeTags = (tags = []) =>
    tags.map(t => GRADE_ALIAS[t] || t);

  /* ================================
   * Generator 取得
   * ================================ */
  const G = window.RigorousGenerator;
  if (!G) {
    console.error("❌ RigorousGenerator 尚未載入");
    return;
  }

  /* ================================
   * fallback（一定要有）
   * ================================ */
  function fallback(count, msg) {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      question: msg,
      options: ["A", "B", "C", "D"],
      answer: 0,
      concept: "系統提示"
    }));
  }

  /* ================================
   * 主入口
   * ================================ */
  window.generatePaper = function ({ subject, total = 10, tags = [] }) {

    const normTags = normalizeTags(tags);
    const templates = Object.values(G.templates || {});
    console.log("📥 generatePaper", subject, normTags);

    /* ---------- 科目過濾 ---------- */
    const subjectMap = {
      math: ['math', '數學'],
      english: ['eng', '英文'],
      chinese: ['chi', '國文'],
      physics: ['phy', '物理'],
      chemistry: ['chm', '化學'],
      biology: ['bio', '生物'],
      history: ['his', '歷史']
    };

    const subjectKeys = subjectMap[subject] || [subject];

    let pool = templates.filter(t =>
      t &&
      (t.tags?.some(tag => subjectKeys.includes(tag)) ||
       subjectKeys.some(k => String(t.id).includes(k)))
    );

    /* ---------- 年級鎖定 ---------- */
    const coreGrade = normTags.find(t => CORE_GRADES.includes(t));
    if (coreGrade) {
      pool = pool.filter(t => t.tags?.includes(coreGrade));
    }

    if (!pool.length) {
      console.warn("❌ 題庫為空");
      return fallback(total, `題庫建置中（${subject}）`);
    }

    /* ---------- 出題 ---------- */
    const result = [];
    const used = new Set();
    let guard = 0;

    while (result.length < total && guard++ < 500) {
      const tmpl = pool[Math.floor(Math.random() * pool.length)];
      let q;

      try {
        // ✅ 保證 rng 是 function
        q = tmpl.func({}, () => Math.random());
      } catch (e) {
        continue;
      }

      if (!q || !q.question || !Array.isArray(q.options)) continue;

      const key = tmpl.id + q.question;
      if (used.has(key)) continue;

      used.add(key);
      result.push({ ...q, templateId: tmpl.id });
    }

    if (!result.length) {
      return fallback(total, "⚠️ 題目生成失敗");
    }

    return G.utils.shuffle(result).map((q, i) => ({
      ...q,
      id: i + 1
    }));
  };

})();
