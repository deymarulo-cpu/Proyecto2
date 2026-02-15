function iniciarTodo() {
  startGame();
}

function startGame() {
  const transition = document.querySelector(".pixel-transition");

  // Crear cuadritos
  for (let i = 0; i < 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    transition.appendChild(pixel);

    setTimeout(() => {
      pixel.style.transform = "scale(1)";
    }, Math.random() * 500);
  }

  // Después ocultar pantalla inicio
  setTimeout(() => {
    document.querySelector(".inicio").style.display = "none";
    transition.innerHTML = "";
  }, 1200);
}

function abrirFlor() {
  const flor = document.querySelector(".flor");
  flor.classList.add("abierta");

  setTimeout(() => {
    mostrarNota1();
  }, 1200);
}

function mostrarNota1() {
  document.getElementById("pantallaInicio").style.display = "none";
  document.getElementById("nota1").style.display = "flex";
}

function mostrarNota2() {
  document.getElementById("nota1").style.display = "none";
  document.getElementById("nota2").style.display = "flex";
}

function respuesta() {
  document.getElementById("respuestaTexto").innerText =
    "La verdad es que haces todo eso y más.";

  // Pasar automáticamente a nota3 después de 2 segundos
  setTimeout(() => {
    document.getElementById("nota2").style.display = "none";
    document.getElementById("nota3").style.display = "flex";
  }, 2000);
}

let contador = 0;

function revelar(elemento) {
  if (!elemento.classList.contains("activo")) {
    elemento.classList.add("activo");
    contador++;
  }

  if (contador === 5) {
    document.getElementById("mensajeFinal").innerText =
      "Y todo eso floreció por ti 🌸";

    setTimeout(() => {
      document.getElementById("nota3").style.display = "none";
      document.getElementById("confesion").style.display = "flex";
    }, 2000);
  }
}

function mostrarPropuesta() {
  document.getElementById("confesion").style.display = "none";
  document.getElementById("propuesta").style.display = "flex";
}

function aceptar() {
  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;color:white;font-size:28px;text-align:center;">
      Sabía que esta historia apenas empieza 🌸💖
    </div>
  `;
}
