function iniciarTodo(){
  // pantalla inicio -> principal
  document.getElementById("inicio").style.display="none";
  document.getElementById("pantallaPrincipal").style.display="flex";

  const boton = document.getElementById("botonContinuarPrincipal");
  const flor = document.querySelector(".loto-der2");

  boton.addEventListener("click", ()=>{
    // desaparecer lotos
    document.querySelectorAll('.loto').forEach(f=>f.style.display="none");

    // mover boton al centro de flor
    const rect=flor.getBoundingClientRect();
    boton.style.position="absolute";
    boton.style.left=rect.left+"px";
    boton.style.top=rect.top+"px";
    boton.style.transform="translate(0,0)";

    // pasar a cartas
    document.getElementById("pantallaPrincipal").style.display="none";
    const cartasPant = document.getElementById("pantallaCartas");
    cartasPant.style.display="flex";

    const cartas=document.querySelectorAll(".carta");
    const mensaje=document.getElementById("mensajeCarta");
    cartas.forEach(c=>{
      c.onclick=()=>{
        mensaje.innerHTML=c.dataset.mensaje;
        mensaje.style.opacity=0;
        mensaje.style.display="block";
        setTimeout(()=>mensaje.style.opacity=1,50);
      };
    });

    // botón continuar cartas -> romántica
    document.getElementById("botonContinuarCartas").onclick=()=>{
      cartasPant.style.display="none";
      const romantica=document.getElementById("pantallaRomantica");
      romantica.style.display="flex";

      // animar título y cuadro rosa
      const titulo=document.getElementById("tituloRomantico");
      titulo.style.opacity=1;
      titulo.style.transform="translateY(0)";
      const cuadro=document.querySelector(".cuadro-rosa");
      cuadro.style.opacity=1;
    };

    // botón continuar romántica -> final
    document.getElementById("botonContinuarRomantica").onclick=()=>{
      document.getElementById("pantallaRomantica").style.display="none";
      const final=document.getElementById("pantallaFinal");
      final.style.display="flex";
    };

    // pantalla final botones
    document.getElementById("botonSi").onclick=()=>{ window.location.href="https://vt.tiktok.com/ZSmkXQ9mE/"; };
    document.getElementById("botonNo").onclick=()=>{
      document.getElementById("pantallaFinal").style.display="none";
      document.getElementById("pantallaGameOver").style.display="flex";
    };
  });
}
