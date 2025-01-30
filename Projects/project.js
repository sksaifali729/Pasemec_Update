// Function to filter projects based on the selected category
function filterProjects(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Activate the clicked button
    event.target.classList.add('active');

    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        if (category === 'all') {
            image.style.display = 'block';
        } else {
            if (image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    });
}

// Set "All Projects" as the default active filter when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.filter-btn.active').click();
});





let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const indicators = document.querySelector(".indicators");

// Initialize indicators and set active for the first slide
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (i === currentSlide) indicator.classList.add("active");
    indicator.addEventListener("click", () => goToSlide(i));
    indicators.appendChild(indicator);
}

// Update active indicator
function updateIndicators() {
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
    });
}

// Show the active slide and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    updateIndicators();
}

// Go to a specific slide
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);


    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
