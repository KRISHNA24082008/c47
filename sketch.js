var score =0;

var background,Zombie1,Zombie2,Zombie3,bullet,gun;

var backgroundImage, Zombie1Image, Zombie2Image, Zombie3Image, bulletImage, gunImage;

var Zombie1Group, Zombie2Group, Zombie3Group, bulletGroup, gunGroup;

var life =3;
var score =0;
var gamestate =1

var gameState=1
function preload(){
  bgImage=loadImage("Images/background.jpg")
  bg2Image=loadImage("Images/background2.jpg")
  bulletImage=loadImage("Images/bullet.png")
  gunImage=loadImage("Images/gun.png")
  Zombie1Image=loadImage("Images/Zombie1.png")
  Zombie2Image=loadImage("Images/Zombie2.png")
  Zombie3Image=loadImage("Images/Zombie3.png") 
}
function setup() {
  createCanvas(800,800)
  background = createSprite(50,width/2,100,height)
  background.addImage(backgroundImg)

  gun = createSprite(50,width/2,100,height)
  gun.addImage(gunImg)
  gun.scale=0.2;

  scoreboard = createElement("h1");
}
function draw (){
  background(255)

  scoreboard.html("score: "+score)
  scoreboard.style('color:blue')
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY

  if (frameCount % 60 ===0){
    drawzombie1();
  }

  if (frameCount % 60 ===0){
    drawzombie2();
  }

  if (frameCount % 60 ===0){
    drawzombie3();
  }

  if(zombie1Group.collide(bulletGroup)){
    zombieGroup.destroyEach();
    if(life>0){
      score=score+1
    }
  }

  if(zombie2Group.collide(bulletGroup)){
    zombie2Group.destroyEach();
    if(life>0){
      score=score+1
    }
  }

  if(zombie3Group.collide(bulletGroup)){
    zombieGroup.destroyEach();
    if(life>0){
      score=score+1
    }
  }

 }
  
  drawSprites()
}
function drawzombie1(){
  Zombie1 = createSprite(800,random(20,780),40,40);
  Zombie1.addImage(Zombie1Img);
  Zombie1.scale = 0.3;
  Zombie1.velocityX = -8;
  Zombie1.lifetime = 400;
  Zombie1Group.add(Zombie1);
}
function drawzombie2(){
  Zombie2 = createSprite(800,random(20,780),40,40)
  Zombie2.addImage(Zombie2Img)
  Zombie2.scale = 0.02;
  Zombie2.velocityX = -8;
  Zombie2.lifetime = 400;
  Zombie2Group.add(Zombie2)
}
function drawzombie3(){
  Zombie3 = createSprite(800,random(20,780),40,40)
  Zombie3.addImage(Zombie3Img)
  Zombie3.scale = 0.02;
  Zombie3.velocityX = -8;
  Zombie3.lifetime = 400;
  Zombie3Group.add(Zombie3)
}