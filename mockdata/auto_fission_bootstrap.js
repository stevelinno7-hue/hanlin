(function() {
    'use strict';
    console.log("⏳ [Bootstrap] 正在建立攔截防線...");

    // 使用計時器極速輪詢，搶在題庫載入前完成劫持
    let checks = 0;
    const maxChecks = 200; // 最多等 2 秒

    const hijackInterval = setInterval(() => {
        const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
        
        // 檢查條件：引擎存在 且 工廠方法已掛載
        if (G && G.autoFissionRegister) {
            clearInterval(hijackInterval);
            startBootstrap(G);
        } else {
            checks++;
            if (checks >= maxChecks) {
                clearInterval(hijackInterval);
                console.warn("⚠️ [Bootstrap] 等待超時，裂變攔截失敗 (可能是 Factory 未載入)。");
            }
        }
    }, 10); // 每 10ms 檢查一次 (比題庫的 100ms 快很多)

    function startBootstrap(G) {
        // 防止重複執行
        if (G._isHijacked) return;
        
        // 1. 保存原始註冊函數
        // 如果已經有 _rawRegister (可能被 Polyfill 建立過)，就用它，否則用當前的
        if (!G._rawRegister) G._rawRegister = G.registerTemplate;
        
        // 2. 覆寫註冊函數 (攔截器)
        G.registerTemplate = function(name, func, tags = []) {
            try {
                // 將註冊請求轉發給工廠，由工廠決定如何裂變
                G.autoFissionRegister(name, func, tags, G._rawRegister);
            } catch (e) {
                console.error("❌ [Bootstrap] 裂變過程發生錯誤，降級為原始註冊:", e);
                G._rawRegister.call(G, name, func, tags);
            }
        };

        G._isHijacked = true;
        console.log("🚀 [Bootstrap] 裂變攔截器啟動成功！所有後續題庫都將自動升級。");
    }
})();
