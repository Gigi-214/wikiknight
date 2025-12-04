document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  const filterButtons = gallery.querySelectorAll('.btn--chip');
  const items = gallery.querySelectorAll('.gallery__item');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');

  // Filtros
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cat = btn.dataset.filter;

      items.forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.display = show ? 'block' : 'none';
      });
    });
  });

  // Lightbox
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('figcaption')?.textContent || '';
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent = caption;
      lightbox.classList.remove('is-hidden');
    });
  });

  const closeLightbox = () => lightbox.classList.add('is-hidden');
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});

