window.addEventListener("load", enviarMensaje);
var InputEnviarNuevoMensaje = document.getElementsByName("w-message-input")[0];
var contenedorMensajes = document.getElementById("chat");
var boton = document.getElementById("enviar");
var mensaje = document.getElementById("mensaje");
var header =  document.querySelector(".w-chat-profile");
var fotoPerfil = document.querySelector(".w-chat-profile img");
function enviarMensaje(){
	InputEnviarNuevoMensaje.addEventListener("keypress", function(){
		if(event.keyCode == 13){
			nuevoMensajeEnviado();
		}
	});
	var hijos = document.querySelectorAll(".w-recent-chats li .avatar");
	for (var i = 0; i< hijos.length; i++) {
				hijos[i].addEventListener("click", cambio);
	}
}

function nuevoMensajeEnviado(){
	var divWmessageOut = document.createElement("div");
	divWmessageOut.setAttribute("class", "w-message");
	divWmessageOut.classList.add("w-message-out");
	var divWmessageText = document.createElement("div");
	divWmessageOut.appendChild(divWmessageText);
	divWmessageText.setAttribute("class", "w-message-text");
	divWmessageText.style.wordWrap = "break-word";
	var textoMensaje = document.createElement("p");
	textoMensaje.innerText = InputEnviarNuevoMensaje.value;
	divWmessageText.appendChild(textoMensaje);
	contenedorMensajes.appendChild(divWmessageOut);
	mensaje.innerText = InputEnviarNuevoMensaje.value;
	var divTime = document.createElement("div");
	divTime.setAttribute("class", "time");
	var hora = new Date();
	if (hora.getMinutes() < 10) {
		divTime.innerText = hora.getHours() + ":0" + hora.getMinutes();
	}else{
		divTime.innerText = hora.getHours() + ":" + hora.getMinutes();
	}
	divWmessageText.appendChild(divTime);
	InputEnviarNuevoMensaje.value = "";
	return divWmessageOut;
}

function cambio(){
  var perfil = this.childNodes[1].getAttribute("src");
  fotoPerfil.setAttribute("src", perfil);
  var nombreUsuario = this.childNodes[3].textContent;
  var texto = document.querySelector(".w-chat-profile .w-contact-name");
  texto.textContent = nombreUsuario;
  var listaNombres =  document.querySelector(".w-chat-profile .w-users-messages");
  listaNombres.style.display = "none";
}
