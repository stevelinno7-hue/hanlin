// curriculum_biology.js
// 生物科 — 翰林 Book 1–5（高一上 ~ 高三）
// 顆粒度：概念 → 技能點 → 題型分類
// id 命名規則：h_bi_hl_b{冊}_c{概念}_s{技能}_t{題型}

window.Curriculum108_Biology = [
  // ==========================================
  // Book 1 — 高一上（細胞與生命的基本單位）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "biology",
    subjectName: "生物",
    version: "翰林",
    book: "Book 1",
    type: "regular",
    courses: [
      // C1: 細胞結構與功能
      { id: "h_bi_hl_b1_c1_s1_t1", name: "細胞：細胞膜、細胞質、細胞核功能（概念）", unitCode: "bio_b1", tags: ["高一上","生物","細胞","概念"] },
      { id: "h_bi_hl_b1_c1_s1_t2", name: "細胞器功能與辨識（圖表題）", unitCode: "bio_b1", tags: ["高一上","生物","細胞器","圖表"] },

      // C2: 細胞代謝與能量
      { id: "h_bi_hl_b1_c2_s1_t1", name: "細胞呼吸：糖解作用與有氧呼吸（概念與流程）", unitCode: "bio_b1", tags: ["高一上","生物","細胞呼吸","概念"] },
      { id: "h_bi_hl_b1_c2_s1_t2", name: "光合作用基本過程與能量轉換（計算/流程題）", unitCode: "bio_b1", tags: ["高一上","生物","光合作用","流程"] },

      // C3: 遺傳物質基礎
      { id: "h_bi_hl_b1_c3_s1_t1", name: "DNA 與 RNA 結構與功能（概念）", unitCode: "bio_b1", tags: ["高一上","生物","DNA","概念"] },
      { id: "h_bi_hl_b1_c3_s1_t2", name: "基因表現與蛋白質合成（流程題）", unitCode: "bio_b1", tags: ["高一上","生物","蛋白質合成","流程"] }
    ]
  },

  // ==========================================
  // Book 2 — 高一下（遺傳與演化基礎）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "biology",
    subjectName: "生物",
    version: "翰林",
    book: "Book 2",
    type: "regular",
    courses: [
      // C1: 孟德爾遺傳
      { id: "h_bi_hl_b2_c1_s1_t1", name: "遺傳：孟德爾定律與基因型/表現型計算（計算題）", unitCode: "bio_b2", tags: ["高一下","生物","遺傳","孟德爾"] },
      { id: "h_bi_hl_b2_c1_s1_t2", name: "連鎖與重組概念（圖表與推論）", unitCode: "bio_b2", tags: ["高一下","生物","遺傳","連鎖"] },

      // C2: 分子遺傳技術導入
      { id: "h_bi_hl_b2_c2_s1_t1", name: "分子技術：PCR、電泳原理與應用（概念/實驗題）", unitCode: "bio_b2", tags: ["高一下","生物","分子技術","PCR"] }
    ]
  },

  // ==========================================
  // Book 3 — 高二上（生態與環境、生物多樣性）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "biology",
    subjectName: "生物",
    version: "翰林",
    book: "Book 3",
    type: "regular",
    courses: [
      // C1: 生態系與能量流動
      { id: "h_bi_hl_b3_c1_s1_t1", name: "生態：能量金字塔與物質循環（概念）", unitCode: "bio_b3", tags: ["高二上","生物","生態","能量流"] },
      { id: "h_bi_hl_b3_c1_s1_t2", name: "族群動態與生態位（圖表與推論）", unitCode: "bio_b3", tags: ["高二上","生物","生態","族群"] },

      // C2: 生物多樣性與保育
      { id: "h_bi_hl_b3_c2_s1_t1", name: "多樣性指標與保育策略（概念與應用）", unitCode: "bio_b3", tags: ["高二上","生物","多樣性","保育"] }
    ]
  },

  // ==========================================
  // Book 4 — 高二下（人體生理、系統功能）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "biology",
    subjectName: "生物",
    version: "翰林",
    book: "Book 4",
    type: "regular",
    courses: [
      // C1: 循環系統與呼吸系統
      { id: "h_bi_hl_b4_c1_s1_t1", name: "循環系統：心臟結構與血液循環（概念）", unitCode: "bio_b4", tags: ["高二下","生物","循環系統","概念"] },
      { id: "h_bi_hl_b4_c1_s1_t2", name: "呼吸系統：氣體交換與肺功能（應用題）", unitCode: "bio_b4", tags: ["高二下","生物","呼吸系統","應用"] },

      // C2: 消化與代謝
      { id: "h_bi_hl_b4_c2_s1_t1", name: "消化系統：營養吸收與代謝（概念）", unitCode: "bio_b4", tags: ["高二下","生物","消化系統","概念"] }
    ]
  },

  // ==========================================
  // Book 5 — 高三（綜合、實驗設計、模考）
  // ==========================================
  {
    stage: "high_school",
    grade: "12",
    subject: "biology",
    subjectName: "生物",
    version: "翰林",
    book: "Book 5",
    type: "review",
    courses: [
      { id: "h_bi_hl_b5_c1_s1_t1", name: "綜合：遺傳/細胞/生態綜合題（模考）", unitCode: "bio_b5", tags: ["高三","生物","綜合","模考"] },
      { id: "h_bi_hl_b5_c1_s1_t2", name: "實驗設計：生物實驗假設與變因控制（實驗題）", unitCode: "bio_b5", tags: ["高三","生物","實驗","設計"] },
      { id: "h_bi_hl_b5_c1_s1_t3", name: "診斷：錯題分析與能力補強（Diagnostics）", unitCode: "bio_b5", tags: ["高三","生物","診斷","錯題分析"] }
    ]
  }
];
