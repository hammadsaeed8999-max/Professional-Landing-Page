
const serviceCards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

serviceCards.forEach((card) => {
    observer.observe(card);
});


// Growth Section
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = parseFloat(counter.dataset.target);
    const decimal = parseInt(counter.dataset.decimal) || 0;

    let current = 0;
    const increment = target / 125;

    function updateCounter() {

        current += increment;

        if (current < target) {
            counter.textContent = current.toFixed(decimal);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target.toFixed(decimal);
        }

    }

    updateCounter();

});

//  JS Client CARD


const clientTrack = document.querySelector(".client-track");
const clientCards = document.querySelectorAll(".client-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".client-dots");

let currentIndex = 0;

function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}

function getMaxIndex() {
    return Math.max(0, clientCards.length - getVisibleCards());
}

// Create dots
function createDots() {
    dotsContainer.innerHTML = "";

    for (let i = 0; i <= getMaxIndex(); i++) {
        const dot = document.createElement("span");

        dot.classList.add("client-dot");

        if (i === currentIndex) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    }
}

// Update slider
function updateSlider() {
    const cardWidth = clientCards[0].offsetWidth;
    const gap = 22;

    clientTrack.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: "smooth"
    });

    document.querySelectorAll(".client-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === getMaxIndex();

    prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
    nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
}

// Next button
nextBtn.addEventListener("click", () => {
    if (currentIndex < getMaxIndex()) {
        currentIndex++;
        updateSlider();
    }
});

// Previous button
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Responsive support
window.addEventListener("resize", () => {
    currentIndex = Math.min(currentIndex, getMaxIndex());
    createDots();
    updateSlider();
});

// Initialize
createDots();
updateSlider();


/* =========================
   CURRENT YEAR
========================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop = document.getElementById("backToTop");

// Show button on scroll

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

// Scroll to top on click

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

