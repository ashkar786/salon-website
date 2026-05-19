(function () {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const bookForm = document.getElementById("bookForm");
  const formNote = document.getElementById("formNote");

  // Sticky header on scroll
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 60);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach(function (el) {
    observer.observe(el);
  });

  // Booking form (demo — shows success message)
  if (bookForm) {
    bookForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formNote.textContent =
        "Thank you! We'll contact you shortly to confirm your appointment.";
      formNote.classList.add("success");
      bookForm.reset();
      setTimeout(function () {
        formNote.textContent = "";
        formNote.classList.remove("success");
      }, 6000);
    });
  }
})();
