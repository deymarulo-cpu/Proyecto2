// ======== INICIAR JUEGO ========
function iniciarTodo() {
  startGame();

  // Florecer lotos después de desaparecer inicio
  setTimeout(() => {
    florecerLotos();
  }, 1200);
}

function startGame() {
  const transition = document.querySelector(".pixel-transition");

  // Crear cuadritos de transición
  for (let i = 0; i < 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    transition.appendChild(pixel);

    setTimeout(() => {
      pixel.style.transform = "scale(1)";
    }, Math.random() * 500);
  }

  // Ocultar inicio y mostrar pantalla principal
  setTimeout(() => {
    document.querySelector(".inicio").style.display = "none";
    document.getElementById("pantallaPrincipal").style.display = "block";
    transition.innerHTML = "";
  }, 1200);
}

// ===== FLORECER LOTOS =====
function florecerLotos() {
  const lotos = document.querySelectorAll('.loto');

  lotos.forEach((loto, index) => {
    setTimeout(() => {
      loto.classList.add('florecer');
    }, index * 500); // más juntas en tiempo
  });
}
