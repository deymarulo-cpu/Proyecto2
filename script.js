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
function animarTexto() {
  const h2 = document.getElementById("bienvenida");
  const texto = h2.textContent;
  h2.textContent = ""; // limpiamos el texto original

  // Envolver cada letra en un span
  texto.split("").forEach((letra, index) => {
    const span = document.createElement("span");
    span.textContent = letra;
    h2.appendChild(span);

    // Animar la aparición de cada letra con delay
    setTimeout(() => {
      span.style.opacity = 1;
    }, index * 100); // 100ms entre cada letra
  });
}

// Llamar la animación después de iniciar el juego o cargar pantalla principal
setTimeout(animarTexto, 1200); // Ajusta el delay según tus transiciones
