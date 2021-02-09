var movingRect,fixedRect

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="Red"
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="Red"
}

function draw() {
  background(255,255,255); 
  //movingRect.debug=true
  //fixedRect.debug=true
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY
console.log(movingRect.x - fixedRect.x);
  if((movingRect.x - fixedRect.x)<(fixedRect.width/2 +movingRect.width/2)
  &&(fixedRect.x - movingRect.x)<(fixedRect.width/2 +movingRect.width/2)
  &&(fixedRect.y - movingRect.y)<(fixedRect.height/2 +movingRect.height/2)
  &&(movingRect.x - fixedRect.x)<(fixedRect.width/2 +movingRect.width/2)){
    console.log()
    fixedRect.shapeColor="Green"
    movingRect.shapeColor="green"
  } 
  else{
    fixedRect.shapeColor="Red"
    movingRect.shapeColor="Red"

  }
  drawSprites();
}