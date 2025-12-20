// curriculum_chemistry.js
// 化學科 — 翰林 Book 1–5（高一上 ~ 高三）
// 顆粒度：概念 → 技能點 → 題型分類
// id 命名規則：h_ch_hl_b{冊}_c{概念}_s{技能}_t{題型}

window.Curriculum108_Chemistry = [
  // ==========================================
  // Book 1 — 高一上（物質的性質與原子結構）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "chemistry",
    subjectName: "化學",
    version: "翰林",
    book: "Book 1",
    type: "regular",
    courses: [
      // C1: 物質分類與性質
      { id: "h_ch_hl_b1_c1_s1_t1", name: "物質分類：純物質與混合物（概念）", unitCode: "chem_b1", tags: ["高一上","化學","物質分類","概念"] },
      { id: "h_ch_hl_b1_c1_s1_t2", name: "物質性質：密度、熔點、沸點（計算題）", unitCode: "chem_b1", tags: ["高一上","化學","性質","計算題"] },

      // C2: 原子結構
      { id: "h_ch_hl_b1_c2_s1_t1", name: "原子結構：質子、中子、電子與原子序（概念）", unitCode: "chem_b1", tags: ["高一上","化學","原子","概念"] },
      { id: "h_ch_hl_b1_c2_s1_t2", name: "電子排布與能階（計算/判斷題）", unitCode: "chem_b1", tags: ["高一上","化學","電子排布","計算題"] },

      // C3: 化學鍵與分子結構
      { id: "h_ch_hl_b1_c3_s1_t1", name: "化學鍵：離子鍵、共價鍵、金屬鍵（概念）", unitCode: "chem_b1", tags: ["高一上","化學","化學鍵","概念"] },
      { id: "h_ch_hl_b1_c3_s1_t2", name: "分子幾何與極性判斷（VSEPR）（計算/判斷）", unitCode: "chem_b1", tags: ["高一上","化學","分子結構","VSEPR"] },

      // C4: 實驗技能
      { id: "h_ch_hl_b1_c4_s1_t1", name: "實驗：溶液配製與濃度計算（實驗題）", unitCode: "chem_b1", tags: ["高一上","化學","實驗","濃度"] }
    ]
  },

  // ==========================================
  // Book 2 — 高一下（化學反應、化學方程式、計量）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "chemistry",
    subjectName: "化學",
    version: "翰林",
    book: "Book 2",
    type: "regular",
    courses: [
      // C1: 化學方程式與配平
      { id: "h_ch_hl_b2_c1_s1_t1", name: "化學方程式：配平與守恆（計算題）", unitCode: "chem_b2", tags: ["高一下","化學","方程式","配平"] },
      { id: "h_ch_hl_b2_c1_s1_t2", name: "反應類型：置換、雙置換、燃燒（辨識題）", unitCode: "chem_b2", tags: ["高一下","化學","反應類型","辨識"] },

      // C2: 物質的量與計量
      { id: "h_ch_hl_b2_c2_s1_t1", name: "摩爾概念與計量計算（計算題）", unitCode: "chem_b2", tags: ["高一下","化學","摩爾","計算題"] },
      { id: "h_ch_hl_b2_c2_s1_t2", name: "產率與限制試劑問題（應用題）", unitCode: "chem_b2", tags: ["高一下","化學","產率","應用題"] },

      // C3: 酸鹼基礎
      { id: "h_ch_hl_b2_c3_s1_t1", name: "酸鹼概念：pH、酸鹼強弱（概念與計算）", unitCode: "chem_b2", tags: ["高一下","化學","酸鹼","pH"] },
      { id: "h_ch_hl_b2_c3_s1_t2", name: "滴定曲線與滴定計算（實驗/計算題）", unitCode: "chem_b2", tags: ["高一下","化學","滴定","實驗"] }
    ]
  },

  // ==========================================
  // Book 3 — 高二上（氣體、溶液、熱化學）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "chemistry",
    subjectName: "化學",
    version: "翰林",
    book: "Book 3",
    type: "regular",
    courses: [
      // C1: 氣體定律
      { id: "h_ch_hl_b3_c1_s1_t1", name: "氣體定律：理想氣體方程式與計算（計算題）", unitCode: "chem_b3", tags: ["高二上","化學","氣體","理想氣體"] },
      { id: "h_ch_hl_b3_c1_s1_t2", name: "氣體混合與分壓（道爾頓定律）（應用題）", unitCode: "chem_b3", tags: ["高二上","化學","氣體","分壓"] },

      // C2: 溶液與溶解度
      { id: "h_ch_hl_b3_c2_s1_t1", name: "溶液濃度表示（質量百分比、摩爾濃度）（計算題）", unitCode: "chem_b3", tags: ["高二上","化學","溶液","濃度"] },
      { id: "h_ch_hl_b3_c2_s1_t2", name: "溶解度與沉澱判斷（應用題）", unitCode: "chem_b3", tags: ["高二上","化學","溶解度","沉澱"] },

      // C3: 熱化學
      { id: "h_ch_hl_b3_c3_s1_t1", name: "熱化學：焓變與反應熱計算（計算題）", unitCode: "chem_b3", tags: ["高二上","化學","熱化學","焓變"] }
    ]
  },

  // ==========================================
  // Book 4 — 高二下（化學平衡、速率、電化學）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "chemistry",
    subjectName: "化學",
    version: "翰林",
    book: "Book 4",
    type: "regular",
    courses: [
      // C1: 化學平衡
      { id: "h_ch_hl_b4_c1_s1_t1", name: "化學平衡：平衡常數與濃度關係（計算題）", unitCode: "chem_b4", tags: ["高二下","化學","平衡","Kc"] },
      { id: "h_ch_hl_b4_c1_s1_t2", name: "勒夏特列原理與擾動反應（應用題）", unitCode: "chem_b4", tags: ["高二下","化學","平衡","勒夏特列"] },

      // C2: 反應速率
      { id: "h_ch_hl_b4_c2_s1_t1", name: "反應速率：速率方程式與反應級數（計算題）", unitCode: "chem_b4", tags: ["高二下","化學","速率","計算題"] },

      // C3: 電化學
      { id: "h_ch_hl_b4_c3_s1_t1", name: "電池與電極電位（概念與計算）", unitCode: "chem_b4", tags: ["高二下","化學","電化學","電位"] }
    ]
  },

  // ==========================================
  // Book 5 — 高三（綜合、模考、實驗設計）
  // ==========================================
  {
    stage: "high_school",
    grade: "12",
    subject: "chemistry",
    subjectName: "化學",
    version: "翰林",
    book: "Book 5",
    type: "review",
    courses: [
      { id: "h_ch_hl_b5_c1_s1_t1", name: "綜合：化學計量與反應綜合題（模考）", unitCode: "chem_b5", tags: ["高三","化學","綜合","模考"] },
      { id: "h_ch_hl_b5_c1_s1_t2", name: "實驗設計：滴定/熱化學/速率實驗設計與資料分析", unitCode: "chem_b5", tags: ["高三","化學","實驗","設計"] },
      { id: "h_ch_hl_b5_c1_s1_t3", name: "診斷：錯題分析與能力補強（Diagnostics）", unitCode: "chem_b5", tags: ["高三","化學","診斷","錯題分析"] }
    ]
  }
];
