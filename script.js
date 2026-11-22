
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