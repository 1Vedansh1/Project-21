
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var groundObj, leftSide, rightSide;

function setup() {
	createCanvas(1400,700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	groundObj =new Ground(width/2,670,width,20);
  	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120)
	//Create the Bodies Here.

	ball = Bodies.circle(100,100,20,ball_options);

	World.add(world,ball);

	ellipseMode(RADIUS);
	rectMode(CENTER);
  
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  groundObj.show();
  leftSide.show();
  rightSide.show();
  



  keyPressed(); 
  Engine.update(engine);


}

function keyPressed() {
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:1})
	}
}



