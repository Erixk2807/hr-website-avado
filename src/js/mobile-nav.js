import mediaQ from "./media-query";

window.addEventListener("DOMContentLoaded", () => {
  const burgerBtns = document.querySelectorAll(".js-burger-btn");
  const mainNav = document.querySelectorAll(".js-main-nav");

  burgerBtns.forEach((btn, i) => {
    toggleTabIndex(i);
    btn.onclick = showNavMenu;
  });

  window.onresize = closeMobileMenu;

  // calling function to add tabindex="-1" if loaded on mobile view where menu is hidden

  // this manages the state of tabindex on menu links (tab index needs to be -1 when mobile menu is hidden so that it cannot be tabbed, however it needs to be tabable when menu is visible)
  function toggleTabIndex(index) {
    const isNavVisible = mainNav[index].classList.contains("main-nav_container--visible");
    if (!mediaQ("tabletL")) {
      if (isNavVisible) {
        addLinksTabIndex(index);
      } else {
        removeLinksTabIndex(index);
      }
    } else {
      addLinksTabIndex(index);
    }
  }

  // Makes main-nav visible when burger button is clicked on mobile view
  function showNavMenu() {
    this.classList.toggle("burger-btn--open");
    const index = Array.from(burgerBtns).findIndex((btn, i) => btn === this);
    mainNav[index].classList.toggle("main-nav_container--visible");
    setAriaExpandedOnBtn(index);
    toggleTabIndex(index);
  }

  // sets tabindex to -1 to prevent links from being tabable
  function removeLinksTabIndex(index) {
    const menuLinks = mainNav[index].querySelectorAll(".main-nav__link");
    menuLinks.forEach((link) => {
      link.setAttribute("tabindex", "-1");
      link.setAttribute("aria-hidden", "true");
    });
  }

  // sets tabindex to 0 to make links tabable.
  function addLinksTabIndex(index) {
    const menuLinks = mainNav[index].querySelectorAll(".main-nav__link");
    menuLinks.forEach((link) => {
      link.setAttribute("tabindex", "0");
      link.removeAttribute("aria-hidden");
    });
  }

  // Incase main-nav is open when viewport is resized, it removes all classes which make mobile menu visible if custom media query function returns.
  function closeMobileMenu() {
    for (let i = 0; i < burgerBtns.length; i++) {
      if (mediaQ("tabletL")) {
        burgerBtns[i].classList.remove("burger-btn--open");
        mainNav[i].classList.remove("main-nav_container--visible");
        setAriaExpandedOnBtn(i);
      }
      toggleTabIndex(i);
    }
  }

  // this sets the value for aria-expanded in order to let screen readers know if the menu has openned or not.
  function setAriaExpandedOnBtn(index) {
    const isNavVisible = mainNav[index].classList.contains("main-nav_container--visible");
    if (isNavVisible) {
      burgerBtns[index].setAttribute("aria-expanded", true);
    } else {
      burgerBtns[index].setAttribute("aria-expanded", false);
    }
  }
});
