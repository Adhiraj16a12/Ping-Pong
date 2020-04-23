                                                                                                                                      var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=4  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  if(keyDown(UP_ARROW)) {
    paddle.velocityX = 0;
    paddle.velocityY = -2;
}
if (keyDown(DOWN_ARROW)) {
     paddle.velocityX =0;
    paddle.velocityY =3; 
}
if (keyDown(RIGHT_ARROW)){
    paddle.velocityX=3;
    paddle.velocityY=0; 
}
if (keyDown(LEFT_ARROW)){
    paddle.velocityX=-3;
    paddle.velocityY=0; 

} 
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  
  
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges);
  
  ball.y = paddle.y
  
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-5,8);
}

