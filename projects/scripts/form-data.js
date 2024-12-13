document.getElementById('year').textContent = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent =
    `Last Updated: ${lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })}`;

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isVisible = navMenu.classList.toggle('visible');
    hamburger.setAttribute('aria-expanded', isVisible);
    hamburger.textContent = isVisible ? 'X' : '☰';
});

const formData = JSON.parse(localStorage.getItem('formData'));
if (formData) {
    document.getElementById('name').textContent = formData.name;
    document.getElementById('phone').textContent = formData.phone || 'Not provided';
    document.getElementById('email').textContent = formData.email;
    document.getElementById('topic').textContent = formData.topic;
    document.getElementById('message').textContent = formData.message;
} else {
    document.getElementById('summary').innerHTML = '<p>No submission data found.</p>';
}
