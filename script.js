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
      dropdownContent.classList.add("show");
    });

    button.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!dropdownContent.matches(":hover")) {
          dropdownContent.classList.remove("show");
        }
      }, 300); // Adjust the delay as needed
    });

    dropdownContent.addEventListener("mouseenter", () => {
      dropdownContent.classList.add("show");
    });

    dropdownContent.addEventListener("mouseleave", () => {
      dropdownContent.classList.remove("show");
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

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      popupOverlay.style.display = "flex";
      loginPopup.style.display = "block";
      registerPopup.style.display = "none"; // Ensure only one popup is shown
    });
  }

  if (registerButton) {
    registerButton.addEventListener("click", () => {
      popupOverlay.style.display = "flex";
      registerPopup.style.display = "block";
      loginPopup.style.display = "none"; // Ensure only one popup is shown
    });
  }

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      popupOverlay.style.display = "none";
      loginPopup.style.display = "none";
      registerPopup.style.display = "none";
    });
  });

  if (popupOverlay) {
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
        loginPopup.style.display = "none";
        registerPopup.style.display = "none";
      }
    });
  }

  // Profile popup menu
  const profileButton = document.querySelector(".profile-button");
  const popupMenu = document.getElementById("popupMenu");

  if (profileButton && popupMenu) {
    profileButton.addEventListener("click", () => {
      togglePopup();
    });

    function positionPopupMenu() {
      const rect = profileButton.getBoundingClientRect();
      const buttonHeight = profileButton.offsetHeight;

      popupMenu.style.top = rect.top + buttonHeight + 10 + "px";
      popupMenu.style.left = rect.left + "px";
    }

    function togglePopup() {
      if (
        popupMenu.style.display === "none" ||
        popupMenu.style.display === ""
      ) {
        positionPopupMenu(); // Position the popup menu
        popupMenu.style.display = "block";
      } else {
        popupMenu.style.display = "none";
      }
    }

    window.addEventListener("click", (event) => {
      if (!event.target.matches(".profile-button, .profile-button *")) {
        if (popupMenu.style.display === "block") {
          popupMenu.style.display = "none";
        }
      }
    });

    window.addEventListener("resize", () => {
      if (popupMenu.style.display === "block") {
        positionPopupMenu();
      }
    });
  }
});
