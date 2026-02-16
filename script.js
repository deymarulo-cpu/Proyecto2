// ===== AUDIOS =====
const song1 = document.getElementById("audioStart");
const song2 = document.getElementById("audioCarta1");
const song3 = document.getElementById("audioCarta2");
const song4 = document.getElementById("audioSi");

song1.currentTime = 0;
song1.play();

document.addEventListener("click", () => {
    song1.load();
    song2.load();
    song3.load();
    song4.load();
}, { once: true });

function iniciarTodo() {
  startGame(() => { // callback al terminar la animación de START
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const florCentral = document.querySelector(".loto-der2");
    const florIzq = document.querySelector(".loto-izq");
    const florDer = document.querySelector(".loto-der1");

    // ===== PRIMER CONTINUAR =====
    botonPrincipal.addEventListener("click", () => {
      // REPRODUCIR AUDIO START
      song1.currentTime = 0;
      song1.play();

      // Desaparece solo la flor central
      if (florCentral) {
        florCentral.style.transition = "opacity 0.8s, transform 0.8s";
        florCentral.style.opacity = 0;
        florCentral.style.transform = "scale(0)";
      }

      // Transición a pantalla de cartas
      const pantallaPrincipal = document.getElementById("pantallaPrincipal");
      setTimeout(() => {
        pantallaPrincipal.style.transition = "opacity 0.8s";
        pantallaPrincipal.style.opacity = 0;

        setTimeout(() => {
          pantallaPrincipal.style.display = "none";
          const pantallaCartas = document.getElementById("pantallaCartas");
          pantallaCartas.style.display = "flex";
          pantallaCartas.style.opacity = 0;
          pantallaCartas.style.transition = "opacity 0.8s";
          setTimeout(() => { pantallaCartas.style.opacity = 1; }, 50);
        }, 800);
      }, 500);
    });

    // ===== MOSTRAR MENSAJE CARTA =====
    const cartas = document.querySelectorAll("#pantallaCartas .carta");
    const mensajeCarta = document.getElementById("mensajeCarta");

    cartas.forEach(carta => {
      carta.addEventListener("click", () => {
        // REPRODUCIR AUDIO SEGÚN LA CARTA
        const index = carta.dataset.index; // "1" o "2"
        if (index === "1") { song2.currentTime = 0; song2.play(); }
        if (index === "2") { song3.currentTime = 0; song3.play(); }

        mensajeCarta.innerHTML = carta.dataset.mensaje;
        mensajeCarta.style.display = "block";
        mensajeCarta.style.opacity = 0;
        mensajeCarta.style.transition = "opacity 0.5s";
        setTimeout(() => { mensajeCarta.style.opacity = 1; }, 50);
      });
    });

    // ===== CONTINUAR CARTAS =====
    const botonCartas = document.getElementById("botonContinuarCartas");
    botonCartas.addEventListener("click", () => {
      // Desaparecen las flores de los lados
      [florIzq, florDer].forEach(flor => {
        if (flor) {
          flor.style.transition = "opacity 0.8s, transform 0.8s";
          flor.style.opacity = 0;
          flor.style.transform = "scale(0)";
        }
      });

      // Transición a pantalla romántica
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

    // ===== CONTINUAR ROMÁNTICA =====
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

    // ===== PANTALLA FINAL: SI/NO =====
    document.getElementById("botonSi").addEventListener("click", () => {
      // REPRODUCIR AUDIO BOTÓN SI
      song4.currentTime = 0;
      song4.play();

    });

    document.getElementById("botonNo").addEventListener("click", () => {
      const pantallaFinal = document.getElementById("pantallaFinal");
      pantallaFinal.style.display = "none";
      const pantallaGameOver = document.getElementById("pantallaGameOver");
      pantallaGameOver.style.display = "flex";
    });

  });
}

// ===== START GAME =====
function startGame(callback) {
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

    if (callback) callback(); // <-- aquí se agregan los listeners
  }, 1200);
}

// ===== FLORECER LOTOS =====
function florecerLotos() {
  const lotos = document.querySelectorAll('.loto');
  lotos.forEach((loto, index) => {
    setTimeout(() => { loto.classList.add('florecer'); }, index * 500);
  });
}

// ===== ANIMACIÓN DE TEXTO =====
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
