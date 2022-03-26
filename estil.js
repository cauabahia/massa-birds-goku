class estil{
constructor(bodyA,pointB){
var config={
   bodyA:bodyA,
   pointB:pointB,
   stiffness:0.8
    
}
this.pointB=pointB
this.m62=loadImage("sprites/sling2.png")
this.m32=loadImage("sprites/sling1.png")
this.m31=loadImage("sprites/sling3.png")
this.ingue=Constraint.create(config)
World.add(world,this.ingue)





}

display(){
if(this.ingue.bodyA){   
strokeWeight(6)
   line(this.ingue.bodyA.position.x,this.ingue.bodyA.position.y,this.pointB.x,this.pointB.y)
   line(this.ingue.bodyA.position.x,this.ingue.bodyA.position.y,this.pointB.x+70,this.pointB.y)

}
image(this.m62,170,230)
image(this.m32,200,240)
image(this.m31,200,240)

}
fly(){
this.ingue.bodyA=null


}
prender(body){
this.ingue.bodyA=body

}
}