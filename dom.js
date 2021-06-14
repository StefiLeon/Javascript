/*Presupuesto fotos*/
//Crear boton para presupuestar fotos
const botonPresupuesto = document.createElement("button");
botonPresupuesto.setAttribute("class", "btn btn-info btn-lg btn-block");
botonPresupuesto.innerText = "Presupuestá";
botonPresupuesto.style.marginBottom = "2em";
botonPresupuesto.addEventListener("click", activarOpciones);

//Nuevo boton
const nuevoBoton = document.createElement("button");
nuevoBoton.innerText = "Calcular presupuesto";
nuevoBoton.style.paddingBottom = "5px";
nuevoBoton.setAttribute("class", "btn btn-primary btn-block");

//Activar opciones desde el DOM
function activarOpciones() {
    botonPresupuesto.appendChild(tipoDePartido);
    botonPresupuesto.appendChild(cantidadDeJugadores);
    botonPresupuesto.appendChild(nuevoBoton);
    nuevoBoton.addEventListener("click", presupuestarFotos);
    botonPresupuesto.removeEventListener("click", activarOpciones);
}

document.getElementById("botonPresupuesto").appendChild(botonPresupuesto);

//Tipo de partido
const tipoDePartido = document.createElement("select");
tipoDePartido.setAttribute("class", "form-control");
const opcionAmistoso = document.createElement("option");
const opcionCampeonato = document.createElement("option");
opcionAmistoso.innerText = "Amistoso";
opcionCampeonato.innerText = "Campeonato";
tipoDePartido.appendChild(opcionAmistoso);
tipoDePartido.appendChild(opcionCampeonato);

//Cantidad de jugadores
const cantidadDeJugadores = document.createElement("select");
cantidadDeJugadores.setAttribute("class", "form-control");
const opcionFutbol5 = document.createElement("option");
const opcionFutbol7 = document.createElement("option");
const opcionFutbol11 = document.createElement("option");
opcionFutbol5.innerText = "Fútbol 5";
opcionFutbol7.innerText = "Fútbol 7";
opcionFutbol11.innerText = "Fútbol 11";
cantidadDeJugadores.appendChild(opcionFutbol5);
cantidadDeJugadores.appendChild(opcionFutbol7);
cantidadDeJugadores.appendChild(opcionFutbol11);

//Crear boton de impresion
const botonVideo = document.createElement("button");
botonVideo.setAttribute("class", "btn btn-info btn-lg btn-block");
botonVideo.innerText = "Presupuestá";
botonVideo.addEventListener("click", activarOpcionesVideo);

//Activar opciones desde el DOM
function activarOpcionesVideo() {
    botonVideo.appendChild(tipoDeImpresion);
    botonVideo.appendChild(cantidadDeFotos);
    const nuevoBotonV = document.createElement("button");
    nuevoBotonV.innerText = "Calcular presupuesto";
    nuevoBotonV.style.paddingBottom = "5px";
    nuevoBotonV.setAttribute("class", "btn btn-primary btn-block");
    botonVideo.appendChild(nuevoBotonV);
    nuevoBotonV.addEventListener("click", presupuestarImpresion);
    botonVideo.removeEventListener("click", activarOpcionesVideo);
}

document.getElementById("botonPresupuestoVideo").appendChild(botonVideo);

//Tipo de impresion
const tipoDeImpresion = document.createElement("select");
tipoDeImpresion.setAttribute("class", "form-control");
const opcionChica = document.createElement("option");
const opcionMediana = document.createElement("option");
const opcionGrande = document.createElement("option");
const opcionPoster = document.createElement("option");
opcionChica.innerText = "Fotos chicas 10x15";
opcionMediana.innerText = "Fotos medianas 15x20";
opcionGrande.innerText = "Fotos grande 20x30";
opcionPoster.innerText = "Poster 70x105";
tipoDeImpresion.appendChild(opcionChica);
tipoDeImpresion.appendChild(opcionMediana);
tipoDeImpresion.appendChild(opcionGrande);
tipoDeImpresion.appendChild(opcionPoster);

//Cantidad de fotos
const cantidadDeFotos = document.createElement("input");
cantidadDeFotos.setAttribute("class", "form-control");
cantidadDeFotos.placeholder = "Ingrese la cantidad de fotos a imprimir";
