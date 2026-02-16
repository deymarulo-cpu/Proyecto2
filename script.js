document.getElementById("btnStart").addEventListener("click", iniciarTodo);

function iniciarTodo(){
  ocultarPantalla("inicio");
  mostrarPantalla("pantallaPrincipal");
  florecerLotos();
  animarTexto("bienvenida");

  // Continuar principal -> cartas
  document.getElementById("botonContinuarPrincipal").onclick = () => {
    document.querySelectorAll('.loto').forEach(f=>f.style.opacity=0);
    ocultarPantalla("pantallaPrincipal");
    mostrarPantalla("pantallaCartas");
  };

  // Animación cartas
  document.querySelectorAll("#pantallaCartas .carta").forEach(carta=>{
    carta.onclick = ()=>{
      const mensaje=document.getElementById("mensajeCarta");
      mensaje.innerHTML=carta.dataset.mensaje;
      mensaje.style.display="block";
      setTimeout(()=>mensaje.style.opacity=1,50);
    };
  });

  // Continuar cartas -> romántica
  document.getElementById("botonContinuarCartas").onclick = ()=>{
    ocultarPantalla("pantallaCartas");
    mostrarPantalla("pantallaRomantica",()=>{
      document.getElementById("tituloRomantico").style.opacity=1;
      animarTexto("textoRomantico");
      document.querySelector(".cuadro-rosa").style.opacity=1;
    });
  };

  // Continuar romántica -> final
  document.getElementById("botonContinuarRomantica").onclick = ()=>{
    ocultarPantalla("pantallaRomantica");
    mostrarPantalla("pantallaFinal",()=>{
      const botones=document.querySelector(".final-buttons");
      botones.style.opacity=1;
      botones.style.transform="translateY(0)";
    });
  };

  document.getElementById("botonSi").onclick = ()=> window.location.href="https://vt.tiktok.com/ZSmkXQ9mE/";
  document.getElementById("botonNo").onclick = ()=>{
    ocultarPantalla("pantallaFinal");
    mostrarPantalla("pantallaGameOver");
  };
}

// FUNCIONES UTILES
function ocultarPantalla(id){ document.getElementById(id).style.display="none"; }
function mostrarPantalla(id,callback){
  const p=document.getElementById(id);
  p.style.display="flex";
  p.style.opacity=0;
  setTimeout(()=>{p.style.opacity=1; if(callback)callback();},50);
}

function florecerLotos(){
  document.querySelectorAll(".loto").forEach((l,i)=>setTimeout(()=>l.classList.add("florecer"), i*300));
}

function animarTexto(id){
  const t=document.getElementById(id);
  const letras=t.innerText.split("");
  t.innerHTML="";
  letras.forEach((l,i)=>{
    const span=document.createElement("span");
    span.innerHTML=l===" "?"&nbsp;":l;
    t.appendChild(span);
    setTimeout(()=>{span.style.opacity=1; span.style.transform="translateY(0)";}, i*50);
  });
}
