const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,50);
	bin = new DustBin(600, 700, 150,50);
	binLeft = new DustBin(530, 680, 20, 200);
	binRight = new DustBin(670, 680, 20, 200);
	binImage = new BinImage(600,680,130,200);
	ground = new DustBin(400,700,900,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  binLeft.display();
  binRight.display();
  binImage.display();
  bin.display();
  paper.display();
  ground.display();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:80,y:-100});
	}
}



