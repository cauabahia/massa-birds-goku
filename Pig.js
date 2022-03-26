class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image= loadImage("sprites/enemy.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<50){
      var pos =this.body.position;
    
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);

      fill("green");
      image(this.image,0, 0, this.width, this.height);
      pop();}else{World.remove(world,this.body)}
    }
  };
  