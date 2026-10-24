'use strict';
const config = window.PAGE_CONFIG || {};
const slides = document.querySelector('.slides');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function currentSlide() { return Math.round(slides.scrollLeft / (slides.clientWidth + 20)); }
function moveSlide(delta) {
  const count = slides.children.length;
  const index = (currentSlide() + delta + count) % count;
  slides.scrollTo({ left: index * (slides.clientWidth + 20), behavior: reduceMotion ? 'instant' : 'smooth' });
}
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
slides.addEventListener('scroll', () => { document.querySelector('#slide-number').textContent = currentSlide() + 1; }, { passive: true });
slides.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); moveSlide(e.key === 'ArrowRight' ? 1 : -1); }
});
function safeUrl(value) { try { const url = new URL(value, window.location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; } }
const checkout = config.checkoutUrl && safeUrl(config.checkoutUrl);
if (checkout) { document.querySelector('.checkout').href = checkout; document.querySelector('#checkout-pendente').hidden = true; }

for (const screen of document.querySelectorAll('[data-video]')) {
  const source = config.videos?.[screen.dataset.video];
  const url = source && safeUrl(source);
  if (!url) continue;
  const video = document.createElement('video');
  video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.src = url;
  video.setAttribute('aria-label', screen.dataset.video === 'leiSeca' ? 'Demonstração de estudo pela lei seca' : 'Demonstração de estudo pelos mapas');
  const placeholder = screen.querySelector('.video-placeholder');
  video.addEventListener('error', () => { video.remove(); placeholder.hidden = false; });
  placeholder.hidden = true;
  screen.append(video);
}
