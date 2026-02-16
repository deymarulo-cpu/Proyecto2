function iniciarTodo() {
  // Inicia la transición pixel
  startGame();

  // Florecer lotos y animar texto después de mostrar la pantalla principal
  setTimeout(() => {
    florecerLotos();
    animarTexto();
  }, 1200);
}

// ===== TRANSICIÓN PIXEL =====
function startGame() {
  const transition = document.querySelector(".pixel-transition");
  transition.innerHTML = ""; // limpiar por si acaso

  for (let i = 0; i < 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    transition.appendChild(pixel);

    // animar aparición de cada pixel aleatoriamente
    setTimeout(() => {
      pixel.style.transform = "scale(1)";
    }, Math.random() * 500);
  }

  // Después de la animación de pixels, mostrar pantalla principal
  setTimeout(() => {
    document.querySelector(".inicio").style.display = "none";
    document.getElementById("pantallaPrincipal").style.display = "block";
    transition.innerHTML = ""; // limpiar pixels
  }, 1200);
}

// ===== FLORECER LOTOS =====
function florecerLotos() {
  const lotos = document.querySelectorAll('.loto');

  lotos.forEach((loto, index) => {
    setTimeout(() => {
      loto.classList.add('florecer');
    }, index * 500); // cada loto florece medio segundo después del anterior
  });
}

// ===== ANIMACIÓN DE TEXTO LÍNEA POR LÍNEA =====
function animarTexto() {
  const h2 = document.getElementById("bienvenida");
  if (!h2) return;

  const lineas = h2.innerHTML.split("<br>");
  h2.innerHTML = ""; // limpiar texto

  let delayTotal = 0;

  lineas.forEach((linea, idxLinea) => {
    const lineContainer = document.createElement("div");
    lineContainer.style.display = "block"; // aseguramos que cada línea quede en bloque
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
        // efecto flotante suave
        span.style.transform = "translateY(-5px)";
        setTimeout(() => {
          span.style.transform = "translateY(0)";
        }, 300);
      }, delayTotal + idxLetra * 100);
    });

    // actualizar el delay total para la siguiente línea
    delayTotal += linea.length * 100 + 300;

    // agregar <br> entre líneas, excepto la última
    if (idxLinea < lineas.length - 1) {
      const br = document.createElement("br");
      h2.appendChild(br);
    }
  });
}
