window.addEventListener("load", iniciar);

function iniciar() {
	document.getElementById("enviar").addEventListener("click", comprobar);
}
function comprobar(){
	var codigo = document.getElementById("codigo").value;
	var patron = /^[A-Z]{3}-\d{1,5}$/;
	var formulario = document.getElementById("formulario");
	var div = document.getElementById("error");
	if (patron.test(codigo)) {
		div.textContent="";
		sessionStorage.setItem('codigo', codigo);
	}
	else {
		if(div.textContent=="Código incorrecto"){

		}
		else{
			var txt = document.createTextNode("Código incorrecto");
			div.appendChild(txt);
		}
	}
}


