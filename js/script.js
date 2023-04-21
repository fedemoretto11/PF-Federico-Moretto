// Variables del carrousel
const imagenCarrousel = document.getElementById("imagenCarrousel");
const tituloCarrousel = document.getElementById("tituloCarrousel");
const textoCarrousel = document.getElementById("textoCarrousel");
const carrousel = document.querySelector(".carrousel");

// Variables de las marcas Secundarias
const marcaSecundaria1 = document.getElementById("marcaSecundaria1");
const marcaSecundaria2 = document.getElementById("marcaSecundaria2");
const marcaSecundaria3 = document.getElementById("marcaSecundaria3");
const marcaSecundaria4 = document.getElementById("marcaSecundaria4");
const marcaSecundaria5 = document.getElementById("marcaSecundaria5");


// Funcion Carrousel

let contador = 0;

function cambiarContendio() {
  fetch('json/datosCarrousel.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    carrousel.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      contador++;
      if (contador >= data.length) {
        contador = 0;
      }
      imagenCarrousel.src = data[contador].imagen;
      imagenCarrousel.setAttribute("alt", data[contador].altImagen);
      tituloCarrousel.innerHTML = data[contador].titulo;
      textoCarrousel.innerHTML = data[contador].texto;
      carrousel.classList.remove("animate__fadeOutLeft");
      carrousel.classList.add("animate__fadeInRight");
      setTimeout(() => {
        carrousel.classList.remove("animate__fadeInRight");
      }, 1000)
    }, 1000)
  })
  .catch(error => console.error(error));
}

// Funcion cambio marcas

function cambiarMarcas() {
  fetch('json/datosMarcasSecundarias.json')
  .then(response => response.json())
  .then(data => {
    const imagenesSecundarias = document.querySelectorAll('.marca-secundaria');
    const numerosAleatorios = [];
    let numeroAleatorio;
    for (let i = 0; i < imagenesSecundarias.length; i++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * data.length);
      } while (numerosAleatorios.includes(numeroAleatorio));
      numerosAleatorios.push(numeroAleatorio);
      imagenesSecundarias[i].src = data[numeroAleatorio].url;
      imagenesSecundarias[i].setAttribute("alt", data[numeroAleatorio].alt);
      console.log(numerosAleatorios);
    }
  })
  .catch(error => console.error(error));
}

// Llamado funciones

setInterval(cambiarContendio, 8000);
setInterval(cambiarMarcas, 2000);