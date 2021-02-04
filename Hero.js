class Hero {

constructor(x,y,width,height,angle){
    var options = {
        'density' :1,
        'frictionAir' :0.002, 
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image=loadImage("Superhero-02.png");
    World.add(world,this.body);
    }
  
  display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x,this.body.position.y);
  rotate(angle);
  fill(106,217,242);
  ellipse(0,0,this.width,this.height);
  imageMode(CENTER);
  image(this.image, 0, 0,250,150);
  pop();
  
  }  
}