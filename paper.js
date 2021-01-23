class Paper{
    constructor(x,y){
    var options={
        isStatic:true,
        'restituition':0.3,
        'friction':0.5,
        'density':1.2,
    } 
    
    this.body = Bodies.circle(x, y,70, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,70);
    pop();
  }


}