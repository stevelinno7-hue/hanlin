// ✅ 關鍵修正：加上 load 監聽器，確保它是最後一個執行的
window.addEventListener('load', function() {
    'use strict';

    console.log("⏳ [Bootstrap] 等待頁面載入完成，準備啟動...");

    // 1. 取得引擎實例
    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    
    if (!G) {
        console.error("❌ [Bootstrap] 嚴重錯誤：Generator Engine 未載入！無法裂變。");
        return;
    }

    // 2. 檢查工廠是否存在
    if (!G.autoFissionRegister) {
        console.error("❌ [Bootstrap] 嚴重錯誤：AutoTemplateFissionFactory 未載入！無法裂變。");
        return;
    }

    // 3. 備份原始註冊函數 (Raw Register)
    if (!G._rawRegister) {
        G._rawRegister = G.registerTemplate;
    }

    // 4. 覆寫註冊函數 (攔截器)
    G.registerTemplate = function(name, func, tags = []) {
        try {
            // 呼叫工廠進行裂變
            G.autoFissionRegister(name, func, tags, G._rawRegister);
        } catch (e) {
            console.error(`⚠️ [Bootstrap] 題目 ${name} 裂變失敗:`, e);
            // 失敗時回退到原始註冊
            G._rawRegister.call(G, name, func, tags);
        }
    };

    console.log("🚀 [Bootstrap] 自動裂變攔截器已成功啟動！");

});
