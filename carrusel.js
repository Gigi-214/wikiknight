document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const viewport = document.getElementById('carouselViewport');
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');

  if (!track || !viewport || !prev || !next) return;

  let index = 0;
  const items = Array.from(track.children);
  const total = items.length; // en tu caso: 8

  const update = () => {
    const width = viewport.clientWidth + 12; // ancho + gap
    track.style.transform = `translateX(-${index * width}px)`;
  };

  next.addEventListener('click', () => {
    if (index < total - 1) { // no pasar del último
      index++;
      update();
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) { // no pasar del primero
      index--;
      update();
    }
  });

  window.addEventListener('resize', update);
  update();
});

