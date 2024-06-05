function setup() {
    // cria uma tela de 400px de largura por 400px de altura
    createCanvas(400, 400);
  }
  
  function draw() {
    background("red");
    stroke("black")
    fill("pink");
   if (mouseIsPressed) {
  rect(mouseX,mouseY,20,35);
  } 
  }