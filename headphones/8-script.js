document.addEventListener("DOMContentLoaded", function () {
  // 1. Select the necessary elements (Task 8, Step 7)
  // The button/icon that the user clicks
  const hamburgerBtn = document.getElementById("hamburger-icon");

  // The container holding the navigation links we want to show/hide
  const menuContainer = document.getElementById("menu-links-container");

  // 2. Define the toggle function (Task 8, Step 8)
  function toggleMenu() {
    // Toggle the 'menu-open' class on the hamburger button.
    // This triggers the CSS animation to change the lines to an 'X'.
    hamburgerBtn.classList.toggle("menu-open");

    // Toggle the display of the menu links container.
    // We use JavaScript to change the display property from 'none' to 'block' (or flex).
    if (
      menuContainer.style.display === "block" ||
      menuContainer.style.display === ""
    ) {
      // If it's visible or has no inline style, hide it
      menuContainer.style.display = "none";
    } else {
      // Otherwise, show it as a block element (which CSS will style as a full-width dropdown)
      menuContainer.style.display = "block";
    }
  }

  // 3. Attach the event listener (Task 8, Step 9)
  // When the hamburger button is clicked, run the toggleMenu function
  hamburgerBtn.addEventListener("click", toggleMenu);

  /* OPTIONAL: Close menu when a link is clicked (improves mobile user experience) 
    Since the menu links are anchor tags that navigate the page, 
    we should close the menu after the user clicks one.
    */
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Check if the menu is currently open (on mobile sizes)
      if (menuContainer.style.display === "block") {
        toggleMenu(); // Call the toggle function to close it
      }
    });
  });
});
