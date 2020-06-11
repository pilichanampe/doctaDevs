class WatchScreen extends HTMLElement {
  constructor() {
    super();
    loadTemplate("#watch-screen", this);
  }

  connectedCallback() {
    //this.shadowRoot.querySelector(".turning-border").style.animation = "rotate 1s infinite";
    
  }
}

window.customElements.define("watch-screen", WatchScreen);