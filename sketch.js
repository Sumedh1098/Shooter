var gun , laser,  background;
var gunImage, laserImage, UFO_1Image, UFO_2Image, UFO_3Image ,UFO_4Image, backgroundImage;

var UFO_1Group, UFO_2Group, UFO_3Group, UFO_4Group;
var laserGroup;

var score = 0;

function preload(){
  backgroundImage = loadImage("space.jpeg");
  laserImage = loadImage("lazer.png");
  gunImage = loadImage("gun.png");
  UFO_1Image = loadImage("UFO_1.png");
  UFO_2Image = loadImage("UFO_2.png");
  UFO_3Image = loadImage("UFO_3.png");
  UFO_4Image = loadImage("UFO_4.png");
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  gun = createSprite(380,220,20,50);
  gun.addImage(gunImage); 
  gun.scale = 0.25;
  
  UFO_1Group = new Group();
  UFO_2Group = new Group();
  UFO_3Group = new Group();
  UFO_4Group = new Group();

  laserGroup = new Group();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  gun.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      UFO_1();
    }
    if (select_balloon == 2) {
      UFO_2();
    }
    if (select_balloon == 3) {
      UFO_3();
    }
    if (select_balloon == 4) {
      UFO_4();
    }
  }
  
  if (laserGroup.isTouching(UFO_1Group)) {
    UFO_1Group.destroyEach();
    laserGroup.destroyEach();
    score+= 5;
  }

  if (laserGroup.isTouching(UFO_2Group)) {
    UFO_2Group.destroyEach();
    laserGroup.destroyEach();
    score+= 15;
  }

  if (laserGroup.isTouching(UFO_3Group)) {
    UFO_3Group.destroyEach();
    laserGroup.destroyEach();
    score+= 10;
  }

  if (laserGroup.isTouching(UFO_4Group)) {
    UFO_4Group.destroyEach();
    laserGroup.destroyEach();
    score+= 10;
  }

  drawSprites();

  textSize(30)
  fill("Yellow")
  text("score: " + score, 50, 50)
}

// Creating  arrows for bow
 function createArrow() {
  var lazer= createSprite(100, 100, 60, 10);
  lazer.addImage(laserImage);
  lazer.x = 360;
  lazer.y=gun.y;
  lazer.velocityX = -4;
  lazer.lifetime = 100;
  lazer.scale = 0.3;
  laserGroup.add(lazer);
}


function UFO_1() {
  var UFO_1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  UFO_1.addImage(UFO_1Image);
  UFO_1.velocityX = 3;
  UFO_1.lifetime = 150;
  UFO_1.scale = 0.025;
  UFO_1Group.add(UFO_1);
}

function UFO_2() {
  var UFO_2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  UFO_2.addImage(UFO_2Image);
  UFO_2.velocityX = 3;
  UFO_2.lifetime = 150;
  UFO_2.scale = 0.25;
  UFO_2Group.add(UFO_2);
}

function UFO_3() {
  var UFO_3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  UFO_3.addImage(UFO_3Image);
  UFO_3.velocityX = 3;
  UFO_3.lifetime = 150;
  UFO_3.scale = 0.25;
  UFO_3Group.add(UFO_3);
}

function UFO_4() {
  var UFO_4 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  UFO_4.addImage(UFO_4Image);
  UFO_4.velocityX = 3;
  UFO_4.lifetime = 150;
  UFO_4.scale = 0.25;
  UFO_4Group.add(UFO_4);
}