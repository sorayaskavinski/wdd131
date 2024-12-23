document.getElementById('year').textContent = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isVisible = navMenu.classList.toggle('visible');
    hamburger.setAttribute('aria-expanded', isVisible);
    hamburger.textContent = isVisible ? '✖' : '☰';
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        topic: document.getElementById('topic').value,
        message: document.getElementById('message').value,
    };
    
    localStorage.setItem('formData', JSON.stringify(formData));
    
    window.location.href = 'form-data.html';

    console.log('Form Data:', formData);
    console.log('Stored Data:', localStorage.getItem('formData'));

});
