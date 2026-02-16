function iniciarTodo() {
  startGame();

  setTimeout(() => {
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const florCentral = document.querySelector(".loto-der2");
    const florIzq = document.querySelector(".loto-izq");
    const florDer1 = document.querySelector(".loto-der1");

    // CLICK primer CONTINUAR
    botonPrincipal.addEventListener("click", () => {
      // Hacer desaparecer SOLO la flor central
      if (florCentral) {
        florCentral.style.transition = "opacity 0.8s, transform 0.8s";
        florCentral.style.opacity = 0;
        florCentral.style.transform = "scale(0) translateY(50px)";
      }

      // Mover boton CONTINUAR a la posición de la flor central (opcional)
      if (florCentral) {
        const rectFlor = florCentral.getBoundingClientRect();
        botonPrincipal.style.position = "absolute";
        botonPrincipal.style.top = rectFlor.top + "px";
        botonPrincipal.style.left = rectFlor.left + "px";
        botonPrincipal.style.transform = "translate(0,0)";
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
      // Hacer desaparecer las flores izquierda y derecha
      [florIzq, florDer1].forEach(flor => {
        if (flor) {
          flor.style.transition = "opacity 0.8s, transform 0.8s";
          flor.style.opacity = 0;
          flor.style.transform = "scale(0) translateY(50px)";
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

    // CONTINUAR romántica -> pantalla final
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

    // Pantalla final: SI -> mostrar corazón / NO -> GAME OVER
    document.getElementById("botonSi").addEventListener("click", () => {
      const pantallaFinal = document.getElementById("pantallaFinal");
      pantallaFinal.style.display = "none";

      // mostrar pantalla del corazón
      const pantallaCorazon = document.getElementById("pantallaCorazon");
      if (pantallaCorazon) {
        pantallaCorazon.style.display = "flex";
        pantallaCorazon.style.opacity = 0;
        pantallaCorazon.style.transition = "opacity 0.8s";
        setTimeout(() => { pantallaCorazon.style.opacity = 1; }, 50);
      }
    });

    document.getElementById("botonNo").addEventListener("click", () => {
      const pantallaFinal = document.getElementById("pantallaFinal");
      pantallaFinal.style.display = "none";
      const pantallaGameOver = document.getElementById("pantallaGameOver");
      pantallaGameOver.style.display = "flex";
    });

  }, 1500);
}
