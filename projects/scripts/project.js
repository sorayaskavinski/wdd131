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
    hamburger.textContent = isVisible ? '✖' : '☰';
});

const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let currentIndex = 0;

    function updateCarousel() {
        const width = track.children[0].clientWidth;
        track.style.transform = `translateX(${-width * currentIndex}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < track.children.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});
