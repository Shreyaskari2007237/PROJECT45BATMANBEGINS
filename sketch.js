const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops=[],umbrella;
var maxDrops=100;
var rand;
var thunder1,thundre2,thunder3,thunder4;
var thunderframe=0;
var Thunder;

function preload(){
    thunder1=loadImage("images/1.png");
    thunder2=loadImage("images/2.png");
    thunder3=loadImage("images/3.png");
    thunder4=loadImage("images/4.png");
}

function setup(){
   var canvas=createCanvas(800,800);
   engine=Engine.create();
   world=engine.world;
    
   umbrella=new Umbrella(50,400);

   for(var i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)));
   }

}
  

function draw(){
   rectMode(CENTER);
   background("black");  
   text(mouseX+","+mouseY,30,45);
   Engine.update(engine);

   if (frameCount % 80 === 0) {
      thunderframe=frameCount;
     Thunder = createSprite(random(100, 1000), 0, 100, 100);
     var rand = Math.round(random(1,5));
   switch(rand){
       case 1: Thunder.addImage(thunder1);
       break;
       case 2: Thunder.addImage(thunder2);
       break;
       case 3: Thunder.addImage(thunder3);
       break;
       case 4: Thunder.addImage(thunder4);
       break;
       default:break;
   }
   Thunder.scale=0.5;
}

if(thunderframe+10===frameCount && Thunder){
   Thunder.destroy();
}
    umbrella.display();

      for(var i=0;i<maxDrops;i++){
         drops[i].display();
         drops[i].update();
      }
      drawSprites();
}   

