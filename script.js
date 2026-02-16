const song1 = new Audio("audios/song1.mp3"); // START
const song2 = new Audio("audios/song2.mp3"); // carta 1
const song3 = new Audio("audios/song3.mp3"); // carta 2
const song4 = new Audio("audios/song4.mp3"); // boton SI

function iniciarTodo() {
  startGame(() => { // callback al terminar la animación de START
    florecerLotos();
    animarTexto();

    const botonPrincipal = document.getElementById("botonContinuarPrincipal");
    const florCentral = document.querySelector(".loto-der2");
    const florIzq = document.querySelector(".loto-izq");
    const florDer = document.querySelector(".loto-der1");
    const mensajeCarta = document.getElementById("mensajeCarta");
    const cartas = document.querySelectorAll("#pantallaCartas .carta");

    // ===== BOTÓN START =====
    botonPrincipal.addEventListener("click", () => {
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

    // ===== CARTAS =====
    cartas.forEach(carta => {
      carta.addEventListener("click", () => {
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
      [florIzq, florDer].forEach(flor => {
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
        setTimeout(() => { 
          pantallaFinal.style.opacity = 1;

          // ===== AÑADIR EFECTOS ROMÁNTICOS =====
          for (let i = 0; i < 12; i++) {
            const corazon = document.createElement("div");
            corazon.classList.add("corazon-flotante");
            corazon.style.left = Math.random() * 90 + "vw";
            corazon.style.animationDuration = 3 + Math.random() * 4 + "s";
            pantallaFinal.appendChild(corazon);
          }
          for (let i = 0; i < 40; i++) {
            const p = document.createElement("div");
            p.classList.add("particula");
            p.style.left = Math.random() * 100 + "vw";
            p.style.animationDuration = 4 + Math.random() * 3 + "s";
            pantallaFinal.appendChild(p);
          }
        }, 50);
      }, 800);
    });

    // ===== PANTALLA FINAL: SI/NO =====
    document.getElementById("botonSi").addEventListener("click", () => {
      song4.currentTime = 0;
      song4.play();

      const pantallaFinal = document.getElementById("pantallaFinal");
      pantallaFinal.style.display = "none";
      const pantallaCorazon = document.getElementById("pantallaCorazon");
      pantallaCorazon.style.display = "flex";

      for (let i = 0; i < 12; i++) {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon-flotante");
        corazon.style.left = Math.random() * 90 + "vw";
        corazon.style.animationDuration = 3 + Math.random() * 4 + "s";
        pantallaCorazon.appendChild(corazon);
      }
    });

    document.getElementById("botonNo").addEventListener("click", () => { 
      const pantallaFinal = document.getElementById("pantallaFinal");
      pantallaFinal.style.display = "none";
      const pantallaGameOver = document.getElementById("pantallaGameOver");
      pantallaGameOver.style.display = "flex";
    });
  });
}
