function mostrarPagina() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("contenido").style.display = "block";
}

function mover() {
  const btn = document.querySelector('.no');
  btn.style.position = 'absolute';
  btn.style.top = Math.random() * window.innerHeight + 'px';
  btn.style.left = Math.random() * window.innerWidth + 'px';
}
