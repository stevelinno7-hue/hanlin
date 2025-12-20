// curriculum_math.js
// 數學科專用課程結構 (108 課綱)
// 高中 數學 - 翰林 數A 全冊（第一冊 ~ 第五冊）
// 顆粒度：概念 → 技能點 → 題型分類（每個技能點拆成多個題型）
// id 命名規則：h_m_hl_a{冊次}_c{概念}_s{技能}_t{題型}

window.Curriculum108_Math = [
    // ==========================================
    // 高中 數學 - 翰林 - 數A 第一冊 (高一上)
    // 已在先前範例中確認格式，這裡完整列出（概念/技能/題型）
    // ==========================================
    {
        stage: "high_school",
        grade: "10",
        subject: "math",
        subjectName: "數學",
        version: "翰林",
        type: "regular",
        courses: [
            // C1：數與式（技能與題型）
            { id: "h_m_hl_a1_c1_s1_t1", name: "數與式：整數與有理數的性質（基礎概念）", unitCode: "math_u1", tags: ["高一上","數A","數與式","概念理解"] },
            { id: "h_m_hl_a1_c1_s1_t2", name: "數與式：整數與有理數四則運算（計算題）", unitCode: "math_u1", tags: ["高一上","數A","數與式","計算題"] },
            { id: "h_m_hl_a1_c1_s1_t3", name: "數與式：運算順序與括號使用（錯誤診斷）", unitCode: "math_u1", tags: ["高一上","數A","數與式","易錯題"] },

            { id: "h_m_hl_a1_c1_s2_t1", name: "數與式：絕對值定義與性質（概念）", unitCode: "math_u1", tags: ["高一上","數A","絕對值","概念理解"] },
            { id: "h_m_hl_a1_c1_s2_t2", name: "數與式：含絕對值的代數式運算（計算題）", unitCode: "math_u1", tags: ["高一上","數A","絕對值","計算題"] },
            { id: "h_m_hl_a1_c1_s2_t3", name: "數與式：絕對值不等式與數線表示（應用題）", unitCode: "math_u1", tags: ["高一上","數A","絕對值","應用題"] },

            { id: "h_m_hl_a1_c1_s3_t1", name: "數與式：代數式的結構與變數觀念（概念）", unitCode: "math_u1", tags: ["高一上","數A","代數式","概念理解"] },
            { id: "h_m_hl_a1_c1_s3_t2", name: "數與式：代入計算與代數式值（計算題）", unitCode: "math_u1", tags: ["高一上","數A","代數式","計算題"] },
            { id: "h_m_hl_a1_c1_s3_t3", name: "數與式：情境建模與代數式建立（應用題）", unitCode: "math_u1", tags: ["高一上","數A","代數式","應用題"] },

            { id: "h_m_hl_a1_c1_s4_t1", name: "數與式：指數記號與科學記號（概念）", unitCode: "math_u1", tags: ["高一上","數A","指數","概念理解"] },
            { id: "h_m_hl_a1_c1_s4_t2", name: "數與式：指數運算規則（計算題）", unitCode: "math_u1", tags: ["高一上","數A","指數","計算題"] },
            { id: "h_m_hl_a1_c1_s4_t3", name: "數與式：科學記號在實務上的應用（應用題）", unitCode: "math_u1", tags: ["高一上","數A","指數","應用題"] },

            // C2：多項式運算
            { id: "h_m_hl_a1_c2_s1_t1", name: "多項式：同類項與標準形式（概念）", unitCode: "math_u1", tags: ["高一上","數A","多項式","概念理解"] },
            { id: "h_m_hl_a1_c2_s1_t2", name: "多項式：加減運算與合併同類項（計算題）", unitCode: "math_u1", tags: ["高一上","數A","多項式","計算題"] },
            { id: "h_m_hl_a1_c2_s1_t3", name: "多項式：含括號的多項式化簡（錯誤診斷）", unitCode: "math_u1", tags: ["高一上","數A","多項式","易錯題"] },

            { id: "h_m_hl_a1_c2_s2_t1", name: "多項式：乘法分配律與展開（概念）", unitCode: "math_u1", tags: ["高一上","數A","多項式","概念理解"] },
            { id: "h_m_hl_a1_c2_s2_t2", name: "多項式：單項式與多項式相乘（計算題）", unitCode: "math_u1", tags: ["高一上","數A","多項式","計算題"] },
            { id: "h_m_hl_a1_c2_s2_t3", name: "多項式：多項式乘法的展開與整理（綜合題）", unitCode: "math_u1", tags: ["高一上","數A","多項式","綜合題"] },

            { id: "h_m_hl_a1_c2_s3_t1", name: "多項式：平方差公式 a²-b²（公式理解）", unitCode: "math_u1", tags: ["高一上","數A","平方差公式","概念理解"] },
            { id: "h_m_hl_a1_c2_s3_t2", name: "多項式：完全平方公式 (a±b)²（計算題）", unitCode: "math_u1", tags: ["高一上","數A","完全平方公式","計算題"] },
            { id: "h_m_hl_a1_c2_s3_t3", name: "多項式：立方和差公式（進階應用）", unitCode: "math_u1", tags: ["高一上","數A","立方和差","進階題"] },

            { id: "h_m_hl_a1_c2_s4_t1", name: "多項式：特殊乘法混合辨識（辨識題）", unitCode: "math_u1", tags: ["高一上","數A","多項式","辨識題"] },
            { id: "h_m_hl_a1_c2_s4_t2", name: "多項式：多步驟展開與化簡（綜合計算）", unitCode: "math_u1", tags: ["高一上","數A","多項式","綜合題"] },
            { id: "h_m_hl_a1_c2_s4_t3", name: "多項式：情境建模中的多項式運算（應用題）", unitCode: "math_u1", tags: ["高一上","數A","多項式","應用題"] },

            // C3：因式分解
            { id: "h_m_hl_a1_c3_s1_t1", name: "因式分解：提公因式法（概念）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","概念理解"] },
            { id: "h_m_hl_a1_c3_s1_t2", name: "因式分解：提公因式的計算與練習（計算題）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","計算題"] },
            { id: "h_m_hl_a1_c3_s1_t3", name: "因式分解：多變數提公因式（進階題）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","進階題"] },

            { id: "h_m_hl_a1_c3_s2_t1", name: "因式分解：平方差反向分解（概念）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","平方差公式"] },
            { id: "h_m_hl_a1_c3_s2_t2", name: "因式分解：完全平方反向分解（計算題）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","完全平方公式"] },
            { id: "h_m_hl_a1_c3_s2_t3", name: "因式分解：混合公式的綜合分解（綜合題）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","綜合題"] },

            { id: "h_m_hl_a1_c3_s3_t1", name: "因式分解：三項式 x²+bx+c 的觀察（概念）", unitCode: "math_u1", tags: ["高一上","數A","三項式","概念理解"] },
            { id: "h_m_hl_a1_c3_s3_t2", name: "因式分解：x²+bx+c 型因式分解（計算題）", unitCode: "math_u1", tags: ["高一上","數A","三項式","計算題"] },
            { id: "h_m_hl_a1_c3_s3_t3", name: "因式分解：ax²+bx+c 的十字交乘法（進階題）", unitCode: "math_u1", tags: ["高一上","數A","三項式","進階題"] },

            { id: "h_m_hl_a1_c3_s4_t1", name: "因式分解：策略選擇與錯誤診斷（策略題）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","策略題"] },
            { id: "h_m_hl_a1_c3_s4_t2", name: "因式分解：常見錯誤類型分析（易錯題）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","易錯題"] },
            { id: "h_m_hl_a1_c3_s4_t3", name: "因式分解：應用題中的代數式分解（應用綜合題）", unitCode: "math_u1", tags: ["高一上","數A","因式分解","應用題"] },

            // C4：一次函數
            { id: "h_m_hl_a1_c4_s1_t1", name: "一次函數：y=mx+b 的定義與意義（概念）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","概念理解"] },
            { id: "h_m_hl_a1_c4_s1_t2", name: "一次函數：由式子作圖（圖形題）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","圖形題"] },
            { id: "h_m_hl_a1_c4_s1_t3", name: "一次函數：由圖形寫出函數式（反向題）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","反向題"] },

            { id: "h_m_hl_a1_c4_s2_t1", name: "一次函數：斜率與變化率（概念）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","斜率"] },
            { id: "h_m_hl_a1_c4_s2_t2", name: "一次函數：兩點求斜率（計算題）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","計算題"] },
            { id: "h_m_hl_a1_c4_s2_t3", name: "一次函數：斜率在情境中的解讀（應用題）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","應用題"] },

            { id: "h_m_hl_a1_c4_s3_t1", name: "一次函數：截距與交點（概念）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","截距"] },
            { id: "h_m_hl_a1_c4_s3_t2", name: "一次函數：截距計算與圖形讀取（圖形題）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","圖形題"] },
            { id: "h_m_hl_a1_c4_s3_t3", name: "一次函數：兩一次函數交點問題（聯立應用）", unitCode: "math_u1", tags: ["高一上","數A","一次函數","聯立","應用題"] },

            // C5：二次函數
            { id: "h_m_hl_a1_c5_s1_t1", name: "二次函數：y=ax²+bx+c 的圖形特性（概念）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","概念理解"] },
            { id: "h_m_hl_a1_c5_s1_t2", name: "二次函數：開口方向與寬窄（圖形題）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","圖形題"] },
            { id: "h_m_hl_a1_c5_s1_t3", name: "二次函數：配方法求頂點（計算題）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","配方法","計算題"] },

            { id: "h_m_hl_a1_c5_s2_t1", name: "二次函數：根與圖形交點關係（概念）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","根與圖形"] },
            { id: "h_m_hl_a1_c5_s2_t2", name: "二次函數：判別式判斷交點個數（計算題）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","判別式","計算題"] },
            { id: "h_m_hl_a1_c5_s2_t3", name: "二次函數：根與係數關係應用（應用題）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","根與係數","應用題"] },

            { id: "h_m_hl_a1_c5_s3_t1", name: "二次函數：最大值最小值問題（最值應用）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","最值"] },
            { id: "h_m_hl_a1_c5_s3_t2", name: "二次函數：與一次函數交會的綜合題（綜合題）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","綜合題"] },
            { id: "h_m_hl_a1_c5_s3_t3", name: "二次函數：圖形與不等式的應用（圖形不等式）", unitCode: "math_u1", tags: ["高一上","數A","二次函數","不等式","圖形題"] },

            // C6：函數圖形與應用
            { id: "h_m_hl_a1_c6_s1_t1", name: "函數圖形：平移與伸縮（概念）", unitCode: "math_u1", tags: ["高一上","數A","函數圖形","概念理解"] },
            { id: "h_m_hl_a1_c6_s1_t2", name: "函數圖形：二次函數平移與配方法（計算題）", unitCode: "math_u1", tags: ["高一上","數A","函數圖形","二次函數","計算題"] },
            { id: "h_m_hl_a1_c6_s1_t3", name: "函數圖形：圖形平移在情境中的解讀（應用題）", unitCode: "math_u1", tags: ["高一上","數A","函數圖形","應用題"] },

            { id: "h_m_hl_a1_c6_s2_t1", name: "函數應用：由文字敘述建立一次函數模型（建模題）", unitCode: "math_u1", tags: ["高一上","數A","函數","建模"] },
            { id: "h_m_hl_a1_c6_s2_t2", name: "函數應用：由文字敘述建立二次函數模型（建模題）", unitCode: "math_u1", tags: ["高一上","數A","函數","建模"] },
            { id: "h_m_hl_a1_c6_s2_t3", name: "函數應用：一次與二次函數交會問題（綜合建模）", unitCode: "math_u1", tags: ["高一上","數A","函數","綜合題"] },

            { id: "h_m_hl_a1_c6_s3_t1", name: "函數應用：表格、圖形與代數式互轉（多表示法）", unitCode: "math_u1", tags: ["高一上","數A","函數","多表示法"] },
            { id: "h_m_hl_a1_c6_s3_t2", name: "函數應用：利用函數圖形解讀資料趨勢（資料解讀）", unitCode: "math_u1", tags: ["高一上","數A","函數","資料解讀"] },
            { id: "h_m_hl_a1_c6_s3_t3", name: "函數應用：模型選擇與檢核（模型檢核）", unitCode: "math_u1", tags: ["高一上","數A","函數","模型檢核"] }
        ]
    },

    // ==========================================
    // 高中 數學 - 翰林 - 數A 第二冊 (高一下)
    // 主題：指數與對數、函數延伸
    // ==========================================
    {
        stage: "high_school",
        grade: "10",
        subject: "math",
        subjectName: "數學",
        version: "翰林",
        type: "regular",
        courses: [
            // C1：指數函數與性質
            { id: "h_m_hl_a2_c1_s1_t1", name: "指數函數：指數函數定義與圖形（概念）", unitCode: "math_u1", tags: ["高一下","數A","指數函數","概念理解"] },
            { id: "h_m_hl_a2_c1_s1_t2", name: "指數函數：指數運算與性質（計算題）", unitCode: "math_u1", tags: ["高一下","數A","指數函數","計算題"] },
            { id: "h_m_hl_a2_c1_s1_t3", name: "指數函數：指數函數在成長/衰減情境的應用（應用題）", unitCode: "math_u1", tags: ["高一下","數A","指數函數","應用題"] },

            // C2：對數函數與換底
            { id: "h_m_hl_a2_c2_s1_t1", name: "對數函數：對數定義與性質（概念）", unitCode: "math_u1", tags: ["高一下","數A","對數函數","概念理解"] },
            { id: "h_m_hl_a2_c2_s1_t2", name: "對數函數：對數運算與換底公式（計算題）", unitCode: "math_u1", tags: ["高一下","數A","對數函數","計算題"] },
            { id: "h_m_hl_a2_c2_s1_t3", name: "對數函數：對數方程與應用（方程題）", unitCode: "math_u1", tags: ["高一下","數A","對數函數","方程題"] },

            // C3：指數與對數的綜合應用
            { id: "h_m_hl_a2_c3_s1_t1", name: "指數/對數：指數方程轉換為對數方程（技巧題）", unitCode: "math_u1", tags: ["高一下","數A","指數","對數","技巧題"] },
            { id: "h_m_hl_a2_c3_s1_t2", name: "指數/對數：實際情境中的指數/對數模型（建模題）", unitCode: "math_u1", tags: ["高一下","數A","指數","對數","建模"] },
            { id: "h_m_hl_a2_c3_s1_t3", name: "指數/對數：指數與對數混合方程的求解（綜合題）", unitCode: "math_u1", tags: ["高一下","數A","指數","對數","綜合題"] },

            // C4：函數延伸（反函數、合成）
            { id: "h_m_hl_a2_c4_s1_t1", name: "函數：反函數的定義與判斷（概念）", unitCode: "math_u1", tags: ["高一下","數A","函數","反函數"] },
            { id: "h_m_hl_a2_c4_s1_t2", name: "函數：求反函數與驗證（計算題）", unitCode: "math_u1", tags: ["高一下","數A","函數","反函數","計算題"] },
            { id: "h_m_hl_a2_c4_s1_t3", name: "函數：函數合成與分解（合成題）", unitCode: "math_u1", tags: ["高一下","數A","函數","合成"] },

            // C5：函數單調性與極限初探（概念導入）
            { id: "h_m_hl_a2_c5_s1_t1", name: "函數：單調性與單調區間判定（概念）", unitCode: "math_u1", tags: ["高一下","數A","函數","單調性"] },
            { id: "h_m_hl_a2_c5_s1_t2", name: "函數：單調性判斷的計算與應用（計算題）", unitCode: "math_u1", tags: ["高一下","數A","函數","單調性","計算題"] },
            { id: "h_m_hl_a2_c5_s1_t3", name: "函數：極限概念的直觀理解（概念導入）", unitCode: "math_u1", tags: ["高一下","數A","函數","極限","概念導入"] },

            // C6：函數圖形變換進階應用
            { id: "h_m_hl_a2_c6_s1_t1", name: "圖形變換：垂直/水平伸縮與平移（概念）", unitCode: "math_u1", tags: ["高一下","數A","函數圖形","變換"] },
            { id: "h_m_hl_a2_c6_s1_t2", name: "圖形變換：複合變換的圖形重建（圖形題）", unitCode: "math_u1", tags: ["高一下","數A","函數圖形","圖形題"] },
            { id: "h_m_hl_a2_c6_s1_t3", name: "圖形變換：變換在建模中的應用（應用題）", unitCode: "math_u1", tags: ["高一下","數A","函數圖形","應用題"] }
        ]
    },

    // ==========================================
    // 高中 數學 - 翰林 - 數A 第三冊 (高二上)
    // 主題：三角函數（基礎與應用）
    // ==========================================
    {
        stage: "high_school",
        grade: "11",
        subject: "math",
        subjectName: "數學",
        version: "翰林",
        type: "regular",
        courses: [
            // C1：三角比定義與單位圓
            { id: "h_m_hl_a3_c1_s1_t1", name: "三角函數：角的度量與弧度制（概念）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","概念理解"] },
            { id: "h_m_hl_a3_c1_s1_t2", name: "三角函數：單位圓上的三角比定義（計算題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","計算題"] },
            { id: "h_m_hl_a3_c1_s1_t3", name: "三角函數：特殊角三角比值記憶與推導（技巧題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","技巧題"] },

            // C2：三角函數的基本恆等式
            { id: "h_m_hl_a3_c2_s1_t1", name: "三角恆等式：sin²θ+cos²θ（概念）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","恆等式"] },
            { id: "h_m_hl_a3_c2_s1_t2", name: "三角恆等式：倍角與半角公式（計算題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","倍角","計算題"] },
            { id: "h_m_hl_a3_c2_s1_t3", name: "三角恆等式：恆等變形與證明（證明題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","證明題"] },

            // C3：三角函數圖形與週期性
            { id: "h_m_hl_a3_c3_s1_t1", name: "三角函數：正弦/餘弦圖形特性（概念）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","圖形"] },
            { id: "h_m_hl_a3_c3_s1_t2", name: "三角函數：振幅、週期、相位移的計算（計算題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","計算題"] },
            { id: "h_m_hl_a3_c3_s1_t3", name: "三角函數：圖形變換與實際波動問題（應用題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","應用題"] },

            // C4：三角方程與不等式
            { id: "h_m_hl_a3_c4_s1_t1", name: "三角方程：基本三角方程的求解（技巧題）", unitCode: "math_u1", tags: ["高二上","數A","三角方程","技巧題"] },
            { id: "h_m_hl_a3_c4_s1_t2", name: "三角方程：一般解與週期性考量（計算題）", unitCode: "math_u1", tags: ["高二上","數A","三角方程","計算題"] },
            { id: "h_m_hl_a3_c4_s1_t3", name: "三角不等式：三角函數不等式的判斷（應用題）", unitCode: "math_u1", tags: ["高二上","數A","三角不等式","應用題"] },

            // C5：三角函數的應用（向量與解析幾何）
            { id: "h_m_hl_a3_c5_s1_t1", name: "三角應用：向量的分解與內積（概念）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","向量"] },
            { id: "h_m_hl_a3_c5_s1_t2", name: "三角應用：利用三角函數解三角形（正弦定理/餘弦定理）（計算題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","三角形"] },
            { id: "h_m_hl_a3_c5_s1_t3", name: "三角應用：解析幾何中的角度與距離問題（應用題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","解析幾何"] },

            // C6：三角函數綜合題型（模考導向）
            { id: "h_m_hl_a3_c6_s1_t1", name: "三角綜合：多步驟三角函數題（綜合題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","綜合題"] },
            { id: "h_m_hl_a3_c6_s1_t2", name: "三角綜合：三角恆等式與方程混合題（模考題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","模考"] },
            { id: "h_m_hl_a3_c6_s1_t3", name: "三角綜合：實務情境中的三角建模（建模題）", unitCode: "math_u1", tags: ["高二上","數A","三角函數","建模"] }
        ]
    },

    // ==========================================
    // 高中 數學 - 翰林 - 數A 第四冊 (高二下)
    // 主題：向量、矩陣、解析幾何（空間向量導入）
    // ==========================================
    {
        stage: "high_school",
        grade: "11",
        subject: "math",
        subjectName: "數學",
        version: "翰林",
        type: "regular",
        courses: [
            // C1：平面向量基礎
            { id: "h_m_hl_a4_c1_s1_t1", name: "向量：向量的定義與表示（概念）", unitCode: "math_u1", tags: ["高二下","數A","向量","概念理解"] },
            { id: "h_m_hl_a4_c1_s1_t2", name: "向量：向量加法與數乘（計算題）", unitCode: "math_u1", tags: ["高二下","數A","向量","計算題"] },
            { id: "h_m_hl_a4_c1_s1_t3", name: "向量：向量的幾何意義與分解（應用題）", unitCode: "math_u1", tags: ["高二下","數A","向量","應用題"] },

            // C2：內積與投影
            { id: "h_m_hl_a4_c2_s1_t1", name: "內積：向量內積定義與性質（概念）", unitCode: "math_u1", tags: ["高二下","數A","向量","內積"] },
            { id: "h_m_hl_a4_c2_s1_t2", name: "內積：內積計算與夾角關係（計算題）", unitCode: "math_u1", tags: ["高二下","數A","向量","內積","計算題"] },
            { id: "h_m_hl_a4_c2_s1_t3", name: "內積：向量投影與應用（應用題）", unitCode: "math_u1", tags: ["高二下","數A","向量","投影","應用題"] },

            // C3：矩陣基礎與運算
            { id: "h_m_hl_a4_c3_s1_t1", name: "矩陣：矩陣表示與基本運算（概念）", unitCode: "math_u1", tags: ["高二下","數A","矩陣","概念理解"] },
            { id: "h_m_hl_a4_c3_s1_t2", name: "矩陣：矩陣乘法與運算規則（計算題）", unitCode: "math_u1", tags: ["高二下","數A","矩陣","計算題"] },
            { id: "h_m_hl_a4_c3_s1_t3", name: "矩陣：行列式與逆矩陣初探（進階題）", unitCode: "math_u1", tags: ["高二下","數A","矩陣","行列式","進階題"] },

            // C4：解析幾何（直線與圓）
            { id: "h_m_hl_a4_c4_s1_t1", name: "解析幾何：直線方程式與斜率（概念）", unitCode: "math_u1", tags: ["高二下","數A","解析幾何","直線"] },
            { id: "h_m_hl_a4_c4_s1_t2", name: "解析幾何：直線與圓的交點問題（計算題）", unitCode: "math_u1", tags: ["高二下","數A","解析幾何","交點"] },
            { id: "h_m_hl_a4_c4_s1_t3", name: "解析幾何：圓的方程式與性質（應用題）", unitCode: "math_u1", tags: ["高二下","數A","解析幾何","圓"] },

            // C5：空間向量導入（基礎）
            { id: "h_m_hl_a4_c5_s1_t1", name: "空間向量：三維向量表示（概念）", unitCode: "math_u1", tags: ["高二下","數A","空間向量","概念理解"] },
            { id: "h_m_hl_a4_c5_s1_t2", name: "空間向量：三維向量的加法與數乘（計算題）", unitCode: "math_u1", tags: ["高二下","數A","空間向量","計算題"] },
            { id: "h_m_hl_a4_c5_s1_t3", name: "空間向量：空間中直線與平面的向量表示（應用題）", unitCode: "math_u1", tags: ["高二下","數A","空間向量","應用題"] },

            // C6：向量與解析幾何綜合應用
            { id: "h_m_hl_a4_c6_s1_t1", name: "向量解析：向量方法解解析幾何問題（策略題）", unitCode: "math_u1", tags: ["高二下","數A","向量","解析幾何","策略題"] },
            { id: "h_m_hl_a4_c6_s1_t2", name: "向量解析：向量與矩陣在變換中的應用（進階題）", unitCode: "math_u1", tags: ["高二下","數A","向量","矩陣","進階題"] },
            { id: "h_m_hl_a4_c6_s1_t3", name: "向量解析：綜合模考題（模考導向）", unitCode: "math_u1", tags: ["高二下","數A","向量","模考"] }
        ]
    },

    // ==========================================
    // 高中 數學 - 翰林 - 數A 第五冊 (高三)
    // 主題：微積分入門、綜合應用（高三銜接與分科基礎）
    // ==========================================
    {
        stage: "high_school",
        grade: "12",
        subject: "math",
        subjectName: "數學",
        version: "翰林",
        type: "regular",
        courses: [
            // C1：函數極限概念
            { id: "h_m_hl_a5_c1_s1_t1", name: "極限：極限的直觀概念與圖形理解（概念）", unitCode: "math_u1", tags: ["高三","數A","極限","概念理解"] },
            { id: "h_m_hl_a5_c1_s1_t2", name: "極限：基本極限計算技巧（計算題）", unitCode: "math_u1", tags: ["高三","數A","極限","計算題"] },
            { id: "h_m_hl_a5_c1_s1_t3", name: "極限：無窮大與無窮小的判斷（判斷題）", unitCode: "math_u1", tags: ["高三","數A","極限","判斷題"] },

            // C2：導數概念與瞬時變化率
            { id: "h_m_hl_a5_c2_s1_t1", name: "導數：瞬時變化率與切線斜率（概念）", unitCode: "math_u1", tags: ["高三","數A","導數","概念理解"] },
            { id: "h_m_hl_a5_c2_s1_t2", name: "導數：基本函數的導數規則（計算題）", unitCode: "math_u1", tags: ["高三","數A","導數","計算題"] },
            { id: "h_m_hl_a5_c2_s1_t3", name: "導數：導數在最大/最小值問題的應用（應用題）", unitCode: "math_u1", tags: ["高三","數A","導數","最值","應用題"] },

            // C3：微分應用（速度、加速度、最值）
            { id: "h_m_hl_a5_c3_s1_t1", name: "微分應用：速度與加速度的函數模型（概念）", unitCode: "math_u1", tags: ["高三","數A","微分","應用"] },
            { id: "h_m_hl_a5_c3_s1_t2", name: "微分應用：最大/最小值問題的求解（計算題）", unitCode: "math_u1", tags: ["高三","數A","微分","最值","計算題"] },
            { id: "h_m_hl_a5_c3_s1_t3", name: "微分應用：實務情境中的微分建模（建模題）", unitCode: "math_u1", tags: ["高三","數A","微分","建模"] },

            // C4：積分概念（面積與累積量）
            { id: "h_m_hl_a5_c4_s1_t1", name: "積分：面積與累積量的直觀概念（概念）", unitCode: "math_u1", tags: ["高三","數A","積分","概念理解"] },
            { id: "h_m_hl_a5_c4_s1_t2", name: "積分：簡單區間面積計算（計算題）", unitCode: "math_u1", tags: ["高三","數A","積分","計算題"] },
            { id: "h_m_hl_a5_c4_s1_t3", name: "積分：面積應用於實務問題（應用題）", unitCode: "math_u1", tags: ["高三","數A","積分","應用題"] },

            // C5：微積分綜合題型（分科預備）
            { id: "h_m_hl_a5_c5_s1_t1", name: "微積分綜合：極限、導數、積分的綜合題（綜合題）", unitCode: "math_u1", tags: ["高三","數A","微積分","綜合題"] },
            { id: "h_m_hl_a5_c5_s1_t2", name: "微積分綜合：分科測驗常見題型練習（分科導向）", unitCode: "math_u1", tags: ["高三","數A","微積分","分科"] },
            { id: "h_m_hl_a5_c5_s1_t3", name: "微積分綜合：歷屆試題解析與模考（模考題）", unitCode: "math_u1", tags: ["高三","數A","微積分","模考"] },

            // C6：綜合能力提升（學測/分科衝刺）
            { id: "h_m_hl_a5_c6_s1_t1", name: "綜合能力：數A 綜合題型分類與解題策略（策略題）", unitCode: "math_u1", tags: ["高三","數A","綜合題","策略"] },
            { id: "h_m_hl_a5_c6_s1_t2", name: "綜合能力：錯題分析與能力補強（診斷題）", unitCode: "math_u1", tags: ["高三","數A","錯題分析","診斷"] },
            { id: "h_m_hl_a5_c6_s1_t3", name: "綜合能力：模擬試題與時間管理（模考訓練）", unitCode: "math_u1", tags: ["高三","數A","模考","時間管理"] }
        ]
        
    }
];

// 注意：
// - 以上為「翰林 數A 全冊（1~5 冊）」的完整 regular（進度）課程細拆，
//   每冊皆以「概念 → 技能點 → 題型分類」拆分，id 與 tags 規則已統一。
// - 若要我接著產出：
//   1) 翰林 數A 的 review（高三總複習、分科衝刺、模考班等）
//   2) 翰林 數B 全冊（1~4 冊）
//   3) 龍騰 / 南一 版本（數A 全冊、數B 全冊）
//   4) 國中數學（七/八/九）
//   5) 或把每冊輸出成獨立檔案（math_A_book1.js 等）
//   請告訴我你下一步要哪一項，我會依相同命名與顆粒度規則繼續生成。
