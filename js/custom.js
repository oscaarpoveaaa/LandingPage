"use strict";

function capturar() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  comprobarNombre(nombre);
  comprobarEmail(email);
  comprobarMotivo(mensaje);

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
function comprobarMotivo(mensaje) {
  if (mensaje == "") {
    alert("El campo mensaje no puede estar vacio");
  } else if (mensaje.length > 30) {
    alert("El campo mensaje no puede superar los 30 caracteres");
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

/* JQUERY PARA EL FORMULARIO */

/* AL AÑADIR TEXTO EN EL LABEL SE PONE DE COLOR NARANJA Y EN  NEGRITA */
$(document).ready(function(){
	$("#nombre").keydown(function(){
        $("#textoNombre").css("color","orange");
        $("#textoNombre").css("font-weight","bold");
    });
	$("#mensaje").keydown(function(){
        $("#textoMensaje").css("color","orange");
        $("#textoMensaje").css("font-weight","bold");
    });
	$("#email").keydown(function(){
        $("#textoEmail").css("color","orange");
        $("#textoEmail").css("font-weight","bold");
    });




});	

  
