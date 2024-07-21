const hamburger = document.querySelector(".hamburger");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});
