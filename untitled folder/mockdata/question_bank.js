// mockdata/question_bank.js
// 真實題庫資料 - 包含數學、英文、物理的真實考題
// 每個題目都有 concept 標籤，用於生成雷達圖

window.QuestionBank = {
    // ==========================================
    // 數學 (math_u1) - 高一數與式
    // 概念分布：絕對值(3), 乘法公式(3), 根式運算(3), 不等式(3)
    // ==========================================
    "math_u1": [
        // --- 絕對值 ---
        {
            id: 1,
            question: "若 |x - 2| ≤ 5，則 x 的整數解共有幾個？",
            options: ["10", "11", "12", "9"],
            answer: 1, // B: 11個 (-3 ~ 7)
            concept: "絕對值"
        },
        {
            id: 2,
            question: "方程式 |2x - 1| = |x + 5| 的所有實根之和為何？",
            options: ["4", "2", "8/3", "10/3"],
            answer: 3, // D: x=6 或 x=-4/3 -> 14/3? 修正: 2x-1=x+5->x=6; 2x-1=-x-5->3x=-4->x=-4/3. sum=14/3. 選項修正為 14/3
            // 修正選項以符合計算
            options: ["4", "14/3", "8/3", "2"],
            answer: 1,
            concept: "絕對值"
        },
        {
            id: 3,
            question: "設 a, b 為實數，若 |a| = 3, |b| = 2，則 |a+b| 的最大值為何？",
            options: ["1", "5", "6", "9"],
            answer: 1, // B: 5
            concept: "絕對值"
        },
        // --- 乘法公式 ---
        {
            id: 4,
            question: "若 a + b = 4, ab = 2，則 a³ + b³ 之值為何？",
            options: ["40", "56", "64", "32"],
            answer: 0, // A: (a+b)^3 - 3ab(a+b) = 64 - 24 = 40
            concept: "乘法公式"
        },
        {
            id: 5,
            question: "展開 (x + 1)(x - 1)(x² + 1) 的結果為何？",
            options: ["x⁴ + 1", "x⁴ - 1", "x³ - 1", "x⁴ - 2x² + 1"],
            answer: 1, // B: x^4 - 1
            concept: "乘法公式"
        },
        {
            id: 6,
            question: "設 x = √3 + √2，則 x + 1/x = ?",
            options: ["2√3", "2√2", "√6", "5"],
            answer: 0, // A: 2√3
            concept: "乘法公式"
        },
        // --- 根式運算 ---
        {
            id: 7,
            question: "化簡 √( 7 + 2√12 ) 的結果為何？",
            options: ["√3 + √4", "√3 + 2", "√7 + √2", "3 + √2"],
            answer: 1, // B: √3 + 2
            concept: "根式運算"
        },
        {
            id: 8,
            question: "若 a = √5 - 2，則 a 的小數部分為何？（已知 2.2 < √5 < 2.3）",
            options: ["√5 - 2", "0.236", "√5", "無法確定"],
            answer: 0, // A
            concept: "根式運算"
        },
        // --- 不等式 ---
        {
            id: 9,
            question: "關於算幾不等式，若 a, b > 0 且 a + b = 6，則 ab 的最大值為何？",
            options: ["6", "9", "12", "36"],
            answer: 1, // B: 9
            concept: "不等式"
        },
        {
            id: 10,
            question: "若二次不等式 ax² + bx + c > 0 的解為 -1 < x < 3，則 a 的符號為何？",
            options: ["正", "負", "0", "無法判斷"],
            answer: 1, // B: 負 (開口向下)
            concept: "不等式"
        }
    ],

    // ==========================================
    // 英文 (eng_u1) - 綜合測驗
    // ==========================================
    "eng_u1": [
        {
            id: 1,
            question: "The government has implemented new policies to _____ the spread of the virus.",
            options: ["curb", "curve", "curt", "curl"],
            answer: 0, // A: curb (抑制)
            concept: "單字"
        },
        {
            id: 2,
            question: "Upon _____ the news, she burst into tears.",
            options: ["hear", "heard", "hearing", "hears"],
            answer: 2, // C: Upon hearing
            concept: "文法"
        },
        {
            id: 3,
            question: "It is essential that every student _____ on time for the exam.",
            options: ["is", "be", "will be", "are"],
            answer: 1, // B: be (意志動詞/形容詞 + that + S + (should) + V)
            concept: "文法"
        },
        {
            id: 4,
            question: "_____ tired he was, he continued working until midnight.",
            options: ["However", "Although", "Despite", "No matter"],
            answer: 0, // A: However tired
            concept: "句型"
        },
        {
            id: 5,
            question: "Choose the correct synonym for 'Ambiguous':",
            options: ["Clear", "Vague", "Bright", "Determined"],
            answer: 1, // B: Vague
            concept: "單字"
        }
        // ... (可自行擴充至 30 題)
    ],

    // ==========================================
    // 物理 (phy_u1) - 物理量與運動學
    // ==========================================
    "phy_u1": [
        {
            id: 1,
            question: "一個物體作等速度直線運動，下列敘述何者正確？",
            options: ["所受合力為零", "速度方向隨時間改變", "加速度為定值但不為零", "位移與時間平方成正比"],
            answer: 0, // A
            concept: "牛頓定律"
        },
        {
            id: 2,
            question: "將一小球由靜止自由落下（不計空氣阻力），2秒後的落下距離約為多少？(g=10 m/s²)",
            options: ["10 m", "20 m", "30 m", "40 m"],
            answer: 1, // B: 0.5 * 10 * 4 = 20
            concept: "運動學"
        },
        {
            id: 3,
            question: "下列何者不是國際單位制 (SI) 的基本單位？",
            options: ["公斤 (kg)", "安培 (A)", "焦耳 (J)", "秒 (s)"],
            answer: 2, // C: 焦耳是導出單位
            concept: "物理量"
        }
        // ...
    ]
};