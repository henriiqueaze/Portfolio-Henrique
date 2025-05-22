const checkbox = document.getElementById('sw-checkbox');
const root = document.documentElement;

// 1) Carrega tema salvo ou default "dark"
root.dataset.theme = localStorage.getItem('theme') || 'dark';
checkbox.checked = root.dataset.theme === 'light';

// 2) Ao mudar o checkbox, troca o tema e salva no localStorage
checkbox.addEventListener('change', () => {
  const next = checkbox.checked ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});
