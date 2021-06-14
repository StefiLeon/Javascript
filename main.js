//Definir variables
const iva = 1.21;

//SESIÓN FOTOS PARTIDO
const amistoso = 3000;
const campeonato = 5000;
let presupuestoFotos = 0;
let contadorFotos = 0;

/*Presupuesto impresiones*/
//COSTOS DE IMPRESION
const fotoChica = 100;
const fotoMediana = 115;
const fotoGrande = 200;
const poster = 1500;
let presupuestoImpresion = 0;
let contadorImpresion = 0;

//Funcion para presupuestar fotos
function presupuestarFotos() {
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
    const presupuestoTotalFotos = document.createElement('p');
    const botonDeCompraFotos = document.createElement("button");
    presupuestoTotalFotos.id = "presupuestoTotalFoto";
    presupuestoTotalFotos.innerHTML = "El presupuesto total es de $" + presupuestoFotos;
    presupuestoTotalFotos.style.paddingTop = "15px";
    presupuestoTotalFotos.style.color = "white";
    presupuestoTotalFotos.style.fontSize = "large";
    botonDeCompraFotos.id = "botonDeCompraFotos";
    botonDeCompraFotos.innerHTML = "Comprar";
    botonDeCompraFotos.setAttribute("class", "btn btn-light btn-block");
    botonDeCompraFotos.addEventListener("click", guardarEnCarritoFotos);
    if(contadorFotos>0) {
        document.getElementById("presupuestoTotalFoto").innerHTML = "El precio total es de $" + presupuestoFotos;
        document.getElementById("botonDeCompraFotos").innerHTML = "Comprar";
        botonDeCompraFotos.addEventListener("click", guardarEnCarritoFotos);
        return;
    }
    contadorFotos++;
    botonPresupuesto.appendChild(presupuestoTotalFotos);
    botonPresupuesto.appendChild(botonDeCompraFotos);
    return presupuestoFotos;
}

//Funcion para presupuestar impresiones
function presupuestarImpresion() {
    if (opcionChica.selected) {
        presupuestoImpresion = (fotoChica * iva);
    } else if (opcionMediana.selected) {
        presupuestoImpresion = (fotoMediana * iva);
    } else if (opcionGrande.selected) {
        presupuestoImpresion = (fotoGrande * iva)
    } else if (opcionPoster.selected) {
        presupuestoImpresion = (poster * iva);
    } else {
        alert("Valor erróneo");
    }
    const presupuestoTotalImpresion = document.createElement('p');
    const botonDeCompraImpresion = document.createElement("button");
    presupuestoTotalImpresion.id = "presupuestoTotalImpresion";
    presupuestoTotalImpresion.innerHTML = "El presupuesto total es de $" + (presupuestoImpresion*cantidadDeFotos.value);
    presupuestoTotalImpresion.style.paddingTop = "15px";
    presupuestoTotalImpresion.style.color = "white";
    presupuestoTotalImpresion.style.fontSize = "large";
    botonDeCompraImpresion.id = "botonDeCompraImpresion";
    botonDeCompraImpresion.innerHTML = "Comprar";
    botonDeCompraImpresion.setAttribute("class", "btn btn-light btn-block");
    botonDeCompraImpresion.addEventListener("click", guardarEnCarritoImpresion);
    if(contadorImpresion>0) {
        document.getElementById("presupuestoTotalImpresion").innerHTML = "El precio total es de $" + (presupuestoImpresion*cantidadDeFotos.value);
        document.getElementById("botonDeCompraImpresion").innerHTML = "Comprar";
        botonDeCompraImpresion.addEventListener("click", guardarEnCarritoImpresion);
        return;
    }
    contadorImpresion++;
    botonVideo.appendChild(presupuestoTotalImpresion);
    botonVideo.appendChild(botonDeCompraImpresion);
    return presupuestoImpresion;
}

//Funcion para guardar en carrito
function guardarEnCarritoFotos() {
    localStorage.setItem('compraFotos', parseInt(presupuestoFotos));
    console.log("Valor de sesión de fotos: $" + localStorage.getItem('compraFotos'));
}

function guardarEnCarritoImpresion() {
    localStorage.setItem('compraImpresion', parseInt(presupuestoImpresion*cantidadDeFotos.value));
    console.log("Valor de impresion: $" + localStorage.getItem('compraImpresion'));
}