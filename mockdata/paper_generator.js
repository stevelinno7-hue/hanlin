(function (global) {
  'use strict';

  const log = (...a) => console.log('%c📄 [PaperGen]', 'color:#2563eb', ...a);
  const warn = (...a) => console.warn('%c⚠️ [PaperGen]', 'color:#f59e0b', ...a);

  let Factory = null;
  let debugEl = null;

  // ===============================
  // 等 Factory ready
  // ===============================
  function waitForFactory(cb) {
    if (global.AutoTemplateFissionFactory?.ready) {
      Factory = global.AutoTemplateFissionFactory;
      cb();
    } else {
      setTimeout(() => waitForFactory(cb), 50);
    }
  }

  // ===============================
  // Debug Panel（DOM safe）
  // ===============================
  function mountDebugPanel() {
    if (debugEl) return;

    if (!document.body) {
      document.addEventListener('DOMContentLoaded', mountDebugPanel, { once: true });
      return;
    }

    const panel = document.createElement('div');
    panel.id = 'pg-debug';
    panel.style.cssText = `
      position:fixed;bottom:0;left:0;right:0;
      max-height:35%;overflow:auto;
      background:#111;color:#0f0;
      font-size:12px;padding:8px;
      display:none;z-index:9999
    `;
    panel.innerHTML = `<b>PaperGenerator Debug</b><pre id="pg-debug-content"></pre>`;
    document.body.appendChild(panel);

    debugEl = panel.querySelector('#pg-debug-content');
    log('🧪 Debug Panel mounted');
  }

  function debug(msg) {
    if (!debugEl) return;
    debugEl.textContent += msg + '\n';
  }

  // ===============================
  // 核心出題
  // ===============================
  function generate({ subject, grade, count }) {
    if (!Factory) {
      warn('Factory not ready');
      return [];
    }

    const T = Factory.templates?.[subject]?.[grade];
    if (!Array.isArray(T) || T.length === 0) {
      warn(`❌ 無題庫：${subject} ${grade}`);
      return [];
    }

    const usedStem = new Set();
    const paper = [];
    let guard = 0;

    while (paper.length < count && guard++ < 200) {
      const fn = T[Math.floor(Math.random() * T.length)];
      let q = null;

      try {
        q = fn();
      } catch (e) {
        debug(`❌ template throw: ${subject}/${grade}`);
        continue;
      }

      if (!q || typeof q.question !== 'string') {
        debug(`⚠️ template return null: ${subject}/${grade}`);
        continue;
      }

      const stem = q.question.trim();
      if (usedStem.has(stem)) continue;

      usedStem.add(stem);
      paper.push({
        id: paper.length + 1,
        _from: `${subject}/${grade}`,
        ...q
      });
    }

    if (paper.length < count) {
      warn(`題目不足 ${paper.length}/${count}`);
    }

    return paper;
  }

  // ===============================
  // 對外
  // ===============================
  waitForFactory(() => {
    mountDebugPanel();

    global.PaperGenerator = { generate };
    global.PAPER_GENERATOR_READY = true;
    global.dispatchEvent(new Event('PaperGeneratorReady'));

    log('🔥 PAPER GEN v2 SAFE 已啟動');
  });

})(window);
