class Drop{
    constructor(x,y){

        var options={
            restitution:0.1,
            friction:0.1,
            density:0.1
        }
        this.x=x;
        this.y=y;
        this.r=5;
        this.body=Bodies.circle(this.x,this.y,5,options);
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,600)})
        }
    }
    display(){
       fill("blue");
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}