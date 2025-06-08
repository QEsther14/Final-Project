
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  hamburger.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", function (event) {
        event.preventDefault();

        const targetSection = document.querySelector("#investigation-section");

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const joinButton = document.querySelector(".join-button");
  
    joinButton.addEventListener("click", (e) => {
      const target = document.querySelector("#form-section");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const faqButtons = document.querySelectorAll(".faq-question");
  
    faqButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;

        answer.classList.toggle("active");
  
    
        if (answer.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = null;
        }
      });
    });
  });

  document.getElementById("toggleAbout").addEventListener("click", () => {
    const about = document.querySelector(".about");
    about.classList.toggle("hidden");
  });
  
  document.querySelector(".contact-form form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (email && message) {
      alert("Thank you! Your message has been sent.");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  document.querySelector(".contact-form form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (email && message) {
      alert("Thank you! Your message has been sent.");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
        
  document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input').value;
    
      alert('Thank you for subscribing! You\'ll receive our next case update.');
      this.querySelector('input').value = '';
  });

