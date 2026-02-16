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
  const h2 = document.querySelector("#pantallaPrincipal h2");
  if (!h2) return;

  // Guardar las líneas separadas por <br>
  const lineas = h2.innerHTML.split("<br>");
  h2.innerHTML = ""; // limpiar contenido para animación

  let delayTotal = 0;

  lineas.forEach((linea, idxLinea) => {
    const lineContainer = document.createElement("div"); // contenedor para cada línea
    h2.appendChild(lineContainer);

    // animar cada letra de la línea
    linea.split("").forEach((letra, idxLetra) => {
      const span = document.createElement("span");
      span.textContent = letra;
      span.style.opacity = 0;
      lineContainer.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 1;
      }, delayTotal + idxLetra * 100); // 100ms por letra
    });

    // sumar tiempo total para la siguiente línea (+100ms por letra)
    delayTotal += linea.length * 100;

    // agregar un pequeño delay antes de la siguiente línea
    delayTotal += 300;

    // agregar <br> entre líneas excepto la última
    if (idxLinea < lineas.length - 1) {
      const br = document.createElement("br");
      h2.appendChild(br);
    }
  });
}
