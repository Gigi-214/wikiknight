// Toggle en tarjetas "Ver más" y menú móvil
document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const nav = document.querySelector('.nav');
  const toggleBtn = document.querySelector('.nav__toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Mostrar/ocultar detalles de personajes
  document.querySelectorAll('.js-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSel = btn.getAttribute('data-target');
      const target = document.querySelector(targetSel);
      if (!target) return;
      target.classList.toggle('is-hidden');
      btn.textContent = target.classList.contains('is-hidden') ? 'Ver más' : 'Ocultar';
    });
  });
});

