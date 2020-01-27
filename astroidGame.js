var circles = [];
var delay = 1000;
var scoreDelay = 1000;
var ball;
var display;
var count = 0;
var radius = 7;
var gameOver = false;
var count3 = 8;
var tryAgainColor = "#f04329";
var tryAgainTxtColor = "#faf884";
var degree = 0;
var background;
var spaceMusic = new Audio("https://codehs.com/uploads/e4ab241088d76eedd1331dbc8f913de4");
function start(){
    spaceMusic.play();
    spaceMusic.loop=true;
    runCode();
}
function runCode(){
    background = new WebImage("https://wallpaperplay.com/walls/full/9/d/f/104426.jpg");
    background.setSize(getWidth()*3,getHeight()*3);
    background.setPosition(getWidth()*-2/3,getHeight()*-2/3);
    add(background);
    ball = new Circle(radius);
    ball.setPosition(getWidth()/2, getHeight()/2);
    ball.setColor(Color.white);
    add(ball);
    setTimer(drawCircles, delay);
    setTimer(movingCircles, 20);
    setTimer(score, scoreDelay);
    mouseMoveMethod(moveBall);
    mouseClickMethod(restart);
}
function movingCircles(){
    var aboveBall = getElementAt(ball.getX() + radius+1, ball.getY());
    var leftBall = getElementAt(ball.getX() - radius-1, ball.getY());
    var bellowBall = getElementAt(ball.getX(), ball.getY() - radius-1);
    var rightBall = getElementAt(ball.getX(), ball.getY() + radius+1);
    if(aboveBall && aboveBall.isAstroid || leftBall!=null && leftBall.isAstroid || 
    rightBall&&null && rightBall.isAstroid || bellowBall!= null && bellowBall.isAstroid){
        stopTimer(drawCircles);
        stopTimer(movingCircles);
        stopTimer(score);
        gameOver = true;
        remove (display);
        display = new Text ("YOUR SCORE WAS: "+count);
        display.setColor(Color.white);
        display.setPosition(60,200);
        add(display);
        var tryAgainBox = new Rectangle (200,50);
        tryAgainBox.setPosition (getWidth()/2-100, 250);
        tryAgainBox.setColor(tryAgainColor);
        add(tryAgainBox);
        var tryAgainTxt = new Text ("TRY AGAIN?");
        tryAgainTxt.setColor(tryAgainTxtColor);
        tryAgainTxt.setPosition(125,285);
        add(tryAgainTxt);
    }
    for (var cir of circles){
        cir.move(cir.dx,cir.dy);
    }
    background.rotate(degree,0);
    degree++;
}
function drawCircles(){
    var aboveBall = getElementAt(ball.getX() + radius+1, ball.getY());
    var leftBall = getElementAt(ball.getX() - radius-1, ball.getY());
    var bellowBall = getElementAt(ball.getX(), ball.getY() - radius-1);
    var rightBall = getElementAt(ball.getX(), ball.getY() + radius+1);
    if(aboveBall!=null && aboveBall.isAstroid){
        stopTimer(drawCircles);
        stopTimer(movingCircles);
        stopTimer(score);
        remove (display);
        display = new Text ("YOUR SCORE WAS: "+count);
        display.setPosition(70,200);
        add(display);
    }
    var numOfBalls = count3;
    while (numOfBalls !=0){
        var radius = Randomizer.nextInt(10,30);
        var positionX = Randomizer.nextInt(0,1);
        var positionY = Randomizer.nextInt(0,1);
        var astroid = new WebImage("https://codehs.com/static/img/library/objects/asteroid.png");
        astroid.setSize(radius,radius);
        astroid.isAstroid = true;
        if (positionX == 1){
            if(positionY ==1){
                //very bottom
                var positionXFinal = Randomizer.nextInt(0,getWidth());
                var positionYFinal = Randomizer.nextInt(getHeight(), getHeight()+100);
                astroid.dx = Randomizer.nextInt(-3,3);
                astroid.dy = Randomizer.nextInt(-3,0);
            }else{
               //very top
                var positionXFinal = Randomizer.nextInt(0,getWidth());
                var positionYFinal = Randomizer.nextInt(-100, 0);
                astroid.dx = Randomizer.nextInt(-3,3);
                astroid.dy = Randomizer.nextInt(0,3);
            }
        }
        else{
            if(positionY ==1){
                //very left
                var positionXFinal = Randomizer.nextInt(-100, 0);
                var positionYFinal = Randomizer.nextInt(0,getHeight());
                astroid.dx = Randomizer.nextInt(0,3);
                astroid.dy = Randomizer.nextInt(-3,3);
            }else{
                //very right
                var positionXFinal = Randomizer.nextInt(getWidth(), getWidth()+100);
                var positionYFinal = Randomizer.nextInt(0,getHeight());
                astroid.dx = Randomizer.nextInt(-3,0);
                astroid.dy = Randomizer.nextInt(-3,3);
            }
        }
        astroid.setPosition(positionXFinal,positionYFinal);
        circles.push(astroid);
        add(astroid);
        numOfBalls--;
    }
    if(count%10==0 && count>0){
        delay-=50;
        count3+=5;
        //i+2;
        println(delay);
        return delay;
        println(count3+" & "+numOfBalls);
    }
}
function moveBall(e){
    if (!gameOver){
        ball.setPosition(e.getX(), e.getY());
    }
}
function score(){
    remove (display);
    display = new Text (count);
    display.setPosition(10,30);
    display.setColor(Color.white);
    add(display);
    count++;
    return count;
}
function restart(e){
    var boxClick = getElementAt (e.getX(), e.getY())
    if (boxClick.getColor() == tryAgainColor || boxClick.getColor() == tryAgainTxtColor){
        removeAll();
        circles = [];
        delay = 1000;
        scoreDelay = 1000;
        count = 0;
        gameOver = false;
        count3 = 8;
        runCode();
    }
}
