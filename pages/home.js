(function () {
  const titles = {
    en: "China COVID-19 Forecast Hub",
    zh: "中国 COVID-19 预测中心",
  };

  const panels = {
    en: document.querySelector(".lang-en"),
    zh: document.querySelector(".lang-zh"),
  };

  const titleEl = document.getElementById("hero-title");
  const buttons = document.querySelectorAll(".lang-btn");

  if (!titleEl || !panels.en || !panels.zh) {
    return;
  }

  function setLang(lang) {
    const isEn = lang === "en";

    titleEl.textContent = titles[lang];
    panels.en.classList.toggle("hidden", !isEn);
    panels.zh.classList.toggle("hidden", isEn);

    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.documentElement.lang = isEn ? "en" : "zh-CN";
    localStorage.setItem("dashboard-lang", lang);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  const saved = localStorage.getItem("dashboard-lang");
  setLang(saved === "zh" ? "zh" : "en");
})();
