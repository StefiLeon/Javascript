//Definir variables
const iva = 1.21;

//SESIÓN FOTOS PARTIDO
const amistoso = 3000;
const campeonato = 5000;

//Crear boton
const botonPresupuesto = document.createElement("button");
botonPresupuesto.setAttribute("class", "btn btn-info btn-lg btn-block");
botonPresupuesto.innerText = "Presupuestá";
botonPresupuesto.addEventListener("click", activarOpciones);

//Activar opciones desde el DOM
function activarOpciones() {
    botonPresupuesto.appendChild(tipoDePartido);
    botonPresupuesto.appendChild(cantidadDeJugadores);
    const nuevoBoton = document.createElement("button");
    nuevoBoton.innerText = "Calcular presupuesto";
    nuevoBoton.style.paddingBottom = "5px";
    nuevoBoton.setAttribute("class", "btn btn-primary btn-block");
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

//Funcion para presupuestar fotos
function presupuestarFotos() {
    let presupuestoFotos = 0;
    if (opcionAmistoso.selected) {
        presupuestoFotos = 3000;
    } else if (opcionCampeonato.selected) {
        presupuestoFotos = 5000;
    } else {
        alert("Valor erróneo");
    }
    if (opcionFutbol11.selected) {
        presupuestoFotos = presupuestoFotos * 1.8;
    } else if (opcionFutbol7.selected) {
        presupuestoFotos = presupuestoFotos * 1.5;
    } else if (opcionFutbol5.selected) {
        presupuestoFotos = presupuestoFotos / 1.0;
    } else {
        alert("Valor erróneo");
    }
    alert("El presupuesto con edición incluida es de $" + presupuestoFotos);
}

//IMPRESION DE FOTOS

//COSTOS DE IMPRESION
const fotoChica = 100;
const fotoMediana = 115;
const fotoGrande = 200;
const poster = 1500;

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

//Funcion para presupuestar impresiones
function presupuestarImpresion() {
    let presupuestoImpresion = 0;
    if (opcionChica.selected) {
        presupuestoImpresion = (fotoChica.value * iva);
    } else if (opcionMediana.selected) {
        presupuestoImpresion = (fotoMediana.value * iva);
    } else if (opcionGrande.selected) {
        presupuestoImpresion = (fotoGrande.value * iva)
    } else if (opcionPoster.selected) {
        presupuestoImpresion = (poster.value * iva);
    } else {
        alert("Valor erróneo");
    }
    alert("El presupuesto para " + cantidadDeFotos.value + " fotos es de $" + (presupuestoImpresion*cantidadDeFotos.value));
}