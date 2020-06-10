class WatchTracker extends HTMLElement {
    constructor() {
      super();
      loadTemplate("#watch-tracker", this);
    }
}

window.customElements.define("watch-tracker", WatchTracker);