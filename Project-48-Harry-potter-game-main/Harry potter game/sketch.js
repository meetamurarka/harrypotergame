var gameState="serve";


var grass, grassImg;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25;
var harry, harryImg;
var hor1, hor1Img, hor2, hor2Img, hor3, hor3Img, hor4, hor4Img, hor5, hor5Img, hor6, hor6Img, hor7, hor7Img;

var sword, swordImg;
var hb1,hb2,hb3,hb4,hb5,hb6,hb7,hb8,hb9,hb10;
var e1, e2, e3, enemies, enemiesGroup;
var restart, restartImg;

var score=0;
var horcrux=0;
var clickSound;
var gameover, gameoverImg;
var gameover2, gameover2Img;


//To load all the images
function preload(){
  grassImg= loadImage("background.jpg");
  harryImg= loadImage("harry_potter.png");
  hor1Img = loadImage("hor1.png");
  hor2Img = loadImage("hor2.png");
  hor3Img = loadImage("hor3.png");
  hor4Img = loadImage("hor4.png");
  hor5Img = loadImage("hor5.png");
  hor6Img = loadImage("hor6.png");
  hor7Img = loadImage("hor7.png");
  swordImg = loadImage("Sword.png");
  e1=loadImage("enemies/bellatrix lestrange.png");
  e2=loadImage("enemies/draco malfoy.png");
  e3=loadImage("enemies/voldemort.png");
  gameoverImg = loadImage("game over image.png");
  gameover2Img = loadImage("gameover2.png");
  bgSound = loadSound("Harry Potter.mp3");
  clickSound = loadSound("openSound.mp3");
}
//To create sprites objects and groups
function setup(){
  createCanvas(850,650);
  bgSound.loop();
  harry = createSprite(50,50);
  harry.addImage(harryImg);
  harry.scale=0.2;
  
  hb1 = createSprite(790,600,50,50);
  hb1.shapeColor="red";
  hb2 = createSprite(185,520,50,50);
  hb2.shapeColor="black";
  hb3 = createSprite(225,225,50,50);
  hb3.shapeColor="red";
  hb4 = createSprite(395,175,50,50);
  hb4.shapeColor="black";
  hb5 = createSprite(590,175,50,50);
  hb5.shapeColor="red";
  hb6 = createSprite(490,390,50,50);
  hb6.shapeColor="red";
  hb7 = createSprite(790,490,50,50);
  hb7.shapeColor="black";
  hb8 = createSprite(60,515,50,50);
  hb8.shapeColor="red";
  hb9 = createSprite(400,390,50,50);
  hb9.shapeColor="black";
  hb10 = createSprite(695,165,50,50);
  hb10.shapeColor="black";

  gameover = createSprite(380,320);
  gameover.addImage(gameoverImg);
  gameover.scale= 2;
  gameover.visible=false;

  gameover2 = createSprite(340,320);
  gameover2.addImage(gameover2Img);
  gameover2.scale= 1.1;
  gameover2.visible=false;

  hor1 = createSprite(790, 600);
  hor1.addImage(hor1Img);
  hor1.scale=0.2;
  hor1.visible=false;

  hor2 = createSprite(185, 520);
  hor2.addImage(hor2Img);
  hor2.scale=0.2;
  hor2.visible=false;

  hor3 = createSprite(225,225);
  hor3.addImage(hor3Img);
  hor3.scale=0.2;
  hor3.visible=false;

  hor4 = createSprite(395,175);
  hor4.addImage(hor4Img);
  hor4.scale=0.2;
  hor4.visible=false;

  hor5 = createSprite(590,175);
  hor5.addImage(hor5Img);
  hor5.scale=0.2;
  hor5.visible=false;

  hor6 = createSprite(490,390);
  hor6.addImage(hor6Img);
  hor6.scale=0.15;
  hor6.visible=false;

  hor7 = createSprite(760,490);
  hor7.addImage(hor7Img);
  hor7.scale=0.2;
  hor7.visible=false;


  m1= createSprite(270,120,350,10);
  m1.shapeColor="lightblue";

  m2= createSprite(750,200,10,190);
  m2.shapeColor="lightblue";

  m3= createSprite(350,300,10,350);
  m3.shapeColor="lightblue";
  
  m4= createSprite(675,495,10,115);
  m4.shapeColor="lightblue";
  
  m5= createSprite(690,110,115,10);
  m5.shapeColor="lightblue";
  
  m6= createSprite(550,170,10,110);
  m6.shapeColor="lightblue";
  
  m7= createSprite(220,345,250,10);
  m7.shapeColor="lightblue";
  
  m8= createSprite(450,170,10,110);
  m8.shapeColor="lightblue";
  
  m9= createSprite(600,440,500,10);
  m9.shapeColor="lightblue";
  
  m10= createSprite(600,120,90,10);
  m10.shapeColor="lightblue";

  m11= createSprite(640,170,10,110);
  m11.shapeColor="lightblue";

  m12= createSprite(620,220,190,10);
  m12.shapeColor="yellow";
  m12.velocityX=-2.5;

  m13= createSprite(100,180,10,120);
  m13.shapeColor="lightblue";

  m14= createSprite(100,290,10,110);
  m14.shapeColor="lightblue";

  m15= createSprite(125,470,250,10);
  m15.shapeColor="lightblue";

  m16= createSprite(135,510,10,80);
  m16.shapeColor="lightblue";

  m17= createSprite(245,510,10,80);
  m17.shapeColor="lightblue";

  m18= createSprite(125,560,180,10);
  m18.shapeColor="yellow";
  m18.velocityX=-2.5;

  m19= createSprite(450,285,10,120);
  m19.shapeColor="lightblue";

  m20= createSprite(445,345,190,10);
  m20.shapeColor="lightblue";

  m21= createSprite(535,390,10,90);
  m21.shapeColor="lightblue";

  m22= createSprite(450,390,10,90);
  m22.shapeColor="lightblue";

  m24= createSprite(760,550,180,10);
  m24.shapeColor="lightblue";

  m25= createSprite(245,600,10,120);
  m25.shapeColor="lightblue";

  sword= createSprite(50,50);
  sword.addImage(swordImg);
  sword.x=harry.x;
  sword.y=harry.y;
  sword.velocityX = 0;
  sword.velocityY = 0;
  //sword.lifetime = 100;
  sword.scale = 0.3;
  sword.visible=false;

  
//To create new group
enemiesGroup=new Group();


}

function draw(){
  background(grassImg);

   if(gameState==="serve"){
    textSize(20);
  fill("yellow");
  text("*Note: Press 'p' to play the game.", 250,610);
  text("You can't check the instructions after clicking on 'p'", 270,640);
  
  serve();

    m1.visible=false;
    m2.visible=false;
    m3.visible=false;
    m4.visible=false;
    m5.visible=false;
    m6.visible=false;
    m7.visible=false;
    m8.visible=false;
    m9.visible=false;
    m10.visible=false;
    m11.visible=false;
    m12.visible=false;
    m13.visible=false;
    m14.visible=false;
    m15.visible=false;
    m16.visible=false;
    m17.visible=false;
    m18.visible=false;
    m19.visible=false;
    m20.visible=false;
    m21.visible=false;
    m22.visible=false;
    m24.visible=false;
    m25.visible=false;
    hb1.visible=false;
    hb2.visible=false;
    hb3.visible=false;
    hb4.visible=false;
    hb5.visible=false;
    hb6.visible=false;
    hb7.visible=false;
    hb8.visible=false;
    hb9.visible=false;
    hb10.visible=false;
   }
  
  if(keyDown("p")){
    gameState="play";
  }

  // Create edges and make the sprites bounce off the walls
  edges=createEdgeSprites();
  harry.bounceOff(edges[0]);
  harry.bounceOff(edges[1]);
  harry.bounceOff(edges[2]);
  harry.bounceOff(edges[3]);
  sword.bounceOff(edges[0]);
  sword.bounceOff(edges[1]);
  sword.bounceOff(edges[2]);
  sword.bounceOff(edges[3]);
harry.bounceOff(m1);
harry.bounceOff(m2);
harry.bounceOff(m3);
harry.bounceOff(m4);
harry.bounceOff(m5);
harry.bounceOff(m6);
harry.bounceOff(m7);
harry.bounceOff(m8);
harry.bounceOff(m9);
harry.bounceOff(m10);
harry.bounceOff(m11);

harry.bounceOff(m13);
harry.bounceOff(m14);
harry.bounceOff(m15);
harry.bounceOff(m16);
harry.bounceOff(m17);

harry.bounceOff(m19);
harry.bounceOff(m20);
harry.bounceOff(m21);
harry.bounceOff(m22);

harry.bounceOff(m24);
harry.bounceOff(m25);

sword.bounceOff(m1);
sword.bounceOff(m2);
sword.bounceOff(m3);
sword.bounceOff(m4);
sword.bounceOff(m5);
sword.bounceOff(m6);
sword.bounceOff(m7);
sword.bounceOff(m8);
sword.bounceOff(m9);
sword.bounceOff(m10);
sword.bounceOff(m11);

sword.bounceOff(m13);
sword.bounceOff(m14);
sword.bounceOff(m15);
sword.bounceOff(m16);
sword.bounceOff(m17);

sword.bounceOff(m19);
sword.bounceOff(m20);
sword.bounceOff(m21);
sword.bounceOff(m22);

sword.bounceOff(m24);
sword.bounceOff(m25);


m12.bounceOff(m3);
m12.bounceOff(m2);
m18.bounceOff(edges[0]);
m18.bounceOff(edges[1]);
m18.bounceOff(edges[3]);
m18.bounceOff(m25);
m18.bounceOff(m9);

  if(gameState==="play"){
    m1.visible=true;
   m2.visible=true;
   m3.visible=true;
   m4.visible=true;
   m5.visible=true;
   m6.visible=true;
   m7.visible=true;
   m8.visible=true;
   m9.visible=true;
   m10.visible=true;
   m11.visible=true;
   m12.visible=true;
   m13.visible=true;
   m14.visible=true;
   m15.visible=true;
   m16.visible=true;
   m17.visible=true;
   m18.visible=true;
   m19.visible=true;
   m20.visible=true;
   m21.visible=true;
   m22.visible=true;
   m24.visible=true;
   m25.visible=true;
   hb1.visible=true;
   hb2.visible=true;
   hb3.visible=true;
   hb4.visible=true;
   hb5.visible=true;
   hb6.visible=true;
   hb7.visible=true;
   hb8.visible=true;
   hb9.visible=true;
   hb10.visible=true;

    // To make harry to reach his orginal position when harry is touching the dancing walls(m12 and m18).
if(harry.isTouching(m12)||harry.isTouching(m18)){
  harry.velocityX=0;
  harry.velocityY=0;
  harry.x=50;
  harry.y=50;
  sword.velocityX=0;
  sword.velocityY=0;
  sword.x=50;
  sword.y=50;
  //score=-1;
}
// To destroy the horcrux and increase the score and horcrux hunted value when harry is touching a horcrux 
if(harry.isTouching(hor1)){
  hor1.visible=true;
  hb1.destroy();
  clickSound.play();
}

if(keyCode===32 && harry.isTouching(hor1)){
hor1.destroy();
m25.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor2)){
  hor2.visible=true;
  hb2.destroy();
  clickSound.play();
}
if(keyCode===32 && harry.isTouching(hor2)){
hor2.destroy();
m18.velocityX=0;
m18.x=580;
m18.y=550;
m14.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor3)){
  hor3.visible=true;
  hb3.destroy();
  clickSound.play();
}
if(keyCode===32 && harry.isTouching(hor3)){
hor3.destroy();
m19.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor4)){
  hor4.visible=true;
  hb4.destroy();
  clickSound.play();
}
if(keyCode===32 && harry.isTouching(hor4)){
hor4.destroy();
m11.destroy();
m12.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor5)){
  hor5.visible=true;
  hb5.destroy();
  clickSound.play();
}
if(keyCode===32 && harry.isTouching(hor5)){
hor5.destroy();
m21.destroy();
m20.destroy();
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor6)){
  hor6.visible=true;
  hb6.destroy();
  clickSound.play();
}
if(keyCode===32 && harry.isTouching(hor6)){
hor6.destroy();
m4.destroy();
m18.velocityY=3;
score+=1;
horcrux+=1;
}

if(harry.isTouching(hor7)){
  hor7.visible=true;
  hb7.destroy();
  clickSound.play();
}
if(keyCode===32 && harry.isTouching(hor7)){
hor7.destroy();
m18.destroy();
score+=1;
horcrux+=1;
}
//To make harry reach his orginal position when he touches a fake horcux
if(harry.isTouching(hb8)){
  textSize(15);
  fill("black");
  text("Fake horcrux!",hb8.x-40, hb8.y+80);
  hb8.destroy();
  score-=1;

}

if(harry.isTouching(hb9)){
  textSize(15);
  fill("red");
  text("Fake horcrux!",hb9.x-30, hb9.y+85);
  hb9.destroy();
  score-=1;
}

if(harry.isTouching(hb10)){
  textSize(15);
  fill("red");
  text("Fake horcrux!",hb10.x-45, hb10.y+80);
  hb10.destroy();
  score-=1;
}
//To release harry's friends whenever he destroys a horcrux
fill("red");
textSize(20);
if(horcrux===1){
  text("Ron is released!!!",width-300, 45);
}
if(horcrux===2){
  text("Hermione is released!!!",width-300, 45);
}
if(horcrux===3){
  text("Luna is released!!!",width-300, 45);
}
if(horcrux===4){
  text("Neville is released!!!",width-300, 45);
}
if(horcrux===5){
  text("Ginny is released!!!",width-300, 45);
}
if(horcrux===6){
  text("Hagrid is released!!!",width-300, 45);
}
if(horcrux===7){
  text("Dumbledore is released!!!",width-300, 45);
  text("Press 'e' to end the game & score", width-400, 65);
}

if(keyDown("e")&& horcrux===7){
  gameState="end";
}
  //For harry to move up, down, right and left
if(keyDown(UP_ARROW)){
  harry.y-=10;
  sword.y-=10;
}

if(keyDown(DOWN_ARROW)){
  harry.y+=10;
  sword.y+=10;
}
  
if(keyDown(RIGHT_ARROW)){
  harry.x+=10;
  sword.x+=10;
}

if(keyDown(LEFT_ARROW)){
  harry.x-=10;
  sword.x-=10;
}

//To create enemies
if (frameCount % 150 === 0) {
  enemies = createSprite(random(50, 800),random(50, 600) , 0, 100, 100);
  enemies.velocityX = 4;
  var rand = Math.round(random(1,3));
  switch(rand){
      case 1: enemies.addImage(e1);
      break;
      case 2: enemies.addImage(e2);
      break;
      case 3: enemies.addImage(e3);
      break;
     
  }
  enemies.scale=(0.2,0.2);
  enemiesGroup.add(enemies);
  
}

// To end the game when harry touches the enemies
if(enemiesGroup.isTouching(harry)){
  enemiesGroup.destroyEach();
  gameState="end";
  }
  //To use the sword when pressed 'k'.
  if(keyCode===75){
    sword.visible=true;
    sword.velocityX = -4;
  }
  //To return the sword back wehn pressed 'r'.
  if(keyCode===82){
    sword.x=harry.x;
    sword.y=harry.y;
    sword.velocityX=0;
    sword.velocityY=0;
    sword.visible=false;
  }
 //To destroy the enemies when the sword is touching enemies and return the sword back to harry. 
  if(enemiesGroup.isTouching(sword)){
    enemiesGroup.destroyEach();
    sword.x=harry.x;
    sword.y=harry.y;
sword.visible=false;
sword.velocityX=0;
sword.velocityY=0;
  }
    
  }

  if(gameState==="end"){
    enemiesGroup.destroyEach();
    harry.destroy();
    sword.destroy();
    m1.destroy();
    m2.destroy();
    m3.destroy();
    m4.destroy();
    m5.destroy();
    m6.destroy();
    m7.destroy();
    m8.destroy();
    m9.destroy();
    m10.destroy();
    m11.destroy();
    m12.destroy();
    m13.destroy();
    m14.destroy();
    m15.destroy();
    m16.destroy();
    m17.destroy();
    m18.destroy();
    m19.destroy();
    m20.destroy();
    m21.destroy();
    m22.destroy();
    m24.destroy();
    m25.destroy();
    hor1.destroy();
    hor2.destroy();
    hor3.destroy();
    hor4.destroy();
    hor5.destroy();
    hor6.destroy();
    hor7.destroy();
    hb1.destroy();
    hb2.destroy();
    hb3.destroy();
    hb4.destroy();
    hb5.destroy();
    hb6.destroy();
    hb7.destroy();
    hb8.destroy();
    hb9.destroy();
    hb10.destroy();
    gameover.visible=true;

}


  if(gameState==="end"&& horcrux===7){

gameover2.visible=true;

//Feedback
if(score===4 && horcrux===7 ){
  textSize(25);
  fill("lightblue");
  text("Amazing!,",705,370)
  text("Hogwarts is",700,400)
  text("safe now",705,430);
}

if(score===5 && horcrux===7 ){
  textSize(25);
  fill("lightblue");
  text("Excellent!,",705,370)
  text("Hogwarts is",700,400)
  text("safe now",705,430);
}

if(score===6 && horcrux===7 ){
  textSize(25);
  fill("lightblue");
  text("Outstanding!,",705,370)
  text("Hogwarts is",700,400)
  text("safe now",705,430);
}

if(score===7 && horcrux===7 ){
  textSize(25);
  fill("lightblue");
  text("Champion!,",705,370)
  text("Hogwarts is",700,400)
  text("safe now",705,430);
}
  }

    textSize(25);
    fill("pink");
    text("Score: "+score , width-680 , 45);
    text("Horcrux hunted: "+horcrux , width-540 , 45);

//text(mouseX+',' +mouseY,mouseX,mouseY);

  drawSprites();
}

function serve(){

  fill("lightblue");
  textSize(25);
  text("INSTRUCTIONS",100,155);
  textSize(20);
  text("You are harry in the game. His friends and parents are with voldemort.", 70, 200); 
  text("He can only save them by destroying all the 7 horcruxes located in the maze",70,220);
  text("When he solves the maze, voldemort will get killed",70,240);
  text(" and all his friends and parents will get released",70,260);
  text("But, there is a lot of rules, they are:",70,280);
  text("The small squares are the horcrux boxes. The horcrux is inside it",70,300);
  text("You can move harry with the arrow keys",70,320);
  text("As you destroy horcruxes, the walls would get vanished for you to enter",70,340);
  text("But, it is not that easy - harry's enemies will get appeared on the maze.",70,360);
  text("If he touches them he will lose all his power hence he would lose the game",70,380);
  text("So, you can press 'k' to release the gryffindor sword and kill your enemy.",70,400);
  text("If you want the sword to return press 'r'.",70,420);
  text("There are some dancing walls, if you touch them you reach the orginial position",70,440);
  text("There are some fake horcuxes, if you touch them you will lose a point",70,460);
  text("All the best!",70,480);
}
