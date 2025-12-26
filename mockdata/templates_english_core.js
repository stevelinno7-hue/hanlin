(function (global) {
    'use strict';

    function init() {
        const G = global.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        if (!G || !G.registerTemplate) {
            setTimeout(init, 100);
            return;
        }

        const { pick, shuffle } = G.utils;

        // =====================================================
        // English Grammar Database (STRICT STANDARD)
        // q : question
        // a : answer
        // o : options
        // t : [grade, concept]
        // =====================================================
        const grammarDB = [
    // ===== 原始題目 =====
    // ===== 國七 =====
    { q: "Listen! The baby _____ in the bedroom.", a: "is crying", o: ["cries","cried","cry"], t: ["國七","時態"] },
    { q: "My father _____ newspapers every morning.", a: "reads", o: ["read","reading","is reading"], t: ["國七","時態"] },
    { q: "We _____ a movie last night.", a: "watched", o: ["watch","watching","have watched"], t: ["國七","時態"] },
    { q: "Where _____ you born?", a: "were", o: ["was","are","did"], t: ["國七","時態"] },
    { q: "The meeting will start _____ 9:00 AM.", a: "at", o: ["in","on","for"], t: ["國七","介系詞"] },

    // ===== 國八 =====
    { q: "They _____ to Japan three times.", a: "have been", o: ["have gone","went","go"], t: ["國八","現在完成式"] },
    { q: "The window _____ by the boy.", a: "was broken", o: ["broke","broken","is broken"], t: ["國八","被動"] },
    { q: "My mom made me _____ the floor.", a: "mop", o: ["to mop","mopping","mopped"], t: ["國八","使役"] },
    { q: "You are a student, _____?", a: "aren't you", o: ["are you","do you","don't you"], t: ["國八","附加問句"] },

    // ===== 國九 =====
    { q: "The work must _____ by Friday.", a: "be done", o: ["do","done","doing"], t: ["國九","被動"] },
    { q: "The girl _____ is crying is my sister.", a: "who", o: ["which","whose","whom"], t: ["國九","關係代名詞"] },
    { q: "I will call you _____ I arrive.", a: "as soon as", o: ["although","unless","so that"], t: ["國九","連接詞"] },

    // ===== 高一 =====
    { q: "By the time you come back, I _____ the work.", a: "will have finished", o: ["finish","finished","have finished"], t: ["高一","完成式"] },
    { q: "The girl _____ in red is my cousin.", a: "dressed", o: ["dressing","dress","dresses"], t: ["高一","分詞"] },

    // ===== 高二 =====
    { q: "If I _____ you, I would accept the offer.", a: "were", o: ["am","was","be"], t: ["高二","假設語氣"] },
    { q: "Here _____ the bus!", a: "comes", o: ["come","is coming","coming"], t: ["高二","倒裝"] },

    // ===== 高三 =====
    { q: "Never _____ such a beautiful sight.", a: "have I seen", o: ["I have seen","I saw","did I saw"], t: ["高三","倒裝"] },
    { q: "If I _____ known the truth, I would have told you.", a: "had", o: ["have","has","having"], t: ["高三","假設語氣"] },

    // ===== 新增 100 題開始 =====
    // 1-15 國七 基礎時態/介系詞/疑問句
    { q: "She _____ to school by bike every day.", a: "goes", o: ["go","is going","went"], t: ["國七","時態"] },
    { q: "Tom _____ his homework now.", a: "is doing", o: ["does","did","do"], t: ["國七","現在進行式"] },
    { q: "They _____ soccer last weekend.", a: "played", o: ["play","are playing","have played"], t: ["國七","時態"] },
    { q: "I _____ a sandwich for lunch yesterday.", a: "had", o: ["have","eat","eaten"], t: ["國七","時態"] },
    { q: "She lives _____ Taipei.", a: "in", o: ["at","on","to"], t: ["國七","介系詞"] },
    { q: "What _____ your name?", a: "is", o: ["are","do","does"], t: ["國七","疑問句"] },
    { q: "How many apples _____ there on the table?", a: "are", o: ["is","were","be"], t: ["國七","疑問句"] },
    { q: "Please _____ the door.", a: "close", o: ["closes","closing","closed"], t: ["國七","祈使句"] },
    { q: "He _____ TV every night.", a: "watches", o: ["watch","is watching","watched"], t: ["國七","時態"] },
    { q: "I _____ like coffee.", a: "don't", o: ["doesn't","didn't","not"], t: ["國七","否定句"] },
    { q: "There _____ a cat under the tree.", a: "is", o: ["are","were","be"], t: ["國七","存在句"] },
    { q: "She _____ two brothers.", a: "has", o: ["have","had","having"], t: ["國七","動詞"] },
    { q: "We _____ to the park tomorrow.", a: "will go", o: ["go","are going","went"], t: ["國七","未來式"] },
    { q: "He _____ his bike every Sunday.", a: "rides", o: ["ride","is riding","rode"], t: ["國七","時態"] },
    { q: "They _____ in the pool now.", a: "are swimming", o: ["swim","swam","have swum"], t: ["國七","現在進行式"] },

    // 16-30 國八 現在完成式/被動/使役/附加問句
    { q: "I _____ my homework already.", a: "have finished", o: ["finished","will finish","finish"], t: ["國八","現在完成式"] },
    { q: "She _____ in London since 2018.", a: "has lived", o: ["lived","is living","lives"], t: ["國八","現在完成式"] },
    { q: "The cake _____ by my sister.", a: "was made", o: ["made","is made","made by"], t: ["國八","被動"] },
    { q: "They _____ the house cleaned yesterday.", a: "had", o: ["have","has","having"], t: ["國八","使役"] },
    { q: "You like chocolate, _____ you?", a: "don't", o: ["do","aren't","aren't you"], t: ["國八","附加問句"] },
    { q: "He _____ his leg last month.", a: "broke", o: ["break","broken","was broken"], t: ["國八","過去式"] },
    { q: "The letter _____ already.", a: "has been sent", o: ["is sent","sent","was sent"], t: ["國八","被動/現在完成式"] },
    { q: "She made him _____ the room.", a: "clean", o: ["to clean","cleaning","cleaned"], t: ["國八","使役"] },
    { q: "They _____ here for two hours.", a: "have been", o: ["are","were","had been"], t: ["國八","現在完成式"] },
    { q: "The book _____ by many students.", a: "is read", o: ["reads","was read","read"], t: ["國八","被動"] },
    { q: "You can swim, _____?", a: "can't you", o: ["can you","do you","don't you"], t: ["國八","附加問句"] },
    { q: "He _____ his homework before dinner.", a: "had finished", o: ["finished","has finished","finishes"], t: ["國八","過去完成式"] },
    { q: "The window _____ by the wind.", a: "was broken", o: ["is broken","broke","broken"], t: ["國八","被動"] },
    { q: "She _____ to the store three times this week.", a: "has gone", o: ["went","goes","has been"], t: ["國八","現在完成式"] },
    { q: "They _____ the car washed every Sunday.", a: "have", o: ["has","had","having"], t: ["國八","使役/習慣"] },

    // 31-50 國九 關係代名詞/被動/連接詞/比較
    { q: "The man _____ helped me is a teacher.", a: "who", o: ["which","whom","whose"], t: ["國九","關係代名詞"] },
    { q: "This is the house _____ Jack built.", a: "that", o: ["who","which","whose"], t: ["國九","關係代名詞"] },
    { q: "The book _____ I borrowed is interesting.", a: "that", o: ["which","who","whom"], t: ["國九","關係代名詞"] },
    { q: "The song _____ was sung yesterday is popular.", a: "which", o: ["who","that","whose"], t: ["國九","關係代名詞"] },
    { q: "The cake _____ by Mary tasted great.", a: "made", o: ["making","make","was made"], t: ["國九","分詞/被動"] },
    { q: "If it rains, we _____ at home.", a: "will stay", o: ["stay","stayed","would stay"], t: ["國九","條件句"] },
    { q: "He is taller _____ his brother.", a: "than", o: ["then","as","like"], t: ["國九","比較級"] },
    { q: "She speaks English better _____ I do.", a: "than", o: ["then","as","like"], t: ["國九","比較級"] },
    { q: "The problem _____ solved by the team.", a: "was", o: ["is","were","has"], t: ["國九","被動"] },
    { q: "I will wait here _____ you come back.", a: "until", o: ["when","while","because"], t: ["國九","連接詞"] },
    { q: "He didn't go to school _____ he was sick.", a: "because", o: ["so","but","and"], t: ["國九","連接詞"] },
    { q: "The picture _____ hangs on the wall is old.", a: "that", o: ["who","which","whom"], t: ["國九","關係代名詞"] },
    { q: "She is the only one _____ can help us.", a: "who", o: ["which","that","whom"], t: ["國九","關係代名詞"] },
    { q: "The homework must _____ before class.", a: "be finished", o: ["finish","finished","finishing"], t: ["國九","被動/完成"] },
    { q: "He arrived late, _____ he missed the bus.", a: "so", o: ["but","because","and"], t: ["國九","連接詞"] },
    { q: "This is the reason _____ he left.", a: "why", o: ["that","which","who"], t: ["國九","關係副詞"] },
    { q: "She is as tall _____ her sister.", a: "as", o: ["than","like","then"], t: ["國九","比較級"] },
    { q: "The students _____ the teacher praised were happy.", a: "whom", o: ["who","which","that"], t: ["國九","關係代名詞"] },
    { q: "He speaks French _____ well as English.", a: "as", o: ["than","then","like"], t: ["國九","比較級"] },
    { q: "The letter _____ was sent yesterday arrived today.", a: "that", o: ["which","who","whom"], t: ["國九","關係代名詞"] },

    // 51-70 高一 分詞/完成式/不定詞/動名詞/情態動詞
    { q: "The man _____ standing over there is my uncle.", a: "is", o: ["are","was","be"], t: ["高一","分詞/現在分詞"] },
    { q: "Having _____ the test, she felt relieved.", a: "passed", o: ["pass","passing","to pass"], t: ["高一","分詞/完成分詞"] },
    { q: "He promised _____ me tomorrow.", a: "to call", o: ["call","calling","called"], t: ["高一","不定詞"] },
    { q: "She enjoys _____ novels in her free time.", a: "reading", o: ["to read","read","reads"], t: ["高一","動名詞"] },
    { q: "You _____ finish your homework before you go out.", a: "must", o: ["can","may","should"], t: ["高一","情態動詞"] },
    { q: "I _____ have seen him yesterday.", a: "might", o: ["must","can","should"], t: ["高一","情態動詞/推測"] },
    { q: "He seems _____ happy today.", a: "to be", o: ["be","being","is"], t: ["高一","連綴動詞+不定詞"] },
    { q: "The broken window needs _____.", a: "repairing", o: ["to repair","repaired","repair"], t: ["高一","動名詞/被動意義"] },
    { q: "She forgot _____ the door when she left.", a: "to lock", o: ["locking","locked","lock"], t: ["高一","不定詞/動名詞差異"] },
    { q: "I would like _____ a cup of tea.", a: "to have", o: ["having","have","had"], t: ["高一","禮貌用語/不定詞"] },
    { q: "He is used to _____ up early.", a: "getting", o: ["to get","get","got"], t: ["高一","習慣用法/動名詞"] },
    { q: "She asked me _____ her with the work.", a: "to help", o: ["helping","help","helped"], t: ["高一","不定詞/請求"] },
    { q: "They _____ finish the project by next week.", a: "should", o: ["must","can","may"], t: ["高一","情態動詞/建議"] },
    { q: "He denied _____ the vase.", a: "breaking", o: ["to break","broke","break"], t: ["高一","動名詞/否認"] },
    { q: "She appears _____ the answer.", a: "to know", o: ["knowing","know","known"], t: ["高一","不定詞/推測"] },
    { q: "The students were seen _____ in the library.", a: "studying", o: ["to study","study","studied"], t: ["高一","被動+動名詞"] },
    { q: "He can't afford _____ a new car.", a: "to buy", o: ["buying","buy","bought"], t: ["高一","不定詞/能力"] },
    { q: "She is interested in _____ abroad.", a: "studying", o: ["to study","study","studied"], t: ["高一","動名詞/介系詞片語"] },
    { q: "They made him _____ the truth.", a: "tell", o: ["to tell","telling","told"], t: ["高一","使役/使役動詞"] },
    { q: "I can't help _____ when I hear that song.", a: "smiling", o: ["to smile","smile","smiled"], t: ["高一","動名詞/慣用語"] },

    // 71-85 高二 假設語氣/倒裝/比較/關係子句進階
    { q: "If I _____ rich, I would travel the world.", a: "were", o: ["was","am","be"], t: ["高二","假設語氣"] },
    { q: "Had I known, I _____ you.", a: "would have told", o: ["will tell","would tell","told"], t: ["高二","倒裝/過去完成假設"] },
    { q: "Only then _____ I understand the problem.", a: "did", o: ["do","does","was"], t: ["高二","倒裝/only then"] },
    { q: "No sooner _____ he left than it started to rain.", a: "had", o: ["has","did","was"], t: ["高二","倒裝/no sooner"] },
    { q: "She is the person _____ I trust most.", a: "whom", o: ["who","which","that"], t: ["高二","關係代名詞/受格"] },
    { q: "If he _____ earlier, he would have caught the train.", a: "had left", o: ["left","has left","would leave"], t: ["高二","第三類條件句"] },
    { q: "Seldom _____ we see such a performance.", a: "do", o: ["did","does","have"], t: ["高二","倒裝/副詞置首"] },
    { q: "He behaves as if he _____ the boss.", a: "were", o: ["is","was","has been"], t: ["高二","虛擬語氣/as if"] },
    { q: "The more you practice, _____ you become.", a: "the better", o: ["better","best","more better"], t: ["高二","比較級/倒裝結構"] },
    { q: "If it _____ for your help, I couldn't finish.", a: "hadn't been", o: ["wasn't","isn't","hadn't"], t: ["高二","虛擬語氣/過去完成"] },
    { q: "Little _____ he know about the surprise.", a: "did", o: ["does","was","has"], t: ["高二","倒裝/little"] },
    { q: "He speaks as though he _____ everything.", a: "knows", o: ["knew","know","has known"], t: ["高二","虛擬語氣/as though"] },
    { q: "The house, _____ was built in 1900, is a museum.", a: "which", o: ["who","that","whom"], t: ["高二","關係子句/非限定"] },
    { q: "If I _____ you, I would apologize.", a: "were", o: ["was","am","have been"], t: ["高二","假設語氣"] },
    { q: "Were I you, I _____ the offer.", a: "would accept", o: ["will accept","would have accepted","accept"], t: ["高二","倒裝/虛擬"] },

    // 86-100 高三 高階語法：混合條件句、倒裝、強調、分裂句
    { q: "Had it not been for her help, I _____ succeed.", a: "wouldn't have", o: ["won't","would","didn't"], t: ["高三","混合條件/倒裝"] },
    { q: "Not only _____ he finish the work, but he also helped others.", a: "did", o: ["does","has","was"], t: ["高三","倒裝/強調"] },
    { q: "It is the teacher _____ we respect most.", a: "whom", o: ["who","which","that"], t: ["高三","強調/關係代名詞"] },
    { q: "What he said was _____ to me.", a: "important", o: ["importantly","more important","most important"], t: ["高三","形容詞/補語"] },
    { q: "I would rather you _____ here tomorrow.", a: "were", o: ["are","was","be"], t: ["高三","虛擬語氣/would rather"] },
    { q: "Only by working hard _____ you pass the exam.", a: "can", o: ["will","do","did"], t: ["高三","倒裝/only by"] },
    { q: "He is the very person _____ can solve the problem.", a: "who", o: ["whom","which","that"], t: ["高三","強調/關係代名詞"] },
    { q: "If he _____ earlier, he would be here now.", a: "had come", o: ["came","comes","would come"], t: ["高三","混合條件句"] },
    { q: "So _____ the noise that we couldn't sleep.", a: "loud", o: ["louder","loudly","loudest"], t: ["高三","結果句/so...that"] },
    { q: "He insisted that she _____ the truth.", a: "tell", o: ["told","to tell","telling"], t: ["高三","虛擬語氣/that子句"] },
    { q: "It was not until midnight _____ they left.", a: "that", o: ["when","which","who"], t: ["高三","強調/it...not until"] },
    { q: "Were it not for the rain, we _____ go hiking.", a: "would", o: ["will","would have","did"], t: ["高三","倒裝/虛擬"] },
    { q: "He would have passed the exam if he _____ harder.", a: "had studied", o: ["studied","studies","has studied"], t: ["高三","第三類條件句"] },
    { q: "The more he studies, _____ he becomes.", a: "the more knowledgeable", o: ["more knowledgeable","most knowledgeable","knowledgeable"], t: ["高三","比較級/倒裝"] },
    { q: "I wish I _____ more time to help you.", a: "had", o: ["have","will have","had had"], t: ["高三","虛擬語氣/wish"] },

    // 101-120 補充題目：混合年級與主題（時態、被動、關係、介系詞、情態）
    { q: "By next year, she _____ her degree.", a: "will have completed", o: ["will complete","completes","has completed"], t: ["高一","完成式/未來完成"] },
    { q: "The movie _____ by many critics.", a: "was praised", o: ["praised","is praised","praises"], t: ["國九","被動"] },
    { q: "He is looking forward to _____ you.", a: "seeing", o: ["to see","see","seen"], t: ["高一","動名詞/片語"] },
    { q: "She made him _____ the truth to his parents.", a: "tell", o: ["to tell","telling","told"], t: ["高二","使役"] },
    { q: "I can't stand _____ in a noisy room.", a: "working", o: ["to work","work","worked"], t: ["高一","動名詞/情感動詞"] },
    { q: "The report must _____ by Monday.", a: "be submitted", o: ["submit","submitted","submitting"], t: ["國九","被動/義務"] },
    { q: "He would rather _____ at home than go out.", a: "stay", o: ["to stay","staying","stayed"], t: ["高二","偏好/would rather"] },
    { q: "She is used to _____ up late.", a: "staying", o: ["to stay","stay","stayed"], t: ["高一","習慣/動名詞"] },
    { q: "The teacher asked if anyone _____ the answer.", a: "knew", o: ["know","knows","has known"], t: ["國九","間接問句/時態"] },
    { q: "He is believed _____ the winner.", a: "to be", o: ["be","being","is"], t: ["高二","被動/不定詞"] },
    { q: "She can't help _____ when she sees puppies.", a: "smiling", o: ["to smile","smile","smiled"], t: ["國七","動名詞/慣用"] },
    { q: "The students were made _____ the rules.", a: "to follow", o: ["follow","following","followed"], t: ["國八","使役/被動"] },
    { q: "He is too young _____ the job.", a: "for", o: ["to do","in","on"], t: ["國九","介系詞/形容詞片語"] },
    { q: "She prefers tea _____ coffee.", a: "to", o: ["than","over","with"], t: ["高一","比較/偏好"] },
    { q: "I had my hair _____ yesterday.", a: "cut", o: ["cutting","to cut","cuts"], t: ["高二","使役/被動"] },
    { q: "They were surprised _____ the news.", a: "by", o: ["at","with","to"], t: ["國九","介系詞/情緒"] },
    { q: "He refused _____ the truth.", a: "to tell", o: ["telling","tell","told"], t: ["高一","不定詞/拒絕"] },
    { q: "She is capable _____ solving the problem.", a: "of", o: ["to","for","in"], t: ["高二","介系詞片語"] },
    { q: "I suggest that he _____ earlier.", a: "arrive", o: ["arrives","arrived","to arrive"], t: ["高二","虛擬語氣/suggest"] },
    { q: "The book is worth _____ again.", a: "reading", o: ["to read","read","reads"], t: ["高一","動名詞/片語"] },

    // 121-140 補充題目：情態動詞、被動、關係、比較
    { q: "You _____ not smoke here.", a: "must", o: ["can","may","should"], t: ["國九","情態動詞/規定"] },
    { q: "The project _____ completed by the team.", a: "was", o: ["is","has","were"], t: ["高一","被動/過去式"] },
    { q: "This is the place _____ we first met.", a: "where", o: ["which","that","when"], t: ["國九","關係副詞"] },
    { q: "She is more hardworking _____ her classmates.", a: "than", o: ["then","as","like"], t: ["高二","比較級"] },
    { q: "He may _____ late because of traffic.", a: "be", o: ["is","was","been"], t: ["高一","情態動詞/推測"] },
    { q: "The cake smells _____.", a: "delicious", o: ["deliciously","deliciousness","delish"], t: ["國七","形容詞/補語"] },
    { q: "They were seen _____ the museum.", a: "leaving", o: ["to leave","leave","left"], t: ["國八","被動+動名詞"] },
    { q: "I prefer walking _____ taking the bus.", a: "to", o: ["than","over","with"], t: ["國九","比較/偏好"] },
    { q: "He is known _____ his honesty.", a: "for", o: ["to","as","by"], t: ["高一","介系詞片語"] },
    { q: "She couldn't help _____ when she heard the joke.", a: "laughing", o: ["to laugh","laugh","laughed"], t: ["國七","動名詞/慣用"] },
    { q: "The house needs _____ painted.", a: "to be", o: ["being","be","been"], t: ["國九","被動/不定詞"] },
    { q: "He is the only student _____ passed the test.", a: "who", o: ["whom","which","that"], t: ["高二","關係代名詞"] },
    { q: "She would rather _____ alone than with him.", a: "be", o: ["to be","being","been"], t: ["高二","偏好/would rather"] },
    { q: "If it _____ sunny, we will go out.", a: "is", o: ["was","were","be"], t: ["國七","條件句/現在可能"] },
    { q: "The news _____ on TV last night.", a: "was reported", o: ["reported","is reported","reports"], t: ["國九","被動/過去"] },
    { q: "He is too tired _____ continue.", a: "to", o: ["for","in","with"], t: ["高一","不定詞/形容詞片語"] },
    { q: "She insisted on _____ the truth.", a: "telling", o: ["to tell","tell","told"], t: ["高二","動名詞/堅持"] },
    { q: "They are used to _____ spicy food.", a: "eating", o: ["to eat","eat","ate"], t: ["國八","習慣/動名詞"] },
    { q: "The teacher made the students _____ the poem.", a: "memorize", o: ["to memorize","memorizing","memorized"], t: ["國八","使役"] },
    { q: "He is likely _____ the winner.", a: "to be", o: ["be","being","is"], t: ["高一","情態/推測"] },

    // 141-160 補充題目：連接詞、關係、倒裝、分詞
    { q: "I will go out _____ it stops raining.", a: "after", o: ["before","while","because"], t: ["國九","連接詞"] },
    { q: "The man _____ car was stolen reported to the police.", a: "whose", o: ["who","which","that"], t: ["國九","關係代名詞/所有格"] },
    { q: "Only by practice _____ you improve.", a: "can", o: ["will","do","did"], t: ["高三","倒裝/only by"] },
    { q: "The girl _____ sitting by the window is my friend.", a: "who is", o: ["who","which is","that"], t: ["高一","分詞/關係子句"] },
    { q: "He left early _____ he was tired.", a: "because", o: ["so","but","and"], t: ["國九","連接詞"] },
    { q: "The man _____ we met yesterday is a doctor.", a: "whom", o: ["who","which","that"], t: ["國九","關係代名詞/受格"] },
    { q: "Rarely _____ we see such a view.", a: "do", o: ["did","does","have"], t: ["高二","倒裝/rarely"] },
    { q: "The letter _____ arrived this morning was from my aunt.", a: "that", o: ["which","who","whom"], t: ["國九","關係子句"] },
    { q: "Having _____ his homework, he went out to play.", a: "finished", o: ["finish","finishing","to finish"], t: ["高一","完成分詞"] },
    { q: "She was seen _____ the store.", a: "entering", o: ["to enter","enter","entered"], t: ["國八","被動+動名詞"] },
    { q: "He behaves as if he _____ the owner.", a: "were", o: ["is","was","has been"], t: ["高二","虛擬語氣/as if"] },
    { q: "It is high time you _____ to bed.", a: "went", o: ["go","have gone","will go"], t: ["高二","虛擬語氣/it is high time"] },
    { q: "The students, _____ were tired, continued to study.", a: "who", o: ["which","that","whom"], t: ["高一","關係子句/非限定"] },
    { q: "Not until he apologized _____ I forgive him.", a: "did", o: ["do","will","has"], t: ["高三","倒裝/not until"] },
    { q: "The broken chair needs _____.", a: "repairing", o: ["to repair","repair","repaired"], t: ["高一","動名詞/被動意義"] },

    // 161-176 補充題目：不定詞、動名詞、情態、被動、比較
    { q: "She promised _____ me with the project.", a: "to help", o: ["helping","help","helped"], t: ["高一","不定詞/承諾"] },
    { q: "He admitted _____ the vase.", a: "breaking", o: ["to break","break","broke"], t: ["高一","動名詞/承認"] },
    { q: "You _____ not enter without permission.", a: "must", o: ["may","can","should"], t: ["國九","情態動詞/規定"] },
    { q: "The homework _____ by the students was excellent.", a: "done", o: ["doing","do","does"], t: ["國九","分詞/被動"] },
    { q: "She is as clever _____ her sister.", a: "as", o: ["than","then","like"], t: ["國九","比較級"] },
    { q: "He is believed _____ the missing money.", a: "to have taken", o: ["to take","taking","taken"], t: ["高二","被動/完成不定詞"] },
    { q: "I would prefer you _____ earlier.", a: "come", o: ["to come","coming","came"], t: ["高二","偏好/虛擬"] },
    { q: "They were heard _____ the song.", a: "singing", o: ["to sing","sang","sing"], t: ["國八","被動+動名詞"] },
    { q: "She is too busy _____ you now.", a: "to help", o: ["helping","help","helped"], t: ["高一","不定詞/too...to"] },
    { q: "The more you read, _____ you know.", a: "the more", o: ["more","most","much"], t: ["高二","比較級/倒裝"] },
    { q: "He had his watch _____ last week.", a: "repaired", o: ["repair","repairing","to repair"], t: ["高二","使役/被動"] },
    { q: "She is fond of _____ classical music.", a: "listening to", o: ["to listen","listen","listened"], t: ["高一","介系詞片語/動名詞"] },
    { q: "It is necessary that he _____ present.", a: "be", o: ["is","was","to be"], t: ["高二","虛擬語氣/necessity"] },
    { q: "He seems _____ happy with the result.", a: "to be", o: ["be","being","is"], t: ["高一","不定詞/推測"] },

    // 177-200 補充題目：綜合練習（各年級混合）
    { q: "She _____ the piano since she was five.", a: "has played", o: ["played","plays","is playing"], t: ["國八","現在完成式"] },
    { q: "The students were asked _____ quietly.", a: "to sit", o: ["sit","sitting","sat"], t: ["國九","使役/不定詞"] },
    { q: "He is the boy _____ won the prize.", a: "who", o: ["whom","which","that"], t: ["國九","關係代名詞"] },
    { q: "If I _____ you, I would take the job.", a: "were", o: ["was","am","have been"], t: ["高二","假設語氣"] },
    { q: "She had her hair _____ yesterday.", a: "cut", o: ["cutting","to cut","cuts"], t: ["國八","使役/被動"] },
    { q: "They _____ to finish the work by Friday.", a: "have to", o: ["must","can","should"], t: ["國九","情態動詞/義務"] },
    { q: "The book _____ on the table belongs to me.", a: "lying", o: ["lies","laying","to lie"], t: ["高一","現在分詞/狀態"] },
    { q: "He would have come if he _____ invited.", a: "had been", o: ["was","were","has been"], t: ["高三","第三類條件句/被動"] },
    { q: "She is the kind of person _____ helps others.", a: "who", o: ["which","that","whom"], t: ["高二","關係代名詞"] },
    { q: "I prefer _____ at home tonight.", a: "to stay", o: ["staying","stay","stayed"], t: ["高一","偏好/不定詞"] },
    { q: "The window was broken _____ the storm.", a: "by", o: ["in","at","on"], t: ["國八","被動/介系詞"] },
    { q: "He is not only smart _____ hardworking.", a: "but also", o: ["and","or","so"], t: ["國九","連接詞/並列"] },
    { q: "She asked him _____ the door.", a: "to close", o: ["close","closing","closed"], t: ["國八","請求/不定詞"] },
    { q: "They _____ here since morning.", a: "have been", o: ["are","were","had been"], t: ["國八","現在完成式"] },
    { q: "It is important that he _____ on time.", a: "arrive", o: ["arrives","arrived","to arrive"], t: ["高二","虛擬語氣/重要性"] },
    { q: "He is believed _____ the best candidate.", a: "to be", o: ["be","being","is"], t: ["高一","被動/不定詞"] },
    { q: "She kept _____ until midnight.", a: "working", o: ["to work","work","worked"], t: ["高一","動名詞/持續"] },
    { q: "If only I _____ more careful.", a: "were", o: ["was","am","have been"], t: ["高三","虛擬語氣/wish"] },
    { q: "The more you practice, the _____ you will be.", a: "better", o: ["best","more better","good"], t: ["高二","比較級"] },
    { q: "He made me _____ the truth.", a: "tell", o: ["to tell","telling","told"], t: ["高一","使役"] }
];


        // =====================================================
        // 🔍 Self-Diagnostic Scanner (Never Crash)
        // =====================================================
        grammarDB.forEach((q, i) => {
            if (!q || !q.t || !Array.isArray(q.t) || typeof q.t[0] !== "string") {
                console.warn(`⚠️ [EnglishDB] Bad question at index ${i}`, q);
            }
        });

        // =====================================================
        // Grade-Isolated Template Registration
        // =====================================================
        const grades = ["國七", "國八", "國九", "高一", "高二", "高三"];

        grades.forEach(grade => {
            const pool = grammarDB.filter(q =>
                q &&
                q.t &&
                Array.isArray(q.t) &&
                q.t[0] === grade
            );

            if (!pool.length) return;

            G.registerTemplate(
                `eng_grammar_${grade}`,
                () => {
                    const item = pick(pool);
                    const options = shuffle([item.a, ...item.o]);

                    return {
                        question: `【English】${item.q}`,
                        options,
                        answer: options.indexOf(item.a),
                        concept: item.t[1],
                        explanation: [
                            `Answer: ${item.a}`,
                            `Concept: ${item.t[1]}`
                        ]
                    };
                },
                ["english", "英文", "英語", "文法", grade]
            );
        });

        // =====================================================
        // Dialogue (Safe & Simple)
        // =====================================================
        const dialogues = [
            { a: "How are you today?", b: "I'm fine, thank you.", o: ["Yes, I am.", "Goodbye."], t: "問候" },
            { a: "May I take your order?", b: "I'd like a hamburger.", o: ["No, I won't.", "See you."], t: "餐廳" }
        ];

        G.registerTemplate(
            "eng_dialogue_basic",
            () => {
                const item = pick(dialogues);
                const options = shuffle([item.b, ...item.o]);

                return {
                    question: `A: ${item.a}\nB: __________`,
                    options,
                    answer: options.indexOf(item.b),
                    concept: `會話 (${item.t})`,
                    explanation: [`A: ${item.a}`, `B: ${item.b}`]
                };
            },
            ["english", "英文", "英語", "會話", "國七", "國八"]
        );

        console.log("🏆 English Core V4.0 Ultimate 已載入（零爆炸保證）");
    }

    init();
})(window);
