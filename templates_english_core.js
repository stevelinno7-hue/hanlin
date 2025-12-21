(function (global) {
  'use strict';

  function init() {
    const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    if (!G || !G.registerTemplate || !G.utils) {
      setTimeout(init, 100);
      return;
    }

    const { pick, shuffle } = G.utils;

    // ====================================================
    // Grammar DB（tag → t）
    // ====================================================
    const grammarDB = [
        
    // ----------------------------------------------------
    // [Topic 1] 基本時態 (Tenses)
    // ----------------------------------------------------
    { q: "Listen! The baby _____ in the bedroom.", a: "is crying", o: ["cries","cried","cry"], t: ["國七","時態"] },
    { q: "My father _____ newspapers every morning.", a: "reads", o: ["read","reading","is reading"], t: ["國七","時態"] },
    { q: "We _____ a movie last night.", a: "watched", o: ["watch","watching","have watched"], t: ["國七","時態"] },
    { q: "_____ you going to the party tomorrow?", a: "Are", o: ["Do","Will","Have"], t: ["國七","時態"] },
    { q: "They _____ to Japan three times.", a: "have been", o: ["have gone","went","go"], t: ["國八","時態"] },
    { q: "I _____ my homework yet.", a: "haven't finished", o: ["didn't finish","don't finish","won't finish"], t: ["國八","時態"] },
    { q: "When I arrived, he _____ dinner.", a: "was having", o: ["has","is having","had"], t: ["國八","時態"] },
    { q: "She _____ in Taipei since 2010.", a: "has lived", o: ["lives","lived","is living"], t: ["國八","時態"] },
    { q: "By the time you come back, I _____ the work.", a: "will have finished", o: ["finish","finished","have finished"], t: ["高一","時態"] },
    { q: "The train _____ before we reached the station.", a: "had left", o: ["left","has left","leaves"], t: ["高一","時態"] },

    // ----------------------------------------------------
    // [Topic 2] 被動語態 (Passive Voice)
    // ----------------------------------------------------
    { q: "The window _____ by the boy yesterday.", a: "was broken", o: ["broke","broken","is broken"], t: ["國八","被動"] },
    { q: "English _____ in many countries.", a: "is spoken", o: ["speaks","spoke","is speaking"], t: ["國八","被動"] },
    { q: "The work must _____ by Friday.", a: "be done", o: ["do","done","doing"], t: ["國九","被動"] },
    { q: "The cake _____ right now.", a: "is being made", o: ["is making","makes","made"], t: ["國九","被動"] },
    { q: "Has the car _____ yet?", a: "been washed", o: ["washed","washing","wash"], t: ["國九","被動"] },
    { q: "We were made _____ the room.", a: "to clean", o: ["clean","cleaning","cleaned"], t: ["國九","被動"] },
    { q: "It is _____ that he is a genius.", a: "said", o: ["saying","say","says"], t: ["高一","被動"] },

    // ----------------------------------------------------
    // [Topic 3] 特殊動詞
    // ----------------------------------------------------
    { q: "My mom made me _____ the floor.", a: "mop", o: ["to mop","mopping","mopped"], t: ["國八","使役"] },
    { q: "I saw him _____ the street just now.", a: "cross", o: ["to cross","crossed","to crossing"], t: ["國八","感官"] },
    { q: "Please let him _____ in.", a: "come", o: ["to come","coming","came"], t: ["國八","使役"] },
    { q: "He gave me _____.", a: "a book", o: ["to a book","for a book","at a book"], t: ["國八","授與"] },
    { q: "She bought a bike _____ her son.", a: "for", o: ["to","of","with"], t: ["國八","授與"] },
    { q: "I felt the house _____.", a: "shaking", o: ["to shake","shaken","shook"], t: ["國八","感官"] },
    { q: "Can you help me _____ the box?", a: "move", o: ["moving","moved","movement"], t: ["國八","使役"] },

    // ----------------------------------------------------
    // [Topic 4] 不定詞與動名詞
    // ----------------------------------------------------
    { q: "I enjoy _____ music.", a: "listening to", o: ["to listen to","listen to","listened to"], t: ["國九","動名詞"] },
    { q: "She wants _____ a doctor.", a: "to be", o: ["being","be","is"], t: ["國九","不定詞"] },
    { q: "He quit _____ last year.", a: "smoking", o: ["to smoke","smoke","smoked"], t: ["國九","動名詞"] },
    { q: "Remember _____ the door when you leave.", a: "to lock", o: ["locking","lock","locked"], t: ["國九","不定詞"] },
    { q: "I remember _____ him somewhere before.", a: "seeing", o: ["to see","see","saw"], t: ["國九","動名詞"] },
    { q: "It is excited _____ the game.", a: "to watch", o: ["watching","watch","watched"], t: ["國九","不定詞"] },
    { q: "I look forward to _____ you.", a: "seeing", o: ["see","saw","to see"], t: ["高一","片語"] },
    { q: "He is used to _____ up early.", a: "getting", o: ["get","got","getting"], t: ["高一","片語"] },
    { q: "The boy had difficulty _____ the question.", a: "answering", o: ["to answer","answer","answered"], t: ["高一","動名詞"] },

    // ----------------------------------------------------
    // [Topic 5] 關係子句
    // ----------------------------------------------------
    { q: "The girl _____ is crying is my sister.", a: "who", o: ["which","whose","whom"], t: ["國九","關代"] },
    { q: "This is the book _____ I bought yesterday.", a: "which", o: ["who","whose","where"], t: ["國九","關代"] },
    { q: "The man _____ car was stolen called the police.", a: "whose", o: ["who","which","that"], t: ["國九","關代"] },
    { q: "I like the house _____ creates a warm feeling.", a: "that", o: ["who","where","whose"], t: ["國九","關代"] },
    { q: "This is the place _____ we first met.", a: "where", o: ["which","that","what"], t: ["高一","關代"] },
    { q: "The reason _____ he was late is unknown.", a: "why", o: ["which","where","what"], t: ["高一","關代"] },
    { q: "He is the only person _____ knows the secret.", a: "that", o: ["who","which","whose"], t: ["高一","關代"] },
    { q: "Those _____ work hard will succeed.", a: "who", o: ["which","whose","whom"], t: ["高一","關代"] },

    // ----------------------------------------------------
    // [Topic 6] 連接詞
    // ----------------------------------------------------
    { q: "_____ it rained, we still went hiking.", a: "Although", o: ["Because","If","But"], t: ["國八","連接詞"] },
    { q: "He is rich _____ unhappy.", a: "but", o: ["so","because","or"], t: ["國八","連接詞"] },
    { q: "I will call you _____ I arrive.", a: "as soon as", o: ["so that","although","unless"], t: ["國九","連接詞"] },
    { q: "Take an umbrella _____ it rains.", a: "in case", o: ["unless","although","so that"], t: ["高一","連接詞"] },
    { q: "He studies hard _____ he can pass the exam.", a: "so that", o: ["because","although","unless"], t: ["高一","連接詞"] },
    { q: "_____ you are busy, I won't disturb you.", a: "Since", o: ["Although","Unless","Whether"], t: ["高一","連接詞"] },

    // ----------------------------------------------------
    // [Topic 7] 分詞構句
    // ----------------------------------------------------
    { q: "The girl _____ in red is my cousin.", a: "dressed", o: ["dressing","dress","dresses"], t: ["高一","分詞"] },
    { q: "_____ by the dog, the boy cried.", a: "Bitten", o: ["Biting","Bit","To bite"], t: ["高二","分詞"] },
    { q: "_____ the door, he found no one inside.", a: "Opening", o: ["Opened","Open","To open"], t: ["高二","分詞"] },
    { q: "Generally _____, women live longer than men.", a: "speaking", o: ["spoken","speak","to speak"], t: ["高二","分詞"] },
    { q: "The game is _____.", a: "exciting", o: ["excited","excite","excites"], t: ["國八","分詞"] },
    { q: "I am _____ in the story.", a: "interested", o: ["interesting","interest","interests"], t: ["國八","分詞"] },

    // ----------------------------------------------------
    // [Topic 8] 假設語氣
    // ----------------------------------------------------
    { q: "If I _____ you, I would accept the offer.", a: "were", o: ["am","was","be"], t: ["高二","假設"] },
    { q: "If it _____ tomorrow, we will cancel the picnic.", a: "rains", o: ["rained","will rain","rain"], t: ["高一","假設"] },
    { q: "If I _____ known the truth, I would have told you.", a: "had", o: ["have","has","having"], t: ["高三","假設"] },
    { q: "I wish I _____ a bird.", a: "were", o: ["am","was","will be"], t: ["高二","假設"] },
    { q: "It is high time that we _____ to bed.", a: "went", o: ["go","have gone","will go"], t: ["高三","假設"] },
    { q: "Without water, we _____ survive.", a: "could not", o: ["cannot","will not","are not"], t: ["高二","假設"] },

    // ----------------------------------------------------
    // [Topic 9] 倒裝句
    // ----------------------------------------------------
    { q: "Never _____ such a beautiful sight.", a: "have I seen", o: ["I have seen","I saw","did I saw"], t: ["高三","倒裝"] },
    { q: "Only by working hard _____ succeed.", a: "can you", o: ["you can","you could","can't you"], t: ["高三","倒裝"] },
    { q: "Rarely _____ out at night.", a: "does he go", o: ["he goes","he went","goes he"], t: ["高三","倒裝"] },
    { q: "Not only _____ beautiful but she is also smart.", a: "is she", o: ["she is","was she","she was"], t: ["高三","倒裝"] },
    { q: "Here _____ the bus!", a: "comes", o: ["is coming","come","coming"], t: ["高二","倒裝"] },

    // ----------------------------------------------------
    // [Topic 10] 比較級
    // ----------------------------------------------------
    { q: "He is _____ than his brother.", a: "taller", o: ["tall","tallest","the tallest"], t: ["國八","比較"] },
    { q: "This is the _____ movie I have ever seen.", a: "best", o: ["good","better","well"], t: ["國八","比較"] },
    { q: "She is as _____ as a rose.", a: "beautiful", o: ["more beautiful","most beautiful","beautifuler"], t: ["國八","比較"] },
    { q: "The more you learn, the _____ you become.", a: "wiser", o: ["wise","wisest","more wise"], t: ["高一","比較"] },
    { q: "Of the two boys, Tom is the _____.", a: "taller", o: ["tallest","tall","talls"], t: ["高一","比較"] },

    // ----------------------------------------------------
    // [Topic 11] 附加問句
    // ----------------------------------------------------
    { q: "You are a student, _____?", a: "aren't you", o: ["are you","don't you","do you"], t: ["國八","問句"] },
    { q: "He didn't go to school, _____?", a: "did he", o: ["didn't he","was he","wasn't he"], t: ["國八","問句"] },
    { q: "Let's go for a walk, _____?", a: "shall we", o: ["will we","do we","don't we"], t: ["國八","問句"] },
    { q: "Open the door, _____?", a: "will you", o: ["do you","don't you","shall we"], t: ["國八","問句"] },
    { q: "There is a dog, _____?", a: "isn't there", o: ["is there","isn't it","is it"], t: ["國八","問句"] },

    // ----------------------------------------------------
    // [Topic 12] 介系詞與片語
    // ----------------------------------------------------
    { q: "He is interested _____ music.", a: "in", o: ["on","at","of"], t: ["國八","片語"] },
    { q: "I am afraid _____ dogs.", a: "of", o: ["in","at","with"], t: ["國八","片語"] },
    { q: "The meeting will start _____ 9:00 AM.", a: "at", o: ["in","on","for"], t: ["國七","介系詞"] },
    { q: "He was born _____ 1990.", a: "in", o: ["on","at","of"], t: ["國七","介系詞"] },
    { q: "The book is _____ the table.", a: "on", o: ["in","at","to"], t: ["國七","介系詞"] },
    { q: "We insist _____ your leaving.", a: "on", o: ["in","at","of"], t: ["高二","片語"] },
    { q: "He is famous _____ his novels.", a: "for", o: ["as","in","to"], t: ["國九","片語"] }

    ];

    // =========================
    // 文法選擇題 Template（tag → t）
    // =========================
    G.registerTemplate(
      'eng_grammar_choice',
      () => {
        const item = pick(grammarDB);
        const opts = shuffle([item.a, ...item.o]);
        return {
          question: item.q,
          options: opts,
          answer: opts.indexOf(item.a),
          concept: item.t[1],
          explanation: [`Correct answer: ${item.a}`]
        };
      },
      ["英文", "文法"]
    );

    // ====================================================
    // 對話題庫（原本就是 grade / scene，無需改）
    // ====================================================
    const dialogueDB = [
      { grade: "國七", scene: "校園", a: "What class do we have now?", b: "We have English class.", o: ["I like English.", "It's my book.", "Yes, I do."] },
      { grade: "國八", scene: "校園", a: "Did you finish your homework?", b: "Yes, I did.", o: ["I do my homework.", "I like homework.", "I am homework."] },

      { grade: "國七", scene: "餐廳", a: "May I take your order?", b: "Yes, I'd like a hamburger.", o: ["It's delicious.", "Here you are.", "I am hungry."] },
      { grade: "國八", scene: "餐廳", a: "Would you like something to drink?", b: "A cup of tea, please.", o: ["I drink tea.", "Yes, I like tea.", "No, I drink tea."] },

      { grade: "國七", scene: "問路", a: "Where is the restroom?", b: "Over there.", o: ["It is five o'clock.", "I like it.", "Yes, it is."] },
      { grade: "國九", scene: "問路", a: "How can I get to the station?", b: "Go straight and turn left.", o: ["I go to school.", "It is far.", "I am walking."] }
    ];

    const GRADE_ALIAS = {
      "國七": ["國七", "國七上", "國七下"],
      "國八": ["國八", "國八上", "國八下"],
      "國九": ["國九", "國九上", "國九下"]
    };

    Object.entries(GRADE_ALIAS).forEach(([grade, aliases]) => {
      ["校園", "餐廳", "問路"].forEach(scene => {
        const pool = dialogueDB.filter(d => d.grade === grade && d.scene === scene);
        if (!pool.length) return;

        G.registerTemplate(
          'eng_dialogue_choice',
          () => {
            const item = pick(pool);
            const opts = shuffle([item.b, ...item.o]);
            return {
              question: `A: ${item.a}\nB: __________`,
              options: opts,
              answer: opts.indexOf(item.b),
              concept: `會話－${item.scene}`,
              explanation: [`A: ${item.a}`, `B: ${item.b}`]
            };
          },
          ["英文", "會話", scene, ...aliases]
        );
      });
    });

    console.log("✅ 所有 tag 已統一改為 t，題庫載入完成");
  }

  init();
})(window);
