// curriculum_with_api_chinese_junior.js
// 使用者指定格式（含 API 函式） + 已填入「國中國文（翰林版 Book1–6）」完整資料
// 可直接貼入瀏覽器或 Node 環境；若需加入其他科目，請依 CurriculumLibrary.data 結構新增對應 subjectKey（例如 english_junior）

(function (global) {
  'use strict';

  // 全域容器（若已存在則保留）
  global.CurriculumLibrary = global.CurriculumLibrary || {};

  // ---------- 已填入的資料：國中國文（翰林版 Book1–6） ----------
  global.CurriculumLibrary.data = global.CurriculumLibrary.data || {};

  // 國中國文（七上～九下）Book 1–6（每冊皆為一個物件，courses 為課程單元陣列）
  global.CurriculumLibrary.data.chinese_junior = [
    // Book 1 — 七上
    {
      stage: "junior_high",
      grade: "7",
      subject: "chinese",
      subjectName: "國文",
      version: "翰林",
      book: "Book 1",
      type: "regular",
      courses: [
        { id: "j_ch_hl_b1_c1_s1_t1", name: "文言字詞：常見字義判讀", unitCode: "jchi_b1", tags: ["七上","國文","文言","字義"] },
        { id: "j_ch_hl_b1_c1_s1_t2", name: "文言字詞：通假字辨識", unitCode: "jchi_b1", tags: ["七上","國文","文言","通假字"] },
        { id: "j_ch_hl_b1_c1_s2_t1", name: "文言句構：語序與基本句式", unitCode: "jchi_b1", tags: ["七上","國文","文言","句構"] },
        { id: "j_ch_hl_b1_c1_s2_t2", name: "文言句構：省略句初步判讀", unitCode: "jchi_b1", tags: ["七上","國文","文言","省略"] },
        { id: "j_ch_hl_b1_c1_s3_t1", name: "文言修辭：比喻與借代", unitCode: "jchi_b1", tags: ["七上","國文","文言","修辭"] },
        { id: "j_ch_hl_b1_c1_s4_t1", name: "文言篇章：主旨大意判讀", unitCode: "jchi_b1", tags: ["七上","國文","文言","篇章"] },
        { id: "j_ch_hl_b1_c1_s4_t2", name: "文言篇章：語意推論", unitCode: "jchi_b1", tags: ["七上","國文","文言","推論"] },
        { id: "j_ch_hl_b1_c1_s5_t1", name: "文言文化：基本文化常識", unitCode: "jchi_b1", tags: ["七上","國文","文言","文化"] },

        { id: "j_ch_hl_b1_c2_s1_t1", name: "現代文：主旨判讀", unitCode: "jchi_b1", tags: ["七上","國文","現代文","主旨"] },
        { id: "j_ch_hl_b1_c2_s1_t2", name: "現代文：段落層次與重點整理", unitCode: "jchi_b1", tags: ["七上","國文","現代文","結構"] },
        { id: "j_ch_hl_b1_c2_s2_t1", name: "現代文：語意推論", unitCode: "jchi_b1", tags: ["七上","國文","現代文","推論"] },
        { id: "j_ch_hl_b1_c2_s2_t2", name: "現代文：語氣語感辨識", unitCode: "jchi_b1", tags: ["七上","國文","現代文","語氣"] },
        { id: "j_ch_hl_b1_c2_s3_t1", name: "現代文修辭：比喻、擬人", unitCode: "jchi_b1", tags: ["七上","國文","現代文","修辭"] },
        { id: "j_ch_hl_b1_c2_s4_t1", name: "現代文：細節理解與文意選擇", unitCode: "jchi_b1", tags: ["七上","國文","現代文","文意"] },

        { id: "j_ch_hl_b1_c3_s1_t1", name: "閱讀素養：簡易圖表判讀", unitCode: "jchi_b1", tags: ["七上","國文","閱讀素養","圖表"] },
        { id: "j_ch_hl_b1_c3_s2_t1", name: "閱讀素養：兩文本比較", unitCode: "jchi_b1", tags: ["七上","國文","閱讀素養","多文本"] },
        { id: "j_ch_hl_b1_c3_s3_t1", name: "閱讀素養：資訊可信度判斷", unitCode: "jchi_b1", tags: ["七上","國文","閱讀素養","資訊"] },
        { id: "j_ch_hl_b1_c3_s4_t1", name: "閱讀素養：簡易論證方式辨識", unitCode: "jchi_b1", tags: ["七上","國文","閱讀素養","論證"] },

        { id: "j_ch_hl_b1_c4_s1_t1", name: "寫作：句子通順與語意完整", unitCode: "jchi_b1", tags: ["七上","國文","寫作","句構"] },
        { id: "j_ch_hl_b1_c4_s2_t1", name: "寫作：段落主題句與支持句", unitCode: "jchi_b1", tags: ["七上","國文","寫作","段落"] },
        { id: "j_ch_hl_b1_c4_s3_t1", name: "寫作：比喻與擬人運用", unitCode: "jchi_b1", tags: ["七上","國文","寫作","修辭"] },
        { id: "j_ch_hl_b1_c4_s4_t1", name: "寫作：記敘文基礎", unitCode: "jchi_b1", tags: ["七上","國文","寫作","記敘"] },

        { id: "j_ch_hl_b1_c5_s1_t1", name: "國學：常見成語意義與用法", unitCode: "jchi_b1", tags: ["七上","國文","國學","成語"] },
        { id: "j_ch_hl_b1_c5_s2_t1", name: "國學：常見典故來源", unitCode: "jchi_b1", tags: ["七上","國文","國學","典故"] },
        { id: "j_ch_hl_b1_c5_s3_t1", name: "國學：詩詞意象與基本格律", unitCode: "jchi_b1", tags: ["七上","國文","國學","詩詞"] },
        { id: "j_ch_hl_b1_c5_s4_t1", name: "國學：文學常識（文體/作者/時代）", unitCode: "jchi_b1", tags: ["七上","國文","國學","文學常識"] }
      ]
    },

    // Book 2 — 七下
    {
      stage: "junior_high",
      grade: "7",
      subject: "chinese",
      subjectName: "國文",
      version: "翰林",
      book: "Book 2",
      type: "regular",
      courses: [
        { id: "j_ch_hl_b2_c1_s1_t1", name: "文言字詞：古今異義判讀", unitCode: "jchi_b2", tags: ["七下","國文","文言","字義"] },
        { id: "j_ch_hl_b2_c1_s1_t2", name: "文言字詞：詞類活用辨識", unitCode: "jchi_b2", tags: ["七下","國文","文言","詞類活用"] },
        { id: "j_ch_hl_b2_c1_s2_t1", name: "文言句構：賓語前置與倒裝", unitCode: "jchi_b2", tags: ["七下","國文","文言","句構"] },
        { id: "j_ch_hl_b2_c1_s2_t2", name: "文言句構：固定句式（以…為…）", unitCode: "jchi_b2", tags: ["七下","國文","文言","句式"] },
        { id: "j_ch_hl_b2_c1_s3_t1", name: "文言修辭：借代、設問、反問", unitCode: "jchi_b2", tags: ["七下","國文","文言","修辭"] },
        { id: "j_ch_hl_b2_c1_s4_t1", name: "文言篇章：段落意旨判讀", unitCode: "jchi_b2", tags: ["七下","國文","文言","篇章"] },
        { id: "j_ch_hl_b2_c1_s4_t2", name: "文言篇章：人物形象與動機推論", unitCode: "jchi_b2", tags: ["七下","國文","文言","人物"] },
        { id: "j_ch_hl_b2_c1_s5_t1", name: "文言文化：禮制與制度背景", unitCode: "jchi_b2", tags: ["七下","國文","文言","文化"] },

        { id: "j_ch_hl_b2_c2_s1_t1", name: "現代文：主旨與中心思想判讀", unitCode: "jchi_b2", tags: ["七下","國文","現代文","主旨"] },
        { id: "j_ch_hl_b2_c2_s1_t2", name: "現代文：段落層次與語意連貫", unitCode: "jchi_b2", tags: ["七下","國文","現代文","結構"] },
        { id: "j_ch_hl_b2_c2_s2_t1", name: "現代文：語意推論與隱含訊息判讀", unitCode: "jchi_b2", tags: ["七下","國文","現代文","推論"] },
        { id: "j_ch_hl_b2_c2_s2_t2", name: "現代文：語氣語感與情緒判斷", unitCode: "jchi_b2", tags: ["七下","國文","現代文","語氣"] },
        { id: "j_ch_hl_b2_c2_s3_t1", name: "現代文修辭：誇飾、反諷、象徵", unitCode: "jchi_b2", tags: ["七下","國文","現代文","修辭"] },
        { id: "j_ch_hl_b2_c2_s4_t1", name: "現代文：細節理解與文意選擇", unitCode: "jchi_b2", tags: ["七下","國文","現代文","文意"] },

        { id: "j_ch_hl_b2_c3_s1_t1", name: "閱讀素養：圖表與資訊整合判讀", unitCode: "jchi_b2", tags: ["七下","國文","閱讀素養","圖表"] },
        { id: "j_ch_hl_b2_c3_s2_t1", name: "閱讀素養：多文本比較（觀點差異）", unitCode: "jchi_b2", tags: ["七下","國文","閱讀素養","多文本"] },
        { id: "j_ch_hl_b2_c3_s3_t1", name: "閱讀素養：論證方式辨識（舉例/對比/因果）", unitCode: "jchi_b2", tags: ["七下","國文","閱讀素養","論證"] },

        { id: "j_ch_hl_b2_c4_s1_t1", name: "寫作：句型變化與語意精準", unitCode: "jchi_b2", tags: ["七下","國文","寫作","句型"] },
        { id: "j_ch_hl_b2_c4_s2_t1", name: "寫作：段落統整與過渡語使用", unitCode: "jchi_b2", tags: ["七下","國文","寫作","段落"] },
        { id: "j_ch_hl_b2_c4_s3_t1", name: "寫作：描寫技巧（感官/動作）", unitCode: "jchi_b2", tags: ["七下","國文","寫作","描寫"] },
        { id: "j_ch_hl_b2_c4_s4_t1", name: "寫作：議論文基礎（立論/論證）", unitCode: "jchi_b2", tags: ["七下","國文","寫作","議論"] },

        { id: "j_ch_hl_b2_c5_s1_t1", name: "國學：成語典故與語源", unitCode: "jchi_b2", tags: ["七下","國文","國學","成語"] },
        { id: "j_ch_hl_b2_c5_s2_t1", name: "國學：詩詞意象與文化符碼", unitCode: "jchi_b2", tags: ["七下","國文","國學","詩詞"] },
        { id: "j_ch_hl_b2_c5_s3_t1", name: "國學：文學史（先秦至唐）", unitCode: "jchi_b2", tags: ["七下","國文","國學","文學史"] }
      ]
    },

    // Book 3 — 八上
    {
      stage: "junior_high",
      grade: "8",
      subject: "chinese",
      subjectName: "國文",
      version: "翰林",
      book: "Book 3",
      type: "regular",
      courses: [
        { id: "j_ch_hl_b3_c1_s1_t1", name: "文言字詞：詞義推測與語境判讀", unitCode: "jchi_b3", tags: ["八上","國文","文言","字義"] },
        { id: "j_ch_hl_b3_c1_s1_t2", name: "文言字詞：通假與借代進階", unitCode: "jchi_b3", tags: ["八上","國文","文言","通假"] },
        { id: "j_ch_hl_b3_c1_s2_t1", name: "文言句構：複合句與連接詞用法", unitCode: "jchi_b3", tags: ["八上","國文","文言","句構"] },
        { id: "j_ch_hl_b3_c1_s3_t1", name: "文言篇章：人物動機與情節分析", unitCode: "jchi_b3", tags: ["八上","國文","文言","篇章"] },
        { id: "j_ch_hl_b3_c1_s4_t1", name: "文言文化：思想流派與史實背景", unitCode: "jchi_b3", tags: ["八上","國文","文言","文化"] },

        { id: "j_ch_hl_b3_c2_s1_t1", name: "現代文：段落論證與論點支撐", unitCode: "jchi_b3", tags: ["八上","國文","現代文","論證"] },
        { id: "j_ch_hl_b3_c2_s2_t1", name: "現代文：修辭效果與語氣分析", unitCode: "jchi_b3", tags: ["八上","國文","現代文","修辭"] },
        { id: "j_ch_hl_b3_c2_s3_t1", name: "現代文：作者立場與觀點辨識", unitCode: "jchi_b3", tags: ["八上","國文","現代文","觀點"] },

        { id: "j_ch_hl_b3_c3_s1_t1", name: "閱讀素養：跨文本比較（主旨/證據）", unitCode: "jchi_b3", tags: ["八上","國文","閱讀素養","跨文本"] },
        { id: "j_ch_hl_b3_c3_s2_t1", name: "閱讀素養：資料整合與推論", unitCode: "jchi_b3", tags: ["八上","國文","閱讀素養","資料"] },

        { id: "j_ch_hl_b3_c4_s1_t1", name: "寫作：敘事文進階（情節與描寫）", unitCode: "jchi_b3", tags: ["八上","國文","寫作","敘事"] },
        { id: "j_ch_hl_b3_c4_s2_t1", name: "寫作：說明文與段落組織", unitCode: "jchi_b3", tags: ["八上","國文","寫作","說明"] },

        { id: "j_ch_hl_b3_c5_s1_t1", name: "國學：詩詞格律（平仄/押韻）", unitCode: "jchi_b3", tags: ["八上","國文","國學","詩詞"] },
        { id: "j_ch_hl_b3_c5_s2_t1", name: "國學：文學史（唐宋詩文導讀）", unitCode: "jchi_b3", tags: ["八上","國文","國學","文學史"] }
      ]
    },

    // Book 4 — 八下
    {
      stage: "junior_high",
      grade: "8",
      subject: "chinese",
      subjectName: "國文",
      version: "翰林",
      book: "Book 4",
      type: "regular",
      courses: [
        { id: "j_ch_hl_b4_c1_s1_t1", name: "文言字詞：句義還原與語法分析", unitCode: "jchi_b4", tags: ["八下","國文","文言","字義"] },
        { id: "j_ch_hl_b4_c1_s2_t1", name: "文言句構：複雜句型（被動/使動）", unitCode: "jchi_b4", tags: ["八下","國文","文言","句構"] },
        { id: "j_ch_hl_b4_c1_s3_t1", name: "文言篇章：論說文與議論技巧", unitCode: "jchi_b4", tags: ["八下","國文","文言","篇章"] },
        { id: "j_ch_hl_b4_c1_s4_t1", name: "文言文化：史事與思想背景延伸", unitCode: "jchi_b4", tags: ["八下","國文","文言","文化"] },

        { id: "j_ch_hl_b4_c2_s1_t1", name: "現代文：論證結構與證據評估", unitCode: "jchi_b4", tags: ["八下","國文","現代文","論證"] },
        { id: "j_ch_hl_b4_c2_s2_t1", name: "現代文：語氣與修辭的效果分析", unitCode: "jchi_b4", tags: ["八下","國文","現代文","語氣"] },

        { id: "j_ch_hl_b4_c3_s1_t1", name: "閱讀素養：跨領域文本（科普/社會）", unitCode: "jchi_b4", tags: ["八下","國文","閱讀素養","跨領域"] },
        { id: "j_ch_hl_b4_c3_s2_t1", name: "閱讀素養：資料詮釋與批判性思考", unitCode: "jchi_b4", tags: ["八下","國文","閱讀素養","批判"] },

        { id: "j_ch_hl_b4_c4_s1_t1", name: "寫作：議論文（立論/舉例/反駁）", unitCode: "jchi_b4", tags: ["八下","國文","寫作","議論"] },
        { id: "j_ch_hl_b4_c4_s2_t1", name: "寫作：混合文體（敘事＋議論）", unitCode: "jchi_b4", tags: ["八下","國文","寫作","混合"] },

        { id: "j_ch_hl_b4_c5_s1_t1", name: "國學：詩詞意象與文化符碼進階", unitCode: "jchi_b4", tags: ["八下","國文","國學","詩詞"] },
        { id: "j_ch_hl_b4_c5_s2_t1", name: "國學：文學史（宋元明）", unitCode: "jchi_b4", tags: ["八下","國文","國學","文學史"] }
      ]
    },

    // Book 5 — 九上
    {
      stage: "junior_high",
      grade: "9",
      subject: "chinese",
      subjectName: "國文",
      version: "翰林",
      book: "Book 5",
      type: "regular",
      courses: [
        { id: "j_ch_hl_b5_c1_s1_t1", name: "文言字詞：語義細緻化與詞類辨析", unitCode: "jchi_b5", tags: ["九上","國文","文言","字義"] },
        { id: "j_ch_hl_b5_c1_s2_t1", name: "文言句構：複合句與語氣判讀", unitCode: "jchi_b5", tags: ["九上","國文","文言","句構"] },
        { id: "j_ch_hl_b5_c1_s3_t1", name: "文言篇章：論說與史傳文本分析", unitCode: "jchi_b5", tags: ["九上","國文","文言","篇章"] },
        { id: "j_ch_hl_b5_c1_s4_t1", name: "文言文化：思想史與文本脈絡", unitCode: "jchi_b5", tags: ["九上","國文","文言","文化"] },

        { id: "j_ch_hl_b5_c2_s1_t1", name: "現代文：主旨、立場與論證整合", unitCode: "jchi_b5", tags: ["九上","國文","現代文","主旨"] },
        { id: "j_ch_hl_b5_c2_s2_t1", name: "現代文：修辭策略與文本效果評估", unitCode: "jchi_b5", tags: ["九上","國文","現代文","修辭"] },

        { id: "j_ch_hl_b5_c3_s1_t1", name: "閱讀素養：跨文本資料整合與評析", unitCode: "jchi_b5", tags: ["九上","國文","閱讀素養","整合"] },
        { id: "j_ch_hl_b5_c3_s2_t1", name: "閱讀素養：論證有效性與證據評估", unitCode: "jchi_b5", tags: ["九上","國文","閱讀素養","論證"] },

        { id: "j_ch_hl_b5_c4_s1_t1", name: "寫作：說服性文本（立場明確/證據支持）", unitCode: "jchi_b5", tags: ["九上","國文","寫作","說服"] },
        { id: "j_ch_hl_b5_c4_s2_t1", name: "寫作：創意寫作與風格塑造", unitCode: "jchi_b5", tags: ["九上","國文","寫作","創意"] },

        { id: "j_ch_hl_b5_c5_s1_t1", name: "國學：成語/典故/詩詞綜合應用", unitCode: "jchi_b5", tags: ["九上","國文","國學","綜合"] },
        { id: "j_ch_hl_b5_c5_s2_t1", name: "國學：文學史（近現代導讀）", unitCode: "jchi_b5", tags: ["九上","國文","國學","文學史"] }
      ]
    },

    // Book 6 — 九下
    {
      stage: "junior_high",
      grade: "9",
      subject: "chinese",
      subjectName: "國文",
      version: "翰林",
      book: "Book 6",
      type: "review",
      courses: [
        { id: "j_ch_hl_b6_c1_s1_t1", name: "文言綜合：字詞/句構/篇章整合題", unitCode: "jchi_b6", tags: ["九下","國文","文言","綜合"] },
        { id: "j_ch_hl_b6_c2_s1_t1", name: "現代文綜合：主旨/推論/修辭整合題", unitCode: "jchi_b6", tags: ["九下","國文","現代文","綜合"] },
        { id: "j_ch_hl_b6_c3_s1_t1", name: "閱讀素養：跨文本整合（圖表＋文章）", unitCode: "jchi_b6", tags: ["九下","國文","閱讀素養","跨文本"] },
        { id: "j_ch_hl_b6_c4_s1_t1", name: "寫作：段落與篇章整合（模考導向）", unitCode: "jchi_b6", tags: ["九下","國文","寫作","模考"] },
        { id: "j_ch_hl_b6_c5_s1_t1", name: "國學綜合：成語/典故/詩詞/文史總複習", unitCode: "jchi_b6", tags: ["九下","國文","國學","總複習"] },
        { id: "j_ch_hl_b6_c6_s1_t1", name: "診斷：錯題分析與能力補強計畫", unitCode: "jchi_b6", tags: ["九下","國文","診斷","錯題分析"] }
      ]
    }
  ];

  // ---------- 其他科目佔位（空陣列，方便後續填入） ----------
  global.CurriculumLibrary.data.english_junior = global.CurriculumLibrary.data.english_junior || [];
  global.CurriculumLibrary.data.math_junior = global.CurriculumLibrary.data.math_junior || [];
  global.CurriculumLibrary.data.science_junior = global.CurriculumLibrary.data.science_junior || [];
  global.CurriculumLibrary.data.social_junior = global.CurriculumLibrary.data.social_junior || [];

  // ---------- 公共 API 函式 ----------

  /**
   * 取得全部資料物件（淺複製）
   */
  function getAllData() {
    return Object.assign({}, global.CurriculumLibrary.data);
  }

  /**
   * 依科目 key 取得該科所有冊（subjectKey 範例: 'chinese_junior'）
   */
  function getBySubject(subjectKey) {
    return (global.CurriculumLibrary.data[subjectKey] || []).slice();
  }

  /**
   * 依科目與冊次名稱取得單一冊（bookName 可為 "Book 1" 或數字）
   */
  function getBook(subjectKey, bookName) {
    var arr = global.CurriculumLibrary.data[subjectKey] || [];
    return arr.find(function (b) { return String(b.book) === String(bookName); }) || null;
  }

  /**
   * 依 course id 搜尋（跨科搜尋）
   */
  function findCourseById(courseId) {
    var subjects = Object.keys(global.CurriculumLibrary.data);
    for (var i = 0; i < subjects.length; i++) {
      var list = global.CurriculumLibrary.data[subjects[i]];
      for (var j = 0; j < list.length; j++) {
        var book = list[j];
        if (!book.courses) continue;
        for (var k = 0; k < book.courses.length; k++) {
          if (book.courses[k].id === courseId) {
            // 回傳包含 book 與 course 的上下文
            return {
              subjectKey: subjects[i],
              book: book,
              course: book.courses[k]
            };
          }
        }
      }
    }
    return null;
  }

  /**
   * 新增一個 course 到指定科目與冊次（若冊次不存在則回傳錯誤）
   * courseObj 範例：{ id: "...", name: "...", unitCode: "...", tags: [...] }
   */
  function addCourse(subjectKey, bookName, courseObj) {
    var book = getBook(subjectKey, bookName);
    if (!book) {
      throw new Error('Book not found: ' + subjectKey + ' / ' + bookName);
    }
    book.courses = book.courses || [];
    // 防止重複 id
    if (book.courses.some(function (c) { return c.id === courseObj.id; })) {
      throw new Error('Course id already exists in this book: ' + courseObj.id);
    }
    book.courses.push(courseObj);
    return courseObj;
  }

  /**
   * 更新 course（以 id 為鍵），回傳更新後的 course 或 null
   */
  function updateCourse(courseId, patch) {
    var found = findCourseById(courseId);
    if (!found) return null;
    var course = found.course;
    Object.keys(patch).forEach(function (k) { course[k] = patch[k]; });
    return course;
  }

  /**
   * 刪除 course（以 id 為鍵），回傳 true/false
   */
  function removeCourse(courseId) {
    var subjects = Object.keys(global.CurriculumLibrary.data);
    for (var i = 0; i < subjects.length; i++) {
      var list = global.CurriculumLibrary.data[subjects[i]];
      for (var j = 0; j < list.length; j++) {
        var book = list[j];
        if (!book.courses) continue;
        var idx = book.courses.findIndex(function (c) { return c.id === courseId; });
        if (idx >= 0) {
          book.courses.splice(idx, 1);
          return true;
        }
      }
    }
    return false;
  }

  /**
   * 依條件搜尋 course（filterFn 為 function(course) => boolean）
   * 回傳所有符合的 course 與其上下文
   */
  function searchCourses(filterFn) {
    var results = [];
    var subjects = Object.keys(global.CurriculumLibrary.data);
    subjects.forEach(function (subjectKey) {
      var list = global.CurriculumLibrary.data[subjectKey] || [];
      list.forEach(function (book) {
        (book.courses || []).forEach(function (course) {
          try {
            if (filterFn(course, book, subjectKey)) {
              results.push({ subjectKey: subjectKey, book: book, course: course });
            }
          } catch (e) {
            // 忽略 filter 錯誤
          }
        });
      });
    });
    return results;
  }

  /**
   * 匯出指定科目為 JSON 字串（可用於儲存或下載）
   */
  function exportSubjectJSON(subjectKey, pretty) {
    var data = global.CurriculumLibrary.data[subjectKey] || [];
    return pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
  }

  /**
   * 匯出全部資料為 JSON 字串
   */
  function exportAllJSON(pretty) {
    return pretty ? JSON.stringify(global.CurriculumLibrary.data, null, 2) : JSON.stringify(global.CurriculumLibrary.data);
  }

  // ---------- 對外暴露 API ----------
  global.CurriculumLibrary.getAllData = getAllData;
  global.CurriculumLibrary.getBySubject = getBySubject;
  global.CurriculumLibrary.getBook = getBook;
  global.CurriculumLibrary.findCourseById = findCourseById;
  global.CurriculumLibrary.addCourse = addCourse;
  global.CurriculumLibrary.updateCourse = updateCourse;
  global.CurriculumLibrary.removeCourse = removeCourse;
  global.CurriculumLibrary.searchCourses = searchCourses;
  global.CurriculumLibrary.exportSubjectJSON = exportSubjectJSON;
  global.CurriculumLibrary.exportAllJSON = exportAllJSON;

  // ---------- 小工具（示範用） ----------
  global.CurriculumLibrary._internal = global.CurriculumLibrary._internal || {};
  global.CurriculumLibrary._internal.version = "1.0.0";
  global.CurriculumLibrary._internal.timestamp = new Date().toISOString();

})(typeof window !== 'undefined' ? window : global);
