
class Raindrop{
    constructor(x, y, radius,velocity) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("raindrop.png");
        
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 20,20);
        pop();
      }

      fall(){
        if(this.body.position.y<800){
            this.body.position.y =  this.body.position.y+4;
        }   
      }

      goup(){
        this.body.position.y = random(0,800);
      }
} 