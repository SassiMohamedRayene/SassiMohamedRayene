'use strict';
document.body.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
let queued = false;
function updateNavigation() {
  const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= 150) || sections[0];
  navLinks.forEach(link => { if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  queued = false;
}
window.addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(updateNavigation); } }, { passive: true });
updateNavigation();

// Optional theme preference is stored locally; the first visit uses the light design.
const themeButton = document.querySelector('.theme-toggle');
function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#101012' : '#ffffff';
}
try { applyTheme(localStorage.getItem('portfolio-theme') === 'dark'); } catch { applyTheme(false); }
themeButton.addEventListener('click', () => {
  const dark = !document.documentElement.classList.contains('dark');
  applyTheme(dark);
  try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch { /* Theme remains usable when storage is blocked. */ }
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
