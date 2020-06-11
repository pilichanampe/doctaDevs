class WatchScreen extends HTMLElement {
    constructor() {
      super();
      loadTemplate("#watch-screen", this);
    }

    /*connectedCallback() {

    }*/
}

window.customElements.define("watch-screen", WatchScreen);