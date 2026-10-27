function formatPricesInEuro() {
  document.querySelectorAll('.price').forEach(p => {
    const basePrice = parseFloat(p.dataset.price);
    if (Number.isNaN(basePrice)) {
      p.classList.add('no-price');
      p.textContent = '';
      return;
    }
    p.classList.remove('no-price');
    p.textContent = `${basePrice.toFixed(2)} €`;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  formatPricesInEuro();
});
