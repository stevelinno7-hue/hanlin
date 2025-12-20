// curriculum_civics.js
// 公民科 — 翰林 Book 1–5（高一上 ~ 高三）
// 顆粒度：概念 → 技能點 → 題型分類
// id 命名規則：h_ci_hl_b{冊}_c{概念}_s{技能}_t{題型}

window.Curriculum108_Civics = [
  // Book 1 — 高一上 公民與社會基礎
  {
    stage: "high_school",
    grade: "10",
    subject: "civics",
    subjectName: "公民",
    version: "翰林",
    book: "Book 1",
    type: "regular",
    courses: [
      { id: "h_ci_hl_b1_c1_s1_t1", name: "公民概念 公民權利與義務（概念）", unitCode: "civ_b1", tags: ["高一上","公民","權利義務","概念"] },
      { id: "h_ci_hl_b1_c1_s1_t2", name: "法治與憲政 憲法基本原則（Detail）", unitCode: "civ_b1", tags: ["高一上","公民","憲法","法治"] },
      { id: "h_ci_hl_b1_c2_s1_t1", name: "民主制度 選舉、政黨與代議制（Concept）", unitCode: "civ_b1", tags: ["高一上","公民","民主","選舉"] },
      { id: "h_ci_hl_b1_c3_s1_t1", name: "社會結構 社會分層與流動（Data/Analysis）", unitCode: "civ_b1", tags: ["高一上","公民","社會","分層"] }
    ]
  },

  // Book 2 — 高一下 政治制度與公共政策
  {
    stage: "high_school",
    grade: "10",
    subject: "civics",
    subjectName: "公民",
    version: "翰林",
    book: "Book 2",
    type: "regular",
    courses: [
      { id: "h_ci_hl_b2_c1_s1_t1", name: "政府架構 行政、立法、司法職能（Concept）", unitCode: "civ_b2", tags: ["高一下","公民","政府","架構"] },
      { id: "h_ci_hl_b2_c1_s1_t2", name: "公共政策 制定流程與利害關係人分析（Case）", unitCode: "civ_b2", tags: ["高一下","公民","政策","分析"] },
      { id: "h_ci_hl_b2_c2_s1_t1", name: "地方治理 地方自治與參與機制（Application）", unitCode: "civ_b2", tags: ["高一下","公民","地方治理","參與"] }
    ]
  },

  // Book 3 — 高二上 經濟與社會議題
  {
    stage: "high_school",
    grade: "11",
    subject: "civics",
    subjectName: "公民",
    version: "翰林",
    book: "Book 3",
    type: "regular",
    courses: [
      { id: "h_ci_hl_b3_c1_s1_t1", name: "經濟基礎 供需、價格與市場機制（Concept）", unitCode: "civ_b3", tags: ["高二上","公民","經濟","供需"] },
      { id: "h_ci_hl_b3_c1_s1_t2", name: "財政與稅制 稅收功能與公共支出（Detail）", unitCode: "civ_b3", tags: ["高二上","公民","財政","稅制"] },
      { id: "h_ci_hl_b3_c2_s1_t1", name: "社會福利 社會保險與社會救助（Policy Analysis）", unitCode: "civ_b3", tags: ["高二上","公民","社會福利","政策"] }
    ]
  },

  // Book 4 — 高二下 公民權利與全球議題
  {
    stage: "high_school",
    grade: "11",
    subject: "civics",
    subjectName: "公民",
    version: "翰林",
    book: "Book 4",
    type: "regular",
    courses: [
      { id: "h_ci_hl_b4_c1_s1_t1", name: "人權與多元 社會包容與平等（Concept）", unitCode: "civ_b4", tags: ["高二下","公民","人權","多元"] },
      { id: "h_ci_hl_b4_c2_s1_t1", name: "國際組織 聯合國與區域組織功能（Detail）", unitCode: "civ_b4", tags: ["高二下","公民","國際組織","UN"] },
      { id: "h_ci_hl_b4_c3_s1_t1", name: "全球議題 氣候正義、移民與永續發展（Case/Policy）", unitCode: "civ_b4", tags: ["高二下","公民","全球議題","永續"] }
    ]
  },

  // Book 5 — 高三 綜合應用與公民實踐
  {
    stage: "high_school",
    grade: "12",
    subject: "civics",
    subjectName: "公民",
    version: "翰林",
    book: "Book 5",
    type: "review",
    courses: [
      { id: "h_ci_hl_b5_c1_s1_t1", name: "綜合：公民議題綜合題（模考導向）", unitCode: "civ_b5", tags: ["高三","公民","綜合","模考"] },
      { id: "h_ci_hl_b5_c1_s1_t2", name: "公民參與 社區行動計畫與實作（Project）", unitCode: "civ_b5", tags: ["高三","公民","參與","實作"] },
      { id: "h_ci_hl_b5_c2_s1_t1", name: "政策評估：案例分析與利害關係人建議（Policy Analysis）", unitCode: "civ_b5", tags: ["高三","公民","政策","分析"] },
      { id: "h_ci_hl_b5_c2_s1_t2", name: "診斷：錯題分析與能力補強計畫（Diagnostics）", unitCode: "civ_b5", tags: ["高三","公民","診斷","錯題分析"] }
    ]
  }
];
