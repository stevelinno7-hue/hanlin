function init() {
  const G = global.RigorousGenerator || window.global?.RigorousGenerator;

  if (
    !G ||
    !G.registerTemplate ||
    !G.utils ||
    typeof G.utils.pick !== "function"
  ) {
    return setTimeout(init, 100);
  }

  const { pick, shuffle } = G.utils;
  const gradeOrder = ["國七", "國八", "國九", "高一"];

  // ⬇ 後面邏輯全部安全
    function allow(item, ctx) {
      const g = ctx.tags.find(t => gradeOrder.includes(t));
      if (!g) return false;

      return g.startsWith("國")
        ? item.t[0] === g
        : gradeOrder.indexOf(item.t[0]) <= gradeOrder.indexOf(g);
    }

    const db = [
      // ----------------------------------------------------
      // [公民]
      // ----------------------------------------------------
      { s:"公民", t:["國七","社會"], e:"性別刻板印象", y:"偏見", d:"對特定性別抱持固定的看法或期望" },
      { s:"公民", t:["國七","社會"], e:"家庭功能", y:"社會化", d:"家庭教導子女社會規範與價值觀的過程" },

      { s:"公民", t:["國八","政治"], e:"主權", y:"國家最高權力", d:"國家對內擁有最高統治權，對外獨立自主" },
      { s:"公民", t:["國八","政治"], e:"基本人權", y:"憲法保障", d:"人民與生俱來的權利，政府應予以保障" },
      { s:"公民", t:["國八","政治"], e:"權力分立", y:"制衡", d:"行政、立法、司法互相制衡，避免專制" },

      { s:"公民", t:["國八","法律"], e:"罪刑法定主義", y:"法律保留", d:"行為時法律未規定者，不得處罰" },
      { s:"公民", t:["國八","法律"], e:"契約自由", y:"私法自治", d:"個人可依自由意志訂立契約" },
      { s:"公民", t:["國八","法律"], e:"行政處分", y:"公權力", d:"行政機關對公法事件所做的單方決定" },

      { s:"公民", t:["國九","經濟"], e:"機會成本", y:"代價", d:"選擇時所放棄的最高價值選項" },
      { s:"公民", t:["國九","經濟"], e:"需求法則", y:"反向變動", d:"價格上升，需求量下降" },
      { s:"公民", t:["國九","經濟"], e:"供給法則", y:"正向變動", d:"價格上升，供給量增加" },
      { s:"公民", t:["國九","經濟"], e:"外部效果", y:"市場失靈", d:"經濟行為影響第三人(如污染)" },
      { s:"公民", t:["國九","經濟"], e:"公共財", y:"共享性", d:"具有共享性與無法排他性" },
      { s:"公民", t:["國九","經濟"], e:"GDP", y:"國內生產毛額", d:"一國境內最終產品與勞務總值" },

      { s:"公民", t:["高一","政治"], e:"內閣制", y:"虛位元首", d:"行政權對立法權負責" },
      { s:"公民", t:["高一","政治"], e:"總統制", y:"覆議權", d:"行政與立法權完全分立" },
      { s:"公民", t:["高一","法律"], e:"比例原則", y:"憲法第23條", d:"限制人民權利須符合必要性與最小侵害" }
    ];

    G.registerTemplate("civics_basic", (ctx) => {
      const pool = db.filter(x => allow(x, ctx));
      if (!pool.length) return null;

      const item = pick(pool);
      const opts = shuffle([
        item.y,
        ...shuffle(pool.filter(x => x !== item)).slice(0, 3).map(x => x.y)
      ]);

      return {
        question: `【公民】關於「${item.e}」，何者正確？`,
        options: opts,
        answer: opts.indexOf(item.y),
        concept: item.t[1],
        explanation: [`${item.e}：${item.d}`]
      };
    }, ["公民","國七","國八","國九","高一"]);

    console.log("✅ 公民題庫載入完成");
  }

  init();
})(window);
