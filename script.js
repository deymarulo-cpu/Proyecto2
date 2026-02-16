function animarTexto() {
  const h2 = document.getElementById("bienvenida");
  if (!h2) return;

  const lineas = h2.innerHTML.split("<br>");
  h2.innerHTML = "";

  let delayTotal = 0;

  lineas.forEach((linea, idxLinea) => {
    const lineContainer = document.createElement("div");
    h2.appendChild(lineContainer);

    linea.split("").forEach((letra, idxLetra) => {
      const span = document.createElement("span");
      span.innerHTML = letra === " " ? "&nbsp;" : letra;
      lineContainer.appendChild(span);

      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = `translateY(-5px)`;
        setTimeout(() => {
          span.style.transform = `translateY(0)`;
        }, 300);
      }, delayTotal + idxLetra * 100);
    });

    delayTotal += linea.length * 100 + 300;

    if (idxLinea < lineas.length - 1) {
      const br = document.createElement("br");
      h2.appendChild(br);
    }
  });
}
