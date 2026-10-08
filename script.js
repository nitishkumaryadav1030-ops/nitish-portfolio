// ========================================
// MOBILE MENU
// ========================================

const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

  navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a")
  .forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("active");

    });

  });


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
  document.querySelector(".contact-form");


contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  alert(
    "Thank you for contacting Nitish Yadav!"
  );

  contactForm.reset();

});


// ========================================
// SCROLL ANIMATION
// ========================================

const cards =
  document.querySelectorAll(
    ".skill-card, .project-card"
  );


const observer =
  new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    {
      threshold: 0.15
    }
  );


cards.forEach(function (card) {

  card.style.opacity = "0";

  card.style.transform =
    "translateY(30px)";

  card.style.transition =
    "all 0.6s ease";

  observer.observe(card);

});