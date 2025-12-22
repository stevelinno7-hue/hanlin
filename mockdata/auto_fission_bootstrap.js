window.addEventListener('load', function() {
    'use strict';
    console.log("⏳ [Bootstrap] 準備啟動裂變系統...");

    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    
    // 雙重檢查：等待工廠就緒
    if (!G || !G.autoFissionRegister) {
        setTimeout(() => {
             // Retry
             const G_retry = window.RigorousGenerator;
             if (G_retry && G_retry.autoFissionRegister) {
                 startBootstrap(G_retry);
             } else {
                 console.warn("⚠️ [Bootstrap] 工廠未就緒，將使用原始註冊模式。");
             }
        }, 500);
    } else {
        startBootstrap(G);
    }

    function startBootstrap(G) {
        // 保存原始註冊函數
        if (!G._rawRegister) G._rawRegister = G.registerTemplate;
        
        // 攔截並覆寫註冊函數
        G.registerTemplate = function(name, func, tags = []) {
            try {
                // 改用工廠的裂變註冊
                G.autoFissionRegister(name, func, tags, G._rawRegister);
            } catch (e) {
                console.error("裂變失敗，回退原始註冊:", e);
                G._rawRegister.call(G, name, func, tags);
            }
        };
        console.log("🚀 [Bootstrap] 裂變攔截器啟動成功！");
    }
});
