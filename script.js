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

// ===== ANIMACIÓN DE TEXTO LÍNEA POR LÍNEA =====
function animarTexto() {
  const h2 = document.getElementById("bienvenida");
  if (!h2) return;

  // Separar líneas por <br>
  const lineas = h2.innerHTML.split("<br>");
  h2.innerHTML = ""; // limpiar texto

  let delayTotal = 0;

  lineas.forEach((linea, idxLinea) => {
    const lineContainer = document.createElement("div");
    h2.appendChild(lineContainer);

    // Animar cada letra
    linea.split("").forEach((letra, idxLetra) => {
      const span = document.createElement("span");
      span.innerHTML = letra === " " ? "&nbsp;" : letra;
      lineContainer.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 1;
        // efecto flotante
        span.style.transform = `translateY(-5px)`;
        setTimeout(() => {
          span.style.transform = `translateY(0)`;
        }, 300);
      }, delayTotal + idxLetra * 100);
    });

    // tiempo acumulado para la siguiente línea
    delayTotal += linea.length * 100 + 300;

    // agregar <br> entre líneas excepto la última
    if (idxLinea < lineas.length - 1) {
      const br = document.createElement("br");
      h2.appendChild(br);
    }
  });
}
