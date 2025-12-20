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
