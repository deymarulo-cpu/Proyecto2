document.getElementById("btnStart").addEventListener("click", iniciarTodo);

function iniciarTodo() {
  florecerLotos();
  animarTextoPrincipal();

  const botonPrincipal = document.getElementById("botonContinuarPrincipal");

  botonPrincipal.addEventListener("click", () => {
    document.querySelectorAll('.loto').forEach(f => {
      f.style.transition = "opacity 0.8s, transform 0.8s";
      f.style.opacity = 0;
      f.style.transform = "scale(0)";
    });

    ocultarPantalla("pantallaPrincipal");
    mostrarPantalla("pantallaCartas");
  });

  // CARTAS
  const cartas = document.querySelectorAll("#pantallaCartas .carta");
  const mensajeCarta = document.getElementById("mensajeCarta");
  cartas.forEach(carta => {
    carta.addEventListener("click", () => {
      mensajeCarta.innerHTML = carta.dataset.mensaje;
      mensajeCarta.style.display = "block";
      setTimeout(() => mensajeCarta.style.opacity = 1, 50);
    });
  });

  // CONTINUAR cartas -> romántica
  document.getElementById("botonContinuarCartas").addEventListener("click", () => {
    ocultarPantalla("pantallaCartas");
    mostrarPantalla("pantallaRomantica", () => {
      animarTituloRomantico();
      animarCuadroRomantico();
    });
  });

  // CONTINUAR romántica -> pantalla final
  document.getElementById("botonContinuarRomantica").addEventListener("click", () => {
    ocultarPantalla("pantallaRomantica");
    mostrarPantalla("pantallaFinal", () => {
      const botones = document.querySelector(".final-buttons");
      botones.style.opacity = 1;
      botones.style.transform = "translateY(0)";
    });
  });

  // Pantalla final
  document.getElementById("botonSi").addEventListener("click", () => {
    window.location.href = "https://vt.tiktok.com/ZSmkXQ9mE/";
  });
  document.getElementById("botonNo").addEventListener("click", () => {
    ocultarPantalla("pantallaFinal");
    mostrarPantalla("pantallaGameOver");
  });
}

function florecerLotos() {
  document.querySelectorAll(".loto").forEach((loto, i) => {
    setTimeout(() => loto.classList.add("florecer"), i*300);
  });
}

function animarTextoPrincipal() {
  const bienvenida = document.getElementById("bienvenida");
  const letras = bienvenida.innerText.split("");
  bienvenida.innerHTML = "";
  letras.forEach((l, i) => {
    const span = document.createElement("span");
    span.innerHTML = l === " " ? "&nbsp;" : l;
    bienvenida.appendChild(span);
    setTimeout(()=> span.style.opacity = 1, i*50);
  });
}

function animarTituloRomantico() {
  const titulo = document.getElementById("tituloRomantico");
  titulo.style.opacity = 1;
  titulo.style.transform = "translateY(0)";
}

function animarCuadroRomantico() {
  const cuadro = document.querySelector(".cuadro-rosa");
  cuadro.style.opacity = 1;

  const texto = document.getElementById("textoRomantico");
  const letras = texto.innerText.split("");
  texto.innerHTML = "";
  letras.forEach((l, i) => {
    const span = document.createElement("span");
    span.innerHTML = l === " " ? "&nbsp;" : l;
    texto.appendChild(span);
    setTimeout(()=>{ span.style.opacity = 1; span.style.transform="translateY
