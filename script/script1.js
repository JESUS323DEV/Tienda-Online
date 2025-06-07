document.addEventListener("DOMContentLoaded", function () {
  // === Menú fijo (hamburguesa) ===
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // === Contador scroll para móviles ===
  const slider = document.querySelector(".cont-img-mejorada");
  const counter = document.getElementById("contador-img");

  if (slider && counter) {
    const images = slider.querySelectorAll("img");

    slider.addEventListener("scroll", () => {
      const scrollLeft = slider.scrollLeft;
      const width = slider.clientWidth;
      const index = Math.round(scrollLeft / width);
      counter.textContent = `${index + 1}/${images.length}`;
    });
  }

  // === Galería ampliada para escritorio ===
  if (window.innerWidth >= 1024) {
    const imagenes = document.querySelectorAll(".cont-img-mejorada img");
    const overlay = document.getElementById("galeria-overlay");
    const imagenGrande = document.getElementById("imagen-grande");
    const cerrarBtn = document.getElementById("cerrar-galeria");
    const flechaIzq = document.getElementById("flecha-izq");
    const flechaDer = document.getElementById("flecha-der");

    let indiceActual = 0;

    if (
      imagenes.length > 0 &&
      overlay &&
      imagenGrande &&
      cerrarBtn &&
      flechaIzq &&
      flechaDer
    ) {
      imagenes.forEach((img, index) => {
        img.addEventListener("click", () => {
          indiceActual = index;
          mostrarImagen(indiceActual);
          overlay.classList.add("mostrar");
        });
      });

      function mostrarImagen(indice) {
        const src = imagenes[indice].getAttribute("src");
        imagenGrande.setAttribute("src", src);
      }

      flechaIzq.addEventListener("click", () => {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(indiceActual);
      });

      flechaDer.addEventListener("click", () => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen(indiceActual);
      });

      cerrarBtn.addEventListener("click", () => {
        overlay.classList.remove("mostrar");
      });
    }
  }

  
});
