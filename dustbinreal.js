class BinImage {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
        }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image = loadImage("sprites/dustbingreen.png")
    this.body=Bodies.rectangle(x, y, width, 0, options);
    World.add(world, this.body);
    }
    display() 
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
    }
}