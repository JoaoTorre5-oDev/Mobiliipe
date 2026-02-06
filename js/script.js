// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.onclick = () => nav.classList.toggle('active');

// CARROSSEL
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');
  index = i;
}

dots.forEach((dot, i) => {
  dot.onclick = () => showSlide(i);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 10000);
