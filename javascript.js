// JavaScript for additional functionality
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
    });

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'none'; // Remove any transition
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});

// Get the hero title element
const heroTitle = document.querySelector('.hero-content h1');

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Calculate the scroll percentage
    const scrollPosition = window.scrollY;
    const opacity = 1 - scrollPosition / 400; // Adjust the denominator for the desired fade speed

    // Set the opacity of the title based on scroll position
    heroTitle.style.opacity = opacity;
});

// Image carousel functionality
function changeImage(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    images[currentIndex].classList.add('active');
}
