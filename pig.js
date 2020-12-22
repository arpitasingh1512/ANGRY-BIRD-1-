class Pig{
    constructor(x,y){
        //all the properties of the objects go here
        var  options={
            'restitution':0.8,//bounciness
            'friction': 1.5,
            'density': 1.5
          };

          this.body = Bodies.rectangle(x,y,50,50,options);
          this.width = 50;
          this.height = 50;
          World.add(world,this.body);
    }

    //functions go here
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER)
        fill("blue");
        rect(0,0,this.width,this.height);
        pop()
    }
}