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

document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const items = track.children;
    let currentIndex = 0;

    function updateCarousel() {
        const width = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(${-currentIndex * width}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
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
   
    window.addEventListener('resize', updateCarousel);
});
