// curriculum_english.js
// 英文科 — 翰林 Book 1（高一上）
// 顆粒度：概念 → 技能點 → 題型分類
// id 命名規則：h_e_hl_b1_c{概念}_s{技能}_t{題型}

window.Curriculum108_English = [
  {
    stage: "high_school",
    grade: "10",
    subject: "english",
    subjectName: "英文",
    version: "翰林",
    book: "Book 1",
    type: "regular",
    courses: [
      // ==========================================
      // Vocabulary（字彙）
      // ==========================================
      { id: "h_e_hl_b1_c1_s1_t1", name: "Vocabulary: 常見名詞詞義選擇（Meaning Choice）", unitCode: "eng_b1", tags: ["高一上","英文","Vocabulary","Meaning Choice"] },
      { id: "h_e_hl_b1_c1_s1_t2", name: "Vocabulary: 名詞詞性判斷（Part of Speech）", unitCode: "eng_b1", tags: ["高一上","英文","Vocabulary","Part of Speech"] },
      { id: "h_e_hl_b1_c1_s2_t1", name: "Vocabulary: 常見動詞片語（Phrasal Verb）辨識與用法", unitCode: "eng_b1", tags: ["高一上","英文","Vocabulary","Phrasal Verb"] },
      { id: "h_e_hl_b1_c1_s2_t2", name: "Vocabulary: 片語動詞在句中替換（Collocation）", unitCode: "eng_b1", tags: ["高一上","英文","Vocabulary","Collocation"] },
      { id: "h_e_hl_b1_c1_s3_t1", name: "Vocabulary: 字根字首字尾分析（Morphology）", unitCode: "eng_b1", tags: ["高一上","英文","Vocabulary","Morphology"] },
      { id: "h_e_hl_b1_c1_s3_t2", name: "Vocabulary: 同義/反義字選擇（Synonym/Antonym）", unitCode: "eng_b1", tags: ["高一上","英文","Vocabulary","Synonym/Antonym"] },
      { id: "h_e_hl_b1_c1_s4_t1", name: "Vocabulary: 詞彙搭配題（Collocation）", unitCode: "eng_b1", tags: ["高一上","英文","Vocabulary","Collocation"] },

      // ==========================================
      // Grammar（文法）
      // ==========================================
      // C2: 時態（Present Simple / Continuous / Perfect）
      { id: "h_e_hl_b1_c2_s1_t1", name: "Grammar: 現在簡單式用法與句型（Grammar MCQ）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Tense","Present Simple"] },
      { id: "h_e_hl_b1_c2_s1_t2", name: "Grammar: 現在進行式與現在簡單式比較（Error Identification）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Tense","Present Continuous"] },
      { id: "h_e_hl_b1_c2_s1_t3", name: "Grammar: 現在完成式基本用法（Grammar Cloze）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Tense","Present Perfect"] },

      // C2: 過去式與過去完成
      { id: "h_e_hl_b1_c2_s2_t1", name: "Grammar: 過去簡單式與過去進行式（Grammar MCQ）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Tense","Past"] },
      { id: "h_e_hl_b1_c2_s2_t2", name: "Grammar: 過去完成式在敘述中的應用（Sentence Transformation）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Tense","Past Perfect"] },

      // C3: 被動語態與使役
      { id: "h_e_hl_b1_c3_s1_t1", name: "Grammar: 被動語態基本結構（Grammar MCQ）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Passive"] },
      { id: "h_e_hl_b1_c3_s1_t2", name: "Grammar: 被動語態句子改寫（Sentence Transformation）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Passive","Sentence Transformation"] },
      { id: "h_e_hl_b1_c3_s2_t1", name: "Grammar: 使役動詞（make/have/get）用法與改寫（Grammar Cloze）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Causative"] },

      // C4: 子句（名詞子句/形容詞子句/副詞子句）
      { id: "h_e_hl_b1_c4_s1_t1", name: "Grammar: 名詞子句的辨識與功能（Grammar MCQ）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Noun Clause"] },
      { id: "h_e_hl_b1_c4_s1_t2", name: "Grammar: 形容詞子句關係代名詞使用（Error Identification）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Relative Clause"] },
      { id: "h_e_hl_b1_c4_s1_t3", name: "Grammar: 副詞子句（時間/原因/條件）句型練習（Grammar Cloze）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Adverbial Clause"] },

      // C5: 句型與連接詞
      { id: "h_e_hl_b1_c5_s1_t1", name: "Grammar: 連接詞（and/but/so/because）在複句中的連接功能（Grammar MCQ）", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Conjunction"] },
      { id: "h_e_hl_b1_c5_s1_t2", name: "Grammar: 合併句（Sentence Combination）練習", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Sentence Combination"] },
      { id: "h_e_hl_b1_c5_s1_t3", name: "Grammar: 錯誤辨識題（Error Identification）— 連詞與標點", unitCode: "eng_b1", tags: ["高一上","英文","Grammar","Error Identification"] },

      // ==========================================
      // Reading（閱讀）
      // ==========================================
      // C6: 主旨大意與段落結構
      { id: "h_e_hl_b1_c6_s1_t1", name: "Reading: 主旨大意判斷（Main Idea）", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Main Idea"] },
      { id: "h_e_hl_b1_c6_s1_t2", name: "Reading: 段落結構與段落主題句辨識（Detail）", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Paragraph Structure"] },
      { id: "h_e_hl_b1_c6_s1_t3", name: "Reading: 段落重組（Sentence Ordering）", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Sentence Ordering"] },

      // C7: 細節理解與事實判斷
      { id: "h_e_hl_b1_c7_s1_t1", name: "Reading: 細節題（Detail）— 事實與細節抓取", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Detail"] },
      { id: "h_e_hl_b1_c7_s1_t2", name: "Reading: 文中代詞與指涉（Inference/Detail）", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Reference"] },

      // C8: 推論判斷與作者態度
      { id: "h_e_hl_b1_c8_s1_t1", name: "Reading: 推論題（Inference）— 隱含意義判斷", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Inference"] },
      { id: "h_e_hl_b1_c8_s1_t2", name: "Reading: 作者態度與語氣判斷（Inference）", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Tone"] },

      // C9: 文意選填與克漏字
      { id: "h_e_hl_b1_c9_s1_t1", name: "Reading: 文意選填（Cloze）— 詞彙與語法並重", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Cloze"] },
      { id: "h_e_hl_b1_c9_s1_t2", name: "Reading: 克漏字（Cloze Test）— 上下文語意判斷", unitCode: "eng_b1", tags: ["高一上","英文","Reading","Cloze Test"] },

      // ==========================================
      // Writing（寫作）
      // ==========================================
      // C10: 句子寫作與改寫
      { id: "h_e_hl_b1_c10_s1_t1", name: "Writing: 句子改寫（Rewriting）— 同義替換與句型轉換", unitCode: "eng_b1", tags: ["高一上","英文","Writing","Rewriting"] },
      { id: "h_e_hl_b1_c10_s1_t2", name: "Writing: 句子寫作（Sentence Writing）— 主詞與動詞一致", unitCode: "eng_b1", tags: ["高一上","英文","Writing","Sentence Writing"] },

      // C11: 段落寫作基礎
      { id: "h_e_hl_b1_c11_s1_t1", name: "Writing: 段落結構（主題句/支持句/結論句）（Paragraph Writing）", unitCode: "eng_b1", tags: ["高一上","英文","Writing","Paragraph Writing"] },
      { id: "h_e_hl_b1_c11_s1_t2", name: "Writing: 段落連貫性與過渡語（Writing Skill）", unitCode: "eng_b1", tags: ["高一上","英文","Writing","Cohesion"] },

      // C12: 寫作技巧與修辭
      { id: "h_e_hl_b1_c12_s1_t1", name: "Writing: 主題句擬定與段落發展（Writing Skill）", unitCode: "eng_b1", tags: ["高一上","英文","Writing","Topic Sentence"] },
      { id: "h_e_hl_b1_c12_s1_t2", name: "Writing: 句型多樣化與連接詞使用（Writing Skill）", unitCode: "eng_b1", tags: ["高一上","英文","Writing","Variety"] },

      // ==========================================
      // Translation（翻譯）
      // ==========================================
      // C13: 中翻英（句子）
      { id: "h_e_hl_b1_c13_s1_t1", name: "Translation: 中翻英（句子級）— 常見句型翻譯練習（C→E）", unitCode: "eng_b1", tags: ["高一上","英文","Translation","C→E"] },
      { id: "h_e_hl_b1_c13_s1_t2", name: "Translation: 中翻英（片語與慣用語）（Phrase Translation）", unitCode: "eng_b1", tags: ["高一上","英文","Translation","Phrase Translation"] },

      // C14: 英翻中（句子與段落）
      { id: "h_e_hl_b1_c14_s1_t1", name: "Translation: 英翻中（句子級）— 文意與語氣保留（E→C）", unitCode: "eng_b1", tags: ["高一上","英文","Translation","E→C"] },
      { id: "h_e_hl_b1_c14_s1_t2", name: "Translation: 英翻中（段落級）— 主旨與細節轉譯（E→C）", unitCode: "eng_b1", tags: ["高一上","英文","Translation","Paragraph"] },

      // C15: 結構翻譯與語法對應
      { id: "h_e_hl_b1_c15_s1_t1", name: "Translation: 文法結構翻譯（Structure Translation）— 子句與被動語態轉換", unitCode: "eng_b1", tags: ["高一上","英文","Translation","Structure"] },
      { id: "h_e_hl_b1_c15_s1_t2", name: "Translation: 翻譯錯誤診斷（Error Identification）", unitCode: "eng_b1", tags: ["高一上","英文","Translation","Error Identification"] },

      // ==========================================
      // 綜合與模考導向（Vocabulary+Grammar+Reading+Writing+Translation）
      // ==========================================
      { id: "h_e_hl_b1_c16_s1_t1", name: "Integrated: 綜合測驗— 字彙/文法/閱讀混合題（模考導向）", unitCode: "eng_b1", tags: ["高一上","英文","Integrated","模考"] },
      { id: "h_e_hl_b1_c16_s1_t2", name: "Integrated: 閱讀後寫作（Reading-to-Writing）— 主旨延伸寫作", unitCode: "eng_b1", tags: ["高一上","英文","Integrated","Reading-to-Writing"] },
      { id: "h_e_hl_b1_c16_s1_t3", name: "Integrated: 翻譯與寫作結合題（Translation-to-Writing）", unitCode: "eng_b1", tags: ["高一上","英文","Integrated","Translation-to-Writing"] }
    ]
  }
];
// curriculum_english.js
// 英文科 — 翰林 Book 2–5（高一下 ~ 高三）
// 顆粒度：概念 → 技能點 → 題型分類
// id 命名規則：h_e_hl_b{冊}_c{概念}_s{技能}_t{題型}

window.Curriculum108_English = window.Curriculum108_English || [];
window.Curriculum108_English = window.Curriculum108_English.concat([

  // ==========================================
  // Book 2 — 高一下
  // 主題重點：進階字彙、時態延伸、對話理解、段落閱讀、句子寫作、句子翻譯
  // ==========================================
  {
    stage: "high_school",
    grade: "10",
    subject: "english",
    subjectName: "英文",
    version: "翰林",
    book: "Book 2",
    type: "regular",
    courses: [
      // Vocabulary
      { id: "h_e_hl_b2_c1_s1_t1", name: "Vocabulary: 中級名詞詞義選擇（Meaning Choice）", unitCode: "eng_b2", tags: ["高一下","英文","Vocabulary","Meaning Choice"] },
      { id: "h_e_hl_b2_c1_s1_t2", name: "Vocabulary: 動詞片語擴充（Phrasal Verb）", unitCode: "eng_b2", tags: ["高一下","英文","Vocabulary","Phrasal Verb"] },
      { id: "h_e_hl_b2_c1_s2_t1", name: "Vocabulary: 字根字首字尾進階（Morphology）", unitCode: "eng_b2", tags: ["高一下","英文","Vocabulary","Morphology"] },
      { id: "h_e_hl_b2_c1_s2_t2", name: "Vocabulary: 同義/反義字辨析（Synonym/Antonym）", unitCode: "eng_b2", tags: ["高一下","英文","Vocabulary","Synonym/Antonym"] },
      { id: "h_e_hl_b2_c1_s3_t1", name: "Vocabulary: 詞彙搭配與語域（Collocation & Register）", unitCode: "eng_b2", tags: ["高一下","英文","Vocabulary","Collocation"] },

      // Grammar — 時態與語態延伸
      { id: "h_e_hl_b2_c2_s1_t1", name: "Grammar: 現在完成進行式與過去完成進行式（Grammar MCQ）", unitCode: "eng_b2", tags: ["高一下","英文","Grammar","Tense","Perfect Continuous"] },
      { id: "h_e_hl_b2_c2_s1_t2", name: "Grammar: 時態混合敘述（Sentence Transformation）", unitCode: "eng_b2", tags: ["高一下","英文","Grammar","Tense","Transformation"] },
      { id: "h_e_hl_b2_c2_s2_t1", name: "Grammar: 被動語態進階（時態與被動結合）（Grammar Cloze）", unitCode: "eng_b2", tags: ["高一下","英文","Grammar","Passive"] },

      // Grammar — 子句與連接
      { id: "h_e_hl_b2_c3_s1_t1", name: "Grammar: 名詞子句進階（that/wh- 引導）（Grammar MCQ）", unitCode: "eng_b2", tags: ["高一下","英文","Grammar","Noun Clause"] },
      { id: "h_e_hl_b2_c3_s1_t2", name: "Grammar: 關係子句縮減與非限定用法（Error Identification）", unitCode: "eng_b2", tags: ["高一下","英文","Grammar","Relative Clause"] },
      { id: "h_e_hl_b2_c3_s2_t1", name: "Grammar: 連接詞複合句（因果/讓步/條件）（Grammar MCQ）", unitCode: "eng_b2", tags: ["高一下","英文","Grammar","Conjunction"] },

      // Reading — 段落與篇章
      { id: "h_e_hl_b2_c4_s1_t1", name: "Reading: 段落主旨與支持句（Main Idea）", unitCode: "eng_b2", tags: ["高一下","英文","Reading","Main Idea"] },
      { id: "h_e_hl_b2_c4_s1_t2", name: "Reading: 細節題與事實判斷（Detail）", unitCode: "eng_b2", tags: ["高一下","英文","Reading","Detail"] },
      { id: "h_e_hl_b2_c4_s2_t1", name: "Reading: 推論題與語意暗示（Inference）", unitCode: "eng_b2", tags: ["高一下","英文","Reading","Inference"] },
      { id: "h_e_hl_b2_c4_s2_t2", name: "Reading: 文意選填（Cloze）— 語篇連貫性判斷", unitCode: "eng_b2", tags: ["高一下","英文","Reading","Cloze"] },

      // Writing — 句子與段落進階
      { id: "h_e_hl_b2_c5_s1_t1", name: "Writing: 複合句改寫（Rewriting）— 連接詞與從句運用", unitCode: "eng_b2", tags: ["高一下","英文","Writing","Rewriting"] },
      { id: "h_e_hl_b2_c5_s1_t2", name: "Writing: 段落發展— 支持句與例證（Paragraph Writing）", unitCode: "eng_b2", tags: ["高一下","英文","Writing","Paragraph Writing"] },
      { id: "h_e_hl_b2_c5_s2_t1", name: "Writing: 寫作連貫性與過渡語（Writing Skill）", unitCode: "eng_b2", tags: ["高一下","英文","Writing","Cohesion"] },

      // Translation
      { id: "h_e_hl_b2_c6_s1_t1", name: "Translation: 中翻英（段落級）— 主旨與語氣保留（C→E）", unitCode: "eng_b2", tags: ["高一下","英文","Translation","C→E"] },
      { id: "h_e_hl_b2_c6_s1_t2", name: "Translation: 英翻中（段落級）— 文化語境與語氣（E→C）", unitCode: "eng_b2", tags: ["高一下","英文","Translation","E→C"] },
      { id: "h_e_hl_b2_c6_s2_t1", name: "Translation: 結構翻譯— 從句與被動語態轉換（Structure Translation）", unitCode: "eng_b2", tags: ["高一下","英文","Translation","Structure"] },

      // Integrated
      { id: "h_e_hl_b2_c7_s1_t1", name: "Integrated: 聽讀後寫作（Reading-to-Writing）— 主旨延伸", unitCode: "eng_b2", tags: ["高一下","英文","Integrated","Reading-to-Writing"] },
      { id: "h_e_hl_b2_c7_s1_t2", name: "Integrated: 字彙+文法混合練習（Grammar+Vocab）", unitCode: "eng_b2", tags: ["高一下","英文","Integrated","Grammar+Vocab"] }
    ]
  },

  // ==========================================
  // Book 3 — 高二上
  // 主題重點：高階字彙、複雜句型、長篇閱讀、論說文寫作、段落翻譯
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "english",
    subjectName: "英文",
    version: "翰林",
    book: "Book 3",
    type: "regular",
    courses: [
      // Vocabulary
      { id: "h_e_hl_b3_c1_s1_t1", name: "Vocabulary: 學術字彙（Academic Vocabulary）— 意義與用法", unitCode: "eng_b3", tags: ["高二上","英文","Vocabulary","Academic"] },
      { id: "h_e_hl_b3_c1_s1_t2", name: "Vocabulary: 同根字與詞族擴展（Morphology）", unitCode: "eng_b3", tags: ["高二上","英文","Vocabulary","Morphology"] },
      { id: "h_e_hl_b3_c1_s2_t1", name: "Vocabulary: 片語動詞與慣用語（Phrasal Verb）— 進階應用", unitCode: "eng_b3", tags: ["高二上","英文","Vocabulary","Phrasal Verb"] },

      // Grammar — 複雜句型
      { id: "h_e_hl_b3_c2_s1_t1", name: "Grammar: 虛擬語氣（假設語氣）— 現在/過去/過去完成（Grammar MCQ）", unitCode: "eng_b3", tags: ["高二上","英文","Grammar","Subjunctive"] },
      { id: "h_e_hl_b3_c2_s1_t2", name: "Grammar: 倒裝與強調句型（Sentence Transformation）", unitCode: "eng_b3", tags: ["高二上","英文","Grammar","Inversion"] },
      { id: "h_e_hl_b3_c2_s2_t1", name: "Grammar: 分詞構句與省略（Grammar Cloze）", unitCode: "eng_b3", tags: ["高二上","英文","Grammar","Participle"] },

      // Reading — 長篇與論說文
      { id: "h_e_hl_b3_c3_s1_t1", name: "Reading: 論說文主旨與論證結構（Main Idea）", unitCode: "eng_b3", tags: ["高二上","英文","Reading","Argument"] },
      { id: "h_e_hl_b3_c3_s1_t2", name: "Reading: 推論與作者立場判斷（Inference/Tone）", unitCode: "eng_b3", tags: ["高二上","英文","Reading","Inference"] },
      { id: "h_e_hl_b3_c3_s2_t1", name: "Reading: 長篇閱讀的段落連貫與邏輯關係（Cohesion）", unitCode: "eng_b3", tags: ["高二上","英文","Reading","Cohesion"] },

      // Writing — 論說文與說服性寫作
      { id: "h_e_hl_b3_c4_s1_t1", name: "Writing: 論說文架構（引言/論點/證據/結論）（Paragraph/Essay）", unitCode: "eng_b3", tags: ["高二上","英文","Writing","Argumentative"] },
      { id: "h_e_hl_b3_c4_s1_t2", name: "Writing: 證據選擇與論證技巧（Writing Skill）", unitCode: "eng_b3", tags: ["高二上","英文","Writing","Evidence"] },
      { id: "h_e_hl_b3_c4_s2_t1", name: "Writing: 反駁與對立觀點處理（Advanced Writing）", unitCode: "eng_b3", tags: ["高二上","英文","Writing","Counterargument"] },

      // Translation — 段落與文化語境
      { id: "h_e_hl_b3_c5_s1_t1", name: "Translation: 中翻英（論說段落）— 保留論證邏輯（C→E）", unitCode: "eng_b3", tags: ["高二上","英文","Translation","C→E"] },
      { id: "h_e_hl_b3_c5_s1_t2", name: "Translation: 英翻中（論說段落）— 文化語境與語氣（E→C）", unitCode: "eng_b3", tags: ["高二上","英文","Translation","E→C"] },
      { id: "h_e_hl_b3_c5_s2_t1", name: "Translation: 翻譯策略— 簡化、擴充與意譯（Strategy）", unitCode: "eng_b3", tags: ["高二上","英文","Translation","Strategy"] },

      // Integrated & Exam Skills
      { id: "h_e_hl_b3_c6_s1_t1", name: "Integrated: 長篇閱讀後寫作（Reading-to-Writing）— 主旨延伸與論證", unitCode: "eng_b3", tags: ["高二上","英文","Integrated","Reading-to-Writing"] },
      { id: "h_e_hl_b3_c6_s1_t2", name: "Exam Skills: 閱讀速度與重點標註技巧（Skimming/Scanning）", unitCode: "eng_b3", tags: ["高二上","英文","Exam","Skimming"] },
      { id: "h_e_hl_b3_c6_s1_t3", name: "Exam Skills: 試題類型分析與答題策略（Time Management）", unitCode: "eng_b3", tags: ["高二上","英文","Exam","Strategy"] }
    ]
  },

  // ==========================================
  // Book 4 — 高二下
  // 主題重點：學術字彙擴展、複雜語法應用、跨文本閱讀、研究型寫作、專題翻譯
  // ==========================================
  {
    stage: "high_school",
    grade: "11",
    subject: "english",
    subjectName: "英文",
    version: "翰林",
    book: "Book 4",
    type: "regular",
    courses: [
      // Vocabulary — 學術與專業詞彙
      { id: "h_e_hl_b4_c1_s1_t1", name: "Vocabulary: 學術詞彙辨識與用法（Academic Vocabulary）", unitCode: "eng_b4", tags: ["高二下","英文","Vocabulary","Academic"] },
      { id: "h_e_hl_b4_c1_s1_t2", name: "Vocabulary: 專業領域詞彙（Science/Social Studies）", unitCode: "eng_b4", tags: ["高二下","英文","Vocabulary","Domain Specific"] },
      { id: "h_e_hl_b4_c1_s2_t1", name: "Vocabulary: 詞彙語意網絡與語義場（Semantic Field）", unitCode: "eng_b4", tags: ["高二下","英文","Vocabulary","Semantic"] },

      // Grammar — 高階語法整合
      { id: "h_e_hl_b4_c2_s1_t1", name: "Grammar: 複合句的邏輯連接（因果/讓步/對比）（Grammar MCQ）", unitCode: "eng_b4", tags: ["高二下","英文","Grammar","Complex Sentences"] },
      { id: "h_e_hl_b4_c2_s1_t2", name: "Grammar: 子句內的語序與省略（Error Identification）", unitCode: "eng_b4", tags: ["高二下","英文","Grammar","Ellipsis"] },
      { id: "h_e_hl_b4_c2_s2_t1", name: "Grammar: 名詞化與風格轉換（Style Shift）", unitCode: "eng_b4", tags: ["高二下","英文","Grammar","Nominalization"] },

      // Reading — 跨文本比較與批判性閱讀
      { id: "h_e_hl_b4_c3_s1_t1", name: "Reading: 跨文本主題比較（Comparative Reading）", unitCode: "eng_b4", tags: ["高二下","英文","Reading","Comparative"] },
      { id: "h_e_hl_b4_c3_s1_t2", name: "Reading: 批判性閱讀— 證據評估與來源判斷（Critical Reading）", unitCode: "eng_b4", tags: ["高二下","英文","Reading","Critical"] },
      { id: "h_e_hl_b4_c3_s2_t1", name: "Reading: 圖表與資料詮釋（Chart/Graph Interpretation）", unitCode: "eng_b4", tags: ["高二下","英文","Reading","Data"] },

      // Writing — 研究型寫作與引用
      { id: "h_e_hl_b4_c4_s1_t1", name: "Writing: 研究型寫作架構（Thesis/Support/Refutation）", unitCode: "eng_b4", tags: ["高二下","英文","Writing","Research"] },
      { id: "h_e_hl_b4_c4_s1_t2", name: "Writing: 引用與改寫（Paraphrase & Citation）", unitCode: "eng_b4", tags: ["高二下","英文","Writing","Citation"] },
      { id: "h_e_hl_b4_c4_s2_t1", name: "Writing: 風格與語域調整（Academic vs Informal）", unitCode: "eng_b4", tags: ["高二下","英文","Writing","Register"] },

      // Translation — 專題與文化語境
      { id: "h_e_hl_b4_c5_s1_t1", name: "Translation: 專題文章中翻英（Technical/Academic）", unitCode: "eng_b4", tags: ["高二下","英文","Translation","C→E","Technical"] },
      { id: "h_e_hl_b4_c5_s1_t2", name: "Translation: 英文專題翻譯（E→C）— 專業術語處理", unitCode: "eng_b4", tags: ["高二下","英文","Translation","E→C","Technical"] },
      { id: "h_e_hl_b4_c5_s2_t1", name: "Translation: 文化負載詞的處理策略（Cultural Terms）", unitCode: "eng_b4", tags: ["高二下","英文","Translation","Culture"] },

      // Integrated & Exam Prep
      { id: "h_e_hl_b4_c6_s1_t1", name: "Integrated: 閱讀+翻譯+寫作綜合訓練（Integrated Task）", unitCode: "eng_b4", tags: ["高二下","英文","Integrated","Reading+Translation+Writing"] },
      { id: "h_e_hl_b4_c6_s1_t2", name: "Exam Skills: 長篇閱讀答題策略與時間分配（Exam Strategy）", unitCode: "eng_b4", tags: ["高二下","英文","Exam","Strategy"] },
      { id: "h_e_hl_b4_c6_s1_t3", name: "Exam Skills: 翻譯速度與準確度訓練（Translation Drill）", unitCode: "eng_b4", tags: ["高二下","英文","Exam","Translation Drill"] }
    ]
  },

  // ==========================================
  // Book 5 — 高三
  // 主題重點：總複習、分科銜接、模考訓練、歷屆題型精練、寫作與翻譯強化
  // ==========================================
  {
    stage: "high_school",
    grade: "12",
    subject: "english",
    subjectName: "英文",
    version: "翰林",
    book: "Book 5",
    type: "review",
    courses: [
      // Vocabulary — 高頻字彙回顧與擴充
      { id: "h_e_hl_b5_c1_s1_t1", name: "Vocabulary: 高頻學測/分科字彙回顧（Frequency List）", unitCode: "eng_b5", tags: ["高三","英文","Vocabulary","High Frequency"] },
      { id: "h_e_hl_b5_c1_s1_t2", name: "Vocabulary: 同義替換與考題陷阱（Synonym Trap）", unitCode: "eng_b5", tags: ["高三","英文","Vocabulary","Synonym"] },

      // Grammar — 常考語法總整理
      { id: "h_e_hl_b5_c2_s1_t1", name: "Grammar: 常考語法點總整理（Tense/Clause/Voice）", unitCode: "eng_b5", tags: ["高三","英文","Grammar","Review"] },
      { id: "h_e_hl_b5_c2_s1_t2", name: "Grammar: 錯誤辨識與快速修正技巧（Error Identification）", unitCode: "eng_b5", tags: ["高三","英文","Grammar","Error Correction"] },

      // Reading — 模考題型精練
      { id: "h_e_hl_b5_c3_s1_t1", name: "Reading: 歷屆試題閱讀精選（Past Papers）", unitCode: "eng_b5", tags: ["高三","英文","Reading","Past Papers"] },
      { id: "h_e_hl_b5_c3_s1_t2", name: "Reading: 閱讀速解技巧與題型分類練習（Skimming/Scanning）", unitCode: "eng_b5", tags: ["高三","英文","Reading","Speed"] },
      { id: "h_e_hl_b5_c3_s2_t1", name: "Reading: 推論與題幹陷阱辨識（Inference Trap）", unitCode: "eng_b5", tags: ["高三","英文","Reading","Inference"] },

      // Writing — 分科/學測寫作強化
      { id: "h_e_hl_b5_c4_s1_t1", name: "Writing: 學測/分科作文題型練習（Exam Writing）", unitCode: "eng_b5", tags: ["高三","英文","Writing","Exam"] },
      { id: "h_e_hl_b5_c4_s1_t2", name: "Writing: 快速構思與時間管理（Planning & Timing）", unitCode: "eng_b5", tags: ["高三","英文","Writing","Timing"] },
      { id: "h_e_hl_b5_c4_s2_t1", name: "Writing: 高分句型與詞彙替換（High-Scoring Phrases）", unitCode: "eng_b5", tags: ["高三","英文","Writing","High Score"] },

      // Translation — 考試導向翻譯
      { id: "h_e_hl_b5_c5_s1_t1", name: "Translation: 歷屆翻譯題精選（C→E & E→C）", unitCode: "eng_b5", tags: ["高三","英文","Translation","Past Papers"] },
      { id: "h_e_hl_b5_c5_s1_t2", name: "Translation: 翻譯速解技巧與常見陷阱（Speed & Trap）", unitCode: "eng_b5", tags: ["高三","英文","Translation","Speed"] },

      // Mock & Diagnostics
      { id: "h_e_hl_b5_c6_s1_t1", name: "Mock: 全真模考（閱讀+文法+寫作+翻譯）— 時間限制練習", unitCode: "eng_b5", tags: ["高三","英文","Mock","Full Test"] },
      { id: "h_e_hl_b5_c6_s1_t2", name: "Diagnostics: 錯題分析與個人化補強計畫（Error Diagnosis）", unitCode: "eng_b5", tags: ["高三","英文","Diagnostics","Error Analysis"] },
      { id: "h_e_hl_b5_c6_s1_t3", name: "Strategy: 考場策略與心態調適（Exam Strategy）", unitCode: "eng_b5", tags: ["高三","英文","Strategy","Exam Mindset"] }
    ]
  }

]); 
