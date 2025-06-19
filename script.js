// Select DOM elements used for interactivity
const toggleBtn = document.querySelector(".menu-toggle");     // Mobile menu button
const navMenu = document.querySelector(".nav-links");         // Navigation menu container
const navLinks = document.querySelectorAll(".nav-links a");   // All nav links
const sections = document.querySelectorAll(".section-carousel section"); // Section cards

// Toggle mobile menu visibility
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Navigation + Scroll + Card Activation
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Highlight the active link
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Close the dropdown menu on mobile
    navMenu.classList.remove("active");

    // Get target section
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });

      // Activate the correct card
      sections.forEach(section => section.classList.remove("active"));
      target.classList.add("active");
    }
  });
});