const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var cima, baixo, direita, esquerda;
var wilson;
var pernalonga;
var patolino;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  cima = new Parede(200, 10, 400, 20);
  baixo = new Parede(200, 390, 400, 20);
  direita = new Parede(390, 200, 20, 400);
  esquerda = new Parede(10, 200, 20, 400);

  var wilsonconfig={
    restitution:0.5

  }
  wilson=Bodies.circle(200,100,20,wilsonconfig)
  World.add(world,wilson)

  pernalonga=createImg("right.png");
  pernalonga.position(220,30);
  pernalonga.size(50,50);
  pernalonga.mouseClicked(supremaciva);

  patolino=createImg("up.png");
  patolino.position(20,30);
  patolino.size(50,50);
  patolino.mouseClicked(jordan);
}


function draw() 
{
  background("lightgrey");
  Engine.update(engine);

  cima.mostrar();
  baixo.mostrar();
  direita.mostrar();
  esquerda.mostrar();
  ellipse(wilson.position.x,wilson.position.y,20);
}

function supremaciva(){
Matter.Body.applyForce(wilson,{x:0,y:0},{x:0.03,y:0})

}
function jordan(){
  Matter.Body.applyForce(wilson,{x:0,y:0},{x:0,y:-0.02})
  
  }







