


function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
  }
  
  function toggleMobileSubMenu() {
    const mobileSubMenu = document.querySelector('.mobile-sub-menu');
    mobileSubMenu.classList.toggle('mopen');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#hamburger-icon').addEventListener('click', function () {
        console.log('#Hamburger Clicked');
        toggleMobileMenu();
    });
  
    document.querySelector('#mobile-sub-menu-btn').addEventListener('click', function (event) {
      event.stopPropagation(); 
      toggleMobileSubMenu();
    });

  });
  

  const gallery = document.querySelector(".gallery");
  const fullscreenContainer = document.querySelector(".fullscreen-container");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const closeButton = document.getElementById("close-button");

  gallery.querySelectorAll(".image").forEach(image => {
      image.addEventListener("click", () => {
          const src = image.querySelector("img").getAttribute("src");
          fullscreenImage.setAttribute("src", src);
          fullscreenContainer.style.display = "flex"; 
          document.body.style.overflow = "hidden"; 
      });
  });

  closeButton.addEventListener("click", () => {
      fullscreenContainer.style.display = "none";
      document.body.style.overflow = "auto"; 
  });

  fullscreenContainer.addEventListener("click", (event) => {
      if (event.target === fullscreenContainer) {
          fullscreenContainer.style.display = "none";
          document.body.style.overflow = "auto";
      }
  });