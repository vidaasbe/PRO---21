var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1200,400);

  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);

  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1100, 200, thickness, height/2);

  wall.shapeColor = (80,80,80);
  bullet.shapeColor = "white";
  

  bullet.velocityX = speed;


}

function draw() {
  background(0, 0, 0);


  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }



  drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}