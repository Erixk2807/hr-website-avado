// this isn't currently being used

window.addEventListener("DOMContentLoaded", (event) => {
  const navbar = document.getElementById("header__navbar");
  const mainNav = document.getElementById("main-nav");

  // Callback to add or hide a dark background on the navbar based on scroll position: In the following function I'm using closure to store the lastScrollPosition, then using a IIFE to invoke the function immediately (prior to the first call from the scroll event handler)
  const addNavBgColor = (function () {
    let lastScrollPos = window.scrollY;

    return () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos)
      const navbarHeight = navbar.clientHeight;
      const isNavBarVisible = mainNav.classList.contains("main-nav--visible");

      if (!isNavBarVisible) {
        if (currentScrollPos > lastScrollPos) {
          if (currentScrollPos < navbarHeight) {
            navbar.classList.add("header__navbar--visible-scrolled");
          } else {
            navbar.classList.remove("header__navbar--visible-scrolled");
            navbar.classList.add("header__navbar--hide");
          }
          lastScrollPos = currentScrollPos;
        } else if (currentScrollPos < lastScrollPos && currentScrollPos > 1) {
          navbar.classList.add("header__navbar--visible-scrolled");
          lastScrollPos = currentScrollPos;
        } else {
          navbar.classList.remove("header__navbar--hide");
          navbar.classList.remove("header__navbar--visible-scrolled");
        }
      }
    };
  })();

  window.onscroll = addNavBgColor;
});
