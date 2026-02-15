/* ===== INICIAR TODO ===== */
function iniciarTodo() {
  startGame();

  // Espera a que desaparezca la pantalla inicio
  setTimeout(() => {
    florecerLotos();
  }, 1200);
}

/* ===== TRANSICIÓN PIXEL ===== */
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
    document.getElementById("pantallaPrincipal").style.display = "flex";
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

    estrella.style.position = "absolute";
    estrella.style.width = "2px";
    estrella.style.height = "2px";
    estrella.style.borderRadius = "50%";
    estrella.style.top = Math.random() * 100 + "vh";
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.background =
      colores[Math.floor(Math.random() * colores.length)];

    estrella.style.animation = `parpadeo ${(1 + Math.random() * 3)}s infinite alternate`;

    contenedor.appendChild(estrella);
  }
}

/* ===== ANIMACIÓN DE PARPADEO ESTRELLAS ===== */
const style = document.createElement('style');
style.innerHTML = `
@keyframes parpadeo {
  from { opacity: 0.3; }
  to { opacity: 1; }
}`;
document.head.appendChild(style);

/* ===== CREAR FLORES DE LOTO ===== */
function crearLotos() {
  const contenedor = document.querySelector(".lotos");
  const posiciones = [
    { clase: "loto-izq", left: "5%", bottom: "10%" },
    { clase: "loto-der1", right: "8%", top: "25%" },
    { clase: "loto-der2", right: "5%", bottom: "5%" }
  ];

  posiciones.forEach(pos => {
    const loto = document.createElement("img");
    loto.src = "loto.png"; // tu imagen de loto
    loto.classList.add("loto", pos.clase);
    if (pos.left) loto.style.left = pos.left;
    if (pos.right) loto.style.right = pos.right;
    if (pos.top) loto.style.top = pos.top;
    if (pos.bottom) loto.style.bottom = pos.bottom;

    loto.style.opacity = 0;
    loto.style.transform = "scale(0) rotate(-20deg)";
    contenedor.appendChild(loto);
  });
}

/* ===== FLORECER LOTOS CON DELAY ===== */
function florecerLotos() {
  const lotos = document.querySelectorAll('.loto');

  lotos.forEach((loto, index) => {
    setTimeout(() => {
      loto.classList.add('florecer'); // agrega animación
    }, index * 800); // florecen con delay
  });
}
