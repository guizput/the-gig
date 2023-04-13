// =======================================================
// NAV 
// =======================================================
(function nav(){

  // Variables
  const NAV = {
    toggle: document.querySelectorAll(".nav__toggle")[0],
    links: document.querySelectorAll(".nav__links")[0],
    linksActiveClass: "nav__links--active",
    toggleActiveClass: "nav__toggle--active",
  };

  // Functions
  function toggleNav(e) {
    e.preventDefault();
    e.target.classList.toggle(NAV.toggleActiveClass);
    NAV.links.classList.toggle(NAV.linksActiveClass);
  }

  // Handlers
  NAV.toggle.addEventListener("click", function(e) {
    toggleNav(e);
  });

})();
// =======================================================