// assets/js/page_content.js
// 靜態頁面內容資料庫

window.PageContent = {
    // --- 產品服務 ---
    "features": {
        title: "功能介紹",
        content: `
            <h3 class="text-xl font-bold mb-4">1. AI 智慧出題系統</h3>
            <p class="mb-4">我們的核心引擎採用最新的機器學習演算法，能夠根據學生的答題歷程，動態調整題目難度。不再是死板的題庫抽題，而是為每一位學生量身打造的專屬試卷。</p>
            <h3 class="text-xl font-bold mb-4">2. 知識點雷達圖</h3>
            <p class="mb-4">透過視覺化的雷達圖，精準呈現學生在「運算」、「幾何」、「代數」、「邏輯」等各個維度的能力值，一眼看出強弱項。</p>
            <h3 class="text-xl font-bold mb-4">3. 親師生三方連動</h3>
            <p>打破資訊不對稱，讓家長與老師能即時掌握學生的學習狀況，並透過系統發送鼓勵或補救建議。</p>
        `
    },
    "changelog": {
        title: "更新日誌",
        content: `
            <div class="border-l-4 border-blue-500 pl-4 mb-6">
                <div class="text-gray-500 text-sm">2025-12-01</div>
                <h4 class="font-bold">v2.0 全新改版上線</h4>
                <p>導入 Generator Engine，支援無限題庫生成。</p>
            </div>
            <div class="border-l-4 border-gray-300 pl-4 mb-6">
                <div class="text-gray-500 text-sm">2025-11-15</div>
                <h4 class="font-bold">v1.5 家長功能更新</h4>
                <p>新增 LINE Notify 通知綁定功能。</p>
            </div>
            <div class="border-l-4 border-gray-300 pl-4">
                <div class="text-gray-500 text-sm">2025-10-01</div>
                <h4 class="font-bold">v1.0 正式發布</h4>
                <p>翰林雲端學院基礎版上線。</p>
            </div>
        `
    },
    "api_docs": {
        title: "API 文件 (開發者專用)",
        content: `
            <p class="mb-4">歡迎第三方教育機構串接翰林雲端學院題庫。</p>
            <div class="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                GET /api/v1/questions/generate<br>
                Host: api.hanlin-cloud.com<br>
                Authorization: Bearer {YOUR_API_KEY}
            </div>
            <p>參數說明：</p>
            <ul class="list-disc pl-5 mt-2">
                <li>subject: 科目代碼 (math, english...)</li>
                <li>count: 題數 (1-50)</li>
                <li>level: 難度 (1-5)</li>
            </ul>
        `
    },

    // --- 學習資源 ---
    "past_exams": {
        title: "歷屆試題下載",
        content: `
            <p class="mb-6">我們整理了近十年的國中會考與高中學測/分科測驗試題，提供 PDF 下載。</p>
            <div class="space-y-3">
                <a href="#" class="block p-4 border rounded hover:bg-blue-50 flex justify-between">
                    <span>114 年學測數學 A 試題</span>
                    <span class="text-blue-600"><i class="fas fa-download"></i> 下載</span>
                </a>
                <a href="#" class="block p-4 border rounded hover:bg-blue-50 flex justify-between">
                    <span>114 年學測英文試題</span>
                    <span class="text-blue-600"><i class="fas fa-download"></i> 下載</span>
                </a>
                <a href="#" class="block p-4 border rounded hover:bg-blue-50 flex justify-between">
                    <span>113 年國中教育會考全科</span>
                    <span class="text-blue-600"><i class="fas fa-download"></i> 下載</span>
                </a>
            </div>
        `
    },
    "methods": {
        title: "學習方法論",
        content: `
            <h3 class="text-lg font-bold mb-2">費曼學習法</h3>
            <p class="mb-4">透過「教學」來學習。嘗試將你學到的概念，用最簡單的語言解釋給別人聽，如果卡住了，代表你還沒完全懂。</p>
            <h3 class="text-lg font-bold mb-2">番茄鐘工作法</h3>
            <p class="mb-4">設定 25 分鐘專注學習，然後休息 5 分鐘。這能幫助你維持大腦的高效運作，避免疲勞。</p>
            <h3 class="text-lg font-bold mb-2">間隔重複記憶</h3>
            <p>利用遺忘曲線，在特定時間點（1天、3天、1週）複習，能將短期記憶轉化為長期記憶。</p>
        `
    },
    "admission": {
        title: "升學資訊",
        content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-orange-50 p-6 rounded-xl">
                    <h3 class="font-bold text-orange-800 mb-2">高中升學管道</h3>
                    <ul class="list-disc pl-5 text-sm text-gray-700">
                        <li>免試入學 (超額比序)</li>
                        <li>特色招生 (考試分發)</li>
                        <li>完全免試</li>
                    </ul>
                </div>
                <div class="bg-blue-50 p-6 rounded-xl">
                    <h3 class="font-bold text-blue-800 mb-2">大學多元入學</h3>
                    <ul class="list-disc pl-5 text-sm text-gray-700">
                        <li>特殊選才 (免試)</li>
                        <li>繁星推薦 (校排%)</li>
                        <li>申請入學 (學測+備審)</li>
                        <li>分發入學 (分科測驗)</li>
                    </ul>
                </div>
            </div>
        `
    },

    // --- 關於我們 ---
    "about": {
        title: "公司簡介",
        content: `
            <p class="mb-6">翰林雲端學院成立於 2023 年，致力於運用科技提升教育品質。我們的團隊由教育專家、軟體工程師與設計師組成，目標是打造一個讓每個學生都能享受個人化學習體驗的平台。</p>
            <h3 class="text-lg font-bold mb-2">我們的使命</h3>
            <p class="mb-4">讓優質教育資源不再受限於地理位置與經濟條件，透過科技實現教育公平。</p>
            <h3 class="text-lg font-bold mb-2">核心價值</h3>
            <ul class="list-disc pl-5">
                <li>創新：持續研發新技術與教學方法。</li>
                <li>品質：確保每一份內容的專業與準確。</li>
                <li>關懷：以學生為中心，關注每個人的學習需求。</li>
            </ul>
        `
    },
    "careers": {
        title: "加入我們",
        content: `
            <p class="mb-6">我們正在尋找對教育科技充滿熱情的夥伴！</p>
            <div class="space-y-4">
                <div class="p-4 border rounded-lg hover:shadow-md transition">
                    <div class="flex justify-between items-center">
                        <h4 class="font-bold text-lg">前端工程師 (Frontend Engineer)</h4>
                        <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">台北市</span>
                    </div>
                    <p class="text-sm text-gray-500 mt-2">熟悉 Vue.js / React，具備 RWD 開發經驗。</p>
                </div>
                <div class="p-4 border rounded-lg hover:shadow-md transition">
                    <div class="flex justify-between items-center">
                        <h4 class="font-bold text-lg">學科內容編輯 (Content Editor)</h4>
                        <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">台中市</span>
                    </div>
                    <p class="text-sm text-gray-500 mt-2">數理科相關系所畢業，具備教學經驗者佳。</p>
                </div>
            </div>
        `
    },
    "contact": {
        title: "聯絡客服",
        content: `
            <p class="mb-6">有任何問題嗎？歡迎透過以下方式聯繫我們。</p>
            <ul class="space-y-4">
                <li class="flex items-center"><i class="fas fa-phone w-8 text-blue-600"></i> (02) 2345-6789</li>
                <li class="flex items-center"><i class="fas fa-envelope w-8 text-blue-600"></i> service@hanlin-cloud.com</li>
                <li class="flex items-center"><i class="fas fa-map-marker-alt w-8 text-blue-600"></i> 台北市大安區和平東路一段 123 號</li>
            </ul>
            <form class="mt-8 space-y-4 border-t pt-6">
                <h4 class="font-bold">線上留言</h4>
                <input type="text" placeholder="您的姓名" class="w-full p-2 border rounded">
                <input type="email" placeholder="您的 Email" class="w-full p-2 border rounded">
                <textarea placeholder="留言內容" class="w-full p-2 border rounded h-32"></textarea>
                <button type="button" onclick="alert('訊息已發送！')" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">發送訊息</button>
            </form>
        `
    },

    // --- 法律條款 ---
    "terms": {
        title: "服務條款",
        content: `
            <p class="text-sm text-gray-500 mb-4">最後更新日期：2025年1月1日</p>
            <h4 class="font-bold mt-4">1. 認知與接受條款</h4>
            <p>當您使用翰林雲端學院（以下簡稱本服務）時，即表示您已閱讀、瞭解並同意接受本服務條款之所有內容。</p>
            <h4 class="font-bold mt-4">2. 會員註冊義務</h4>
            <p>為了能使用本服務，您同意以下事項：依本服務註冊表之提示提供您本人正確、最新及完整的資料。</p>
            <h4 class="font-bold mt-4">3. 隱私權政策</h4>
            <p>關於您的會員註冊以及其他特定資料依本公司「隱私權政策」受到保護與規範。</p>
        `
    },
    "privacy": {
        title: "隱私權政策",
        content: `
            <p>我們非常重視您的隱私權。本隱私權政策說明我們如何收集、使用及保護您的個人資料。</p>
            <h4 class="font-bold mt-4">資料收集</h4>
            <p>當您註冊帳號時，我們會收集您的姓名、電子郵件地址及身分資訊（如學校、年級）。</p>
            <h4 class="font-bold mt-4">資料使用</h4>
            <p>您的資料僅用於提供個人化學習服務、學習成效分析及系統通知。</p>
            <h4 class="font-bold mt-4">資料保護</h4>
            <p>我們採用業界標準的 SSL 加密技術來保護您的資料傳輸安全。</p>
        `
    }
};