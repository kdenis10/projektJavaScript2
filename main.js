  // rotate (zero) i wartość o którą będziesz zmieniał stopnie (o 10 stopnii).
  let rotate = 0;
  const deg = 10;

  // pobieramy elementy
  const div = document.querySelector('div');
  const btn = document.querySelector('button');
  div.style.transition = 0.5 + "s"

  // podpinamy nasłuchiwanie i umeiszczamy w nim funkcje anonimową. 
  // Za każdym razie obrót zwiększa się od 10 deg. 
  btn.addEventListener("click", function () {
   // rotate = rotate + deg;
   rotate += deg;
   div.style.transform = "rotate(" + rotate + "deg)";
   // div.style.transform = "rotate(0deg)";
  })
