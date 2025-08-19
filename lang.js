// lang.js
function switchLanguage(lang) {
  document.documentElement.lang = lang;

  localStorage.setItem('language', lang);

}

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el.classList.contains('price')) return;
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('language', lang);
  if (typeof switchCurrency === 'function') {
    const savedCurrency = localStorage.getItem('currency') || 'bgn';
    switchCurrency(savedCurrency);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'bg';
  setLanguage(savedLang);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'bg';
  document.documentElement.lang = savedLang;

  const savedCurrency = localStorage.getItem('currency') || 'bgn';
  switchCurrency(savedCurrency);
});

