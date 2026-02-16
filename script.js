POR FAVOR COMPLETALO EN MI CODIGO: function iniciarTodo() {
  startGame();

  setTimeout(() => {
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const florCentral = document.querySelector(".loto-der2");

    // CLICK primer CONTINUAR
    botonPrincipal.addEventListener("click", () => {

      // desaparecer flor central
      if (florCentral) {
        florCentral.style.transition = "opacity 0.8s, transform 0.8s";
        florCentral.style.opacity = 0;
        florCentral.style.transform = "scale(0)";
      }

      // mover boton CONTINUAR a la posicion de la flor
      const rectFlor = florCentral.getBoundingClientRect();
      botonPrincipal.style.position = "absolute";
      botonPrincipal.style.top = rectFlor.top + "px";
      botonPrincipal.style.left = rectFlor.left + "px";
      botonPrincipal.style.transform = "translate(0,0)";

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
      const pantallaCartas = document.getElementById("pantallaCartas");
      pantallaCartas.style.transition = "opacity 0.8s";
      pantallaCartas.style.opacity = 0;
      setTimeout(() => {
        pantallaCartas.style.display = "none";
        const pantallaRomantica = document.getElementById("pantallaRomantica");
        pantallaRomantica.style.display = "flex";
        pantallaRomantica.style.opacity = 0;
        pantallaRomantica.style.transition = "opacity 0.8s";
        setTimeout(() => { pantallaRomantica.style.opacity = 1; }, 50);
      }, 800);
    });
    
  // CONTINUAR romántica -> pantalla final
const botonRomantica = document.getElementById("botonContinuarRomantica");
botonRomantica.addEventListener("click", () => {
  // Hacer desaparecer SOLO la flor central
  const florCentral = document.querySelector(".loto-der2");
  if (florCentral) {
    florCentral.style.transition = "opacity 0.8s, transform 0.8s";
    florCentral.style.opacity = 0;
    florCentral.style.transform = "scale(0) translateY(50px)";
  }

  // Desaparecer pantalla romántica y mostrar final
  const pantallaRomantica = document.getElementById("pantallaRomantica");
  pantallaRomantica.style.transition = "opacity 0.8s";
  pantallaRomantica.style.opacity = 0;

  setTimeout(() => {
    pantallaRomantica.style.display = "none";
    const pantallaFinal = document.getElementById("pantallaFinal");
    pantallaFinal.style.display = "flex";
    pantallaFinal.style.opacity = 0;
    pantallaFinal.style.transition = "opacity 0.8s";
    setTimeout(() => { pantallaFinal.style.opacity = 1; }, 50);
  }, 800);
});

    // Pantalla final: SI -> TikTok / NO -> GAME OVER
    document.getElementById("botonSi").addEventListener("click", () => {
      window.location.href = "https://vt.tiktok.com/ZSmkXQ9mE/";
    });

    document.getElementById("botonNo").addEventListener("click", () => {
      const pantallaFinal = document.getElementById("pantallaFinal");
      pantallaFinal.style.display = "none";
      const pantallaGameOver = document.getElementById("pantallaGameOver");
      pantallaGameOver.style.display = "flex";
    });

  }, 1500);
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
