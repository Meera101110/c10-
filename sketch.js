var trex, trexrunning
var ground, groundimage
function preload(){
trexrunning = loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage = loadImage("ground2.png")
}
function setup(){
 createCanvas(600, 200) 
trex = createSprite(50, 160, 20, 50)
trex.addAnimation("running",trexrunning)
trex.scale= 0.5
ground = createSprite(200, 180, 400, 20)
ground.addImage(groundimage)
ground.velocityX= -4
}
function draw(){
background("grey")
if (ground.x<0){
  ground.x= ground.width/2
}
if (keyDown("space")){
  trex.velocityY= -10
}
trex.velocityY= trex.velocityY+0.8
trex.collide(ground)
  drawSprites()
}