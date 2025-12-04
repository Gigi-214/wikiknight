(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  const saved = localStorage.getItem('wk-theme');
  if (saved) root.setAttribute('data-theme', saved);

  const updateIcon = () => {
    const t = root.getAttribute('data-theme');
    if (!toggle) return;
    toggle.innerHTML = t === 'dark'
      ? '<img src="sun-fog-svgrepo-com.svg" alt="Modo claro" />'
      : '<img src="moon-1254-svgrepo-com.svg" alt="Modo oscuro" />';
  };

  updateIcon();

  toggle && toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('wk-theme', next);
    updateIcon();
  });
})();
