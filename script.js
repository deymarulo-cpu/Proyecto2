// ===== INICIAR TODO =====
function iniciarTodo() {
  startGame();

  setTimeout(() => {
    florecerLotos();
    animarTexto();

    // Pantalla principal - botón CONTINUAR
    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    botonPrincipal.addEventListener("click", () => {
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
    });

    // Pantalla de cartas - mensajes al click
    const cartas = document.querySelectorAll("#pantallaCartas .carta");
    cartas.forEach(carta => {
      carta.addEventListener("click", () => {
        alert(carta.dataset.mensaje);
      });
    });

    // Botón continuar cartas
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

    // Botón continuar romántica
    const botonRomantica = document.getElementById("botonContinuarRomantica");
    botonRomantica.addEventListener("click", () => {
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

    // Botones SI/NO pantalla final
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

// ===== TRANSICIÓN PIXEL =====
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

// ===== FLORECER LOTOS =====
function florecerLotos() {
  const lotos = document.querySelectorAll('.loto');
  lotos.forEach((loto, index) => {
    setTimeout(() => { loto.classList.add('florecer'); }, index * 500);
  });
}

// ===== ANIMACIÓN DE TEXTO LÍNEA POR LÍNEA =====
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

    if (idxLinea < lineas.length - 1) {
      const br = document.createElement("br");
      h2.appendChild(br);
    }
  });
}
