const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ball_options={
    restitution:1.0
  }

  ball=Bodies.circle(200,100,60,ball_options);
  World.add(world,ball);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(0,390,800,20,ground_options);
  World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  //console.log(ball);
  circle(ball.position.x,ball.position.y,60);
  rect(ground.position.x,ground.position.y,200,20);
}