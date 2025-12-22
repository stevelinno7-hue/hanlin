window.addEventListener('load', function() {
    'use strict';
    console.log("⏳ [Bootstrap] 準備啟動裂變系統...");

    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    
    // 等待工廠就緒 (最多等 1 秒)
    let checks = 0;
    const checkFactory = setInterval(() => {
        if (G && G.autoFissionRegister) {
            clearInterval(checkFactory);
            startBootstrap(G);
        } else if (checks > 20) {
            clearInterval(checkFactory);
            console.warn("⚠️ [Bootstrap] 工廠未就緒，將使用原始註冊模式。");
        }
        checks++;
    }, 50);

    function startBootstrap(G) {
        if (!G._rawRegister) G._rawRegister = G.registerTemplate;
        
        G.registerTemplate = function(name, func, tags = []) {
            try {
                G.autoFissionRegister(name, func, tags, G._rawRegister);
            } catch (e) {
                G._rawRegister.call(G, name, func, tags);
            }
        };
        console.log("🚀 [Bootstrap] 裂變攔截器啟動成功！");
    }
});
