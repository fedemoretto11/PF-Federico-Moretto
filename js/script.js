const imagenCarrousel = document.getElementById("imagenCarrousel");
const tituloCarrousel = document.getElementById("tituloCarrousel");
const textoCarrousel = document.getElementById("textoCarrousel");

let contador = 0;

const imagenes = ["../img/productosAlimentos.jpg", "../img/productos.jpg", "../img/tokin2.jpg"];
const titulos = ["Prueba1", "Algun Titulo", "Prueba+"];
const textos = ["Esto es una prueba a ver si funciona 1", "Alguna breve descripcion que cuente lo que dice el titulo, pero cortita", "Otra descripcion para colocar"];


function cambiarContendio() {
  imagenCarrousel.classList.add("animate__fadeOutLeft");
  tituloCarrousel.classList.add("animate__fadeOutLeft");
  textoCarrousel.classList.add("animate__fadeOutLeft");
  setTimeout(() => {
    contador++;
    if (contador >= imagenes.length) {
      contador = 0;
    }
    imagenCarrousel.src = imagenes[contador];
    tituloCarrousel.innerHTML = titulos[contador];
    textoCarrousel.innerHTML = textos[contador];

    imagenCarrousel.classList.remove("animate__fadeOutLeft");
    tituloCarrousel.classList.remove("animate__fadeOutLeft");
    textoCarrousel.classList.remove("animate__fadeOutLeft");

    imagenCarrousel.classList.add("animate__fadeInRight");
    tituloCarrousel.classList.add("animate__fadeInRight");
    textoCarrousel.classList.add("animate__fadeInRight");
    setTimeout(() => {
      imagenCarrousel.classList.remove("animate__fadeInRight");
      tituloCarrousel.classList.remove("animate__fadeInRight");
      textoCarrousel.classList.remove("animate__fadeInRight");
    },1000)
  },1000)
}

setInterval(cambiarContendio, 7000);


