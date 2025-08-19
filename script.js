 const exchangeRates = {
  bgn: 1,
  eur: 0.5113,
 };

 const pageLang = document.documentElement.lang.toLowerCase();

 const currencySymbols = {
  bgn: () => document.documentElement.lang === 'bg' ? 'лв.' : 'BGN',
  eur: () => '€',
 };

 function switchCurrency(currency) {
  const prices = document.querySelectorAll('.price');
  prices.forEach(p => {
    const basePrice = parseFloat(p.dataset.price);
    if (Number.isNaN(basePrice)) return;
    let converted;

    if (currency === 'eur') {
      converted = convertToEUR(basePrice); // ⬅️ Rounds up
    } else {
      converted = basePrice * exchangeRates[currency]; // Regular BGN
    }

    p.textContent = `${converted.toFixed(2)} ${currencySymbols[currency]()}`;
  });

  localStorage.setItem('currency', currency);
 }

 // Optional: auto-apply on page load
 window.addEventListener('DOMContentLoaded', () => {
  const savedCurrency = localStorage.getItem('currency') || 'bgn';
  switchCurrency(savedCurrency);
 });

 function convertToEUR(priceInBGN) {
  const converted = priceInBGN * exchangeRates.eur;
  return converted;
 }



  