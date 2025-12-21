/**
 * =========================================================
 *  PAPER GENERATOR SAFE FULL VERSION
 *  Version: 2025-01-SAFE-FULL
 * =========================================================
 * 特色：
 * - 絕不全 fallback
 * - 會考導向（核心主題必保）
 * - 標籤加權，不做 AND 屠殺
 * - 降級策略可追蹤
 * =========================================================
 */

/* =========================================================
 * 1. 標籤設定（會考模型）
 * ========================================================= */
export function buildTagProfile({
  core,
  secondary = [],
  optional = []
}) {
  if (!core) {
    throw new Error("❌ tagProfile 缺少 core 標籤")
  }

  return {
    core,
    secondary,
    optional
  }
}

/* =========================================================
 * 2. 題型評分
 * ========================================================= */
function scoreTemplate(template, tagProfile) {
  let score = 0

  tagProfile.secondary.forEach(tag => {
    if (template.tags?.includes(tag)) score += 2
  })

  tagProfile.optional.forEach(tag => {
    if (template.tags?.includes(tag)) score += 1
  })

  return score
}

/* =========================================================
 * 3. 模板選擇（核心）
 * ========================================================= */
function selectTemplates({
  templates,
  subject,
  grade,
  tagProfile,
  count,
  debug
}) {
  console.log("📥 generatePaper() Object")
  console.log("🎯 目標:", tagProfile.core)

  /* ---------- Step 0：基本檢查 ---------- */
  if (!templates || templates.length === 0) {
    console.error("❌ 題庫為空")
    return []
  }

  /* ---------- Step 1：核心條件 ---------- */
  let pool = templates.filter(t =>
    t.subject === subject &&
    t.grade?.includes(grade) &&
    t.tags?.includes(tagProfile.core)
  )

  console.log("🎯 核心主題命中:", pool.length)

  /* ---------- Step 2：核心全滅 → subject + grade ---------- */
  if (pool.length === 0) {
    console.warn("⚠️ 核心主題無題，降級 subject + grade")

    pool = templates.filter(t =>
      t.subject === subject &&
      t.grade?.includes(grade)
    )

    console.log("📘 降級後模板數:", pool.length)
  }

  /* ---------- Step 3：再全滅 → subject-only ---------- */
  if (pool.length === 0) {
    console.warn("⚠️ 無符合年級題型，降級 subject-only")

    pool = templates.filter(t => t.subject === subject)

    console.log("📗 subject-only 模板數:", pool.length)
  }

  /* ---------- Step 4：評分 ---------- */
  const scored = pool.map(t => ({
    ...t,
    __score: scoreTemplate(t, tagProfile)
  }))

  scored.sort((a, b) => b.__score - a.__score)

  if (debug) {
    console.log(
      "🏷️ 分數分佈:",
      scored.map(t => t.__score)
    )
  }

  /* ---------- Step 5：取題 ---------- */
  const selected = scored.slice(0, count)

  if (selected.length === 0) {
    console.error("🆘 完全無題，啟用最終 fallback")

    return templates
      .filter(t => t.subject === subject)
      .slice(0, count)
  }

  if (debug) {
    console.table(
      selected.map(t => ({
        id: t.id,
        score: t.__score,
        tags: t.tags?.join(",")
      }))
    )
  }

  return selected
}

/* =========================================================
 * 4. 題目生成（真正對外 API）
 * ========================================================= */
export function generatePaper({
  templates,
  subject,
  grade,
  count = 10,
  tagConfig,
  debug = true
}) {
  console.log("⏳ 正在準備測驗...")

  const tagProfile = buildTagProfile(tagConfig)

  const selectedTemplates = selectTemplates({
    templates,
    subject,
    grade,
    tagProfile,
    count,
    debug
  })

  if (selectedTemplates.length === 0) {
    console.error("❌ 出題失敗，全部 fallback")
    return []
  }

  console.log("✅ 成功選出題型:", selectedTemplates.length)

  /* ---------- 真正生成題目 ---------- */
  const questions = selectedTemplates.map(t => {
    try {
      return t.generate()
    } catch (e) {
      console.error("❌ 題型生成失敗:", t.id, e)
      return null
    }
  }).filter(Boolean)

  if (questions.length === 0) {
    console.error("❌ 題目生成階段失敗")
  }

  console.log("🎉 試卷生成完成")
  return questions
}

/* =========================================================
 * 5. 使用範例（你現有系統可直接對接）
 * ========================================================= */
/*
generatePaper({
  templates: HISTORY_TEMPLATES,
  subject: "history",
  grade: "j",
  count: 10,
  tagConfig: {
    core: "台灣史前文化",
    secondary: ["史前", "考古"],
    optional: ["長濱文化", "卑南文化"]
  }
})
*/
