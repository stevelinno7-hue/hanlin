/**
 * =========================================================
 *  PAPER GENERATOR SAFE FULL VERSION
 *  Version: 2025-01-SAFE-FULL v1.1
 * =========================================================
 * 新增：
 * - 題型可重複使用
 * - 題目內容去重（避免同題）
 * =========================================================
 */

/* =========================================================
 * 1. 標籤設定
 * ========================================================= */
export function buildTagProfile({ core, secondary = [], optional = [] }) {
  if (!core) throw new Error("❌ tagProfile 缺少 core 標籤")
  return { core, secondary, optional }
}

/* =========================================================
 * 2. 題型評分
 * ========================================================= */
function scoreTemplate(template, tagProfile) {
  let score = 0
  tagProfile.secondary.forEach(t => template.tags?.includes(t) && (score += 2))
  tagProfile.optional.forEach(t => template.tags?.includes(t) && (score += 1))
  return score
}

/* =========================================================
 * 3. 題型池選擇（允許重複）
 * ========================================================= */
function buildTemplatePool({
  templates,
  subject,
  grade,
  tagProfile
}) {
  let pool = templates.filter(t =>
    t.subject === subject &&
    t.grade?.includes(grade) &&
    t.tags?.includes(tagProfile.core)
  )

  if (pool.length === 0) {
    console.warn("⚠️ 核心主題無題，降級 subject + grade")
    pool = templates.filter(t =>
      t.subject === subject &&
      t.grade?.includes(grade)
    )
  }

  if (pool.length === 0) {
    console.warn("⚠️ 無符合年級題型，降級 subject-only")
    pool = templates.filter(t => t.subject === subject)
  }

  return pool
}

/* =========================================================
 * 4. 題目生成（內容去重版）
 * ========================================================= */
function generateQuestions({
  templatePool,
  tagProfile,
  count,
  maxRetry = 10
}) {
  const questions = []
  const usedContentKeys = new Set()

  // 依題型權重排序（但不移除 → 可重複）
  const scoredTemplates = templatePool
    .map(t => ({ t, score: scoreTemplate(t, tagProfile) }))
    .sort((a, b) => b.score - a.score)
    .map(x => x.t)

  let guard = 0

  while (questions.length < count && guard < count * maxRetry) {
    guard++

    const template =
      scoredTemplates[Math.floor(Math.random() * scoredTemplates.length)]

    let q
    try {
      q = template.generate()
    } catch {
      continue
    }

    if (!q) continue

    /* -------- 內容指紋（關鍵） -------- */
    const contentKey =
      q.contentKey ||
      q.stem + (q.options?.join("") || "")

    if (usedContentKeys.has(contentKey)) {
      continue // ❌ 同題，跳過
    }

    usedContentKeys.add(contentKey)
    questions.push(q)
  }

  return questions
}

/* =========================================================
 * 5. 對外 API
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

  const templatePool = buildTemplatePool({
    templates,
    subject,
    grade,
    tagProfile
  })

  console.log("📘 可用題型數:", templatePool.length)

  const questions = generateQuestions({
    templatePool,
    tagProfile,
    count
  })

  if (questions.length < count) {
    console.warn(
      `⚠️ 題目不足 ${questions.length}/${count}（已避免重複內容）`
    )
  }

  console.log("🎉 試卷生成完成")
  return questions
}
