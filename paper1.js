class Paper
 {
  constructor(x,y,width,height){
    
  var options={
      isStatic:false,
      'restitution':0.3,
      'friction':0,
      'density':1.2
  }
  this.x=x;
    this.y=y;
    this.bottomBody=Bodies.circle(this.x,this.y,5,{restitution:0.2,isStic:false});
    World.add(world,this.bottomBody);
  
 this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=width;
 this.height=height;
 this.image=loadImage("paper.png");
 World.add(world,this.body);
  }
  display(){
    var bodyPos=this.bottomBody.position;
    
   push ()
  translate (bodyPos.x,bodyPos.y);
   imageMode (CENTER);
   image(this.image,0,0,this.width,this.height);
   pop ()
  }
}