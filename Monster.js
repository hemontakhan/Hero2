class Monster{
  constructor(x,y,r)
	{
		var options={
		
			restitution:0.3,
			friction:0.5,
            }
            
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image=loadImage("Monster-01.png");
		World.add(world, this.body);

    }
    
	display(){
			
		var post=this.body.position;		

		push()
		translate(post.x, post.y);
		rectMode(CENTER)
		strokeWeight(0);
		fill("orange")
		ellipse(0,0,this.r, this.r);
		imageMode(CENTER);
		image(this.image, 0, 0,170,105);
		pop()
    }
}