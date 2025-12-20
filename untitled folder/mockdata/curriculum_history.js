// curriculum_history.js
// 歷史科 — 翰林 Book 1–5（高一上 ~ 高三）
// 顆粒度：概念 → 技能點 → 題型分類（C3+A）
// id 命名規則：h_hi_hl_b{冊}_c{概念}_s{技能}_t{題型}

window.Curriculum108_History = [
  // ==========================================
  // Book 1 — 高一上（史料與史學方法、古代文明）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "history",
    subjectName: "歷史",
    version: "翰林",
    book: "Book 1",
    type: "regular",
    courses: [
      // C1: 史學方法與史料判讀
      { id: "h_hi_hl_b1_c1_s1_t1", name: "史學方法：史料類型辨識（概念）", unitCode: "his_b1", tags: ["高一上","歷史","史料","概念"] },
      { id: "h_hi_hl_b1_c1_s1_t2", name: "史料判讀：一次/二次史料比較（Source Analysis）", unitCode: "his_b1", tags: ["高一上","歷史","史料","分析"] },
      { id: "h_hi_hl_b1_c1_s1_t3", name: "史料批判：作者立場與偏見辨識（Inference）", unitCode: "his_b1", tags: ["高一上","歷史","史料","批判"] },

      // C2: 古代文明（美索不達米亞、埃及、印度、中國）
      { id: "h_hi_hl_b1_c2_s1_t1", name: "古代文明：政治制度與社會結構（Detail）", unitCode: "his_b1", tags: ["高一上","歷史","古代文明","政治"] },
      { id: "h_hi_hl_b1_c2_s1_t2", name: "古代文明：宗教與文化影響（Inference）", unitCode: "his_b1", tags: ["高一上","歷史","古代文明","文化"] },
      { id: "h_hi_hl_b1_c2_s1_t3", name: "古代文明：經濟與技術發展（Cause & Effect）", unitCode: "his_b1", tags: ["高一上","歷史","古代文明","經濟"] },

      // C3: 歷史時序與年代判讀
      { id: "h_hi_hl_b1_c3_s1_t1", name: "年代判讀：年代排序與時序圖（Chronology）", unitCode: "his_b1", tags: ["高一上","歷史","年代","時序"] },
      { id: "h_hi_hl_b1_c3_s1_t2", name: "時代特徵：比較不同文明的時代特徵（Comparison）", unitCode: "his_b1", tags: ["高一上","歷史","比較","時代"] }
    ]
  },

  // ==========================================
  // Book 2 — 高一下（中世紀到近代早期、東亞史導入）
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "history",
    subjectName: "歷史",
    version: "翰林",
    book: "Book 2",
    type: "regular",
    courses: [
      // C1: 中世紀社會與制度
      { id: "h_hi_hl_b2_c1_s1_t1", name: "中世紀：封建制度與教會影響（Concept）", unitCode: "his_b2", tags: ["高一下","歷史","中世紀","制度"] },
      { id: "h_hi_hl_b2_c1_s1_t2", name: "中世紀經濟：農業與手工業的變遷（Detail）", unitCode: "his_b2", tags: ["高一下","歷史","中世紀","經濟"] },

      // C2: 文藝復興與宗教改革
      { id: "h_hi_hl_b2_c2_s1_t1", name: "文藝復興：人文主義與文化變革（Cause & Effect）", unitCode: "his_b2", tags: ["高一下","歷史","文藝復興","文化"] },
      { id: "h_hi_hl_b2_c2_s1_t2", name: "宗教改革：原因、過程與影響（Inference）", unitCode: "his_b2", tags: ["高一下","歷史","宗教改革","影響"] },

      // C3: 東亞史導入（中國、朝鮮、日本）
      { id: "h_hi_hl_b2_c3_s1_t1", name: "東亞史：朝貢體系與文化交流（Concept）", unitCode: "his_b2", tags: ["高一下","歷史","東亞","交流"] },
      { id: "h_hi_hl_b2_c3_s1_t2", name: "東亞政治：王朝更替與制度比較（Comparison）", unitCode: "his_b2", tags: ["高一下","歷史","東亞","政治"] }
    ]
  },

  // ==========================================
  // Book 3 — 高二上（近代革命與帝國主義、台灣近代史）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "history",
    subjectName: "歷史",
    version: "翰林",
    book: "Book 3",
    type: "regular",
    courses: [
      // C1: 近代革命（英國、法國、美國）
      { id: "h_hi_hl_b3_c1_s1_t1", name: "近代革命：原因與社會影響（Cause & Effect）", unitCode: "his_b3", tags: ["高二上","歷史","近代革命","原因"] },
      { id: "h_hi_hl_b3_c1_s1_t2", name: "革命比較：制度變遷與政治思想（Comparison）", unitCode: "his_b3", tags: ["高二上","歷史","革命","比較"] },

      // C2: 帝國主義與殖民擴張
      { id: "h_hi_hl_b3_c2_s1_t1", name: "帝國主義：動機、手段與影響（Inference）", unitCode: "his_b3", tags: ["高二上","歷史","帝國主義","影響"] },
      { id: "h_hi_hl_b3_c2_s1_t2", name: "殖民地社會變遷與反抗（Detail/Case Study）", unitCode: "his_b3", tags: ["高二上","歷史","殖民","案例"] },

      // C3: 台灣近代史導入
      { id: "h_hi_hl_b3_c3_s1_t1", name: "台灣近代史：開港、殖民與社會變遷（Chronology）", unitCode: "his_b3", tags: ["高二上","歷史","台灣史","近代"] },
      { id: "h_hi_hl_b3_c3_s1_t2", name: "台灣社會：族群互動與經濟變遷（Source Analysis）", unitCode: "his_b3", tags: ["高二上","歷史","台灣史","社會"] }
    ]
  },

  // ==========================================
  // Book 4 — 高二下（兩次世界大戰、冷戰與全球化）
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "history",
    subjectName: "歷史",
    version: "翰林",
    book: "Book 4",
    type: "regular",
    courses: [
      // C1: 第一次世界大戰與戰間期
      { id: "h_hi_hl_b4_c1_s1_t1", name: "一戰：起因、戰爭過程與後果（Cause & Effect）", unitCode: "his_b4", tags: ["高二下","歷史","一戰","原因"] },
      { id: "h_hi_hl_b4_c1_s1_t2", name: "戰間期：經濟危機與極權興起（Inference）", unitCode: "his_b4", tags: ["高二下","歷史","戰間期","極權"] },

      // C2: 第二次世界大戰與冷戰
      { id: "h_hi_hl_b4_c2_s1_t1", name: "二戰：戰略、同盟與戰後秩序（Detail）", unitCode: "his_b4", tags: ["高二下","歷史","二戰","戰略"] },
      { id: "h_hi_hl_b4_c2_s1_t2", name: "冷戰：意識形態對抗與代理戰爭（Inference）", unitCode: "his_b4", tags: ["高二下","歷史","冷戰","代理戰爭"] },

      // C3: 全球化與當代議題
      { id: "h_hi_hl_b4_c3_s1_t1", name: "全球化：經濟、文化與政治的互動（Concept）", unitCode: "his_b4", tags: ["高二下","歷史","全球化","概念"] },
      { id: "h_hi_hl_b4_c3_s1_t2", name: "當代議題：人權、移民與環境（Case Study）", unitCode: "his_b4", tags: ["高二下","歷史","當代議題","案例"] }
    ]
  },

  // ==========================================
  // Book 5 — 高三（歷史綜合、史料評析、模考）
  // ==========================================
  {
    stage: "high_school",
    grade: "12",
    subject: "history",
    subjectName: "歷史",
    version: "翰林",
    book: "Book 5",
    type: "review",
    courses: [
      { id: "h_hi_hl_b5_c1_s1_t1", name: "綜合：歷史主題綜合題（模考導向）", unitCode: "his_b5", tags: ["高三","歷史","綜合","模考"] },
      { id: "h_hi_hl_b5_c1_s1_t2", name: "史料評析：跨時代史料比較與論證（Source Comparison）", unitCode: "his_b5", tags: ["高三","歷史","史料","評析"] },
      { id: "h_hi_hl_b5_c1_s1_t3", name: "論述題：歷史因果與多角度分析（Essay）", unitCode: "his_b5", tags: ["高三","歷史","論述","分析"] },
      { id: "h_hi_hl_b5_c2_s1_t1", name: "診斷：錯題分析與能力補強計畫（Diagnostics）", unitCode: "his_b5", tags: ["高三","歷史","診斷","錯題分析"] }
    ]
  }
];
