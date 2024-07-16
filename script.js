document.addEventListener("DOMContentLoaded", () => {
  // Toggle sidebar
  const sideBar = document.querySelector(".side-bar");
  const toggleButton = document.querySelector(".side-bar-toggle");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      sideBar.classList.toggle("open");
    });
  }

  // Dropdown functionality on hover
  document.querySelectorAll(".dropdown-button").forEach((button) => {
    const dropdownContent = button.nextElementSibling;

    button.addEventListener("mouseenter", () => {
      dropdownContent.style.display = "flex";
    });

    button.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!dropdownContent.matches(":hover")) {
          dropdownContent.style.display = "none";
        }
      }, 300);
    });

    dropdownContent.addEventListener("mouseleave", () => {
      dropdownContent.style.display = "none";
    });

    dropdownContent.addEventListener("mouseenter", () => {
      dropdownContent.style.display = "flex";
    });
  });

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

// profile popup
document.addEventListener("DOMContentLoaded", () => {
  function positionPopupMenu() {
    const profileButton = document.querySelector(".profile-button");
    const popupMenu = document.getElementById("popupMenu");

    const rect = profileButton.getBoundingClientRect();
    const buttonHeight = profileButton.offsetHeight;

    popupMenu.style.top = rect.top + buttonHeight + 10 + "px";
    popupMenu.style.left = rect.left + "px";
  }

  const profileButton = document.querySelector(".profile-button");
  profileButton.addEventListener("click", () => {
    togglePopup();
  });

  function togglePopup() {
    const popupMenu = document.getElementById("popupMenu");
    if (popupMenu.style.display === "none" || popupMenu.style.display === "") {
      positionPopupMenu(); // Position the popup menu
      popupMenu.style.display = "block";
    } else {
      popupMenu.style.display = "none";
    }
  }

  window.onclick = function (event) {
    const popupMenu = document.getElementById("popupMenu");
    if (!event.target.matches(".profile-button, .profile-button *")) {
      if (popupMenu.style.display === "block") {
        popupMenu.style.display = "none";
      }
    }
  };

  window.onresize = function () {
    if (popupMenu.style.display === "block") {
      positionPopupMenu();
    }
  };
});
