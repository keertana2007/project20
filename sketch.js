var car;
var wall;
var speed;
var weight;


function setup() {
  createCanvas(1200,400);
   car=createSprite(50, 200, 50, 50);
   wall=createSprite(1200,200,60,height/2);

  speed=random(45,110);
  weight=random(600,1100);
}

function draw() {
  background(255,255,255);
  car.velocityX=speed;  


  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}