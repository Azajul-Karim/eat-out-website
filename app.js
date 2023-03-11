const backToTop = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", scrollBar);

function scrollBar() {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
