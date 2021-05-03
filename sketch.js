const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var backgroundImg;
var slingshot;


function preload() {
  getBackgroundImage();
  // backgroundImg = loadImage("sprites/bg.png");
 getTime();
}


function setup() {
  createCanvas(820,410);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  stand1 = new Stand(400,300,270,10);
  stand2 = new Stand(700,200,200,10);
  


//level one
block1 = new Block(310,275,30,40);
block2 = new Block(340,275,30,40);
block3 = new Block(370,275,30,40);
block4 = new Block(400,275,30,40);
block5 = new Block(430,275,30,40);
block6 = new Block(460,275,30,40);
block7 = new Block(490,275,30,40);
//level two
block8 = new Block(340,235,30,40);
block9 = new Block(370,235,30,40);
block10 = new Block(400,235,30,40);
block11 = new Block(430,235,30,40);
block12 = new Block(460,235,30,40);
//level three
block13 = new Block(370,195,30,40);
block14 = new Block(400,195,30,40);
block15 = new Block(430,195,30,40);
//level four
block16 = new Block(400,155,30,40);





blocks1 = new Block(640,175,30,40);
blocks2 = new Block(670,175,30,40);
blocks3 = new Block(700,175,30,40);
blocks4 = new Block(730,175,30,40);
blocks5 = new Block(760,175,30,40);

blocks6 = new Block(670,135,30,40);
blocks7 = new Block(700,135,30,40);
blocks8 = new Block(730,135,30,40);

blocks9 = new Block(700,95,30,40);

ball = Bodies.circle(150,100,20);
World.add(world, ball);


slingshot = new Slingshot(this.ball,{x:150,y:100});


}

function draw() {
  if(backgroundImg)
background(backgroundImg);
  Engine.update(engine);

  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("lightblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  stroke(15);
  fill("pink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  stroke(15);
  fill("lightgreen")
  block13.display();
  block14.display();
  block15.display();
 
  stroke(15)
  fill("deepgrey")
  block16.display();
  


  stroke(15)
  fill("lightblue")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("lightgreen")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill("pink")
  blocks9.display();

  text("Drag the polygon to destroy the boxes",200,30);
 
   
  ellipse(this.ball.position.x,this.ball.position.y,20)
  slingshot.display();
  
  drawSprites();


}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}


async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson=await response.json();
  console.log(responseJson);
  var dateTime = responseJson.datetime;
  console.log(dateTime);
  var hour = dateTime.slice(11,13);
  console.log(hour);
  
  if(hour>=06 && hour<=18){
      bg="sprites/bg.png1.jpg";
  }
  else
  {
      bg="sprites/bg.png2.jpg";
  }
  
  backgroundImg=loadImage(bg)
  
  }