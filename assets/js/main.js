const hamburger = document.querySelector(".hamburger");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollDuration = 1000; // Duration in milliseconds

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / scrollDuration, 1);

          window.scrollTo(0, startPosition + targetPosition * progress);

          if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
          }
        }

        requestAnimationFrame(scrollAnimation);
      }
    });
  });
});
