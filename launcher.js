class launcher
{
	constructor(bodyA, pointB)
	{
		var options={
			bodyA:bodyA,
			pointB:pointB,
			stiffness: 0.04,
			length: 10
			}
		this.pointB= pointB;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}