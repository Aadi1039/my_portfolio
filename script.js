document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 4px 15px rgba(255,255,255,0.3)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});
