// Calcula el total del pedido. Esta función se llama cuando la persona
// modifica la cantidad de hamburguesas, los toppings o los aderezos.
// Como resultado, muestra en pantalla el total del pedido.
function calcularTotal() {
  const preciosProductos = {
    tomate: 15,
    huevo: 40,
    queso: 20,
    mayonesa: 10,
    mostaza: 10,
    ketchup: 10,
    hamburguesa: 200,
  };
  
  const tomate = document.querySelector(".tomate").value;
  const huevo = document.querySelector(".huevo").value;
  const queso = document.querySelector(".queso").value;
  const hamburguesas = document.querySelector("[data-hamburguesas]").value;
  const mayonesa = document.querySelector(".mayonesa").checked;
  const ketchup = document.querySelector(".ketchup").checked;
  const mostaza = document.querySelector(".mostaza").checked;

  const totalTomate = preciosProductos.tomate * tomate;
  const totalHuevo = preciosProductos.huevo * huevo;
  const totalQueso = preciosProductos.queso * queso;
  const totalHamburguesa = preciosProductos.hamburguesa;
   
  let total = totalHamburguesa + totalTomate + totalHuevo + totalQueso;
  
  if (mayonesa) { 
    total += preciosProductos.mayonesa;
  }
  
  if (mostaza) {
    total += preciosProductos.mostaza;
  }
  
  if (ketchup) { 
    total += preciosProductos.ketchup;
  }

  const totalPedido = document.querySelector(".totalPedido");
  totalPedido.value = total * hamburguesas;
}

// Incrementa en 1 la cantidad de hamburguesas del pedido actual
// y muestra la nueva cantidad en pantalla. Esta función se llama
// cuando la persona hace click sobre el botón "+".
function agregarHamburguesa() {
  cantidadHamburguesas += 1;
  actualizarConteoHamburguesas();
  calcularTotal();
}

// Incrementa en 1 la cantidad de hamburguesas del pedido actual
// y muestra la nueva cantidad en pantalla. Esta función se llama
// cuando la persona hace click sobre el botón "+".
function quitarHamburguesa() {
  if (cantidadHamburguesas <= 1) {
    return;
  }
  
  cantidadHamburguesas -= 1;
  actualizarConteoHamburguesas();  
  calcularTotal();
}

// Muestra en pantalla la cantidad de hamburguesas del pedido.
// Esta función se llama luego de cambiar la cantidad de hamburguesas
// del pedido.
function actualizarConteoHamburguesas() {
  // Accedo al campo numérico "Hamburguesas".
  const campoHamburguesas = document.querySelector("[data-hamburguesas]");
  
  // Asigno el valor de "cantidadHamburguesas" al campo
  // para que se vea en pantalla.
  campoHamburguesas.value = cantidadHamburguesas;  
}

// ////////////////////////////////////////////////////////////////////////////
// Todo este código se ejecuta apenas se carga la página, de aquí para abajo
// ////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// INICIALIZACIÓN DE LA PANTALLA

let cantidadHamburguesas = 1;

// Muestro en pantalla la cantidad inicial de hamburguesas del pedido (1).
actualizarConteoHamburguesas();

// Hago un cálculo del total con el estado inicial de la aplicación
// (esto es, por defecto 1 hamburguesa sin toppings ni aderezos.)
calcularTotal();

//
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// CONFIGURO EVENTO PARA CALCULAR TOTAL
// Este evento ocurre cuando la persona cambia algún topping o aderezo o
// la cantidad de hamburguesas de su pedido.

// Selecciono todos los campos que afecten al cálculo del total
// (en HTML, están marcados con el atributo "data-afectatotal").
const camposAfectaTotal = document.querySelectorAll("[data-afectatotal='true']");

// Por cada campo que afecte al cálculo del total...
for (let campo = 0; campo < camposAfectaTotal.length; campo += 1) {
  // ...voy a llamar a la función calcularTotal, cada vez
  // que el usuario haga un cambio en su selección.
  camposAfectaTotal[campo].addEventListener("change", calcularTotal);
}
//
///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// CONFIGURO EVENTO PARA AGREGAR Y QUITAR HAMBURGUESAS
// Este evento ocurre cuando la persona cambia la cantidad de hamburguesas de su pedido.

const botonAgregarHamburguesa = document.querySelector(".inc");
const botonQuitarHamburguesa = document.querySelector(".dec");

botonAgregarHamburguesa.addEventListener("click", agregarHamburguesa);
botonQuitarHamburguesa.addEventListener("click", quitarHamburguesa);

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// CONFIGURO EVENTO PARA IR AL SIGUIENTE PASO.
// Este evento ocurre cuando la persona hace click en el botón "Siguiente".

function ocultarSeccion(expresionCSS) {
  // Ocultamos una sección de la pantalla.
  const seccion = document.querySelector(expresionCSS);
  seccion.style.display = "none";
}

function mostrarSeccion(expresionCSS) {
  // Mostramos una sección de la pantalla.
  const seccion = document.querySelector(expresionCSS);
  seccion.style.display = "flex";
}

const botonPasoADatosCliente = document.querySelector(".pedido-container .boton-siguiente");

botonPasoADatosCliente.addEventListener("click", function () {
  ocultarSeccion(".pedido-container");
  mostrarSeccion(".datos-cliente");
});

const botonPasoADatosPago = document.querySelector(".datos-cliente .boton-siguiente");

botonPasoADatosPago.addEventListener("click", function () {
  ocultarSeccion(".datos-cliente");
  mostrarSeccion(".pago-select");
});

//
///////////////////////////////////////////////////////////////////////////////////

// Agregar botón "Atrás".

// Limpiar primera pantalla.

// Guardar selección de forma de pago.

// Al clickear en siguiente en "pago-select", mostrar la pantalla
// correspondiente según la forma de pago elegida.