class WatchTime extends HTMLElement {
  constructor() {
    super();
    loadTemplate("#watch-time", this);
    /*this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.colon = this.shadowRoot.getElementById("colon");
    this.blink(this.colon);
    this.loadTime();*/
    

  }

  connectedCallback() {
    this.colon = this.shadowRoot.querySelectorAll(".colon");   //querySelectorAll devuelve un array, por lo que hay que leerlo como una lista con un forEach, si no, no funca.  
    
    this.blinkAll(this.colon);
    this.loadTime();
    this.updateTime();
    this.shadowRoot.querySelector("#second")
  }  

  loadTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    this.shadowRoot.querySelector("#hour").innerText = this.addZero(hour);
    this.shadowRoot.querySelector("#minute").innerText = this.addZero(minute);
    this.shadowRoot.querySelector("#second").innerText = this.addZero(second);    

   /* setTimeout(() => {      
      this.loadTime();    
    }, 1000);  */  
  }

  updateTime() {
    setInterval(() => {      
      this.loadTime();    
    }, 1000);
  }

  blinkAll(selectors) {
    selectors.forEach(element => element.style.animation = "blink 1s infinite");
  }

  /*blink(element) {
    element.style.animation = "blink 1s infinite";
  }*/

  addZero(number) {
    if (number < 10) {
      return "0" + number;
    }
    else {
      return number;
    }
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