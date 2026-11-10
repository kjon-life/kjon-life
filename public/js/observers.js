document.addEventListener('DOMContentLoaded', () => {
  // The purpose section holds one piece of state: data-state on #purpose.
  // idle -> revealed, set once when the text scrolls into view and never switched back.
  // The per-phrase timing lives in src/scss/layout/_purpose.scss.
  const purpose = document.getElementById('purpose');
  if (!purpose) return;

  const text = purpose.querySelector('.text-container') || purpose;
  purpose.dataset.state = 'idle';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        purpose.dataset.state = 'revealed';
        observer.disconnect();
      }
    });
  }, { root: null, threshold: 0.5 });

  observer.observe(text);
});
