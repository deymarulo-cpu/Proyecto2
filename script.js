function iniciarTodo() {
  startGame();

  setTimeout(() => {
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const florCentral = document.querySelector(".loto-der2");
    const florIzq = document.querySelector(".loto-izq");
    const florDer1 = document.querySelector(".loto-der1");

    // CLICK primer CONTINUAR → desaparece flor central
    botonPrincipal.addEventListener("click", () => {
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

    // CARTAS: mostrar mensaje en cuadro
    const cartas = document.querySelectorAll("#pantallaCartas .carta");
    const mensajeCarta = document.getElementById("mensajeCarta");

    cartas.forEach(carta => {
      carta.addEventListener("click", () => {
        mensajeCarta.innerHTML = carta.dataset.mensaje;
        mensajeCarta.style.display = "block";
      });
    });

    // CLICK CONTINUAR en cartas → desaparecen flores de los lados
    const botonCartas = document.getElementById("botonContinuarCartas");
    botonCartas.addEventListener("click", () => {
      // Desaparecer flores izquierda y derecha
      if (florIzq) {
        florIzq.style.transition = "opacity 0.8s, transform 0.8s";
        florIzq.style.opacity = 0;
        florIzq.style.transform = "scale(0)";
      }

      if (florDer1) {
        florDer1.style.transition = "opacity 0.8s, transform 0.8s";
        florDer1.style.opacity = 0;
        florDer1.style.transform = "scale(0)";
      }

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
      if (florCentral) {
        florCentral.style.transition = "opacity 0.8s, transform 0.8s";
        florCentral.style.opacity = 0;
        florCentral.style.transform = "scale(0) translateY(50px)";
      }

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
