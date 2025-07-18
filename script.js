// Header toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-menu');

    toggle.addEventListener('click', () => {
        navLinks.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// Header toggle


// Scroll button logic
let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
