
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImage

function preload()
{
	boyImage = loadImage("Images/boy.png")
}

function setup() {
	createCanvas(1200, 500);

	//boy = createSprite(200,390,50,50);
	//boy.addImage(boyImage)
	//boy.scale = 0.1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,475,1200,50);
	stone = new Stone(180,300);
	tree = new Tree(800,250,400,500);
	m1 = new Mango(800,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,245,255);
  
  //drawSprites();

  ground.display();
  stone.display();
  tree.display();
  m1.display();
 
}



