setSize(800,400);
var txt;
var points = 0;
var lost = false;
var checkOn = false;
var MAX_DY = -4;
var dx = 0;
var dy = 2;
var ax = -2;
var ax2 = -2;
var ax3 = -3;
var ax4 = -3;
var ay = 0;
var ay2 = 0;
var ay3 = 0;
var ay4 = 3;
var smooth = false;
var numBlocks = 0;
var numBlocksTwo = 0;
var moveTerrain = [];
var moveTerrain2 = [];
var dust = [];
var clockCount = 0;
var delay = 2;
var delay2 = 5;
var obst;
var obst2;
var obst3;
var obst4;
//var i;
var screen1;
var screen2;
var moveScreen;
var background;
var song;

var character = new WebImage("https://codehs.com/uploads/1e22a8ce9c9f5b2aee1b80700d726173");
character.setSize(60,60);
character.setPosition(100, 100);
character.setColor(Color.blue);
//character.setRotation(-10);
var background = new WebImage("https://codehs.com/uploads/c87910aa3f30df1f20852df29e0b73e8");
background.setSize(getWidth(),getHeight());

obst = new Circle(10);
obst.setPosition(600, Randomizer.nextInt(0, getHeight() + 90));
obst.setColor(Color.white);
obst2 = new Circle(10);
obst2.setPosition(600, Randomizer.nextInt(0, getHeight() + 90));
obst2.setColor(Color.white);
obst3 = new Circle(10);
obst3.setPosition(600, Randomizer.nextInt(0, getHeight() + 90));
obst3.setColor(Color.white);
obst4 = new Circle(10);
obst4.setPosition(600, Randomizer.nextInt(0, getHeight() + 90));
obst4.setColor(Color.white);

function start(){
    add(background);
    //makeRect(getWidth(),getHeight(),getWidth()-getWidth(),
   // getHeight()-getHeight(),Color.black);
//   add(background);
    song();
    add(character);
    setTimer(moveCharacter, 5);
    setTimer(dustCommand, 5);
    add(obst);
    add(obst2);
    add(obst3);
    add(obst4);
    setTimer(moveObst,4);
    // terrain1();
    // terrain2();
    //setTimer(animateTerrain,25);
    setTimer(makeText,1);
}
function moveCharacter() {
    character.move(dx,dy);
    if(smooth == true){
       dy = dy-1/6;
       if(dy <= MAX_DY){
           dy = MAX_DY;
       }
    }
    if(smooth == false){
       dy = dy+1/5;
       if(dy >= 4){
           dy = 4;
       }
    }
    mouseDownMethod(swap);
    mouseUpMethod(swap2);
    if(character.getY() <= getHeight()-getHeight()){
       lost = true;
    }
    if(character.getY()+30 >= getHeight()){
       lost = true;
    }
    if(lost == true){
        stopTimer(moveCharacter);
        stopTimer(dustCommand);
    }
    if(lost == true){
       var txt = new Text("You Lost!", "30pt Arial");
       txt.setPosition(getWidth()/2, getHeight()/2);
       txt.setColor(Color.red);
       add(txt);
    }
    if(character.getX + 30 == (obst.getX)){
       lost = true;
    }
    if(character.getY + 30 == (obst.getY)){
       lost = true;
    }
    if(character.getY - 30 == (obst.getY)){
       lost = true;
    }
    if(character.getX + 30 == (obst2.getX)){
       lost = true;
    }
    if(character.getY + 30 == (obst2.getY)){
       lost = true;
    }
    if(character.getY - 30 == (obst2.getY)){
       lost = true;
    }
    if(character.getX + 30 == (obst3.getX)){
       lost = true;
    }
    if(character.getY + 30 == (obst3.getY)){
       lost = true;
    }
    if(character.getY - 30 == (obst3.getY)){
       lost = true;
    }
    if(character.getX + 30 == (obst4.getX)){
       lost = true;
    }
    if(character.getY + 30 == (obst4.getY)){
       lost = true;
    }
    if(character.getY - 30 == (obst4.getY)){
       lost = true;
    }

// top front corner
    var wall = getElementAt(character.getX()+character.getWidth()+1, character.getY());
    if (wall != null && wall.getColor() != Color.black) lost = true;

    // top back corner
    var wallTwo = getElementAt(character.getX()-1, character.getY());
    if (wallTwo != null && wallTwo.getColor() != Color.black) lost = true;

    // bottom front corner
        var wallThree = getElementAt(character.getX(), character.getY()+character.getHeight() + 1);
    if (wallThree != null && wallThree.getColor() != Color.black) lost = true;

    // bottom back corner
    var wallFour = getElementAt(character.getX()+character.getWidth(), character.getY()+character.getHeight() + 1);
    if (wallFour != null && wallFour.getColor() != Color.black) lost = true;
}
function swap(e){
    smooth = true;
}
function swap2(e){
    smooth = false;
}
function moveObst(){
    obst.move(ax,ay);
    obst2.move(ax2,ay2);
    obst3.move(ax3,ay3);
    obst4.move(ax4,ay4);
    if(obst.getX() + 30 == 0){
        obst.setPosition(getWidth(), Randomizer.nextInt
        (10, getHeight()/3));
        println ("1");
    }
    if(obst2.getX() + 30 == 0){
        obst2.setPosition(getWidth(), Randomizer.nextInt
        (getHeight()/3, getHeight()/3));
        println("2");
    }
    if(obst3.getX() + 30 == 0){
        obst3.setPosition(getWidth(), Randomizer.nextInt
        (getHeight()/3, getHeight()/3));
        println("3");
    }
    if(obst4.getX() + 30 == 0){
        obst4.setPosition(getWidth(), Randomizer.nextInt
        (getHeight()/3, getHeight()/3));
        println("3");
    }
    if(lost == true){
        stopTimer(moveObst);
    }
    // obst2.setColor(Randomizer.nextColor());
}
function dustCommand(){
    if (clockCount % delay == 0) {
        moveDust();
        makeDust();
    }
    clockCount++;
}
function makeDust(){
    var circle = new Circle(3);
    circle.setPosition(character.getX(), character.getY()+30);
    circle.setColor(Color.white);
    dust.push(circle);
    add(circle)
}
function moveDust(){
    var size = 4;
    for(var d of dust){ 
        d.move(-20,0);
        if (d.getX() == character.getX()-30){
            d.radius = 3;
        }
        if (d.getX() == character.getX()-60){
            d.radius = 2;
        }
        if (d.getX() == character.getX()-90){
            d.radius = 1;
        }
        if (d.getX() == 0){
            remove(d);
        }
    }
}
function makeText(){
    remove(txt);
    txt = new Text(points, "30pt Arial");
    txt.setPosition(10, 40);
    txt.setColor(Color.white);
    add(txt);
    points++;
    if(lost == true){
        stopTimer(makeText);
    }
}

function song(){
    var mySong = new Audio("https://codehs.com/uploads/f7684b173a1adf38951ef3ee90e11b2f")
    mySong.play();
    mySong.loop = true;
}
