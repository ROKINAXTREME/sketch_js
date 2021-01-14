var rect1, rect2
function setup() {
  createCanvas(1200,800);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="red"
  rect2=createSprite(600, 200, 80, 30);
  rect2.shapeColor="red"
}

function draw() {
  background(0,0,0); 
  rect1.x=World.mouseX
  rect1.y=World.mouseY
  if(isTouching(rect1, rect2)){
    rect1.shapeColor='green';
    rect2.shapeColor='green';
  } 
  else{
    rect1.shapeColor='red';
    rect2.shapeColor='red';
  }
  drawSprites();
}
