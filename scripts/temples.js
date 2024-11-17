document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'block';
    navMenu.style.display = isOpen ? 'none' : 'block';
    hamburger.textContent = isOpen ? '☰' : 'X';
});