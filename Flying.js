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
var ay2 = 0;
var ay = 0;
var smooth = false;
var numBlocks = 0;
var numBlocksTwo = 0;
// var moveTerrain = [];
// var moveTerrain2 = [];
var dust = [];
var clockCount = 0;
var delay = 2;
var delay2 = 5;
var obst;
var obst2;

var character = new WebImage("http://www.tidydesign.com/downloads/tidy-twitter-bird.png");
character.setSize(60,60);
character.setPosition(100, 100);
character.setColor(Color.blue);
character.setRotation(-10);
var background = new WebImage("https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/133075956/original/b988b79e8d44cf4cba690f269cc6faf2c2f8e71f/make-2d-game-background-realistic-or-cartoon-style.jpg");
background.setSize(getWidth(),getHeight());

obst = new Rectangle(30, 90);
obst.setPosition(300, Randomizer.nextInt(getHeight() - getHeight(), getHeight() + 90));
obst.setColor(Randomizer.nextColor());
obst2 = new Rectangle(30, 90);
obst2.setPosition(300, Randomizer.nextInt(getHeight() - getHeight(), getHeight() + 90));
obst2.setColor(Randomizer.nextColor());

function start(){
    //makeRect(getWidth(),getHeight(),getWidth()-getWidth(),
   // getHeight()-getHeight(),Color.black);
    add(background);
    add(character);
    setTimer(moveCharacter, 5);
    setTimer(dustCommand, 5);
    add(obst);
    add(obst2);
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
    if(obst.getX() + 30 == 0){
        obst.setPosition(getWidth(), Randomizer.nextInt
        (0, getHeight() - 90));
    }
    if(obst2.getX() + 30 == 0){
        obst.setPosition(getWidth(), Randomizer.nextInt
        (0, getHeight() - 90));
    }
    if(lost == true){
        stopTimer(moveObst);
    }
    //obst2.setColor(Randomizer.nextColor());
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
// function makeRect(width, height, x, y, color){
//     var rect = new Rectangle(width, height);
//     rect.setPosition(x, y);
//     rect.setColor(color);
//     add(rect);
// }
// function terrain1(){
//     for(var i = 0; i <= 100; i++){
//         var rect = new Rectangle(10, Randomizer.nextInt(getHeight()-getHeight(),
//         getHeight()-getHeight()+50));
//         rect.setPosition(0+numBlocks, getHeight()-getHeight());
//         rect.setColor(Color.green);
//         add(rect);
//         numBlocks = numBlocks + 5;
//         moveTerrain.push(rect);
//     }
// }
// function terrain2(){
//     for(var i = 0; i <= 100; i++){
//         var rect = new Rectangle(10, Randomizer.nextInt(getHeight()-getHeight(),
//         getHeight()-getHeight()+50));
//         rect.setPosition(getWidth()-numBlocksTwo, getHeight()-rect.getHeight());
//         rect.setColor(Color.green);
//         add(rect);
//         numBlocksTwo = numBlocksTwo + 5;
//         moveTerrain2.push(rect);
//     }
// }
// function animateTerrain(){
//     for(var i = 0; i <= 100; i++){
//         moveTerrain[i].move(-3,0)
//         moveTerrain2[i].move(-3,0)
//         if(moveTerrain[i].getX() < 0){
//             moveTerrain[i].setPosition(getWidth(),0)
//         }
//         if(moveTerrain2[i].getX() < 0){
//             moveTerrain2[i].setPosition(getWidth(),getHeight()-moveTerrain2[i].getHeight())
            
//         }
//         if(lost == true){
//         stopTimer(animateTerrain);
//         }
//     }
//     if (clockCount % delay == 0) {
//         moveDust();
//         makeDust();
//     }
//     clockCount++;
// }
