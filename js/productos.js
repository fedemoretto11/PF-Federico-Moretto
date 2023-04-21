function cambiarMarcas() {
  fetch('../json/datosMarcasSecundarias.json')
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
      // console.log(numerosAleatorios);
    }
  })
  .catch(error => console.error(error));
}



setInterval(cambiarMarcas, 2500);