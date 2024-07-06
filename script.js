document.addEventListener("DOMContentLoaded", () => {
  // Toggle sidebar
  const sideBar = document.querySelector(".side-bar");
  const toggleButton = document.querySelector(".side-bar-toggle");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      sideBar.classList.toggle("open");
    });
  }

  // Horizontal scroll functionality
  const horizontalScrollContainers =
    document.querySelectorAll(".horizontal-scroll");

  horizontalScrollContainers.forEach((container) => {
    const leftScroll = container.querySelector(".left-scroll");
    const rightScroll = container.querySelector(".right-scroll");
    const scrollableContent = container.querySelector(
      ".games-grid, .events-list, .promotions-list, .testimonials-list"
    );

    leftScroll.addEventListener("click", () => {
      scrollableContent.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightScroll.addEventListener("click", () => {
      scrollableContent.scrollBy({ left: 300, behavior: "smooth" });
    });
  });

  // Popup functionality
  const loginButton = document.querySelector(".login-button");
  const registerButton = document.querySelector(".register-button");
  const popupOverlay = document.querySelector(".popup-overlay");
  const loginPopup = document.getElementById("loginPopup");
  const registerPopup = document.getElementById("registerPopup");
  const closeButtons = document.querySelectorAll(".close");

  loginButton.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
    loginPopup.style.display = "block";
  });

  registerButton.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
    registerPopup.style.display = "block";
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      popupOverlay.style.display = "none";
      loginPopup.style.display = "none";
      registerPopup.style.display = "none";
    });
  });

  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
      loginPopup.style.display = "none";
      registerPopup.style.display = "none";
    }
  });
});
