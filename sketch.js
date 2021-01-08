
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var backgroundImg;

function preload(){
//BG=loadImage("village.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	stone1 = new Stone(160,400,50);
  mango1 = new Mango((random(900,1200)),random(100,300),50);
  mango2 = new Mango((random(900,1200)),random(100,300),50);
  mango3 = new Mango((random(900,1200)),random(100,300),50);
  mango4 = new Mango((random(900,1200)),random(100,300),50);
  mango5 = new Mango((random(900,1200)),random(100,300),50);
  mango6 = new Mango((random(900,1200)),random(100,300),50);
  mango7 = new Mango((random(900,1200)),random(100,300),50);
  tree = new Tree(1000,700);
  ground = new Ground(600,650,1200,20);
  boy1 = new Boy(250,470);

	chain = new Chain(stone1.body,{x:175, y:355});

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //background(BG)
  fill('red');
  textSize(15);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 400,50);
  ground.display();
  tree.display();
  boy1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:160, y:300});
    chain.attach(stone1.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
