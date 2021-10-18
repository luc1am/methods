/*
Lucia Mumma
Melody Loveless
requirements
2 of either:
-function with a parameter
-object with a method
-interactivity
-visual components
*/
var shears;
var flower = {
  x: 200, //same x pos
  y: [500, 400], // holds both y pos
  display: function(){
    stroke(0,155,0);
    strokeWeight(10);
    line(this.x,  this.y[0], this.x, this.y[1]);
    petals(this.y[1]);
  },
  grow: function(){
    this.y[1]=(this.y[1])-10;
    if (this.y[1]<0){
      noStroke();
      fill(0);
      text("press space to cut", 100,100);
    }
  }
};
function preload(){
  shears = loadImage("sciss.png");
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(100,150,255);
  //catch.move();
  flower.display();
  //petals(300);
  frameRate(3);
}

function mouseClicked(){
  flower.grow();
}

function keyPressed(){
  if (keyCode ===32){
    translate(0,200);
    scale(0.1);
    image(shears, 200,400);
    flower.y[1]=400;
  }
}

function petals(y){
  let size = 30;
  noStroke();

  fill(255,0,200);
  for (var i = 1; i<4; i++){
    ellipse(200+(i*10), y-30+(i**3), size,size);
    ellipse(200-(i*10), y-30+(i**3), size,size);
  }
  fill(200,200,0);
  ellipse(200, y, 40,40);
}
