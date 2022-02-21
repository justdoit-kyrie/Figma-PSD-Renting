const headerNav = document.querySelector(".header-nav");
const toogleBtn = document.querySelector(".header-toggle");
const slides = document.querySelectorAll(
  ".header-main-content-bottom-progress-number span"
);
const bar = document.querySelector(
  ".header-main-content-bottom-progress-bar span"
);
const contactList = document.querySelector(".contact-list");
const contactInput = document.querySelector(".contact-input");

// show navigation
toogleBtn.addEventListener("click", () => {
  headerNav.classList.add("open");
});

// hide navigation
document.addEventListener("click", (e) => {
  if (
    e.target.closest(".header-nav") ||
    e.target.classList.contains("header-toggle")
  )
    return;
  headerNav.classList.remove("open");
});

slides.forEach((slide, index) => {
  slide.addEventListener("click", (e) => {
    // remove active class from all slides
    const prev = document.querySelector(
      ".header-main-content-bottom-progress-number span.active"
    );
    prev.classList.remove("active");

    // add active class for current slide
    e.target.classList.add("active");

    // change position of progress bar
    bar.style.left = `${(index * 100) / slides.length}%`;
  });
});

contactInput.addEventListener("focus", (e) => {
  const contactForm = e.target.closest(".contact-form");
  contactForm.classList.add("focus");
});

contactInput.addEventListener("blur", (e) => {
  const contactForm = e.target.closest(".contact-form");
  contactForm.classList.remove("focus");
});

// scroll a half of the width
contactList.scrollLeft = 330 / 2;
