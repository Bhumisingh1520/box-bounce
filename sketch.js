var canvas;
var music;
var box1,box2,box3,box4,box5;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1400,600);


    //create 4 different surfaces

    box1=createSprite(100,500,100,20);
    box1.shapeColor="red";
    box2=createSprite(400,500,100,20);
    box2.shapeColor="blue";
    box3=createSprite(700,500,100,20);
    box3.shapeColor="pink";
    box4=createSprite(1000,500,100,20);
    box4.shapeColor="yellow";
    box5=createSprite(1300,500,100,20);
    box5.shapeColor="green";





    //create box sprite and give velocity

    ball=createSprite(random(20,750));
    ball.velocityY=4;
    ball.velocityX=4;
    ball.scale=0.5;


}

function draw() {
    background("black");
    if(box1.isTouching(ball)){
        ball.shapeColor="red";
        ball.velocityX=0;
        ball.velocityY=0;
    }

    if(box2.isTouching(ball)){
        ball.shapeColor="blue";
        ball.velocityX=0;
        ball.velocityY=0;
    }
  
    if(box3.isTouching(ball)){
        ball.shapeColor="pink";
        ball.velocityX=0;
        ball.velocityY=0;
    }
  
    if(box4.isTouching(ball)){
        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
    }
  
    if(box5.isTouching(ball)){
        ball.shapeColor="green";
        ball.velocityX=0;
        ball.velocityY=0;
    }
  
    //create edgeSprite

    createEdgeSprites()

    
    if(ball.x<0){
        ball.velocityX=4
        ball.velocityY=4
        ball.x=1000
        ball.y=900



    }
    if(ball.x>1000){
        ball.velocityX=-4
        ball.velocityY=-4
        ball.x=1000
        ball.y=900



    }

   
   
  

    //add condition to check if box touching surface and make it box



    drawSprites();
}
