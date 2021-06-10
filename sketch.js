
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper2, paperBody;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper2= new Paper(500,630,80,80);
	paperBody=Bodies.circle(500,630,5)
	World.add(world, paperBody);
	
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  paper2.x=paperBody.x;
  paper2.y=paperBody.y;
 
  if(keyCode === UP_ARROW){
	  //Matter.Body.applyForce(paperBody.bodyPos,{x:130,y:-145})
  }

  groundObject.display();
  dustbinObj.display();
  paper2.display();

}

