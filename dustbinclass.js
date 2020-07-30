class dustbin {
    constructor(){
        var options ={
            isStatic:true,
            'restitution':0,   
            'friction':0,
            'density':0
                   }
                   this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
    World.add(world,this.body)

display();{
    var pos=this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
pop();

}
}
}