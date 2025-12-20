(function(window){
    'use strict';
    // 取得引擎
    const G = window.RigorousGenerator || (window.global && window.global.RigorousGenerator);
    if (!G) return;

    // 1. 備份原始註冊函數
    // 使用閉包保存原始函數引用
    const _rawRegister = G.registerTemplate;

    // 2. 覆寫註冊函數
    G.registerTemplate = function(name, func, tags = [], isFissioned = false) {
        
        // A. 無論如何，先註冊原始版本 (Standard)
        // 使用 .call 確保 context 正確
        _rawRegister.call(G, name, func, tags);

        // B. 如果這不是「已經裂變過」的題目，且工廠存在，就進行裂變
        // 這裡檢查 isFissioned 參數，防止無窮迴圈
        if (!isFissioned && G.autoFissionRegister) {
            try {
                G.autoFissionRegister(name, func, tags, _rawRegister);
            } catch (e) {
                console.error(`[Fission Error] 裂變失敗: ${name}`, e);
            }
        }
    };

    console.log("🚀 自動裂變攔截器 (Bootstrap) 已啟動");

})(window);