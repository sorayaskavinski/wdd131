document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById("hamburger").addEventListener("click", function() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("visible");
});

