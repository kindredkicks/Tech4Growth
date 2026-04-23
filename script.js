const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('t4g-theme');

if (savedTheme === 'dark') {
  root.classList.add('dark');
}

if (toggle) {
  toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('t4g-theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
}

const triggers = document.querySelectorAll('.accordion-trigger');
triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = trigger.nextElementSibling;
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    if (panel) {
      panel.classList.toggle('open');
    }
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.article-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    articleCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.hidden = !matches;
    });
  });
});
