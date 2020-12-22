// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var pig1;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,40);


  box1 = new Box(800,550,70,70);
  box2 = new Box(1000,550,70,70);
  pig1 = new Pig(900,500);
  log1 = new Log(900,450,300,PI/2);

  box3 = new Box(800,400,70,70);
  box4 = new Box(1000,400,70,70);
  pig2 = new Pig(900,350);
  log2 = new Log(900,300,300,PI/2);

  box5 = new Box(900,250,70,70);
  log3 = new Log(800,200,150,PI/7);
  log4 = new Log (1000,200,150,-PI/7);
  bird = new Bird (200,200)

}

function draw() {
  background(0); 
  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  log3.display();
  log4.display();
  box5.display();
  bird.display();
}