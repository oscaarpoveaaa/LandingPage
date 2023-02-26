"use strict";

function capturar() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let motivo = document.getElementById("motivo").value;
  let telefono = document.getElementById("telefono").value;

  comprobarNombre(nombre);
  comprobarMotivo(motivo);
  comprobarEmail(email);
  comprobarTelefono(telefono);
}
function comprobarNombre(nombre) {
  if (nombre == "") {
    alert("El campo nombre no puede estar vacio");
  }
}
function comprobarEmail(email) {
  if (
    !/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(
      email
    )
  ) {
    alert("La dirección de email " + email + " es incorrecta.");
  }
}
function comprobarMotivo(motivo) {
  if (motivo == "") {
    alert("El campo motivo no puede estar vacio");
  } else if (motivo.length > 30) {
    alert("El campo motivo no puede superar los 30 caracteres");
  }
}
function comprobarTelefono(telefono) {
  if (isNaN(telefono) == true || telefono == "") {
    alert("Introduce un teléfono válido");
  }
}

function mostrar(id) {
  if (document.getElementById) {
    let div = document.getElementById(id);
    div.style.display = "block";
  }
}

function ocultar(id) {
    if (document.getElementById) {
      let div = document.getElementById(id);
      div.style.display = "none";
    }
  }
