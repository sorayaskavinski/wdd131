document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isVisible = navMenu.style.display === 'block';
    navMenu.style.display = isVisible ? 'none' : 'block';
    hamburger.textContent = isVisible ? '☰' : 'X';
});
