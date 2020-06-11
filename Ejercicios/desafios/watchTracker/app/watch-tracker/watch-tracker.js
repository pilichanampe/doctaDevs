class WatchTracker extends HTMLElement {
    constructor() {
      super();
      loadTemplate("#watch-tracker", this);
    }

    connectedCallback() {      
      this.updateTracker(100);
    }

    updateHeartbeat(frequency) {
      const beatInterval = 60/frequency;
      
      this.shadowRoot.querySelector("#heart").style.animation = `blink ${beatInterval.toString()}s infinite`;
      return beatInterval;
    }

    updateCalories() {

    }

    updateTracker(frequency) {
      this.shadowRoot.querySelector("#bpm").innerHTML = `${frequency}`;
      this.updateHeartbeat(frequency);
    }

   


}

window.customElements.define("watch-tracker", WatchTracker);

