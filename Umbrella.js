class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.r=50;
        this.image=loadImage("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png");
        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     image(this.image,pos.x,pos.y,300,300);
    }
}