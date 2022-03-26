const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world, estilo;
var box1, pig1, gordinho,goku;

function preload(){



}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world; 

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(160,260);
    
    estilo=new estil(bird.body,{x:160,y:260})


}

function draw(){
    if(goku)
    background(goku);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   if(keyCode==114){
estilo.prender(bird.body)

   }
   
   
   
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    bird.display();
   
estilo.display();
massa()








}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});


}
function mouseReleased(){ estilo.fly(); }

async function massa(){
var shumacher=await fetch("http://worldtimeapi.org/api/timezone/Asia/Riyadh")
var vettel=await shumacher.json()
var versttapen=vettel.datetime
var alonso=versttapen.slice(11,13)
if(alonso>=8 && alonso<=18){
    goku=loadImage("sprites/OIP.jpg")


}else{goku=loadImage("sprites/massa1.jpg")
}
}










































































































































































































































