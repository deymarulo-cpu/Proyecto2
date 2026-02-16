function iniciarTodo() {
  startGame();

  setTimeout(() => {
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const florCentral = document.querySelector(".loto-der2");

    botonPrincipal.addEventListener("click", () => {

      // desaparecer flor central y otros lotos
      document.querySelectorAll('.loto').forEach(f => {
        f.style.transition = "opacity 0.8s, transform 0.8s";
        f.style.opacity = 0;
        f.style.transform = "scale(0)";
      });

      // mover boton al centro de la flor
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

    // CARTAS
    const cartas = document.querySelectorAll("#pantallaCartas .carta");
    const mensajeCarta = document.getElementById("mensajeCarta");

    cartas.forEach(carta => {
      carta.addEventListener("click", () => {
        mensajeCarta.innerHTML = carta.dataset.mensaje;
        mensajeCarta.style.display = "block";
        setTimeout(()=>{ mensajeCarta.style.opacity = 1; },50);
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

        // animar título y cuadro rosa
        const titulo = document.getElementById("tituloRomantico");
        titulo.style.opacity = 1;
        titulo.style.transform = "translateY(0)";

        const cuadro = document.querySelector(".cuadro-rosa");
        cuadro.style.opacity = 1;

        // animar letras del cuadro romántico
        const texto = document.getElementById("textoRomantico");
        const letras = texto.innerText.split("");
        texto.innerHTML = "";
        letras.forEach((l, i) => {
          const span = document.createElement("span");
          span.innerHTML = l === " " ? "&nbsp;" : l;
          texto.appendChild(span);
          setTimeout(()=>{ span.style.opacity = 1; span.style.transform="translateY(0)"; }, i*50);
        });

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
        setTimeout(() => { 
          pantallaFinal.style.opacity = 1;
          // animar botones finales
          const botones = document.querySelector(".final-buttons");
          botones.style.opacity = 1;
          botones.style.transform = "translateY(0)";
        }, 50);
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

/* TRANSICIÓN PIXEL, FLORECER LOTOS y ANIMACIÓN DE TEXTO igual que antes */
