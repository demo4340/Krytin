const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;


function setup() {

  var canvas = createCanvas(400,400);
  
  //creating physics engine
  engine = Engine.create();

  // naming the physical world  created along with physics engine
  world = engine.world;

  var object_options = {
    isStatic : true
  }

  //creating a rectangle that follows the rules of physics
  object = Bodies.rectangle(200,100,50,50,object_options);

  //adding the object to the world
  World.add(world,object);


}

function draw() {

  background("black");
  // updating physics engine
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
 
}