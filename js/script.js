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




// Variables contenido marcas secundariass

const imagenesMarcas = [
  "img/marcas-secundarias/aguila.jpg",
  "img/marcas-secundarias/bon-o-bon.png",
  "img/marcas-secundarias/butter-toffees.jpg",
  "img/marcas-secundarias/chocolinas.png",
  "img/marcas-secundarias/salsati.jpg",
  "img/marcas-secundarias/mogul.jpg",
  "img/marcas-secundarias/rocklets.jpg",
  "img/marcas-secundarias/topline.png",
  "img/marcas-secundarias/cofler.jpg",
  "img/marcas-secundarias/bc.jpg",
  "img/marcas-secundarias/criollitas.jpg"
]

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
  const imagenesSecundarias = document.querySelectorAll('.marca-secundaria');
  const numerosAleatorios = [];

  for (let i = 0; i < imagenesSecundarias.length; i++) {
    let numeroAleatorio;

    do {
      numeroAleatorio = Math.floor(Math.random() * imagenesMarcas.length);
    } while (numerosAleatorios.includes(numeroAleatorio));

    numerosAleatorios.push(numeroAleatorio);
    imagenesSecundarias[i].src = imagenesMarcas[numeroAleatorio];
  }
  
  console.log(numerosAleatorios);
}






// Llamado funciones

setInterval(cambiarContendio, 8000);
// setInterval(cambiarMarcas, 2500);