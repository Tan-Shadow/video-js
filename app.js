const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("slide")) {
    e.currentTarget.classList.remove("slide");
    video.play();
  } else {
    e.currentTarget.classList.add("slide");
    video.pause();
  }
});

// hide preloader

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
