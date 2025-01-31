

function playVideo(videoSrc) {
    var modal = document.getElementById("videoModal");
    var modalVideo = document.getElementById("modalVideo");

    modalVideo.src = videoSrc;
    modal.style.display = "flex";
    modalVideo.play();
}

function closeModal() {
    var modal = document.getElementById("videoModal");
    var modalVideo = document.getElementById("modalVideo");

    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = ""; // Clear the source to stop buffering
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItem = document.querySelector('.nav_item');
const mobileNav = document.querySelector('.mobile-nav');
hamburgerMenu.addEventListener('click', () => {
    navItem.classList.toggle('active');
    mobileNav.classList.toggle('active');
});
