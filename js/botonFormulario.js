const files = document.querySelectorAll(".fileInput");

Array.from(files).forEach(
  f => {
    f.addEventListener('change', e => {
      const span = document.querySelector(".fileInput_name > span");
      if (files.length == 0) {
        span.innerHTML = "Ningun archivo seleccionado"  
      } else {
        span.innerHTML = f.files[0].name;
      }
    })
  }
);