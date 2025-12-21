(function (global) {
  'use strict';

  global.CurriculumLibrary = global.CurriculumLibrary || {};
  global.CurriculumLibrary.data = global.CurriculumLibrary.data || {};

  function createBook(stage, grade, subject, subName, code, bookNum, topic) {
    const isHigh = stage === 'high_school';
    const examName = isHigh ? '學測' : '會考';
    const type = (bookNum === 6) ? 'review' : 'regular';
    
    const courseName = topic.includes('總複習') ? topic : `${examName}核心：${topic}`;
    
    // 【關鍵修正】年級標籤生成邏輯
    let gradeTag = "";
    if (isHigh) {
        // 高中：10->高一, 11->高二, 12->高三
        if (grade === "10") gradeTag = "高一";
        else if (grade === "11") gradeTag = "高二";
        else if (grade === "12") gradeTag = "高三";
    } else {
        // 國中：7->國七, 8->國八, 9->國九 (加上「國」字)
        if (grade === "7") gradeTag = "國七";
        else if (grade === "8") gradeTag = "國八";
        else if (grade === "9") gradeTag = "國九";
    }

    // 加上學期 (上/下)
    const semester = (bookNum % 2 !== 0) ? "上" : "下";
    // 最終標籤：例如 "國七上", "高二下"
    const fullGradeTag = gradeTag + semester;

    return {
      stage: stage,
      grade: grade,
      subject: subject,
      subjectName: subName,
      version: "翰林",
      book: `Book ${bookNum}`,
      type: type,
      courses: [{
        id: `${isHigh?'h':'j'}_${code}_${bookNum===6?'review':'b'+bookNum}`,
        name: courseName,
        unitCode: `${code}_${isHigh?'h':'j'}_${bookNum===6?'review':'b'+bookNum}`,
        // Tags: [科目, 完整年級(國七上), 簡化年級(國七), 單元名, 類型]
        tags: [
            subject,          // math
            subName,          // 數學
            fullGradeTag,     // 國七上 (用於顯示)
            gradeTag,         // 國七 (用於對應題庫)
            topic.split(/[:\s]/)[0], 
            bookNum===6 ? '模考' : '核心'
        ],
        coreCompetencies: ["概念理解", "解題策略"],
        examFocus: [bookNum===6 ? `${examName}全卷` : "單元測驗"]
      }]
    };
  }

  // ==========================================
  // 1. 國中課程 (Junior High)
  // ==========================================
  const junior = [];

  // 國文
  junior.push(createBook('junior_high', '7', 'chinese', '國文', 'chi', 1, '國字、詞語與基本閱讀'));
  junior.push(createBook('junior_high', '7', 'chinese', '國文', 'chi', 2, '句型結構與修辭基礎'));
  junior.push(createBook('junior_high', '8', 'chinese', '國文', 'chi', 3, '記敘文與說明文閱讀'));
  junior.push(createBook('junior_high', '8', 'chinese', '國文', 'chi', 4, '議論文主旨與論點'));
  junior.push(createBook('junior_high', '9', 'chinese', '國文', 'chi', 5, '文言文基礎閱讀'));
  junior.push(createBook('junior_high', '9', 'chinese', '國文', 'chi', 6, '會考國文總複習'));

  // 英文
  junior.push(createBook('junior_high', '7', 'english', '英文', 'eng', 1, '基礎字彙與句型'));
  junior.push(createBook('junior_high', '7', 'english', '英文', 'eng', 2, '時態與疑問句'));
  junior.push(createBook('junior_high', '8', 'english', '英文', 'eng', 3, '閱讀理解與推論'));
  junior.push(createBook('junior_high', '8', 'english', '英文', 'eng', 4, '關係代名詞與比較句'));
  junior.push(createBook('junior_high', '9', 'english', '英文', 'eng', 5, '篇章結構與寫作觀念'));
  junior.push(createBook('junior_high', '9', 'english', '英文', 'eng', 6, '會考英文總複習'));

  // 數學
  junior.push(createBook('junior_high', '7', 'math', '數學', 'math', 1, '整數與分數運算'));
  junior.push(createBook('junior_high', '7', 'math', '數學', 'math', 2, '比例與一次方程式'));
  junior.push(createBook('junior_high', '8', 'math', '數學', 'math', 3, '二次方程與幾何'));
  junior.push(createBook('junior_high', '8', 'math', '數學', 'math', 4, '函數概念與機率'));
  junior.push(createBook('junior_high', '9', 'math', '數學', 'math', 5, '綜合應用題'));
  junior.push(createBook('junior_high', '9', 'math', '數學', 'math', 6, '會考數學總複習'));

  // 自然科
  junior.push(createBook('junior_high', '7', 'biology', '生物', 'bio', 1, '細胞與生命現象'));
  junior.push(createBook('junior_high', '7', 'biology', '生物', 'bio', 2, '植物與生態基礎'));
  junior.push(createBook('junior_high', '8', 'physics', '物理', 'phy', 3, '波動與聲音、光學'));
  junior.push(createBook('junior_high', '8', 'physics', '物理', 'phy', 4, '熱學、力與運動'));
  junior.push(createBook('junior_high', '9', 'physics', '物理', 'phy', 5, '直線運動、力與運動'));
  junior.push(createBook('junior_high', '9', 'physics', '物理', 'phy', 6, '電與磁、能源與生活'));

  junior.push(createBook('junior_high', '8', 'chemistry', '化學', 'chm', 3, '物質的組成與變化'));
  junior.push(createBook('junior_high', '8', 'chemistry', '化學', 'chm', 4, '化學反應與氧化還原'));
  junior.push(createBook('junior_high', '9', 'chemistry', '化學', 'chm', 5, '酸鹼鹽與反應速率'));
  junior.push(createBook('junior_high', '9', 'chemistry', '化學', 'chm', 6, '電解、電池與有機化學'));

  junior.push(createBook('junior_high', '9', 'earth', '地科', 'ear', 5, '水圈、大氣與天氣'));
  junior.push(createBook('junior_high', '9', 'earth', '地科', 'ear', 6, '天文、板塊與地質'));

  // 社會科
  const junHistory = ['台灣史前文化', '清領時期', '中國史前至隋唐', '晚清與民國', '上古文明', '近代歐洲'];
  const junGeography = ['地圖與地形', '人口與產業', '中國地理(一)', '世界地理(一)', '全球議題', '台灣地理總論'];
  const junCivics = ['自我成長', '社會互動', '政治參與', '法律基本概念', '經濟生活', '全球關連'];

  for(let b=1; b<=6; b++) {
      let g = b<=2?'7':b<=4?'8':'9';
      junior.push(createBook('junior_high', g, 'history', '歷史', 'his', b, b===6?'會考歷史總複習':junHistory[b-1]));
      junior.push(createBook('junior_high', g, 'geography', '地理', 'geo', b, b===6?'會考地理總複習':junGeography[b-1]));
      junior.push(createBook('junior_high', g, 'civics', '公民', 'civ', b, b===6?'會考公民總複習':junCivics[b-1]));
  }

  global.CurriculumLibrary.data.junior_all = junior;

  // ==========================================
  // 2. 高中課程 (Senior High)
  // ==========================================
  const senior = [];
  
  // 國英數
  const mainSubjects = [
      { id: 'chinese', name: '國文', code: 'chi', topics: ['文言文基礎', '修辭與語意', '閱讀理解', '文學鑑賞', '跨文本比較'] },
      { id: 'english', name: '英文', code: 'eng', topics: ['字彙與句型', '時態與語態', '閱讀推論', '關係子句', '篇章結構'] },
      { id: 'math', name: '數學', code: 'math', topics: ['代數與函數', '多項式與方程', '數列與指數', '向量與幾何', '機率與統計'] }
  ];

  mainSubjects.forEach(sub => {
      for(let b=1; b<=6; b++) {
          let g = b<=2?'10':b<=4?'11':'12';
          senior.push(createBook('high_school', g, sub.id, sub.name, sub.code, b, b===6?`學測${sub.name}總複習`:sub.topics[b-1]));
      }
  });

  // 自然科
  const natureSubjects = [
      { id: 'physics', name: '物理', code: 'phy', topics: ['運動學', '力學', '能量', '電磁', '波動'] },
      { id: 'chemistry', name: '化學', code: 'chm', topics: ['原子結構', '化學鍵', '反應計量', '溶液', '有機'] },
      { id: 'biology', name: '生物', code: 'bio', topics: ['細胞', '代謝', '遺傳', '演化', '生態'] },
      { id: 'earth', name: '地科', code: 'ear', topics: ['地質', '板塊', '氣候', '海洋', '天文'] }
  ];
  
  natureSubjects.forEach(sub => {
      for(let b=1; b<=6; b++) {
          let g = b<=2?'10':b<=4?'11':'12';
          senior.push(createBook('high_school', g, sub.id, sub.name, sub.code, b, b===6?`學測${sub.name}總複習`:sub.topics[b-1]));
      }
  });

  // 社會科
  const socialSubjects = [
      { id: 'history', name: '歷史', code: 'his', topics: ['台灣史(上)', '台灣史(下)', '中國史(上)', '中國史(下)', '世界史'] },
      { id: 'geography', name: '地理', code: 'geo', topics: ['地理技能', '氣候與水文', '人口與都市', '世界體系', '人地互動'] },
      { id: 'civics', name: '公民', code: 'civ', topics: ['人權與政治', '法律與生活', '經濟學基礎', '總體經濟', '社會多元文化'] }
  ];

  socialSubjects.forEach(sub => {
      for(let b=1; b<=6; b++) {
          let g = b<=2?'10':b<=4?'11':'12';
          senior.push(createBook('high_school', g, sub.id, sub.name, sub.code, b, b===6?`學測${sub.name}總複習`:sub.topics[b-1]));
      }
  });

  global.CurriculumLibrary.data.senior_all = senior;

})(typeof window !== 'undefined' ? window : global);
