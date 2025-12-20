// curriculum_chinese.js
// 國文科 — 翰林 Book 1（高一上）
// 顆粒度：概念 → 技能點 → 題型分類（C3+A）
// id 命名規則：h_ch_hl_b1_c{概念}_s{技能}_t{題型}

window.Curriculum108_Chinese = [
  {
    stage: "high_school",
    grade: "10",
    subject: "chinese",
    subjectName: "國文",
    version: "翰林",
    book: "Book 1",
    type: "regular",
    courses: [

      // ==========================================
      // C1：文言文（Classical Chinese）
      // ==========================================

      // 字詞義
      { id: "h_ch_hl_b1_c1_s1_t1", name: "文言字詞：一詞多義判讀（字義判斷）", unitCode: "chi_b1", tags: ["高一上","國文","文言","字義"] },
      { id: "h_ch_hl_b1_c1_s1_t2", name: "文言字詞：通假字辨識（字詞辨識）", unitCode: "chi_b1", tags: ["高一上","國文","文言","通假字"] },

      // 文法句構
      { id: "h_ch_hl_b1_c1_s2_t1", name: "文言句構：倒裝句式判讀（語法分析）", unitCode: "chi_b1", tags: ["高一上","國文","文言","倒裝"] },
      { id: "h_ch_hl_b1_c1_s2_t2", name: "文言句構：省略句補足（句構還原）", unitCode: "chi_b1", tags: ["高一上","國文","文言","省略"] },

      // 修辭
      { id: "h_ch_hl_b1_c1_s3_t1", name: "文言修辭：比喻、借代、對偶（修辭判斷）", unitCode: "chi_b1", tags: ["高一上","國文","文言","修辭"] },

      // 篇章理解
      { id: "h_ch_hl_b1_c1_s4_t1", name: "文言篇章：主旨大意判讀（篇章理解）", unitCode: "chi_b1", tags: ["高一上","國文","文言","主旨"] },
      { id: "h_ch_hl_b1_c1_s4_t2", name: "文言篇章：語意推論（推論題）", unitCode: "chi_b1", tags: ["高一上","國文","文言","推論"] },

      // 文化背景
      { id: "h_ch_hl_b1_c1_s5_t1", name: "文言文化：歷史背景與文化脈絡（文化理解）", unitCode: "chi_b1", tags: ["高一上","國文","文言","文化"] },

      // ==========================================
      // C2：現代文（Modern Chinese）
      // ==========================================

      // 主旨與結構
      { id: "h_ch_hl_b1_c2_s1_t1", name: "現代文：主旨大意判讀（Main Idea）", unitCode: "chi_b1", tags: ["高一上","國文","現代文","主旨"] },
      { id: "h_ch_hl_b1_c2_s1_t2", name: "現代文：段落結構與層次分析（Structure）", unitCode: "chi_b1", tags: ["高一上","國文","現代文","結構"] },

      // 推論與語氣
      { id: "h_ch_hl_b1_c2_s2_t1", name: "現代文：語意推論（Inference）", unitCode: "chi_b1", tags: ["高一上","國文","現代文","推論"] },
      { id: "h_ch_hl_b1_c2_s2_t2", name: "現代文：語氣語感判斷（Tone）", unitCode: "chi_b1", tags: ["高一上","國文","現代文","語氣"] },

      // 修辭
      { id: "h_ch_hl_b1_c2_s3_t1", name: "現代文修辭：比喻、擬人、排比（修辭判斷）", unitCode: "chi_b1", tags: ["高一上","國文","現代文","修辭"] },

      // 文意判斷
      { id: "h_ch_hl_b1_c2_s4_t1", name: "現代文：文意選擇（Detail）", unitCode: "chi_b1", tags: ["高一上","國文","現代文","文意"] },

      // ==========================================
      // C3：閱讀素養（Reading Literacy）
      // ==========================================

      // 圖表閱讀
      { id: "h_ch_hl_b1_c3_s1_t1", name: "閱讀素養：圖表資訊判讀（Chart Reading）", unitCode: "chi_b1", tags: ["高一上","國文","閱讀素養","圖表"] },

      // 多文本比較
      { id: "h_ch_hl_b1_c3_s2_t1", name: "閱讀素養：多文本比較（Comparison）", unitCode: "chi_b1", tags: ["高一上","國文","閱讀素養","多文本"] },

      // 資訊判讀
      { id: "h_ch_hl_b1_c3_s3_t1", name: "閱讀素養：資訊可信度判斷（Critical Reading）", unitCode: "chi_b1", tags: ["高一上","國文","閱讀素養","批判"] },

      // 論證分析
      { id: "h_ch_hl_b1_c3_s4_t1", name: "閱讀素養：論證結構分析（Argument Analysis）", unitCode: "chi_b1", tags: ["高一上","國文","閱讀素養","論證"] },

      // ==========================================
      // C4：寫作（Writing）
      // ==========================================

      // 句構
      { id: "h_ch_hl_b1_c4_s1_t1", name: "寫作：句子結構與語意完整（Sentence Writing）", unitCode: "chi_b1", tags: ["高一上","國文","寫作","句構"] },

      // 段落
      { id: "h_ch_hl_b1_c4_s2_t1", name: "寫作：段落主題句與支持句（Paragraph Writing）", unitCode: "chi_b1", tags: ["高一上","國文","寫作","段落"] },

      // 修辭運用
      { id: "h_ch_hl_b1_c4_s3_t1", name: "寫作：修辭技巧運用（Writing Rhetoric）", unitCode: "chi_b1", tags: ["高一上","國文","寫作","修辭"] },

      // 文體寫作
      { id: "h_ch_hl_b1_c4_s4_t1", name: "寫作：描寫/抒情/議論文技巧（Writing Style）", unitCode: "chi_b1", tags: ["高一上","國文","寫作","文體"] },

      // ==========================================
      // C5：國學常識（Culture & Knowledge）
      // ==========================================

      // 成語
      { id: "h_ch_hl_b1_c5_s1_t1", name: "國學：成語意義與用法（Idiom Meaning）", unitCode: "chi_b1", tags: ["高一上","國文","國學","成語"] },

      // 典故
      { id: "h_ch_hl_b1_c5_s2_t1", name: "國學：典故來源與應用（Allusion）", unitCode: "chi_b1", tags: ["高一上","國文","國學","典故"] },

      // 詩詞格律
      { id: "h_ch_hl_b1_c5_s3_t1", name: "國學：詩詞格律與押韻（Poetry Structure）", unitCode: "chi_b1", tags: ["高一上","國文","國學","詩詞"] },

      // 文學史
      { id: "h_ch_hl_b1_c5_s4_t1", name: "國學：文學史時代特徵（Literary History）", unitCode: "chi_b1", tags: ["高一上","國文","國學","文學史"] }
    ]
  },

  {
  stage: "high_school",
  grade: "10",
  subject: "chinese",
  subjectName: "國文",
  version: "翰林",
  book: "Book 2",
  type: "regular",
  courses: [

    // ============================
    // C1 文言文
    // ============================

    // 字詞義
    { id: "h_ch_hl_b2_c1_s1_t1", name: "文言字詞：古今異義判讀", unitCode: "chi_b2", tags: ["高一下","國文","文言","字義"] },
    { id: "h_ch_hl_b2_c1_s1_t2", name: "文言字詞：詞類活用辨識", unitCode: "chi_b2", tags: ["高一下","國文","文言","詞類活用"] },

    // 文法句構
    { id: "h_ch_hl_b2_c1_s2_t1", name: "文言句構：賓語前置與主謂倒裝", unitCode: "chi_b2", tags: ["高一下","國文","文言","倒裝"] },
    { id: "h_ch_hl_b2_c1_s2_t2", name: "文言句構：固定句式（如「以…為…」）", unitCode: "chi_b2", tags: ["高一下","國文","文言","句式"] },

    // 修辭
    { id: "h_ch_hl_b2_c1_s3_t1", name: "文言修辭：借代、設問、反問", unitCode: "chi_b2", tags: ["高一下","國文","文言","修辭"] },

    // 篇章理解
    { id: "h_ch_hl_b2_c1_s4_t1", name: "文言篇章：段落意旨與情感判讀", unitCode: "chi_b2", tags: ["高一下","國文","文言","篇章"] },
    { id: "h_ch_hl_b2_c1_s4_t2", name: "文言篇章：人物形象與行為動機推論", unitCode: "chi_b2", tags: ["高一下","國文","文言","人物"] },

    // 文化背景
    { id: "h_ch_hl_b2_c1_s5_t1", name: "文言文化：禮制、制度與思想背景", unitCode: "chi_b2", tags: ["高一下","國文","文言","文化"] },

    // ============================
    // C2 現代文
    // ============================

    // 主旨與結構
    { id: "h_ch_hl_b2_c2_s1_t1", name: "現代文：主旨與中心思想判讀", unitCode: "chi_b2", tags: ["高一下","國文","現代文","主旨"] },
    { id: "h_ch_hl_b2_c2_s1_t2", name: "現代文：段落層次與語意連貫", unitCode: "chi_b2", tags: ["高一下","國文","現代文","結構"] },

    // 推論與語氣
    { id: "h_ch_hl_b2_c2_s2_t1", name: "現代文：語意推論與隱含訊息判讀", unitCode: "chi_b2", tags: ["高一下","國文","現代文","推論"] },
    { id: "h_ch_hl_b2_c2_s2_t2", name: "現代文：語氣語感與情緒判斷", unitCode: "chi_b2", tags: ["高一下","國文","現代文","語氣"] },

    // 修辭
    { id: "h_ch_hl_b2_c2_s3_t1", name: "現代文修辭：誇飾、反諷、象徵", unitCode: "chi_b2", tags: ["高一下","國文","現代文","修辭"] },

    // 文意判斷
    { id: "h_ch_hl_b2_c2_s4_t1", name: "現代文：細節理解與文意選擇", unitCode: "chi_b2", tags: ["高一下","國文","現代文","文意"] },

    // ============================
    // C3 閱讀素養
    // ============================

    { id: "h_ch_hl_b2_c3_s1_t1", name: "閱讀素養：圖表與資訊整合判讀", unitCode: "chi_b2", tags: ["高一下","國文","閱讀素養","圖表"] },
    { id: "h_ch_hl_b2_c3_s2_t1", name: "閱讀素養：多文本比較（觀點差異）", unitCode: "chi_b2", tags: ["高一下","國文","閱讀素養","多文本"] },
    { id: "h_ch_hl_b2_c3_s3_t1", name: "閱讀素養：論證方式辨識（舉例/對比/因果）", unitCode: "chi_b2", tags: ["高一下","國文","閱讀素養","論證"] },

    // ============================
    // C4 寫作
    // ============================

    { id: "h_ch_hl_b2_c4_s1_t1", name: "寫作：句型變化與語意精準", unitCode: "chi_b2", tags: ["高一下","國文","寫作","句型"] },
    { id: "h_ch_hl_b2_c4_s2_t1", name: "寫作：段落統整與過渡語使用", unitCode: "chi_b2", tags: ["高一下","國文","寫作","段落"] },
    { id: "h_ch_hl_b2_c4_s3_t1", name: "寫作：描寫技巧（感官描寫/動作描寫）", unitCode: "chi_b2", tags: ["高一下","國文","寫作","描寫"] },
    { id: "h_ch_hl_b2_c4_s4_t1", name: "寫作：議論文基礎（立論/論證）", unitCode: "chi_b2", tags: ["高一下","國文","寫作","議論"] },

    // ============================
    // C5 國學常識
    // ============================

    { id: "h_ch_hl_b2_c5_s1_t1", name: "國學：成語典故與語源", unitCode: "chi_b2", tags: ["高一下","國文","國學","成語"] },
    { id: "h_ch_hl_b2_c5_s2_t1", name: "國學：詩詞意象與文化符碼", unitCode: "chi_b2", tags: ["高一下","國文","國學","詩詞"] },
    { id: "h_ch_hl_b2_c5_s3_t1", name: "國學：文學史（先秦至唐）", unitCode: "chi_b2", tags: ["高一下","國文","國學","文學史"] }
  ]
},
{
  stage: "high_school",
  grade: "11",
  subject: "chinese",
  subjectName: "國文",
  version: "翰林",
  book: "Book 3",
  type: "regular",
  courses: [

    // 文言文
    { id: "h_ch_hl_b3_c1_s1_t1", name: "文言字詞：詞義推測與語境判讀", unitCode: "chi_b3", tags: ["高二上","國文","文言","字義"] },
    { id: "h_ch_hl_b3_c1_s2_t1", name: "文言句構：固定句式（如「雖…然…」）", unitCode: "chi_b3", tags: ["高二上","國文","文言","句式"] },
    { id: "h_ch_hl_b3_c1_s3_t1", name: "文言篇章：人物形象與價值觀分析", unitCode: "chi_b3", tags: ["高二上","國文","文言","人物"] },

    // 現代文
    { id: "h_ch_hl_b3_c2_s1_t1", name: "現代文：主旨與段落邏輯", unitCode: "chi_b3", tags: ["高二上","國文","現代文","主旨"] },
    { id: "h_ch_hl_b3_c2_s2_t1", name: "現代文：修辭效果分析（象徵/隱喻）", unitCode: "chi_b3", tags: ["高二上","國文","現代文","修辭"] },
    { id: "h_ch_hl_b3_c2_s3_t1", name: "現代文：觀點辨識與立場推論", unitCode: "chi_b3", tags: ["高二上","國文","現代文","觀點"] },

    // 閱讀素養
    { id: "h_ch_hl_b3_c3_s1_t1", name: "閱讀素養：跨文本比較（文言 vs 現代）", unitCode: "chi_b3", tags: ["高二上","國文","閱讀素養","跨文本"] },
    { id: "h_ch_hl_b3_c3_s2_t1", name: "閱讀素養：資料整合與推論", unitCode: "chi_b3", tags: ["高二上","國文","閱讀素養","資料"] },

    // 寫作
    { id: "h_ch_hl_b3_c4_s1_t1", name: "寫作：論說文（立論/舉例/反駁）", unitCode: "chi_b3", tags: ["高二上","國文","寫作","論說"] },
    { id: "h_ch_hl_b3_c4_s2_t1", name: "寫作：修辭強化（排比/反問/對比）", unitCode: "chi_b3", tags: ["高二上","國文","寫作","修辭"] },

    // 國學常識
    { id: "h_ch_hl_b3_c5_s1_t1", name: "國學：詩詞格律（平仄/對仗）", unitCode: "chi_b3", tags: ["高二上","國文","國學","詩詞"] },
    { id: "h_ch_hl_b3_c5_s2_t1", name: "國學：文學史（宋元明清）", unitCode: "chi_b3", tags: ["高二上","國文","國學","文學史"] }
  ]
},
{
  stage: "high_school",
  grade: "11",
  subject: "chinese",
  subjectName: "國文",
  version: "翰林",
  book: "Book 4",
  type: "regular",
  courses: [

    // 文言文
    { id: "h_ch_hl_b4_c1_s1_t1", name: "文言字詞：語境推義與詞性判斷", unitCode: "chi_b4", tags: ["高二下","國文","文言","字義"] },
    { id: "h_ch_hl_b4_c1_s2_t1", name: "文言句構：賓語前置/介賓後置", unitCode: "chi_b4", tags: ["高二下","國文","文言","句構"] },
    { id: "h_ch_hl_b4_c1_s3_t1", name: "文言篇章：思想脈絡與價值觀分析", unitCode: "chi_b4", tags: ["高二下","國文","文言","思想"] },

    // 現代文
    { id: "h_ch_hl_b4_c2_s1_t1", name: "現代文：文本結構與論證策略", unitCode: "chi_b4", tags: ["高二下","國文","現代文","論證"] },
    { id: "h_ch_hl_b4_c2_s2_t1", name: "現代文：語氣語感與修辭效果", unitCode: "chi_b4", tags: ["高二下","國文","現代文","語氣"] },

    // 閱讀素養
    { id: "h_ch_hl_b4_c3_s1_t1", name: "閱讀素養：跨領域文本（科普/社會/文化）", unitCode: "chi_b4", tags: ["高二下","國文","閱讀素養","跨領域"] },
    { id: "h_ch_hl_b4_c3_s2_t1", name: "閱讀素養：資料推論與觀點整合", unitCode: "chi_b4", tags: ["高二下","國文","閱讀素養","資料"] },

    // 寫作
    { id: "h_ch_hl_b4_c4_s1_t1", name: "寫作：論說文進階（反駁/讓步/比較）", unitCode: "chi_b4", tags: ["高二下","國文","寫作","論說"] },
    { id: "h_ch_hl_b4_c4_s2_t1", name: "寫作：文體混合（議論＋敘事）", unitCode: "chi_b4", tags: ["高二下","國文","寫作","文體"] },

    // 國學常識
    { id: "h_ch_hl_b4_c5_s1_t1", name: "國學：詩詞意象與文化符碼", unitCode: "chi_b4", tags: ["高二下","國文","國學","詩詞"] },
    { id: "h_ch_hl_b4_c5_s2_t1", name: "國學：文學史（近現代文學）", unitCode: "chi_b4", tags: ["高二下","國文","國學","文學史"] }
  ]
},{
  stage: "high_school",
  grade: "12",
  subject: "chinese",
  subjectName: "國文",
  version: "翰林",
  book: "Book 5",
  type: "review",
  courses: [

    // 文言文綜合
    { id: "h_ch_hl_b5_c1_s1_t1", name: "文言綜合：字詞/句構/篇章整合題", unitCode: "chi_b5", tags: ["高三","國文","文言","綜合"] },

    // 現代文綜合
    { id: "h_ch_hl_b5_c2_s1_t1", name: "現代文綜合：主旨/推論/修辭整合題", unitCode: "chi_b5", tags: ["高三","國文","現代文","綜合"] },

    // 閱讀素養
    { id: "h_ch_hl_b5_c3_s1_t1", name: "閱讀素養：跨文本整合（圖表＋文章）", unitCode: "chi_b5", tags: ["高三","國文","閱讀素養","跨文本"] },

    // 寫作（學測/分科）
    { id: "h_ch_hl_b5_c4_s1_t1", name: "寫作：學測/分科作文題型訓練", unitCode: "chi_b5", tags: ["高三","國文","寫作","學測"] },
    { id: "h_ch_hl_b5_c4_s2_t1", name: "寫作：高分句型與論證策略", unitCode: "chi_b5", tags: ["高三","國文","寫作","高分"] },

    // 國學常識
    { id: "h_ch_hl_b5_c5_s1_t1", name: "國學：成語/典故/詩詞/文史綜合題", unitCode: "chi_b5", tags: ["高三","國文","國學","綜合"] },

    // 模考與診斷
    { id: "h_ch_hl_b5_c6_s1_t1", name: "模考：國文全科模擬試題", unitCode: "chi_b5", tags: ["高三","國文","模考","全科"] },
    { id: "h_ch_hl_b5_c6_s2_t1", name: "診斷：弱點分析與強化練習", unitCode: "chi_b5", tags: ["高三","國文","診斷","弱點"] }
  ]
}   


];
