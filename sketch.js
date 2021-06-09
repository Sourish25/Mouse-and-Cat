
var cat;
var mouse;
var garden;
var mouseAnim, catAnim;
var mouseImg1, catImg1;
var mouseImg2, catImg2;
var bg,bgImg;

function preload() {
bgImg = loadImage ("Images/garden.png");

catAnim = loadAnimation ("images/cat2.png","images/cat3.png");
catImg1 = loadAnimation ("images/cat4.png");
catImg2 = loadAnimation ("images/cat1.png");

mouseAnim = loadAnimation ("images/mouse2.png","images/mouse3.png");
mouseImg1 = loadAnimation ("images/mouse4.png");
mouseImg2 = loadAnimation ("images/mouse1.png");
}



function setup(){
    createCanvas(1000,800);
    
//Create sprites:
bg = createSprite(500,400);
bg.addImage(bgImg);

cat = createSprite(800,620);
cat.addAnimation("cat",catImg1);
cat.scale=0.2;

mouse = createSprite(200,640);
mouse.addAnimation("mouse",mouseImg1);
mouse.scale = 0.1;

   

}



function draw() {
    background(255);

        if(cat.x - mouse.x < (cat.width - mouse.width)/2){
          cat.addAnimation("catSitting",catImg2);
          cat.changeAnimation("catSitting");
          mouse.addAnimation("mouseEnd",mouseImg2);
          mouse.changeAnimation("mouseEnd");

          cat.velocityX = 0;

    }
    
    drawSprites();
}



function keyPressed(){

//For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseBait",mouseAnim);
mouse.changeAnimation("mouseBait");
cat.addAnimation("catRunning",catAnim);
cat.changeAnimation("catRunning");
cat.velocityX = -3;
  }
}
