/*var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu (){
    if (menu_visible==false) {
        menu.style.display = "block";
        menu_visible = true ;
    }

    else {
        menu.style.display = "none";
        menu_visible = false
    }
} 

let links = document.querySelectorAll ("nav a");
for (var x = 0; x <links.length;x++) {
    links [x].onclick = function ( ) {
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra (id_barra) {
    for (i=0;i<=16;i++) {
        let div = document.createElement ("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById ("html");
crearBarra (html);

let javascript = document.getElementById ("javascript");
crearBarra (javascript);

let php = document.getElementById ("php");
crearBarra (php);

let marketing = document.getElementById ("marketing");
crearBarra (marketing);

let diseño = document.getElementById ("diseño");
crearBarra (diseño);

let contadores = (-1,-1,-1,-1,-1,-1);

let entro =false;

function efectoHabilidades ( ) {
    var habilidades = document.getElementById ("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect ().top;
if (distancia_skills>=300 && entro==false) {
    entro=true;
    const intervalHtml = setInterval (function(){
        pintarBarra (javascript, 16,  0, intervalHtml
            ),100
    });
}
}

function pintarBarra (id_barra, cantidad, indice, interval) {
    contadores [indice]++;
    x = contadores [indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementByClassName ("e");
        elementos[x].style.backgroundColor = "5f9ea0";
    } else {
        clearInterval (interval)
    }
}

window.onscroll = function (){
    efectoHabilidades ();
}
*/




var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let php = document.getElementById("php");
crearBarra(php);
let marketing = document.getElementById("marketing");
crearBarra(marketing);
let diseño = document.getElementById("diseño");
crearBarra(diseño);


let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 11, 2, intervalPhp);
        },100);
        const intervalMarketing = setInterval(function(){
            pintarBarra(marketing, 15, 3, intervalMarketing);
        },100);
        const intervalDiseño = setInterval(function(){
            pintarBarra(diseño, 16, 4, intervalDiseño);
        },100);
     
    }
}


function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#2c4cb6";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}

