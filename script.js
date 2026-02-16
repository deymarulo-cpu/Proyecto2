function iniciarTodo() {
  startGame(() => { // <-- callback al final de la transición del START
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const florCentral = document.querySelector(".loto-der2");
    const florIzq = document.querySelector(".loto-izq");
    const florDer1 = document.querySelector(".loto-der1");

    // CLICK primer CONTINUAR
    botonPrincipal.addEventListener("click", () => {
      // Desaparece solo la flor central
      if (florCentral) {
        florCentral.style.transition = "opacity 0.8s, transform 0.8s";
        florCentral.style.opacity = 0;
        florCentral.style.transform = "scale(0)";
      }

      // Transición a pantalla de cartas
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

    // CONTINUAR cartas -> romántica
    const botonCartas = document.getElementById("botonContinuarCartas");
    botonCartas.addEventListener("click", () => {
      // Desaparecen las flores de los lados
      [florIzq, florDer1].forEach(flor => {
        if (flor) {
          flor.style.transition = "opacity 0.8s, transform 0.8s";
          flor.style.opacity = 0;
          flor.style.transform = "scale(0)";
        }
      });

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
  });
}

// MODIFICACIÓN de startGame para usar callback
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

    if (callback) callback(); // <-- aquí agregamos los listeners
  }, 1200);
}
