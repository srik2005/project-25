class Box{
constructor(x,y,width,height){
    var options ={
        restitution: 0,
        friction: 0.1
    }

    this.ground= Bodies.rectangle(x,y,width,height,options);
  // this.ground= Bodies.triangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("download.png")
   ////this.ground.addImage(this.image)
    World.add(world,this.ground);

}
disrect(){
  push()
    translate(this.ground.position.x,this.ground.position.y)
   rotate(this.ground.angle)
   imageMode(CENTER) 
   image(this.image,0,0,this.width,this.height)
  // rect(0,0,this.width,this.height);
pop();




}






}





















































