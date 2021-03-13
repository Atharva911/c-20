var rectangle , rectangle2;


function setup() {
  createCanvas(1200,800);

  rectangle=createSprite(200,200,50,80);
  rectangle.shapeColor="orange";

  rectangle2=createSprite(400,200,80,30);
  rectangle2.shapeColor="orange";



   
}

function draw() {
  background(255,255,255); 




  


  

  console.log(rectangle2.x-rectangle.x);

rectangle2.x= World.mouseX;
rectangle2.y=World.mouseY;


  drawSprites();
}

function isTouching(){
  if(rectangle2.x-rectangle.x<rectangle2.width/2+rectangle.width/2 &&
    rectangle.x-rectangle2.x<rectangle2.width/2+rectangle.width/2&&
    rectangle.y-rectangle2.y<rectangle2.height/2+rectangle.height/2&&
    rectangle2.y-rectangle.y<rectangle2.height/2+rectangle.height/2){
    return true
  
  }
  
  
  
  else{
  
    return false
  
  }
};