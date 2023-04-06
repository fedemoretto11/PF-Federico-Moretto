const imagenCarrousel = document.getElementById("imagenCarrousel");
const tituloCarrousel = document.getElementById("tituloCarrousel");
const textoCarrousel = document.getElementById("textoCarrousel");
const carrousel = document.querySelector(".carrousel");

let contador = 0;

const imagenes = [
  "img/productosAlimentos.jpg", 
  "img/productos.jpg", 
  "img/tokin2.jpg"
];

const titulos = [
  "Prueba1", 
  "Algun Titulo", 
  "Prueba+"
];

const textos = [
  "Esto es una prueba a ver si funciona 1", 
  "Alguna breve descripcion que cuente lo que dice el titulo, pero cortita", 
  "Otra descripcion para colocar"
];

function cambiarContendio() {
  carrousel.classList.add("animate__fadeOutLeft");
  setTimeout(() => {
    contador++;
    if (contador >= imagenes.length) {
      contador = 0;
    }
    imagenCarrousel.src = imagenes[contador];
    tituloCarrousel.innerHTML = titulos[contador];
    textoCarrousel.innerHTML = textos[contador];

    carrousel.classList.remove("animate__fadeOutLeft");

    carrousel.classList.add("animate__fadeInRight");
    setTimeout(() => {
      carrousel.classList.remove("animate__fadeInRight");
    },1000)
  },1000)
}
setInterval(cambiarContendio, 8000);


