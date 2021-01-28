
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImg;
var stone;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,390);
	boy.addImage(boyImg);
	boy.scale = 0.12;

	stone = new Stone(200,50);
	
	// Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  drawSprites();
  stone.display();
 
}



