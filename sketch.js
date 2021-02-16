var plane1;
var hammer1;
var iron1;
var rubber1;
var sand1;
var sand2;
var sand3;

const Engine = Matter.Engine;  
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  plane1=new Plane(600,height,1200,20);
  hammer1=new Hammer(600,300);
  iron1=new Iron(600,400,50);
  rubber1=new Rubber(700,400);
  sand1=new Sand(350,400,20);
  sand2=new Sand(500,400,20);
  sand3=new Sand(430,400,20);

}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  
  
  plane1.display();
  hammer1.display();
  iron1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();

  drawSprites();
 
}



