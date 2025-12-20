/*************************************************
 * Real AI Tutor (FINAL VERSION)
 * -----------------------------------------------
 * ✔ 只呼叫 Node.js 後端
 * ✔ API Key 完全不在前端
 * ✔ 相容既有 HTML（askGemini 不會壞）
 * ✔ 可切 Gemini / OpenAI
 *************************************************/

(() => {

  /* =====================
     後端 API 位址
     （部署後只改這行）
  ===================== */
  const API_URL = "http://localhost:3000/api/ask-ai";

  const PROVIDER = {
    GEMINI: "gemini",
    OPENAI: "openai"
  };

  let currentProvider = PROVIDER.GEMINI;

  /* =====================
     實際請求後端
  ===================== */
  async function callBackend(title, content) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content,
        provider: currentProvider
      })
    });

    if (!res.ok) {
      throw new Error("❌ AI 伺服器連線失敗");
    }

    const data = await res.json();

    if (!data.success || !data.answer) {
      throw new Error("❌ AI 回傳格式錯誤");
    }

    return data.answer;
  }

  /* =====================
     對外公開（⚠️ 名稱不能改）
  ===================== */
  window.RealAITutor = {

    // ⚠️ HTML 有用到
    name: "Gemini AI 助教",

    /* ---------- 切換模型 ---------- */
    setProvider(provider) {
      if (provider !== PROVIDER.GEMINI && provider !== PROVIDER.OPENAI) {
        console.warn("未知的 AI Provider：", provider);
        return;
      }

      currentProvider = provider;
      this.name =
        provider === PROVIDER.OPENAI
          ? "OpenAI AI 助教"
          : "Gemini AI 助教";

      console.log("✅ 已切換 AI：", provider);
    },

    getProvider() {
      return currentProvider;
    },

    /* ---------- 統一呼叫 ---------- */
    async ask(title, content) {
      if (!title || !content) {
        throw new Error("title / content 不可為空");
      }
      return await callBackend(title, content);
    },

    /* ---------- 相容你原本 HTML ---------- */
    async askGemini(title, content) {
      this.setProvider(PROVIDER.GEMINI);
      return await this.ask(title, content);
    },

    async askOpenAI(title, content) {
      this.setProvider(PROVIDER.OPENAI);
      return await this.ask(title, content);
    }
  };

})();
