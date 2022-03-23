var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds, cloudImg , obstacles;
var obstacles1 , obstacles2, obstacles3, obstacles4 ,obstacles5 , obstacles6;



var score =0;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
  obstacles1= loadImage("obstacle1.png");
  obstacles2= loadImage("obstacle2.png");
  obstacles3= loadImage("obstacle3.png");
  obstacles4= loadImage("obstacle4.png");
  obstacles5= loadImage("obstacle5.png");
  obstacles6= loadImage("obstacle6.png");
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  //console.log(frameCount);
  text("Score: " +score , 500,50);
  score= score+Math.round(frameCount/60);
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds();
  
  spawnObstacles();

  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){

 // write your code here 
 if(frameCount%60 ===0){
   
 clouds=createSprite(600,100,40,10);
 clouds.addImage("clouds",cloudImg);
 clouds.y =Math.round(random(10,100)); 
 clouds.scale=0.6;

 clouds.lifetime=200;

 clouds.velocityX=-3;
 clouds.depth=trex.depth;
 trex.depth=trex.depth+1;
}
}

function spawnObstacles(){

  if(frameCount%60 ===0){
    obstacles=createSprite(600,165,10,40);
    obstacles.velocityX=-6;
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1 : obstacles.addImage("obstacles" , obstacles1);
    break;

    case 2 : obstacles.addImage("obstacles" , obstacles2);
    break;

    case 3 : obstacles.addImage("obstacles" , obstacles3);
    break;

    case 4 : obstacles.addImage("obstacles" , obstacles4);
    break;

    case 5 : obstacles.addImage("obstacles" , obstacles5);
    break;

    case 6 : obstacles.addImage("obstacles" , obstacles6);
    break;

    default: 
    break;
  }

  obstacles.scale=0.5;

  obstacles.lifetime=300;
  }



}

