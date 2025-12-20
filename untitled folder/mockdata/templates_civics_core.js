// templates_civics_core.js
// 公民（憲政與權利、法治、社會議題、公共參與、媒體素養）5 類模板
(function(global){
  'use strict';
  if (!global.RigorousGenerator) throw new Error('RigorousGenerator not found.');

  function sample(arr, rnd){ return arr[Math.floor(rnd()*arr.length)]; }

  // 1) civics_constitution: 憲政與權利（概念題）
  function civics_constitution(ctx, rnd){
    return {
      question: '憲法保障的基本權利通常包括下列哪幾項？',
      options: ['言論自由、宗教自由、平等權','只保障財產','只保障軍事權','只保障商業權'],
      answer: 0,
      explanation: ['憲法通常保障公民的基本自由與平等權利。']
    };
  }

  // 2) civics_rule_of_law: 法治與程序正義（案例判斷）
  function civics_rule_of_law(ctx, rnd){
    return {
      question: '程序正義的核心要素不包括哪一項？',
      options: ['公開透明、平等對待、正當程序','任意決定、秘密審理','可上訴機制','獨立司法'],
      answer: 1,
      explanation: ['程序正義強調公開、平等、正當程序與司法獨立，任意與秘密審理違反程序正義。']
    };
  }

  // 3) civics_public_participation: 公共參與與公民責任（行動與影響）
  function civics_public_participation(ctx, rnd){
    return {
      question: '公民參與公共事務的方式不包括下列哪一項？',
      options: ['投票、參與公聽會、倡議、暴力破壞'],
      answer: 0,
      explanation: ['合法且理性的參與方式包括投票、倡議、參與諮詢等，暴力破壞不屬於正當參與。']
    };
  }

  // 4) civics_media_literacy: 媒體素養與資訊判讀
  function civics_media_literacy(ctx, rnd){
    return {
      question: '判斷一則網路資訊可信度時，最重要的檢查項目為何？',
      options: ['來源是否具權威性與可查證','字數是否多','是否有圖片','是否有分享數'],
      answer: 0,
      explanation: ['來源與可查證性是判斷資訊可信度的關鍵。']
    };
  }

  // 5) civics_social_issues: 社會議題分析（利弊評估）
  function civics_social_issues(ctx, rnd){
    return {
      question: '在討論最低工資調整時，應同時考量哪些面向？',
      options: ['勞工生活、企業成本、就業影響、物價變動','只考慮企業利潤','只考慮政府支出','只考慮國際關係'],
      answer: 0,
      explanation: ['政策評估需兼顧多方利害關係與可能的經濟社會影響。']
    };
  }

  global.RigorousGenerator.registerTemplate('civics_constitution', civics_constitution);
  global.RigorousGenerator.registerTemplate('civics_rule_of_law', civics_rule_of_law);
  global.RigorousGenerator.registerTemplate('civics_public_participation', civics_public_participation);
  global.RigorousGenerator.registerTemplate('civics_media_literacy', civics_media_literacy);
  global.RigorousGenerator.registerTemplate('civics_social_issues', civics_social_issues);

})(typeof window !== 'undefined' ? window : global);
