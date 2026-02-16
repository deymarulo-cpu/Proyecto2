function iniciarTodo() {
  startGame();

  setTimeout(() => {
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const lotos = document.querySelectorAll(".loto");

    botonPrincipal.addEventListener("click", () => {
      // hacer desaparecer LOTOS izquierdo y derecho
      lotos.forEach((loto, index) => {
        if (index !== 1) { // solo izquierda y derecha
          loto.style.transition = "opacity 0.8s, transform 0.8s";
          loto.style.opacity = 0;
          loto.style.transform = "scale(0) translateY(50px)";
        }
      });

      // desaparecer flor central
      const florCentral = document.querySelector(".loto-der2");
      if (florCentral) {
        florCentral.style.transition = "opacity 0.8s, transform 0.8s";
        florCentral.style.opacity = 0;
        florCentral.style.transform = "scale(0)";
      }

      // pasar a pantalla de cartas
      setTimeout(() => {
        const pantallaActual = document.getElementById("pantallaPrincipal");
        pantallaActual.style.transition = "opacity 0.8s";
        pantallaActual.style.opacity = 0;

        setTimeout(() => {
          pantallaActual.style.display = "none";
          const pantallaCartas = document.getElementById("pantallaCartas");
          pantallaCartas.style.display = "flex";
          pantallaCartas.style.opacity = 0;
          pantallaCartas.style.transition = "opacity 0.8s";
          setTimeout(() => { pantallaCartas.style.opacity = 1; }, 50);
        }, 800);
      }, 500);
    });

    // CARTAS: mostrar mensaje en cuadro
    const cartas = document.querySelectorAll("#pantallaCartas .carta");
    const mensajeCarta = document.getElementById("mensajeCarta");

    cartas.forEach(carta => {
      carta.addEventListener("click", () => {
        mensajeCarta.innerHTML = carta.dataset.mensaje;
        mensajeCarta.style.display = "block";
      });
    });

    // CONTINUAR cartas -> romántica
    const botonCartas = document.getElementById("botonContinuarCartas");
    botonCartas.addEventListener("click", () => {
      document.getElementById("pantallaCartas").style.display = "none";
      const pantallaRomantica = document.getElementById("pantallaRomantica");
      pantallaRomantica.style.display = "flex";
    });

    // CONTINUAR romántica -> pantalla final
    const botonRomantica = document.getElementById("botonContinuarRomantica");
    botonRomantica.addEventListener("click", () => {
      document.getElementById("pantallaRomantica").style.display = "none";
      const pantallaFinal = document.getElementById("pantallaFinal");
      pantallaFinal.style.display = "flex";
    });

    // Pantalla final
   // Pantalla final: SI -> mostrar corazón / NO -> GAME OVER
const botonSi = document.getElementById("botonSi");
const botonNo = document.getElementById("botonNo");

if (botonSi) {
  botonSi.addEventListener("click", () => {
    const pantallaFinal = document.getElementById("pantallaFinal");
    pantallaFinal.style.display = "none";

    // mostrar pantalla del corazón
    const pantallaCorazon = document.getElementById("pantallaCorazon");
    if (pantallaCorazon) {
      pantallaCorazon.style.display = "flex";
      pantallaCorazon.style.opacity = 0;
      pantallaCorazon.style.transition = "opacity 0.8s";
      setTimeout(() => {
        pantallaCorazon.style.opacity = 1;
      }, 50);
    }
  });
}

if (botonNo) {
  botonNo.addEventListener("click", () => {
    const pantallaFinal = document.getElementById("pantallaFinal");
    pantallaFinal.style.display = "none";

    const pantallaGameOver = document.getElementById("pantallaGameOver");
    if (pantallaGameOver) {
      pantallaGameOver.style.display = "flex";
      pantallaGameOver.style.opacity = 0;
      pantallaGameOver.style.transition = "opacity 0.8s";
      setTimeout(() => {
        pantallaGameOver.style.opacity = 1;
      }, 50);
    }
  });
}


// TRANSICIÓN PIXEL
function startGame() {
  const transition = document.querySelector(".pixel-transition");
  transition.innerHTML = "";
  for (let i = 0; i < 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    transition.appendChild(pixel);
    setTimeout(() => { pixel.style.transform = "scale(1)"; }, Math.random() * 500);
  }

  setTimeout(() => {
    document.querySelector(".inicio").style.display = "none";
    document.getElementById("pantallaPrincipal").style.display = "block";
    transition.innerHTML = "";
  }, 1200);
}

// FLORECER LOTOS
function florecerLotos() {
  const lotos = document.querySelectorAll('.loto');
  lotos.forEach((loto, index) => {
    setTimeout(() => { loto.classList.add('florecer'); }, index * 500);
  });
}

// ANIMACIÓN DE TEXTO
function animarTexto() {
  const h2 = document.getElementById("bienvenida");
  if (!h2) return;
  const lineas = h2.innerHTML.split("<br>");
  h2.innerHTML = "";
  let delayTotal = 0;
  lineas.forEach((linea, idxLinea) => {
    const lineContainer = document.createElement("div");
    lineContainer.style.display = "block";
    h2.appendChild(lineContainer);
    linea.split("").forEach((letra, idxLetra) => {
      const span = document.createElement("span");
      span.innerHTML = letra === " " ? "&nbsp;" : letra;
      span.style.display = "inline-block";
      span.style.opacity = 0;
      span.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      lineContainer.appendChild(span);
      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = "translateY(-5px)";
        setTimeout(() => { span.style.transform = "translateY(0)"; }, 300);
      }, delayTotal + idxLetra * 100);
    });
    delayTotal += linea.length * 100 + 300;
    if (idxLinea < lineas.length - 1) { const br = document.createElement("br"); h2.appendChild(br);}
  });
}
