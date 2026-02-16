function iniciarTodo() {
  startGame();

  // Florecer lotos después de desaparecer inicio
  setTimeout(() => {
    florecerLotos();

    // Animar texto solo después de mostrar la pantalla principal
    animarTexto();
  }, 1200);
}

function startGame() {
  const transition = document.querySelector(".pixel-transition");

  for (let i = 0; i < 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    transition.appendChild(pixel);

    setTimeout(() => {
      pixel.style.transform = "scale(1)";
    }, Math.random() * 500);
  }

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
    }, index * 500);
  });
}

// ===== ANIMACIÓN DE TEXTO =====
function animarTexto() {
  const h2 = document.getElementById("bienvenida");
  if (!h2) return;

  const texto = h2.textContent;
  h2.textContent = "";

  texto.split("").forEach((letra, index) => {
    const span = document.createElement("span");
    span.textContent = letra;
    h2.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
    }, index * 100);
  });
}
