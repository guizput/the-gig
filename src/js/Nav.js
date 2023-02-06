export default class {
  constructor(opts) {
    this.toggle = document.querySelectorAll(opts.toggle)[0];
    this.links = document.querySelectorAll(opts.links)[0];
    this.linksActiveClass = opts.linksActiveClass;
    this.toggleActiveClass = opts.toggleActiveClass;

    // Events
    this.toggle.addEventListener("click", (e) => {
      this.toggleNav(e);
    });
  }

  toggleNav(e) {
    e.preventDefault();
    e.target.classList.toggle(this.toggleActiveClass);
    this.links.classList.toggle(this.linksActiveClass);
  }
}
