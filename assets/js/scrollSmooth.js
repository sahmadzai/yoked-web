document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target },
        ease: "power2.inOut",
      });
    });
  });
});
