function iniciarTodo() {
  startGame();

  setTimeout(() => {
    mostrarPagina();
  }, 1200); // tiempo igual al de la animación
}

function mostrarPagina() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("contenido").style.display = "block";
}

function mover() {
  const btn = document.querySelector('.no');
  btn.style.position = 'absolute';
  btn.style.top = Math.random() * window.innerHeight + 'px';
  btn.style.left = Math.random() * window.innerWidth + 'px';
}
function startGame() {
  const transition = document.querySelector(".pixel-transition");

  // Crear cuadritos
  for (let i = 0; i < 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    transition.appendChild(pixel);

    setTimeout(() => {
      pixel.style.transform = "scale(1)";
    }, Math.random() * 500);
  }

  // Después ocultar pantalla inicio
  setTimeout(() => {
    document.querySelector(".inicio").style.display = "none";
    transition.innerHTML = "";
  }, 1200);
}
