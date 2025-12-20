// curriculum_earth.js
// 地科 — 翰林 Book 1–5（高一上 ~ 高三）
// 顆粒度：概念 → 技能點 → 題型分類
// id 命名規則：h_es_hl_b{冊}_c{概念}_s{技能}_t{題型}

window.Curriculum108_Earth = [
  // ==========================================
  // Book 1 — 高一上（地球與地球系統基礎）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "earth_science",
    subjectName: "地科",
    version: "翰林",
    book: "Book 1",
    type: "regular",
    courses: [
      // C1: 地球的構造與尺度
      { id: "h_es_hl_b1_c1_s1_t1", name: "地球構造：地核、地函、地殼的性質（概念）", unitCode: "es_b1", tags: ["高一上","地科","地球構造","概念"] },
      { id: "h_es_hl_b1_c1_s1_t2", name: "地球尺度：地球半徑、質量與密度估算（計算題）", unitCode: "es_b1", tags: ["高一上","地科","地球尺度","計算題"] },

      // C2: 地質作用與岩石循環
      { id: "h_es_hl_b1_c2_s1_t1", name: "岩石三類：火成、沉積、變質岩的形成（概念）", unitCode: "es_b1", tags: ["高一上","地科","岩石","概念"] },
      { id: "h_es_hl_b1_c2_s1_t2", name: "岩石循環：作用過程與地質時間（圖表題）", unitCode: "es_b1", tags: ["高一上","地科","岩石循環","圖表"] },

      // C3: 地表與地形
      { id: "h_es_hl_b1_c3_s1_t1", name: "地形：山地、平原、盆地的成因（概念）", unitCode: "es_b1", tags: ["高一上","地科","地形","概念"] },
      { id: "h_es_hl_b1_c3_s1_t2", name: "地形判讀：等高線與地形剖面（圖形題）", unitCode: "es_b1", tags: ["高一上","地科","等高線","圖形題"] },

      // C4: 實驗與觀察技能
      { id: "h_es_hl_b1_c4_s1_t1", name: "實驗：岩石與礦物辨識（實驗/觀察題）", unitCode: "es_b1", tags: ["高一上","地科","實驗","岩石辨識"] },
      { id: "h_es_hl_b1_c4_s1_t2", name: "資料處理：地質時間尺度與相對年代判定（資料題）", unitCode: "es_b1", tags: ["高一上","地科","地質時間","資料"] }
    ]
  },

  // ==========================================
  // Book 2 — 高一下（板塊構造與地震火山）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "earth_science",
    subjectName: "地科",
    version: "翰林",
    book: "Book 2",
    type: "regular",
    courses: [
      // C1: 板塊構造理論
      { id: "h_es_hl_b2_c1_s1_t1", name: "板塊構造：板塊類型與邊界（概念）", unitCode: "es_b2", tags: ["高一下","地科","板塊構造","概念"] },
      { id: "h_es_hl_b2_c1_s1_t2", name: "板塊運動：板塊速率與相互作用（計算/推論）", unitCode: "es_b2", tags: ["高一下","地科","板塊運動","計算"] },

      // C2: 地震學
      { id: "h_es_hl_b2_c2_s1_t1", name: "地震：震源、震央與震級/烈度差異（概念）", unitCode: "es_b2", tags: ["高一下","地科","地震","概念"] },
      { id: "h_es_hl_b2_c2_s1_t2", name: "地震資料：震波傳播與地震定位（計算/圖形）", unitCode: "es_b2", tags: ["高一下","地科","地震","震波"] },

      // C3: 火山與岩漿作用
      { id: "h_es_hl_b2_c3_s1_t1", name: "火山類型與噴發機制（概念）", unitCode: "es_b2", tags: ["高一下","地科","火山","概念"] },
      { id: "h_es_hl_b2_c3_s1_t2", name: "火山危害評估與防災（應用題）", unitCode: "es_b2", tags: ["高一下","地科","火山","防災"] },

      // C4: 地震與火山的社會影響
      { id: "h_es_hl_b2_c4_s1_t1", name: "風險評估：地震/火山災害的社會經濟影響（資料題）", unitCode: "es_b2", tags: ["高一下","地科","風險評估","資料"] }
    ]
  },

  // ==========================================
  // Book 3 — 高二上（大氣與氣象基礎）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "earth_science",
    subjectName: "地科",
    version: "翰林",
    book: "Book 3",
    type: "regular",
    courses: [
      // C1: 大氣結構與組成
      { id: "h_es_hl_b3_c1_s1_t1", name: "大氣層次：對流層、平流層等的特性（概念）", unitCode: "es_b3", tags: ["高二上","地科","大氣","概念"] },
      { id: "h_es_hl_b3_c1_s1_t2", name: "大氣組成與溫室效應（概念與資料分析）", unitCode: "es_b3", tags: ["高二上","地科","大氣組成","資料"] },

      // C2: 氣象要素與天氣系統
      { id: "h_es_hl_b3_c2_s1_t1", name: "氣壓、風、雲與降水的形成（概念）", unitCode: "es_b3", tags: ["高二上","地科","氣象","概念"] },
      { id: "h_es_hl_b3_c2_s1_t2", name: "天氣圖判讀：等壓線、鋒面與氣旋（圖表題）", unitCode: "es_b3", tags: ["高二上","地科","天氣圖","圖表"] },

      // C3: 氣候與氣候變遷
      { id: "h_es_hl_b3_c3_s1_t1", name: "氣候分類與氣候因子（概念）", unitCode: "es_b3", tags: ["高二上","地科","氣候","概念"] },
      { id: "h_es_hl_b3_c3_s1_t2", name: "氣候變遷證據與人為影響（資料分析/推論）", unitCode: "es_b3", tags: ["高二上","地科","氣候變遷","資料"] }
    ]
  },

  // ==========================================
  // Book 4 — 高二下（海洋與地表水文）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "earth_science",
    subjectName: "地科",
    version: "翰林",
    book: "Book 4",
    type: "regular",
    courses: [
      // C1: 海洋系統
      { id: "h_es_hl_b4_c1_s1_t1", name: "海洋構造：洋流、潮汐與海洋循環（概念）", unitCode: "es_b4", tags: ["高二下","地科","海洋","概念"] },
      { id: "h_es_hl_b4_c1_s1_t2", name: "海洋資料：海溫、鹽度與海洋生態影響（資料題）", unitCode: "es_b4", tags: ["高二下","地科","海洋","資料"] },

      // C2: 水文循環與地表水
      { id: "h_es_hl_b4_c2_s1_t1", name: "水文循環：降水、滲透、徑流（概念）", unitCode: "es_b4", tags: ["高二下","地科","水文","概念"] },
      { id: "h_es_hl_b4_c2_s1_t2", name: "河川與洪水：流量計算與防洪策略（應用題）", unitCode: "es_b4", tags: ["高二下","地科","河川","應用"] },

      // C3: 海岸與人類活動
      { id: "h_es_hl_b4_c3_s1_t1", name: "海岸侵蝕與保育（概念與案例分析）", unitCode: "es_b4", tags: ["高二下","地科","海岸","案例"] }
    ]
  },

  // ==========================================
  // Book 5 — 高三（綜合、環境議題與防災）
  // ==========================================
  {
    stage: "high_school",
    grade: "12",
    subject: "earth_science",
    subjectName: "地科",
    version: "翰林",
    book: "Book 5",
    type: "review",
    courses: [
      { id: "h_es_hl_b5_c1_s1_t1", name: "綜合：地科綜合題（板塊/氣象/海洋/水文）（模考）", unitCode: "es_b5", tags: ["高三","地科","綜合","模考"] },
      { id: "h_es_hl_b5_c1_s1_t2", name: "環境議題：氣候變遷、海平面上升與因應策略（資料與推論）", unitCode: "es_b5", tags: ["高三","地科","環境議題","資料"] },
      { id: "h_es_hl_b5_c2_s1_t1", name: "防災：地震/海嘯/土石流防災與避難計畫（應用題）", unitCode: "es_b5", tags: ["高三","地科","防災","應用"] },
      { id: "h_es_hl_b5_c2_s1_t2", name: "實驗設計：地科調查方法與資料分析（實驗/調查題）", unitCode: "es_b5", tags: ["高三","地科","實驗","調查"] }
    ]
  }
];
