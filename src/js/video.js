window.addEventListener("DOMContentLoaded", (event) => {
  const video = document.getElementById("video");
  const videoBtn = document.getElementById("video-btn");

  // Adds an event listener to start and pause video playback on click (required because default controls are set to hidden)
  video.addEventListener("click", function () {
    if (video.paused) {
      this.play();
      videoBtn.classList.add("video__btn--hide");
    } else {
      this.pause();
      videoBtn.classList.remove("video__btn--hide");
    }
  });
});
