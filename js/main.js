window.addEventListener("load", enviarMensaje);
var InputEnviarNuevoMensaje = document.getElementsByName("w-message-input")[0];
var contenedorMensajes = document.getElementById("chat");
var boton = document.getElementById("enviar");
var mensaje = document.getElementById("mensaje");
var usuarios = document.querySelectorAll(".w-recent-chats li")[1];
// var header =  document.querySelector(".w-chat-profile");
// var array = [document.querySelectorAll(".w-recent-chats li")[0], document.querySelectorAll(".w-recent-chats li")[1],document.querySelectorAll(".w-recent-chats li")[2],document.querySelectorAll(".w-recent-chats li")[3],document.querySelectorAll(".w-recent-chats li")[4]];
function enviarMensaje(){
	InputEnviarNuevoMensaje.addEventListener("keypress", function(){
		if(event.keyCode == 13){
			nuevoMensajeEnviado();
		}
	});
	usuarios.addEventListener("click", cambiarPerfil);
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
function cambiarPerfil(){
	var header =  document.querySelector(".w-chat-profile img");
	var h4 = document.querySelector(".w-chat-profile h4");
	var avatar = document.querySelectorAll(".w-recent-chats li .avatar img")[1];
	var avatarH4 = document.querySelectorAll(".w-recent-chats li .avatar h4")[1];
	header.setAttribute("src", "image/raymi.jpg");
}





	// array.addEventListener("click", function(){
	// 	for (var i = 0; i <= array.length; i++) {
	// 		array[i].addEventListener("click", function(){
	// 			header.style.backgroundColor = "yellow";
	// 		})
	// 	}
	// });
	// array[0,1,2,3].addEventListener("click", nuevaConversacion);
	// 	array[].addEventListener("click", function(){
	// 			header.style.backgroundColor = "yellow";
	// });
// function nuevaConversacion(){
// 	for (var i = 0; i <= array.length; i++) {
// 		array[i].addEventListener("click", function(){
// 			header.style.backgroundColor = "yellow";
// 		})
// 	}
// }
// function nuevaConversacion(){
// 	this.primerUsuario = document.querySelectorAll(".w-recent-chats li")[0];
// 	this.segundoUsuario = document.querySelectorAll(".w-recent-chats li")[1];
// 	this.tercerUsuario
// }
