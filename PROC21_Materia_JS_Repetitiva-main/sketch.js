

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(1500, 900);

	engine = Engine.create();
	world = engine.world;

	groundObj=new ground (width/2,670,width,20);
	leftSide = new ground(1100,600,30,120)
	rightSide = new ground(1400,600,30,120)

	//crear los cuerpos aquí.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(200,200,30,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse (ball.position.x, ball.position.y, 30,30)
  drawSprites();
}

function keyPressed (){
	if (keyCode === UP_ARROW){Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});}
}
