var ground 
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var Sc=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
    bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
      monkey = createSprite(80,315,20,20);
      monkey.addAnimation("moving",monkey_running);
      monkey.scale=0.1;
  
      ground = createSprite(400,350,1100,10);
      ground.velocityX=-4;
     
      console.log(ground.x);
  
      obstacleGroup = new Group;
       FoodGroup = new Group; 
  
}


function draw() {
background("white");
  
  
  spawnObstacles();
  spawnFood();
  
 if(keyDown("space")&& monkey.y >= 160 ){
   monkey.velocityY=-4;
   monkey.changeAnimation()
  }
   monkey.velocityY=monkey.velocityY+0.4; 
  
  if(ground.x<0){
    ground.x=ground.width/2  
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY=0;
    ground.velocityX=0;
    obstacleGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityXEach(0);
  }
 
  Sc=Math.ceil(frameCount/frameRate())
  text("Survival Count:-"+Sc,30,30);
  
  monkey.collide(ground)
  drawSprites(); 
}
function spawnObstacles(){
    if(frameCount %160 === 0){
      var obstacle = createSprite(600,327,50,40);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX= -3;
      obstacle.ifetime= 200;
      
      obstacleGroup.add(obstacle);
        }
  
}
function spawnFood(){
  if(frameCount %140 === 0){
    var banana = createSprite(600,250,50,40);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX= -3;
    banana.lifetime=210;
    
    FoodGroup.add(banana);
  }
}




