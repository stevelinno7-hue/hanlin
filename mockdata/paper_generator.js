(function () {
  'use strict';

  console.log("🔥 PaperGen v3.0 LOADED");

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
   * fallback
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

    console.log("📥 generatePaper", { subject, tags: normTags });

    /* ================================
     * 1️⃣ 科目過濾
     * ================================ */
    const subjectMap = {
      math: ['math', '數學'],
      english: ['eng', '英文'],
      chinese: ['chi', '國文'],
      physics: ['phy', '物理'],
      chemistry: ['chm', '化學'],
      biology: ['bio', '生物'],
      history: ['his', '歷史'],
      geography: ['geo', '地理'],
      civics: ['civ', '公民'],
      earth: ['ear', '地科']
    };

    const subjectKeys = subjectMap[subject] || [subject];

    let pool = templates.filter(t =>
      t &&
      (t.tags?.some(tag => subjectKeys.includes(tag)) ||
       subjectKeys.some(k => String(t.id).includes(k)))
    );

    /* ================================
     * 2️⃣ 年級鎖定
     * ================================ */
    const coreGrade = normTags.find(t => CORE_GRADES.includes(t));
    if (coreGrade) {
      pool = pool.filter(t => t.tags?.includes(coreGrade));
      console.log(`🔒 年級鎖定：${coreGrade}`);
    }

    if (!pool.length) {
      console.warn("❌ 題庫為空");
      return fallback(total, `題庫建置中（${subject} ${coreGrade || ''}）`);
    }

    /* ================================
     * 3️⃣ 單元過濾（可選）
     * ================================ */
    const unitTags = normTags.filter(t =>
      !CORE_GRADES.includes(t) &&
      !subjectKeys.includes(t) &&
      !['會考核心', '學測核心', '模考', '核心'].includes(t)
    );

    if (unitTags.length) {
      const unitPool = pool.filter(t =>
        unitTags.some(u =>
          t.tags?.some(tt => String(tt).includes(u))
        )
      );
      if (unitPool.length) pool = unitPool;
    }

    /* ================================
     * 4️⃣ 出題（不重複＋模板冷卻）
     * ================================ */
    const result = [];
    const usedKeys = new Set();
    const templateCount = {};

    const MAX_PER_TEMPLATE = 2;   // 每模板最多幾題
    const COOLDOWN_RATE = 0.25;   // 超過後保留機率

    let guard = 0;

    while (result.length < total && guard++ < 1000) {

      const weightedPool = pool.filter(t => {
        const used = templateCount[t.id] || 0;
        return used < MAX_PER_TEMPLATE || Math.random() < COOLDOWN_RATE;
      });

      if (!weightedPool.length) break;

      const tmpl = weightedPool[Math.floor(Math.random() * weightedPool.length)];
      let q;

      try {
        q = tmpl.func({}, Math.random);
      } catch {
        continue;
      }

      if (!q || !q.question || !Array.isArray(q.options)) continue;

      const key = `${tmpl.id}::${q.question}::${q.answer}`;
      if (usedKeys.has(key)) continue;

      usedKeys.add(key);
      templateCount[tmpl.id] = (templateCount[tmpl.id] || 0) + 1;

      result.push({
        ...q,
        templateId: tmpl.id
      });
    }

    if (result.length < total) {
      console.warn(`⚠️ 題庫不足：${result.length}/${total}`);
    }

    return G.utils.shuffle(result).map((q, i) => ({
      ...q,
      id: i + 1
    }));
  };

})();
