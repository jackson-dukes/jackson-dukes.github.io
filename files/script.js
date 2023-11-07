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
function copyEmail() {
    // Specify the text you want to copy
    var emailAddress = "jacksondukes@gmail.com";
  
    // Copy the specified text to the clipboard
    navigator.clipboard.writeText(emailAddress);
  
    // Alert the copied text
    alert("Copied email address");
}
function copyLinkedIn() {
    // Specify the text you want to copy
    var linkedInUrl = "https://www.linkedin.com/in/jacksondukes/";
  
    // Copy the specified text to the clipboard
    navigator.clipboard.writeText(linkedInUrl);
  
    // Alert the copied text
    alert("Copied LinkedIn URL");
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


