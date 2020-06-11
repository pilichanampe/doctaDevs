class WatchTracker extends HTMLElement {
    constructor() {
      super();
      loadTemplate("#watch-tracker", this);
    }

    connectedCallback() {      
      this.updateTracker(60);      
    }

    //actualizo el ritmo cardíaco
    updateHeartbeat(frequency) {
      const beatInterval = 60/frequency;
      
      this.shadowRoot.querySelector("#heart").style.animation = `blink ${beatInterval.toString()}s infinite`;
      return beatInterval;
    }

    //actualizo las calorías
    updateCalories(frequency) {
      //let sex = 'female';
      let age = 31;
      let weight = 63;
      let  averageHR = frequency;
      let exerciseTime = 45;/*length of exercise in minutes*/
      
      //Calculo las calorías quemadas y redondeo el resultado
      this.burntCalories = Math.round((0.4472 * averageHR - 0.05741 * weight + 0.074 * age - 20.4022) * exerciseTime / 4.184);
      //Agrego el resultado de calorías quemadas al HTML.
      this.shadowRoot.querySelector("#calories").innerHTML = `${this.burntCalories} KCAL`
    }

    //actualizo el rastreador del reloj
    updateTracker(frequency) {
      this.shadowRoot.querySelector("#bpm").innerHTML = `${frequency}`;
      this.updateHeartbeat(frequency);
      this.updateCalories(frequency);
    }
}

window.customElements.define("watch-tracker", WatchTracker);

