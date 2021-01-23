
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    //groundObject = new Ground(600,height,1200,20)
    basket1 = new Basket(920,320,70,70);
   
    
    paperObject= new Paper(150,200,20,20);
    
	

	

	//Create the Bodies Here.


	
  
}


function draw() {
 
  background(180);
  Engine.update(engine);
  
  basket1.display();
  paperObject.display();
  //groundObject.display();
 
  
  
 
}
/*function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.Body,paperObject,Body.position,{x:85,y:-85})
}
}*/


