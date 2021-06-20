class Polygon{
    constructor(x,y){
      var options = {
        restitution:1,
        density:1,
        friction:1
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("sprites/polygon.js");
      World.add(world,this.body)
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(4);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
  }
  