class Mango
{
    constructor(x,y,r)
    {
        var opt={
            isStatic:true,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.image = loadImage("mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r,opt)
        World.add(world,this.body)
    }
    display(){
        var mangopos=this.body.position;
        var angle = this.body.angle;

        push()
        translate(mangopos.x,mangopos.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}