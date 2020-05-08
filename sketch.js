const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,groungimage,ground,randx;
let ra=0, rb=0, startT, deltaT = 3000, doit = false;
var raindropsArray = [];


function preload(){
  groundimage = loadImage("bg.png");
 }
 
 function setup(){
     var canvas = createCanvas(800,800);
     engine = Engine.create();
     world = engine.world;
       
     
     for(i=0;i<500;i++){
     
        randx = random(0,800);
        randy = random(0,50);
        raindropsArray[i] = new Raindrop (randx, randy, 50);
         
     }
 

    }
    function reset(){
      for(i=0;i<500;i++){
        raindropsArray[i].goup();
      }
    }

   

    function draw(){
      background(80,80,80);
      for(i=0;i<500;i++){
        
          raindropsArray[i].display();
          raindropsArray[i].fall();
         
       }
       
       reset();     
       
      
    }
