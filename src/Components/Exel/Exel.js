export class Exel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement("div");
    // console.log(this.components);

    this.components.forEach((Component) => {
      const component = new Component();
      $root.insertAdjacentHTML("beforeend", component.toHTML());
    });
    return $root;
  }

  render() {
    // console.log(this.$el);
    // afterbegin afterend, beforeend, beforebegin
    // this.$el.insertAdjacentHTML("afterbegin", `<h1>TEST</h1>`);

    this.$el.append(this.getRoot());
  }
}
