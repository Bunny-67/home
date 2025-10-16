/* =========================================================
   NAVIGATION INTERACTIONS
   ========================================================= */

// Toggle main mobile menu
function toggleMobileMenu() {
  const hamburger = document.getElementById("hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
}

// Toggle mobile submenu (Projects)
function toggleMobileSubMenu(btn) {
  const subMenu = btn.querySelector(".mobile-sub-menu");
  subMenu.classList.toggle("mopen");
}



/* =========================================================
   SCROLL FADE-IN EFFECT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,  // triggers when 20% of the element is visible
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeElements.forEach((el) => {
    appearOnScroll.observe(el);
  });
});


/* =========================================================
   Dynamic Gradient Mouse Effect
   ========================================================= */


    let currentX = 50;
    let currentY = 50;
    let currentAngle1 = 120;
    let currentAngle2 = 240;

    // Smoothly interpolate the effect
    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    document.addEventListener("mousemove", (event) => {
      const targetX = (event.clientX / window.innerWidth) * 100;
      const targetY = (event.clientY / window.innerHeight) * 100;

      // Calculate target angles for fluid response
      const targetAngle1 = 120 + (targetX - 50) * 0.6 + (targetY - 50) * 0.3;
      const targetAngle2 = 240 - (targetX - 50) * 1.2 - (targetY - 50) * 0.6;

      // Smooth interpolation for both position and angles
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);
      currentAngle1 = lerp(currentAngle1, targetAngle1, 0.1);
      currentAngle2 = lerp(currentAngle2, targetAngle2, 0.1);

      // Update CSS variables
      document.documentElement.style.setProperty("--x", `${currentX}%`);
      document.documentElement.style.setProperty("--y", `${currentY}%`);
      document.documentElement.style.setProperty("--angle1", `${currentAngle1}deg`);
      document.documentElement.style.setProperty("--angle2", `${currentAngle2}deg`);
    });

