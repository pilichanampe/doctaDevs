class WatchTime extends HTMLElement {
    constructor() {
      super();
      loadTemplate("#watch-time", this);

      this.date = new Date();
      this.hour = date.getHours();
      this.minute = date.getMinute();
      this.second = date.getSeconds();

    }
  
    connectedCallback() {
        this.colon = this.shadowRoot.querySelector("#colon");
        this.blink(this.colon);
        this.showTime();
        }
    
    
    completeTime(number) {
      if (number < 10) {
        return "0" + number;
      }
      else {
        return number;
      }
    }

    showTime() {}

    blink(element) {
        this.shadowRoot.querySelector(element).style.animation = "blink 1s infinite";
    }
}

window.customElements.define("watch-time", WatchTime);












/*function currentTime() {
    const date = new Date(); /* creating object of Date class 
    let hour = date.getHours();
    let min = date.getMinutes();
    var sec = date.getSeconds();
    const colon = document.querySelector("#colon");  
    
    hour = updateTime(hour);
    min = updateTime(min);
  
    const blinkColon = colon.style.animation = "blink 1s infinite";
    
    document.querySelector("#hour").innerText = hour;  
    document.querySelector("#minute").innerText = min;
    
    var t = setTimeout(function(){            
              currentTime();             
      }, 1000); /* setting timer 
  }
  
  function updateTime(number) {
    if (number < 10) {
      return "0" + number;
    }
    else {
      return number;
    }
  }
  
  currentTime(); // calling currentTime() function to initiate the process */