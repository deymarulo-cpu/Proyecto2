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

    crearEstrellas();
  }, 1200);
}

// ===== CREAR ESTRELLAS =====
function crearEstrellas() {
  const contenedor = document.querySelector(".stars");
  const colores = ["#ffffff", "#ffd700", "#87cefa", "#ff69b4", "#c084fc"];

  for (let i = 0; i < 150; i++) {
    const estrella = document.createElement("div");
    estrella.style.position = "absolute";
    estrella.style.width = estrella.style.height = Math.random() * 2 + "px";
    estrella.style.top = Math.random() * 100 + "vh";
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.background = colores[Math.floor(Math.random() * colores.length)];
    estrella.style.borderRadius = "50%";
    estrella.style.opacity = Math.random() * 0.8 + 0.2;
    estrella.style.animation = `blink ${1 + Math.random() * 2}s infinite alternate`;

    contenedor.appendChild(estrella);
  }
}

// ===== FLORECER LOTOS =====
function florecerLotos() {
  const lotos = document.querySelectorAll('.loto');

  lotos.forEach((loto, index) => {
    setTimeout(() => {
      loto.classList.add('florecer'); // activa animación
    }, index * 800); // delay entre cada loto
  });
}
