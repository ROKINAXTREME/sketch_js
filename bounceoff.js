var rect1, rect2
function setup() {
  createCanvas(1200,800);
  rect1=createSprite(400, 100, 50, 50);
  rect1.shapeColor="red"
  rect2=createSprite(400, 800, 80, 30);
  rect2.shapeColor="red"
  rect1.velocityY=5;
  rect2.velocityY=-5;
}

function draw() {
  background(0,0,0); 
  if(rect2.y-rect1.y<rect2.height/2+rect1.height/2 && rect1.y-rect2.y<rect2.height/2+rect1.height/2){
    rect1.velocityY=-5
    rect2.velocityY=5
  }
  drawSprites();
}