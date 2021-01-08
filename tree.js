class Tree
{
  constructor(x,y,width,height)
  {
      var opt = {
          isStatic:true
      }
    this.body=Bodies.rectangle(x,y,width,height,opt) 
    this.height = height;
    this.width = width;
    this.image = loadImage("tree.png")
    World.add(world,this.body)
  }
  display()
  {
      imageMode(CENTER);
      fill(255)
      image(this.image, 1100,300, this.width, this.height);
  }
}