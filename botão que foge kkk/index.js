const botao = document.querySelector("button");

botao.addEventListener("mouseover", () => {
   const larguraJanela = window.innerWidth;
   const alturaJanela = window.innerHeight;

   const leftMaxBotao = larguraJanela - botao.offsetWidth;
   const topMaxBotao = alturaJanela - botao.offsetWidth;

   const leftAleatoria = Math.floor(Math.random() * leftMaxBotao);
   const topAleatoria = Math.floor(Math.random() * topMaxBotao);

   botao.style.left = leftAleatoria + "px";
   botao.style.top = topAleatoria + "px";
});
