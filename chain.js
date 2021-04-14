class Chain{
    constructor(body1,body2){
        var soptions={bodyA: body1 , bodyB: body2,length:200,stiffness:2}
        this.sling=Constraint.create(soptions);
        World.add(world,this.sling);

    }

    display(){
        var  pos=this.sling.bodyA.position
        var posi=this.sling.bodyB.position
    line(pos.x,pos.y,posi.x,posi.y)
}
}