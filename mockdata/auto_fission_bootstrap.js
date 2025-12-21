// ✅ 加上 load 監聽器，確保最後執行
window.addEventListener('load', function() {
    'use strict';
    console.log("⏳ [Bootstrap] 等待頁面載入完成，準備啟動...");

    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    
    if (!G || !G.autoFissionRegister) {
        // 如果工廠還沒好，再給一次機會
        setTimeout(() => {
             if (G && G.autoFissionRegister) startBootstrap(G);
             else console.error("❌ [Bootstrap] 放棄：工廠未就緒。");
        }, 500);
    } else {
        startBootstrap(G);
    }

    function startBootstrap(G) {
        if (!G._rawRegister) G._rawRegister = G.registerTemplate;
        
        // 覆寫註冊函數 (攔截器)
        G.registerTemplate = function(name, func, tags = []) {
            try {
                G.autoFissionRegister(name, func, tags, G._rawRegister);
            } catch (e) {
                G._rawRegister.call(G, name, func, tags);
            }
        };
        console.log("🚀 [Bootstrap] 自動裂變攔截器已成功啟動！");
    }
});
