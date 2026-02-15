function iniciarTodo() {
  startGame();
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

  // Después ocultar pantalla inicio y mostrar fondo estrellado
  setTimeout(() => {
    document.querySelector(".inicio").style.display = "none";
    document.getElementById("pantallaPrincipal").style.display = "block";
    transition.innerHTML = "";

    crearEstrellas();
    crearLotos();
  }, 1200);
}

/* ===== CREAR ESTRELLAS ===== */
function crearEstrellas() {
  const contenedor = document.querySelector(".estrellas");
  const colores = ["#ffffff", "#ffd700", "#87cefa", "#ff69b4", "#c084fc"];

  for (let i = 0; i < 150; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");

    estrella.style.top = Math.random() * 100 + "vh";
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.background =
      colores[Math.floor(Math.random() * colores.length)];

    estrella.style.animationDuration =
      (1 + Math.random() * 3) + "s";

    contenedor.appendChild(estrella);
  }
}

/* ===== CREAR FLORES DE LOTO ===== */
function crearLotos() {
  const contenedor = document.querySelector(".lotos");

  for (let i = 0; i < 6; i++) {
    const loto = document.createElement("div");
    loto.classList.add("loto");
    loto.innerHTML = "🌸";

    loto.style.top = Math.random() * 80 + "vh";
    loto.style.left = Math.random() * 90 + "vw";
    loto.style.animationDelay = Math.random() * 5 + "s";

    contenedor.appendChild(loto);
  }
}
