const carousel = document.querySelector('.carousel');
const projects = document.querySelectorAll('.project');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * projects[0].offsetWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextProject() {
    if (currentIndex < projects.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevProject() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

document.querySelector('.carousel-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('project')) {
        const projectIndex = Array.from(projects).indexOf(event.target);
        currentIndex = projectIndex;
        updateCarousel();
    }
});

document.querySelector('.prev-button').addEventListener('click', prevProject);
document.querySelector('.next-button').addEventListener('click', nextProject);


