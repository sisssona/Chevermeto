 const exchangeRates = {
  bgn: 1,
  eur: 0.51,
  gbp: 0.44
};

const currencySymbols = {
  bgn: 'лв.',
  eur: '€',
  gbp: '£'
};

function switchCurrency(currency) {
  const prices = document.querySelectorAll('.price');
  prices.forEach(p => {
    const basePrice = parseFloat(p.dataset.price);
    const converted = basePrice * exchangeRates[currency];
    p.textContent = `${converted.toFixed(2)} ${currencySymbols[currency]}`;
  });

  // Optional: Save selection in localStorage
  localStorage.setItem('currency', currency);
}

// Optional: auto-apply on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedCurrency = localStorage.getItem('currency') || 'bgn';
  switchCurrency(savedCurrency);
});


  

