class WatchScreen extends HTMLElement {
  constructor() {
    super();
    loadTemplate("#watch-screen", this);
  }

  connectedCallback() {
    //this.shadowRoot.querySelector(".turning-border").style.animation = "none";
    
  }
}

window.customElements.define("watch-screen", WatchScreen);