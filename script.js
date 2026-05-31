function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
}

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('open');
  });
});
