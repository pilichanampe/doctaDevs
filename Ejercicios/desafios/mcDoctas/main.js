/*function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
  console.log(document.getElementById('number').value);
}*/

function calcularTotal() {
  const preciotomate = 15;
  const preciohuevo = 40;
  const precioqueso = 20;
  const preciomayonesa = 10;
  const preciomostaza = 10;
  const precioketchup = 10;
  const preciohamburguesa = 200;
  const tomate = document.querySelector(".tomate").value;
  const huevo = document.querySelector(".huevo").value;
  const queso = document.querySelector(".queso").value;
  const hamburguesas = document.querySelector(".hamburguesas").value;
  const mayonesa = document.querySelector(".mayonesa").checked;
  const ketchup = document.querySelector(".ketchup").checked;
  const mostaza = document.querySelector(".mostaza").checked;

  const totalTomate = preciotomate * tomate;
  const totalHuevo = preciohuevo * huevo;
  const totalQueso = precioqueso * queso;
  const totalHamburguesa = preciohamburguesa;
   
  let total = totalHamburguesa + totalTomate + totalHuevo + totalQueso;
  
  if (mayonesa) { 
    total += preciomayonesa;
  }
  
  if (mostaza) {
    total += preciomostaza;
  }
  
  if (ketchup) { 
    total += precioketchup;
  }

  const totalPedido = document.querySelector(".totalPedido");
  totalPedido.value = total * hamburguesas;
}

// Hago un cálculo del total con el estado inicial de la aplicación
// (esto es, por defecto 1 hamburguesa sin toppings ni aderezos.)
calcularTotal();

// Selecciono todos los campos que afecten al cálculo del total
// (en HTML, están marcados con el atributo "data-afectatotal").
const camposAfectaTotal = document.querySelectorAll("[data-afectatotal='true']");

// Por cada campo que afecte al cálculo del total...
for (let campo = 0; campo < camposAfectaTotal.length; campo += 1) {
  // ...voy a llamar a la función calcularTotal, cada vez
  // que el usuario haga un cambio en su selección.
  camposAfectaTotal[campo].addEventListener("change", calcularTotal);
}

// Agrego la clase "oculto" del elemento.
document.querySelector("body").classList.add("oculto");

// Quito la clase "oculto" del elemento.
document.querySelector("body").classList.remove("oculto");