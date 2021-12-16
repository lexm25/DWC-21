window.addEventListener("load", iniciar);

function iniciar() {
    document.getElementById("enlace").addEventListener("mouseover", mouseOver);
    document.getElementById("enlace").addEventListener("mouseout", mouseOut);
}

function mouseOver() {
    document.getElementById("enlace").style.color = "lightblue";
}

function mouseOut() {
    document.getElementById("enlace").style.color = "blue";
}