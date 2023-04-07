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


// Variables contenido Carrousel
let contador = 0;
const imagenes = [
  "img/productos.jpg", 
  "img/productosAlimentos.jpg", 
  "img/tokin2.jpg",
  "img/sales.jpg",
  "img/salsati.jpg",
  "img/filosofia.jpg"
];
const titulos = [
  "Algun Titulo", 
  "Mision", 
  "Vision",
  "VALORES: LOS CLIENTES",
  "VALORES: EL PERSONAL",
  "VALORES: LA COMUNIDAD"
];
const textos = [
  "Alguna breve descripcion que cuente lo que dice el titulo, pero cortita", 
  "Visitar todas la bocas de expendio minoristas, logrando una efectividad de atencion del 95%",
  "Ser el proveedor preferido en servicio de comercializacion y distribucion de productos de consumo masivo de la zona",
  "Lograr la plena satisfacción de los mismos. Los principales objetivos de la organización hacia sus clientes son: cercanía, calidez, responsabilidad, respeto, servicio y comunicación",
  "Conservar un vínculo armónico y estable en un marco de tolerancia, estabilidad, crecimiento, compromiso, respeto, reconocimiento, incentivo y comunicación constante. Son los principales pilares que la empresa sostiene con su personal, ya que se cuida mucho los Recursos Humanos",
  "Seguir ayudando a los miembros de la comunidad con solidaridad y amor"
];

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
setInterval(cambiarMarcas, 2500);

