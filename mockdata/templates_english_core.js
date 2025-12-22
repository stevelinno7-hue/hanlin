(function(global){
    'use strict';

    // 定義啟動函式
    function init() {
        // 1. 檢查引擎是否就緒 (等待機制)
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        
        // 如果引擎還沒好，等待 100ms 後重試
        if (!G || !G.registerTemplate) {
            setTimeout(init, 100);
            return;
        }

        // 引擎已就緒，取出工具
        const { pick, shuffle } = G.utils;

        // ==========================================
        // 英文文法全方位資料庫
        // ==========================================
        const grammarDB = [
            // [Topic 1] 基本時態 (Tenses)
            { q: "Listen! The baby _____ in the bedroom.", a: "is crying", o: ["cries","cried","cry"], tag: ["國七","時態"] },
            { q: "My father _____ newspapers every morning.", a: "reads", o: ["read","reading","is reading"], tag: ["國七","時態"] },
            { q: "We _____ a movie last night.", a: "watched", o: ["watch","watching","have watched"], tag: ["國七","時態"] },
            { q: "They _____ to Japan three times.", a: "have been", o: ["have gone","went","go"], tag: ["國八","時態"] },
            { q: "I _____ my homework yet.", a: "haven't finished", o: ["didn't finish","don't finish","won't finish"], tag: ["國八","時態"] },
            { q: "When I arrived, he _____ dinner.", a: "was having", o: ["has","is having","had"], tag: ["國八","時態"] },
            { q: "By the time you come back, I _____ the work.", a: "will have finished", o: ["finish","finished","have finished"], tag: ["高一","時態"] },
            
            // [Topic 2] 被動語態 (Passive Voice)
            { q: "The window _____ by the boy yesterday.", a: "was broken", o: ["broke","broken","is broken"], tag: ["國八","被動"] },
            { q: "English _____ in many countries.", a: "is spoken", o: ["speaks","spoke","is speaking"], tag: ["國八","被動"] },
            { q: "The work must _____ by Friday.", a: "be done", o: ["do","done","doing"], tag: ["國九","被動"] },
            { q: "The cake _____ right now.", a: "is being made", o: ["is making","makes","made"], tag: ["國九","被動"] },
            
            // [Topic 3] 特殊動詞 (授與/感官/使役)
            { q: "My mom made me _____ the floor.", a: "mop", o: ["to mop","mopping","mopped"], tag: ["國八","使役"] },
            { q: "I saw him _____ the street just now.", a: "cross", o: ["to cross","crossed","to crossing"], tag: ["國八","感官"] },
            { q: "He gave me _____.", a: "a book", o: ["to a book","for a book","at a book"], tag: ["國八","授與"] },
            
            // [Topic 4] 不定詞與動名詞
            { q: "I enjoy _____ music.", a: "listening to", o: ["to listen to","listen to","listened to"], tag: ["國九","動名詞"] },
            { q: "She wants _____ a doctor.", a: "to be", o: ["being","be","is"], tag: ["國九","不定詞"] },
            { q: "He quit _____ last year.", a: "smoking", o: ["to smoke","smoke","smoked"], tag: ["國九","動名詞"] },
            { q: "Remember _____ the door when you leave.", a: "to lock", o: ["locking","lock","locked"], tag: ["國九","不定詞"] },
            
            // [Topic 5] 關係子句 (Relative Clauses)
            { q: "The girl _____ is crying is my sister.", a: "who", o: ["which","whose","whom"], tag: ["國九","關代"] },
            { q: "This is the book _____ I bought yesterday.", a: "which", o: ["who","whose","where"], tag: ["國九","關代"] },
            { q: "The man _____ car was stolen called the police.", a: "whose", o: ["who","which","that"], tag: ["國九","關代"] },
            { q: "He is the only person _____ knows the secret.", a: "that", o: ["who","which","whose"], tag: ["高一","關代"] },

            // [Topic 6] 連接詞與假設語氣
            { q: "_____ it rained, we still went hiking.", a: "Although", o: ["Because","If","But"], tag: ["國八","連接詞"] },
            { q: "If I _____ you, I would accept the offer.", a: "were", o: ["am","was","be"], tag: ["高二","假設"] },
            { q: "If it _____ tomorrow, we will cancel the picnic.", a: "rains", o: ["rained","will rain","rain"], tag: ["高一","假設"] },
            
            // [Topic 7] 倒裝句與比較級
            { q: "Never _____ such a beautiful sight.", a: "have I seen", o: ["I have seen","I saw","did I saw"], tag: ["高三","倒裝"] },
            { q: "He is _____ than his brother.", a: "taller", o: ["tall","tallest","the tallest"], tag: ["國八","比較"] },
            { q: "The more you learn, the _____ you become.", a: "wiser", o: ["wise","wisest","more wise"], tag: ["高一","比較"] }
        ];

        // 1. 文法選擇
        G.registerTemplate('eng_grammar_choice', (ctx, rnd) => {
            const item = pick(grammarDB);
            const opts = shuffle([item.a, ...item.o]);
            return {
                question: item.q,
                options: opts,
                answer: opts.indexOf(item.a),
                concept: item.tag[1],
                explanation: [`Correct answer: ${item.a}`]
            };
        }, ["english", "英文", "文法", "國七", "國八", "國九", "高一", "高二", "高三"]);

        // 2. 對話填空 (更自然的情境)
        const dialogues = [
            { a: "How have you been recently?", b: "I've been doing great, thanks.", o: ["I am doing homework.", "Yes, I am.", "See you later."], t: "問候" },
            { a: "May I take your order?", b: "Yes, I'd like a steak, please.", o: ["No, I don't like it.", "Here is the menu.", "Check, please."], t: "餐廳" },
            { a: "Excuse me, how do I get to the station?", b: "Go straight and turn left.", o: ["It is 5 o'clock.", "I am taking a bus.", "Yes, it is."], t: "問路" }
        ];

        G.registerTemplate('eng_dialogue', (ctx, rnd) => {
            const item = pick(dialogues);
            const opts = shuffle([item.b, ...item.o]);
            return {
                question: `A: ${item.a}\nB: __________`,
                options: opts,
                answer: opts.indexOf(item.b),
                concept: `會話 (${item.t})`,
                explanation: [`A: ${item.a}`, `B: ${item.b}`]
            };
        }, ["english", "英文", "會話"]);

        console.log("✅ 英文文法題庫已載入完成。");
    }

    // 啟動！
    init();

})(window);
