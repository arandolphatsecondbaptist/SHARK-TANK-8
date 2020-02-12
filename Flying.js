setSize(800,400);
var txt;
var points = 0;
var lost = false;
var checkOn = false;
var MAX_DY = -4;
var dx = 0;
var dy = 2;
var ax = -8;
var ax2 = -8;
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
var contact = false;
var character = new WebImage("http://www.tidydesign.com/downloads/tidy-twitter-bird.png");
character.setSize(60,60);
character.setPosition(100, 100);
character.setColor(Color.blue);
character.setRotation(-10);
var background = new WebImage("https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/133075956/original/b988b79e8d44cf4cba690f269cc6faf2c2f8e71f/make-2d-game-background-realistic-or-cartoon-style.jpg");
background.setSize(getWidth(),getHeight());

obst = new Rectangle(30, 90);
obst.setPosition(getWidth()/4*3, Randomizer.nextInt(0, getHeight() + 90));
obst.setColor(Randomizer.nextColor());
obst2 = new Rectangle(30, 90);
obst2.setPosition(getWidth()/4*3, Randomizer.nextInt(0, getHeight() + 90));
obst2.setColor(Randomizer.nextColor());

function start(){
    //makeRect(getWidth(),getHeight(),getWidth()-getWidth(),
   // getHeight()-getHeight(),Color.black);
    add(background);
    add(character);
    //setTimer(moveCharacter, 5);
    setTimer(dustCommand, 5);
    if (!contact){
        mouseMoveMethod(moveCharacter);
    }
    add(obst);
    add(obst2);
    setTimer(moveObst,16);
    // terrain1();
    // terrain2();
    //setTimer(animateTerrain,25);
    setTimer(makeText,1);
    //gameOver();
}
// function moveCharacter() {
//     character.move(dx,dy);
//     if(smooth == true){
//       dy = dy-1/6;
//       if(dy <= MAX_DY){
//           dy = MAX_DY;
//       }
//     }
//     if(smooth == false){
//       dy = dy+1/5;
//       if(dy >= 4){
//           dy = 4;
//       }
//     }
//     mouseDragMethod(moveCharacter);
//     // mouseDownMethod(swap);
//     // mouseUpMethod(swap2);
//     if(character.getY() <= getHeight()-getHeight()){
//       lost = true;
//     }
//     if(character.getY()+30 >= getHeight()){
//       lost = true;
//     }
//     if(lost == true){
//         stopTimer(moveCharacter);
//         stopTimer(dustCommand);
//     }
//     if(lost == true){
//       var txt = new Text("You Lost!", "30pt Arial");
//       txt.setPosition(getWidth()/2, getHeight()/2);
//       txt.setColor(Color.red);
//       add(txt);
//     }
//     if(character.getX + 30 == (obst.getX)){
//       lost = true;
//     }
//     if(character.getY + 30 == (obst.getY)){
//       lost = true;
//     }
//     if(character.getY - 30 == (obst.getY)){
//       lost = true;
//     }
//     if(character.getX + 30 == (obst2.getX)){
//       lost = true;
//     }
//     if(character.getY + 30 == (obst2.getY)){
//       lost = true;
//     }
//     if(character.getY - 30 == (obst2.getY)){
//       lost = true;
//     }

// // top front corner
//     var wall = getElementAt(character.getX()+character.getWidth()+1, character.getY());
//     if (wall != null && wall.getColor() != Color.black) lost = true;

//     // top back corner
//     var wallTwo = getElementAt(character.getX()-1, character.getY());
//     if (wallTwo != null && wallTwo.getColor() != Color.black) lost = true;

//     // bottom front corner
//         var wallThree = getElementAt(character.getX(), character.getY()+character.getHeight() + 1);
//     if (wallThree != null && wallThree.getColor() != Color.black) lost = true;

//     // bottom back corner
//     var wallFour = getElementAt(character.getX()+character.getWidth(), character.getY()+character.getHeight() + 1);
//     if (wallFour != null && wallFour.getColor() != Color.black) lost = true;
// }
// function swap(e){
//     smooth = true;
// }
// function swap2(e){
//     smooth = false;
// }
function moveObst(){
    obst.move(ax,ay);
    obst2.move(ax2,ay2);
    var checkUnderBrick2 = getElementAt(obst2.getX(),obst2.getY());
    if(obst.getX() + 30 < 0){ 
        var numOfBricks = Randomizer.nextInt(1,2);
        if (numOfBricks == 2){
            if(obst.getX() + 30 < 0){
                obst.setPosition(getWidth(), Randomizer.nextInt(0, getHeight()/2-90));
            }
            if(obst2.getX() + 30 < 0){
                //if(checkUnderBrick2.getColor)
                obst2.setPosition(getWidth(), Randomizer.nextInt(getHeight()/2, getHeight() - 90));
            }
        }else{
            if(obst.getX() + 30 < 0){
                obst.setPosition(getWidth(), Randomizer.nextInt(0, getHeight()-90));
            }
        }
    }
    if(lost){
        stopTimer(moveObst);
        println('lost');
    }
    obst2.setColor(Randomizer.nextColor());
    obst.setColor(Randomizer.nextColor());
    var brickTest = getElementAt(character.getX()+63,character.getY());
    var brickTest2 = getElementAt(character.getX()+63, character.getY()+60);
    if(brickTest != null && brickTest.getColor() != Color.black || brickTest2 !=null &&
    brickTest2.getColor() !=Color.black){
        //lost=true;
        contact=true;
        setTimer(moveBack, 16);
    }
}
function dustCommand(){
    if (clockCount % delay == 0) {
        moveDust();
        makeDust();
    }
    clockCount++;
    if(lost){
        stopTimer(dustCommand);
    }
    var brickTest = getElementAt(character.getX()+63,character.getY());
    var brickTest2 = getElementAt(character.getX()+63, character.getY()+60);
    if(brickTest != null && brickTest.getColor() != Color.black || brickTest2 !=null &&
    brickTest2.getColor() !=Color.black){
        // lost=true;
        // var over = new Text("You Lost!", "30pt Arial");
        // txt.setPosition(getWidth()/2, getHeight()/2);
        // txt.setColor(Color.red);
        // add(txt);
        // println("done");
    }
}
function makeDust(){
    var circle = new Circle(3);
    circle.setPosition(character.getX(), character.getY()+30);
    circle.setColor(Randomizer.nextColor());
    dust.push(circle);
    add(circle);
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
    if(lost){
        stopTimer(makeText);
    }
}
function moveCharacter(e){
    if(!lost && !contact){
        if(0<=e.getX() && e.getX()<getWidth()){
            if(0<=e.getY() && e.getY()<getHeight()-60){
                character.setPosition(e.getX()-30, e.getY()-30);
            }
        }
        // var brickTest = getElementAt(character.getX()+63,character.getY());
        // var brickTest2 = getElementAt(character.getX()+63, character.getY()+60);
        // if(brickTest != null && brickTest.getColor() != Color.black || brickTest2 !=null &&
        // brickTest2.getColor() !=Color.black){
        //     //lost=true;
        //     contact=true;
        //     setTimer(moveBack, 16);
        // }
    }
    
}
function moveBack(){
    character.setPosition(obst.getX()-60,character.getY());
    contact=true;
    var brickTest = getElementAt(character.getX()+63,character.getY());
    var brickTest2 = getElementAt(character.getX()+63, character.getY()+60);
    if(brickTest != null && brickTest.getColor() != Color.black || brickTest2 !=null &&
    brickTest2.getColor() !=Color.black){
        contact=false;
        stopTimer(moveBack);
    }
    if(character.getX()+60<0){
        stopTimer(moveObst);
        stopTimer(moveBack);
        stopTimer(moveCharacter);
        stopTimer(makeText);
        contact=true;
    }
}
// function gameOver(){
//     if(lost == true){
//         var over = new Text("You Lost!", "30pt Arial");
//         txt.setPosition(getWidth()/2, getHeight()/2);
//         txt.setColor(Color.red);
//         add(txt);
//     }
// }
// function makeRect(width, height, x, y, color){
//     var rect = new Rectangle(width, height);
//     rect.setPosition(x, y);
//     rect.setColor(color);
//     add(rect);
// }
