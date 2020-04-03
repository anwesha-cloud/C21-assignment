var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sunImg,mercuryImg,venusImg,earthImg,marsImg,jupiterImg,saturnImg,uranusImg,neptuneImg;
var radius = 60
var angle = 0
var speed = 0.6
var centerX= 300
var centerY= 300

function preload(){
sunImg.loadImage("sprites/sun.jpg")
mercuryImg.loadImage("sprites/mercury.jpg")
venusImg.loadImage("sprites/venus.jpg")
earthImg.loadImage("sprites/earth.jpg")
marsImg.loadImage("sprites/mars.jpg")
jupiterImg.loadImage("sprites/jupiter.jpg")
saturnImg.loadImage("sprites/saturn.jpg")
uranusImg.loadImage("sprites/uranus.jpg")
neptuneImg.loadImage("sprites/neptune.jpg")
}

function setup() {
  createCanvas(800,400);
  
  sun=createSprite(400,200,50,50);
  sun.addImage(sunImg);
  sun.scale=0.13
  sun.debug=true
  sun.setCollider("circle",0,0,260)

  mercury=createSprite(450,200,20,20);
  mercury.addImage(mercuryImg);
  mercury.scale=0.3
  mercury.debug=true
  mercury.setCollider("circle",0,0,60)

  venus=createSprite(480,200,20,20);
  venus.addImage(venusImg);
  venus.scale=0.3
  venus.debug=true
  venus.setCollider("circle",0,0,60)

  earth=createSprite(510,200,20,20);
  earth.addImage(earthImg);
  earth.scale=0.3
  earth.debug=true
  earth.setCollider("circle",0,0,60)

  mars=createSprite(540,200,20,20);
  mars.addImage(marsImg);
  mars.scale=0.3
  mars.debug=true
  mars.setCollider("circle",0,0,60)

  jupiter=createSprite(570,200,20,20);
  jupiter.addImage(jupiterImg);
  jupiter.scale=0.3
  jupiter.debug=true
  jupiter.setCollider("circle",0,0,60)

  saturn=createSprite(600,200,20,20);
  saturn.addImage(saturnImg);
  saturn.scale=0.3
  saturn.debug=true
  saturn.setCollider("circle",0,0,60)

  uranus=createSprite(630,200,20,20);
  uranus.addImage(uranusImg);
  uranus.scale=0.3
  uranus.debug=true
  uranus.setCollider("circle",0,0,60)

  neptune=createSprite(660,200,20,20);
  neptune.addImage(neptuneImg);
  neptune.scale=0.3
  neptune.debug=true
  neptune.setCollider("circle",0,0,60)
}

function draw() {
  background("black"); 
  angle = angle + speed;
  mercury.x= centerX -60 * cos(angle);
  mercury.y= centerY  + 60 * sin(angle);
  venus.x= centerX - 90 * cos(angle);
  venus.y=centerY + 90 * sin(angle);
  earth.x= centerX - 120 * cos(angle);
  earth.y=centerY +  120 * sin(angle);
  mars.x= centerX - 150 * cos(angle);
  mars.y=centerY +  150 * sin(angle);
  jupiter.x= centerX - 180 * cos(angle);
  jupiter.y=centerY + 180 * sin(angle);
  saturn.x= centerX - 210 * cos(angle);
  saturn.y=centerY + 210 * sin(angle);
  uranus.x= centerX - 240 * cos(angle);
  uranus.y=centerY + 240 * sin(angle);
  neptune.x= centerX-270 * cos(angle);
  neptune.y=centerY + 270 * sin(angle);

  if(frameCount%10===0){
    sun.scale=sun.scale+0.02;
  }

  if(sun.isTouching(mercury)) {
    mercury.destroy();
  }
  if(sun.isTouching(venus)) {
    venus.destroy();
  }
  if(sun.isTouching(earth)) {
    earth.destroy();
  }
  if(sun.isTouching(mars)) {
    mars.destroy();
  }
  if(sun.isTouching(jupiter)) {
    jupiter.destroy();
  }
  if(sun.isTouching(saturn)) {
    saturn.destroy();
  }
  if(sun.isTouching(uranus)) {
    uranus.destroy();
  }
  if(sun.isTouching(neptune)) {
    neptune.destroy();
  }
  
  drawSprites();
}