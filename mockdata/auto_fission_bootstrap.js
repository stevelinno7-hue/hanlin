window.addEventListener('load', function() {
    'use strict';
    console.log("⏳ [Bootstrap] 頁面載入完成，開始檢查依賴...");

    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    
    // 如果找不到，再給最後一次機會 (延遲 500ms)
    if (!G || !G.autoFissionRegister) {
        console.warn("⚠️ [Bootstrap] 尚未偵測到工廠，嘗試最後等待...");
        setTimeout(() => {
            if (G && G.autoFissionRegister) {
                console.log("✅ [Bootstrap] 延遲後成功連接工廠！");
                startBootstrap(G);
            } else {
                console.error("❌ [Bootstrap] 放棄：AutoTemplateFissionFactory 真的未載入。");
            }
        }, 500);
    } else {
        startBootstrap(G);
    }

    function startBootstrap(G) {
        if (!G._rawRegister) G._rawRegister = G.registerTemplate;
        
        G.registerTemplate = function(name, func, tags = []) {
            try {
                G.autoFissionRegister(name, func, tags, G._rawRegister);
            } catch (e) {
                G._rawRegister.call(G, name, func, tags);
            }
        };
        console.log("🚀 [Bootstrap] 攔截器啟動成功！");
    }
});
