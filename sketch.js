const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg;
var hero;

function preload() {
bg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,500,500,20);

  b1 = new Block(580,100,50,50);
  b2 = new Block(580,100,50,50);
  b3 = new Block(580,100,50,50);
  b4 = new Block(580,100,50,50);
  b5 = new Block(580,100,50,50);
  b6 = new Block(580,100,50,50);

  b7 = new Block(650,100,50,50);
  b8 = new Block(650,100,50,50);
  b9 = new Block(650,100,50,50);
  b10 = new Block(650,100,50,50);
  b11 = new Block(650,100,50,50);
  b12 = new Block(650,100,50,50);
  b13 = new Block(650,100,50,50);

  b14 = new Block(720,100,50,50);
  b15 = new Block(720,100,50,50);
  b16 = new Block(720,100,50,50);
  b17 = new Block(720,100,50,50);
  b18 = new Block(720,100,50,50);
  b19 = new Block(720,100,50,50);
  b20 = new Block(720,100,50,50);

  bx = new Block(580,100,50,50);

  hero = new Hero(395,120,100,25);

  rope = new Rope(hero.body,{x:400,y:100});

  monster = new Monster(850,270,55)
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  
  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();

  bx.display();

  rope.display();
  hero.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}