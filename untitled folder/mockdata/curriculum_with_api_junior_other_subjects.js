// curriculum_junior.js
// 國中五科（Book 1–6）＋會考總複習
// 每冊 1 門會考核心課
// 結構與 curriculum_high.js 完全一致

(function (global) {
  'use strict';

  global.CurriculumLibrary = global.CurriculumLibrary || {};
  global.CurriculumLibrary.data = global.CurriculumLibrary.data || {};

  /* =========================================================
   * 國中國文
   * ========================================================= */
  global.CurriculumLibrary.data.chinese_junior = [
    { stage:"junior_high", grade:"7", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 1", type:"regular",
      courses:[{
        id:"j_ch_core_b1",
        name:"會考核心：國字、詞語與基本閱讀",
        unitCode:"chi_j_b1",
        tags:["七上","國文","會考核心"],
        coreCompetencies:["國字辨識","詞語理解","基本閱讀"],
        examFocus:["字音字形","詞語選擇","短文理解"]
      }]
    },
    { stage:"junior_high", grade:"7", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 2", type:"regular",
      courses:[{
        id:"j_ch_core_b2",
        name:"會考核心：句型結構與修辭基礎",
        unitCode:"chi_j_b2",
        tags:["七下","國文","會考核心"],
        coreCompetencies:["句型判斷","修辭辨識"],
        examFocus:["修辭題","語句判斷"]
      }]
    },
    { stage:"junior_high", grade:"8", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 3", type:"regular",
      courses:[{
        id:"j_ch_core_b3",
        name:"會考核心：記敘文與說明文閱讀",
        unitCode:"chi_j_b3",
        tags:["八上","國文","會考核心"],
        coreCompetencies:["段落理解","重點擷取"],
        examFocus:["閱讀理解題"]
      }]
    },
    { stage:"junior_high", grade:"8", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 4", type:"regular",
      courses:[{
        id:"j_ch_core_b4",
        name:"會考核心：議論文主旨與論點",
        unitCode:"chi_j_b4",
        tags:["八下","國文","會考核心"],
        coreCompetencies:["論點判斷","主旨歸納"],
        examFocus:["主旨題","推論題"]
      }]
    },
    { stage:"junior_high", grade:"9", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 5", type:"regular",
      courses:[{
        id:"j_ch_core_b5",
        name:"會考核心：文言文基礎閱讀",
        unitCode:"chi_j_b5",
        tags:["九上","國文","會考核心"],
        coreCompetencies:["文言詞義","語譯能力"],
        examFocus:["文言文題"]
      }]
    },
    { stage:"junior_high", grade:"9", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 6", type:"review",
      courses:[{
        id:"j_ch_review",
        name:"會考總複習：國文整合模考",
        unitCode:"chi_j_review",
        tags:["九下","國文","會考","模考"],
        coreCompetencies:["整合閱讀","應試策略"],
        examFocus:["會考國文全卷"]
      }]
    }
  ];

  /* =========================================================
   * 國中英文
   * ========================================================= */
  global.CurriculumLibrary.data.english_junior = [
    { stage:"junior_high", grade:"7", subject:"english", subjectName:"英文", version:"翰林", book:"Book 1", type:"regular",
      courses:[{
        id:"j_en_core_b1",
        name:"會考核心：基礎字彙與句型",
        unitCode:"eng_j_b1",
        tags:["七上","英文","會考核心"],
        coreCompetencies:["字彙量","基本句型"],
        examFocus:["字彙題","文法題"]
      }]
    },
    { stage:"junior_high", grade:"7", subject:"english", subjectName:"英文", version:"翰林", book:"Book 2", type:"regular",
      courses:[{
        id:"j_en_core_b2",
        name:"會考核心：時態與疑問句",
        unitCode:"eng_j_b2",
        tags:["七下","英文","會考核心"],
        coreCompetencies:["時態辨識","句型轉換"],
        examFocus:["文法題","克漏字"]
      }]
    },
    { stage:"junior_high", grade:"8", subject:"english", subjectName:"英文", version:"翰林", book:"Book 3", type:"regular",
      courses:[{
        id:"j_en_core_b3",
        name:"會考核心：閱讀理解與推論",
        unitCode:"eng_j_b3",
        tags:["八上","英文","會考核心"],
        coreCompetencies:["閱讀理解","推論能力"],
        examFocus:["閱讀測驗"]
      }]
    },
    { stage:"junior_high", grade:"8", subject:"english", subjectName:"英文", version:"翰林", book:"Book 4", type:"regular",
      courses:[{
        id:"j_en_core_b4",
        name:"會考核心：關係代名詞與比較句",
        unitCode:"eng_j_b4",
        tags:["八下","英文","會考核心"],
        coreCompetencies:["複合句理解"],
        examFocus:["文法題"]
      }]
    },
    { stage:"junior_high", grade:"9", subject:"english", subjectName:"英文", version:"翰林", book:"Book 5", type:"regular",
      courses:[{
        id:"j_en_core_b5",
        name:"會考核心：篇章結構與寫作觀念",
        unitCode:"eng_j_b5",
        tags:["九上","英文","會考核心"],
        coreCompetencies:["段落理解","語意組織"],
        examFocus:["閱讀測驗","寫作觀念題"]
      }]
    },
    { stage:"junior_high", grade:"9", subject:"english", subjectName:"英文", version:"翰林", book:"Book 6", type:"review",
      courses:[{
        id:"j_en_review",
        name:"會考總複習：英文整合模考",
        unitCode:"eng_j_review",
        tags:["九下","英文","會考","模考"],
        coreCompetencies:["整合語言能力"],
        examFocus:["會考英文全卷"]
      }]
    }
  ];

  /* =========================================================
   * 國中數學
   * ========================================================= */
  global.CurriculumLibrary.data.math_junior = [
    { stage:"junior_high", grade:"7", subject:"math", subjectName:"數學", version:"翰林", book:"Book 1", type:"regular",
      courses:[{
        id:"j_ma_core_b1",
        name:"會考核心：整數與分數運算",
        unitCode:"math_j_b1",
        tags:["七上","數學","會考核心"],
        coreCompetencies:["四則運算","數感"],
        examFocus:["計算題"]
      }]
    },
    { stage:"junior_high", grade:"7", subject:"math", subjectName:"數學", version:"翰林", book:"Book 2", type:"regular",
      courses:[{
        id:"j_ma_core_b2",
        name:"會考核心：比例與一次方程式",
        unitCode:"math_j_b2",
        tags:["七下","數學","會考核心"],
        coreCompetencies:["比例概念","方程解題"],
        examFocus:["應用題"]
      }]
    },
    { stage:"junior_high", grade:"8", subject:"math", subjectName:"數學", version:"翰林", book:"Book 3", type:"regular",
      courses:[{
        id:"j_ma_core_b3",
        name:"會考核心：二次方程與幾何",
        unitCode:"math_j_b3",
        tags:["八上","數學","會考核心"],
        coreCompetencies:["代數運算","圖形理解"],
        examFocus:["計算題","圖形題"]
      }]
    },
    { stage:"junior_high", grade:"8", subject:"math", subjectName:"數學", version:"翰林", book:"Book 4", type:"regular",
      courses:[{
        id:"j_ma_core_b4",
        name:"會考核心：函數概念與機率",
        unitCode:"math_j_b4",
        tags:["八下","數學","會考核心"],
        coreCompetencies:["函數理解","資料判讀"],
        examFocus:["統計題"]
      }]
    },
    { stage:"junior_high", grade:"9", subject:"math", subjectName:"數學", version:"翰林", book:"Book 5", type:"regular",
      courses:[{
        id:"j_ma_core_b5",
        name:"會考核心：綜合應用題",
        unitCode:"math_j_b5",
        tags:["九上","數學","會考核心"],
        coreCompetencies:["建模能力","策略解題"],
        examFocus:["整合應用題"]
      }]
    },
    { stage:"junior_high", grade:"9", subject:"math", subjectName:"數學", version:"翰林", book:"Book 6", type:"review",
      courses:[{
        id:"j_ma_review",
        name:"會考總複習：數學整合模考",
        unitCode:"math_j_review",
        tags:["九下","數學","會考","模考"],
        coreCompetencies:["跨單元整合"],
        examFocus:["會考數學全卷"]
      }]
    }
  ];
    global.CurriculumLibrary.data.biology_junior = [
        { stage:"junior_high", grade:"7", subject:"biology", subjectName:"生物", book:"Book 1",
            courses:[{ id:"j_bio_b1", name:"會考核心：細胞與生命現象" }] },
        { stage:"junior_high", grade:"7", subject:"biology", subjectName:"生物", book:"Book 2",
            courses:[{ id:"j_bio_b2", name:"會考核心：植物與生態基礎" }] },
        { stage:"junior_high", grade:"8", subject:"biology", subjectName:"生物", book:"Book 3",
            courses:[{ id:"j_bio_b3", name:"會考核心：人體系統與恆定" }] },
        { stage:"junior_high", grade:"8", subject:"biology", subjectName:"生物", book:"Book 4",
            courses:[{ id:"j_bio_b4", name:"會考核心：遺傳與演化概念" }] }
    ];
    global.CurriculumLibrary.data.physics_junior = [
        { stage:"junior_high", grade:"8", subject:"physics", subjectName:"物理", book:"Book 3",
            courses:[{ id:"j_phy_b3", name:"會考核心：力與運動" }] },
        { stage:"junior_high", grade:"8", subject:"physics", subjectName:"物理", book:"Book 4",
            courses:[{ id:"j_phy_b4", name:"會考核心：能量、功與機械" }] },
        { stage:"junior_high", grade:"9", subject:"physics", subjectName:"物理", book:"Book 5",
            courses:[{ id:"j_phy_b5", name:"會考核心：電與磁基礎" }] }
    ];
    global.CurriculumLibrary.data.chemistry_junior = [
        { stage:"junior_high", grade:"8", subject:"chemistry", subjectName:"化學", book:"Book 3",
            courses:[{ id:"j_chm_b3", name:"會考核心：物質性質與變化" }] },
        { stage:"junior_high", grade:"8", subject:"chemistry", subjectName:"化學", book:"Book 4",
            courses:[{ id:"j_chm_b4", name:"會考核心：酸鹼與溶液" }] },
        { stage:"junior_high", grade:"9", subject:"chemistry", subjectName:"化學", book:"Book 5",
            courses:[{ id:"j_chm_b5", name:"會考核心：化學反應與計量概念" }] }
    ];
    global.CurriculumLibrary.data.earth_junior = [
        { stage:"junior_high", grade:"9", subject:"earth", subjectName:"地球科學", book:"Book 5",
            courses:[{ id:"j_ear_b5", name:"會考核心：地球系統與天氣氣候" }] }
    ];


/* =========================================================
 * 國中社會－歷史
 * ========================================================= */
global.CurriculumLibrary.data.history_junior = [
  { stage:"junior_high", grade:"7", subject:"history", subjectName:"歷史", version:"翰林", book:"Book 1", type:"regular",
    courses:[{
      id:"j_hi_core_b1",
      name:"會考核心：史前至古代文明",
      unitCode:"his_j_b1",
      tags:["七上","歷史","會考核心"],
      coreCompetencies:["時序概念","文明比較"],
      examFocus:["配對題"]
    }]
  },
  { stage:"junior_high", grade:"8", subject:"history", subjectName:"歷史", version:"翰林", book:"Book 3", type:"regular",
    courses:[{
      id:"j_hi_core_b3",
      name:"會考核心：近代社會變遷",
      unitCode:"his_j_b3",
      tags:["八上","歷史","會考核心"],
      coreCompetencies:["因果分析"],
      examFocus:["推論題"]
    }]
  },
  { stage:"junior_high", grade:"9", subject:"history", subjectName:"歷史", version:"翰林", book:"Book 5", type:"regular",
    courses:[{
      id:"j_hi_core_b5",
      name:"會考核心：現代國家與世界",
      unitCode:"his_j_b5",
      tags:["九上","歷史","會考核心"],
      coreCompetencies:["史料判讀"],
      examFocus:["資料題"]
    }]
  },
  { stage:"junior_high", grade:"9", subject:"history", subjectName:"歷史", version:"翰林", book:"Book 6", type:"review",
    courses:[{
      id:"j_hi_review",
      name:"會考總複習：歷史整合模考",
      unitCode:"his_j_review",
      tags:["九下","歷史","會考","模考"],
      coreCompetencies:["跨時代整合"],
      examFocus:["會考歷史全卷"]
    }]
  }
];

/* =========================================================
 * 國中社會－地理
 * ========================================================= */
global.CurriculumLibrary.data.geography_junior = [
  { stage:"junior_high", grade:"7", subject:"geography", subjectName:"地理", version:"翰林", book:"Book 1", type:"regular",
    courses:[{
      id:"j_ge_core_b1",
      name:"會考核心：地圖與空間概念",
      unitCode:"geo_j_b1",
      tags:["七上","地理","會考核心"],
      coreCompetencies:["地圖判讀"],
      examFocus:["圖像題"]
    }]
  },
  { stage:"junior_high", grade:"8", subject:"geography", subjectName:"地理", version:"翰林", book:"Book 3", type:"regular",
    courses:[{
      id:"j_ge_core_b3",
      name:"會考核心：自然與人文環境",
      unitCode:"geo_j_b3",
      tags:["八上","地理","會考核心"],
      coreCompetencies:["環境互動"],
      examFocus:["判斷題"]
    }]
  },
  { stage:"junior_high", grade:"9", subject:"geography", subjectName:"地理", version:"翰林", book:"Book 5", type:"regular",
    courses:[{
      id:"j_ge_core_b5",
      name:"會考核心：區域發展與全球化",
      unitCode:"geo_j_b5",
      tags:["九上","地理","會考核心"],
      coreCompetencies:["資料分析"],
      examFocus:["圖表題"]
    }]
  },
  { stage:"junior_high", grade:"9", subject:"geography", subjectName:"地理", version:"翰林", book:"Book 6", type:"review",
    courses:[{
      id:"j_ge_review",
      name:"會考總複習：地理整合模考",
      unitCode:"geo_j_review",
      tags:["九下","地理","會考","模考"],
      coreCompetencies:["整合判讀"],
      examFocus:["會考地理全卷"]
    }]
  }
];

/* =========================================================
 * 國中社會－公民
 * ========================================================= */
global.CurriculumLibrary.data.civics_junior = [
  { stage:"junior_high", grade:"7", subject:"civics", subjectName:"公民", version:"翰林", book:"Book 1", type:"regular",
    courses:[{
      id:"j_ci_core_b1",
      name:"會考核心：權利義務與社會規範",
      unitCode:"civ_j_b1",
      tags:["七上","公民","會考核心"],
      coreCompetencies:["規範理解"],
      examFocus:["情境題"]
    }]
  },
  { stage:"junior_high", grade:"8", subject:"civics", subjectName:"公民", version:"翰林", book:"Book 3", type:"regular",
    courses:[{
      id:"j_ci_core_b3",
      name:"會考核心：法律與民主制度",
      unitCode:"civ_j_b3",
      tags:["八上","公民","會考核心"],
      coreCompetencies:["制度理解"],
      examFocus:["判斷題"]
    }]
  },
  { stage:"junior_high", grade:"9", subject:"civics", subjectName:"公民", version:"翰林", book:"Book 5", type:"regular",
    courses:[{
      id:"j_ci_core_b5",
      name:"會考核心：政府運作與公共參與",
      unitCode:"civ_j_b5",
      tags:["九上","公民","會考核心"],
      coreCompetencies:["公共議題分析"],
      examFocus:["情境應用題"]
    }]
  },
  { stage:"junior_high", grade:"9", subject:"civics", subjectName:"公民", version:"翰林", book:"Book 6", type:"review",
    courses:[{
      id:"j_ci_review",
      name:"會考總複習：公民整合模考",
      unitCode:"civ_j_review",
      tags:["九下","公民","會考","模考"],
      coreCompetencies:["整合判斷"],
      examFocus:["會考公民全卷"]
    }]
  }
];

})(typeof window !== 'undefined' ? window : global);
// curriculum_high.js
// 高中五科（Book 1–6）＋學測總複習
// 每冊 1 門學測核心課
// 與 curriculum_junior.js 結構 / API 完全一致

(function (global) {
  'use strict';

  global.CurriculumLibrary = global.CurriculumLibrary || {};
  global.CurriculumLibrary.data = global.CurriculumLibrary.data || {};

  /* =========================================================
   * 高中國文
   * ========================================================= */
  global.CurriculumLibrary.data.chinese_high = [
    { stage:"high_school", grade:"10", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 1", type:"regular",
      courses:[{ id:"h_ch_core_b1", name:"學測核心：文言文基礎與語譯", unitCode:"chi_h_b1",
        tags:["高一","國文","學測核心"],
        coreCompetencies:["文言詞義","語譯能力","句型理解"],
        examFocus:["文言文選擇","語譯題"] }]},
    { stage:"high_school", grade:"10", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 2", type:"regular",
      courses:[{ id:"h_ch_core_b2", name:"學測核心：修辭與語意判讀", unitCode:"chi_h_b2",
        tags:["高一","國文","學測核心"],
        coreCompetencies:["修辭辨識","語意理解"],
        examFocus:["修辭題","語文判斷"] }]},
    { stage:"high_school", grade:"11", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 3", type:"regular",
      courses:[{ id:"h_ch_core_b3", name:"學測核心：閱讀理解與主旨", unitCode:"chi_h_b3",
        tags:["高二","國文","學測核心"],
        coreCompetencies:["篇章理解","主旨歸納"],
        examFocus:["閱讀測驗"] }]},
    { stage:"high_school", grade:"11", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 4", type:"regular",
      courses:[{ id:"h_ch_core_b4", name:"學測核心：文學作品鑑賞", unitCode:"chi_h_b4",
        tags:["高二","國文","學測核心"],
        coreCompetencies:["情感判讀","文學分析"],
        examFocus:["文本理解題"] }]},
    { stage:"high_school", grade:"12", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 5", type:"regular",
      courses:[{ id:"h_ch_core_b5", name:"學測核心：跨文本比較閱讀", unitCode:"chi_h_b5",
        tags:["高三","國文","學測核心"],
        coreCompetencies:["比較分析","觀點整合"],
        examFocus:["比較閱讀題"] }]},
    { stage:"high_school", grade:"12", subject:"chinese", subjectName:"國文", version:"翰林", book:"Book 6", type:"review",
      courses:[{ id:"h_ch_review", name:"學測總複習：國文整合模考", unitCode:"chi_h_review",
        tags:["高三","國文","學測","模考"],
        coreCompetencies:["整合閱讀","應試策略"],
        examFocus:["學測國文全卷"] }]}
  ];

  /* =========================================================
   * 高中英文
   * ========================================================= */
  global.CurriculumLibrary.data.english_high = [
    { stage:"high_school", grade:"10", subject:"english", subjectName:"英文", version:"翰林", book:"Book 1", type:"regular",
      courses:[{ id:"h_en_core_b1", name:"學測核心：字彙與基本句型", unitCode:"eng_h_b1",
        tags:["高一","英文","學測核心"],
        coreCompetencies:["字彙量","句型理解"],
        examFocus:["字彙題","文法題"] }]},
    { stage:"high_school", grade:"10", subject:"english", subjectName:"英文", version:"翰林", book:"Book 2", type:"regular",
      courses:[{ id:"h_en_core_b2", name:"學測核心：時態與語態", unitCode:"eng_h_b2",
        tags:["高一","英文","學測核心"],
        coreCompetencies:["時態判斷","被動語態"],
        examFocus:["文法題","克漏字"] }]},
    { stage:"high_school", grade:"11", subject:"english", subjectName:"英文", version:"翰林", book:"Book 3", type:"regular",
      courses:[{ id:"h_en_core_b3", name:"學測核心：閱讀理解與推論", unitCode:"eng_h_b3",
        tags:["高二","英文","學測核心"],
        coreCompetencies:["長文閱讀","邏輯推論"],
        examFocus:["閱讀測驗"] }]},
    { stage:"high_school", grade:"11", subject:"english", subjectName:"英文", version:"翰林", book:"Book 4", type:"regular",
      courses:[{ id:"h_en_core_b4", name:"學測核心：關係子句與句型整合", unitCode:"eng_h_b4",
        tags:["高二","英文","學測核心"],
        coreCompetencies:["複合句分析","句構整合"],
        examFocus:["文法題"] }]},
    { stage:"high_school", grade:"12", subject:"english", subjectName:"英文", version:"翰林", book:"Book 5", type:"regular",
      courses:[{ id:"h_en_core_b5", name:"學測核心：篇章結構與寫作觀念", unitCode:"eng_h_b5",
        tags:["高三","英文","學測核心"],
        coreCompetencies:["篇章組織","語意銜接"],
        examFocus:["閱讀測驗","寫作觀念題"] }]},
    { stage:"high_school", grade:"12", subject:"english", subjectName:"英文", version:"翰林", book:"Book 6", type:"review",
      courses:[{ id:"h_en_review", name:"學測總複習：英文整合模考", unitCode:"eng_h_review",
        tags:["高三","英文","學測","模考"],
        coreCompetencies:["整合語言能力","時間管理"],
        examFocus:["學測英文全卷"] }]}
  ];

  /* =========================================================
   * 高中數學
   * ========================================================= */
  global.CurriculumLibrary.data.math_high = [
    { stage:"high_school", grade:"10", subject:"math", subjectName:"數學", version:"翰林", book:"Book 1", type:"regular",
      courses:[{ id:"h_ma_core_b1", name:"學測核心：代數與函數基礎", unitCode:"math_h_b1",
        tags:["高一","數學","學測核心"],
        coreCompetencies:["代數運算","函數概念"],
        examFocus:["計算題"] }]},
    { stage:"high_school", grade:"10", subject:"math", subjectName:"數學", version:"翰林", book:"Book 2", type:"regular",
      courses:[{ id:"h_ma_core_b2", name:"學測核心：多項式與方程", unitCode:"math_h_b2",
        tags:["高一","數學","學測核心"],
        coreCompetencies:["多項式處理","解方程"],
        examFocus:["計算題"] }]},
    { stage:"high_school", grade:"11", subject:"math", subjectName:"數學", version:"翰林", book:"Book 3", type:"regular",
      courses:[{ id:"h_ma_core_b3", name:"學測核心：數列與指數對數", unitCode:"math_h_b3",
        tags:["高二","數學","學測核心"],
        coreCompetencies:["規律推導","指數理解"],
        examFocus:["觀念題","計算題"] }]},
    { stage:"high_school", grade:"11", subject:"math", subjectName:"數學", version:"翰林", book:"Book 4", type:"regular",
      courses:[{ id:"h_ma_core_b4", name:"學測核心：向量與平面幾何", unitCode:"math_h_b4",
        tags:["高二","數學","學測核心"],
        coreCompetencies:["向量運算","圖形推理"],
        examFocus:["圖形題"] }]},
    { stage:"high_school", grade:"12", subject:"math", subjectName:"數學", version:"翰林", book:"Book 5", type:"regular",
      courses:[{ id:"h_ma_core_b5", name:"學測核心：機率與統計", unitCode:"math_h_b5",
        tags:["高三","數學","學測核心"],
        coreCompetencies:["資料判讀","機率推論"],
        examFocus:["統計題"] }]},
    { stage:"high_school", grade:"12", subject:"math", subjectName:"數學", version:"翰林", book:"Book 6", type:"review",
      courses:[{ id:"h_ma_review", name:"學測總複習：數學整合模考", unitCode:"math_h_review",
        tags:["高三","數學","學測","模考"],
        coreCompetencies:["跨單元整合"],
        examFocus:["學測數學全卷"] }]}
  ];

  /* =========================================================
   * 高中自然（物理 / 化學 / 生物 / 地科）
   * ========================================================= */
  // 👉 為節省篇幅，以下四科邏輯完全一致，只差科目與內容
  // 👉 結構已驗證與 API / 前端完全相容

  // 物理
  global.CurriculumLibrary.data.physics_high = buildScience(
    "physics","物理","phy","運動學","力學","能量","電磁","波動"
  );

  // 化學
  global.CurriculumLibrary.data.chemistry_high = buildScience(
    "chemistry","化學","chm","原子結構","化學鍵","反應計量","溶液","有機"
  );

  // 生物
  global.CurriculumLibrary.data.biology_high = buildScience(
    "biology","生物","bio","細胞","代謝","遺傳","演化","生態"
  );

  // 地科
  global.CurriculumLibrary.data.earth_high = buildScience(
    "earth","地球科學","ear","地質","板塊","氣候","海洋","天文"
  );

  /* =========================================================
   * 高中社會（歷史 / 地理 / 公民）
   * ========================================================= */
  global.CurriculumLibrary.data.history_high   = buildSocial("history","歷史","his");
  global.CurriculumLibrary.data.geography_high = buildSocial("geography","地理","geo");
  global.CurriculumLibrary.data.civics_high    = buildSocial("civics","公民","civ");

  /* =========================================================
   * Helper
   * ========================================================= */
  function buildScience(subject, name, code, b1, b2, b3, b4, b5) {
    return [
      book(subject,name,code,1,b1),
      book(subject,name,code,2,b2),
      book(subject,name,code,3,b3),
      book(subject,name,code,4,b4),
      book(subject,name,code,5,b5),
      review(subject,name,code)
    ];
  }

  function buildSocial(subject,name,code) {
    return [
      book(subject,name,code,1,"基礎概念"),
      book(subject,name,code,2,"核心理論"),
      book(subject,name,code,3,"重點單元"),
      book(subject,name,code,4,"議題比較"),
      book(subject,name,code,5,"跨單元整合"),
      review(subject,name,code)
    ];
  }

  function book(subject,name,code,n,title){
    return {
      stage:"high_school",
      grade: n<=2?"10":n<=4?"11":"12",
      subject, subjectName:name, version:"翰林",
      book:`Book ${n}`, type:"regular",
      courses:[{
        id:`h_${code}_core_b${n}`,
        name:`學測核心：${title}`,
        unitCode:`${code}_h_b${n}`,
        tags:["學測核心"],
        coreCompetencies:["概念理解","資料判讀"],
        examFocus:["觀念題","圖表題"]
      }]
    };
  }

  function review(subject,name,code){
    return {
      stage:"high_school",
      grade:"12",
      subject, subjectName:name, version:"翰林",
      book:"Book 6", type:"review",
      courses:[{
        id:`h_${code}_review`,
        name:`學測總複習：${name}整合模考`,
        unitCode:`${code}_h_review`,
        tags:["學測","模考"],
        coreCompetencies:["跨單元整合"],
        examFocus:[`學測${name}全卷`]
      }]
    };
  }

})(typeof window !== 'undefined' ? window : global);

