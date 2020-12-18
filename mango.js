class Mango{
    constructer(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
      this.image = loadImage("Images/mango.png")
      this.body = Bodies.circle(x,y,50,options);
      this.radius = 50;
      World.add(world, this.body);
      
    }
    display(){
      var pos=this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.radius);
    }
}