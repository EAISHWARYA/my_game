var lobby2,lobby1,bullet1,billet2,male,female,charac,ff,fl,fr,fb,firebutton,gun1,gun2,mb
,mf,ml,mr,startbutton;
function preload(){
  lobby2=loadImage("imges/lobby.jpg")
  background=loadImage("imges/bg.jpg")
  billet1=loadImage("imges/bullet-1.png")
  bullet2=loadImage("imges/bullet-2.png")
  male=loadImage("imges/male.png")
  female=loadImage("imges/female.png")
  character=loadImage("imges/charecter.png")
  ff=loadImage("imges/female-front.png")
  fl=loadImage("imges/female-left.png")
  fr=loadImage("imges/female-right.png")
  fb=loadImage("imges/female=back.png")
  firebutton=loadImage("imges/fire=button.png")
  gun1=loadImage("imges/gun-1.png")
  gun2=loadImage("imges/gun-2.png")
  mb=loadImage("imges/male-back.png")
  mf=loadImage("imges/male-front.png")
  ml=loadImage("imges/male-left.png")
  mr=loadImage("imges/male-right.png")
  startbutton=loadImage("imges/startbutton.png")
  pet=loadImage("imges/pet.png")
}
function setup() {
  createCanvas(1200,600);
  lobby1=createSprite(550,300,800,400)
  male1=createSprite(550,300,800,400)
  male1.addImage("1",mf)
  male1.scale=0.6;
lobby1.addImage("1",lobby2)
lobby1.scale=1.5;
lobby1.visible=true
start=createSprite(1000,350,800,400)
start.addImage("1",startbutton)
start.scale=0.5;
pet1=createSprite(400,450,800,400)
pet1.addImage("1",pet)
pet1.scale=0.4;
charecter1=createSprite(100,250,800,400)
charecter1.addImage("1",character)
charecter1.visible=true
box=createSprite(200,200,300,180)
box.shapeColor="white"
box.visible=false
male2=createSprite(200,150,10,10)
male2.addImage("1",male)
male2.visible=false
female1=createSprite(200,220,10,10)
female1.addImage("1",female)
female1.visible=false

//bg.visible=false
}

function draw() {
if(mousePressedOver(charecter1)){
  box.visible=true
  male2.visible=true
  female1.visible=true
  lobby1.visible=true
  charecter1.visible=true
}
if(mousePressedOver(female1)){
  female1.visible=false
  male2.visible=false
  box.visible=false
  male1.addImage("1",ff)
  male1.scale=0.4;
  lobby1.visible=true
  charecter1.visible=true
}
if(mousePressedOver(male2)){
  female1.visible=false
  male2.visible=false
  box.visible=false
  male1.addImage("1",mf)
  male1.scale=0.6;
  lobby1.visible=true
  charecter1.visible=true
}
if(mousePressedOver(start)){
  lobby1.visible=false
  female1.visible=false
  male2.destroy()
  box.visible=false
  charecter1.visible=false
  //bg.visible=true
  //bg.scale=1.5;
  
  start.visible=false
  bg=createSprite(550,300,1200,400)
  bg.addImage("1",background)
  bg.scale=1.5;
  bg.velocityX=-2;
  if(bg.x<200){
    bg.x=bg.width/2;
  }
}



 drawSprites();
}