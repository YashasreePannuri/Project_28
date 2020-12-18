class Stone{
    constructer(x,y){
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
      this.image = loadImage("Images/stone.png")
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      
    }
    display(){
        var pos = this.body.position 
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}

