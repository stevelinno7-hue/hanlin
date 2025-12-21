window.addEventListener('load', function() {
    'use strict';
    console.log("⏳ [Bootstrap] 準備啟動裂變系統...");

    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    
    if (!G || !G.autoFissionRegister) {
        setTimeout(() => {
             const G2 = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
             if (G2 && G2.autoFissionRegister) startBootstrap(G2);
             else console.warn("⚠️ [Bootstrap] 工廠未就緒，將使用原始模式。");
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
                console.error("裂變失敗，回退原始註冊:", e);
                G._rawRegister.call(G, name, func, tags);
            }
        };
        console.log("🚀 [Bootstrap] 裂變攔截器啟動成功！");
    }
});
