var brown = new Color(139,69, 19);
setSize(1200, 600);
var colorPink = "#f5565e";
var isUnder = false;
var dx = 0;
var dy = 0;
var txtDX;
var sight;
var arc;
var ball;
var txtDY = new Text(dy, "30pt Arial");
    txtDY.setPosition(200, 200);
var rim = new Line(80, 200, 150, 200);
    rim.setColor(Color.orange);
    rim.setLineWidth(5);
var goal = {
    rim : rim,
    net1 : makeLine(80,200,85,240,3,Color.white),
    net2 : makeLine(95,200,85,240,3,Color.white),
    net3 : makeLine(95,200,100,240,3,Color.white),
    net4 : makeLine(110,200,102,240,3,Color.white),
    net5 : makeLine(110,200,117,240,3,Color.white),
    net6 : makeLine(125,200,117,240,3,Color.white),
    net7 : makeLine(136,200,130,240,3,Color.white),
    net8 : makeLine(136,200,140,240,3,Color.white),
    net9 : makeLine(150,200,140,240,3,Color.white),
    net10 : makeLine(125,200,130,240,3,Color.white),
    net11 : makeLine(85,240,140,240,3,Color.white)
};
var randomX = Randomizer.nextInt(100, 900);
var randomY = Randomizer.nextInt(-175, 400);

var target {
    middleDot: makeBall(),
    
}

function start(){
    nature();
    Base();
    Rim();
    Wheel();
    Lever(70, 500, 155, 580, 13);
    SupportBeam();
    SupportAngle(145, 520 ,185, 580, 9);
    SupportAngle(149, 515, 115, 580, 9);
    semiCircle();
    wheelDesign(80, 595, 100, 565, 4);
    wheelDesign(80, 565, 100, 595, 4);
    wheelDesign(220, 565, 200, 595, 4);
    wheelDesign(220, 595, 200, 565, 4);
    wheelDesign(108, 580, 72, 580, 4);
    wheelDesign(192, 580, 228, 580, 4);
    Bolt();
    makeBall(15, 100, 350, Color.black);
    addToCanvas(goal);
    setTimer(bounceBall, 10);
    moveObj(goal);
    keyDownMethod(shootBall);
    setTimer(angle,100);
    makePinkLine( 120, 350, 250, 350,10);
    keyDownMethod(animateSight);
    song();
}


function Base(){
    var base = new Rectangle(180,15 );
    base.setColor(brown);
    base.setPosition(60, 570);
    add(base);
}

function Wheel(){
    var wheel1 = new Circle(19);
    wheel1.setColor(brown);
    wheel1.setPosition(90, 580);
    add(wheel1);
    var wheel2 = new Circle(19);
    wheel2.setColor(brown);
    wheel2.setPosition(210, 580);
    add(wheel2);
}

function Lever(x1, y1, x2, y2, width){
    var lever = new Line(x1, y1, x2, y2);
    lever.setColor(brown);
    lever.setLineWidth(width);
    add(lever);
}

function SupportBeam(){
    var support = new Rectangle(15, 65);
    support.setColor(brown);
    support.setPosition(140, 510);
    add(support);
}

function SupportAngle(x1, y1, x2, y2, width){
    var supportAngle = new Line(x1, y1, x2, y2);
    supportAngle.setColor(brown);
    supportAngle.setLineWidth(width);
    add(supportAngle);
}

function semiCircle(){
    var myArc = new Arc(25,140,320,0);
    myArc.setPosition(getWidth()/8-75, getHeight()/2+190);
    myArc.setColor(Color.GRAY);
    add(myArc);
}

function wheelDesign(x1, y1, x2, y2, width){
    var line = new Line(x1, y1, x2, y2);
    line.setColor(Color.GRAY);
    line.setLineWidth(width);
    add(line);
}

function Rim(){
    var rim1 = new Circle(23);
    rim1.setPosition(90, 580);
    rim1.setColor(Color.black);
    add(rim1);
    var rim2 = new Circle(23);
    rim2.setPosition(210, 580);
    rim2.setColor(Color.black);
    add(rim2);
}

function Bolt(){
    var bolt1 = new Circle(5);
    bolt1.setPosition(90, 580);
    bolt1.setColor(Color.black);
    add(bolt1);
    var bolt2 = new Circle(5);
    bolt2.setPosition(210, 580);
    bolt2.setColor(Color.black);
    add(bolt2);
}

function nature(){
    var background = new WebImage("http://hdwpro.com/wp-content/uploads/2016/03/Cool-Nature-Background.jpg");
    background.setSize(1200,600);
    add(background);
}
function song(){
    var mySong = new Audio("https://codehs.com/uploads/e7294ea7674b86fa4e5f73f1c03ac4e8");
    mySong.play();
    mySong.loop = true;
}


function addToCanvas (obj) {
    for (var elem in obj) {
        add(obj[elem])
    }
}

function moveObj (obj) {
    for (var elem in obj) {
        obj[elem].move(randomX, randomY);
    }
}

function makeBall(radius, x, y, color){
    ball = new Circle(radius);
    ball.setPosition(x, y);
    ball.setColor(color);
    add(ball);
}
function makeRect(width, height, x, y, color){
    var rect = new Rectangle(width, height);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
}
function makeText(x, y,text, font, color){
    var txt = new Text(text, font);
    txt.setPosition(100, 200);
    add(txt);
}
function makeLine(x1, y1, x2, y2, width, color){
    var line = new Line(x1, y1, x2, y2);
    line.setColor(color);
    line.setLineWidth(width);
    return line;
}
function makePinkLine(x1, y1, x2, y2, width){
    sight = new Line(x1, y1, x2, y2);
    sight.setColor(colorPink);
    sight.setLineWidth(width);
    add(sight);
}

function Circle(radius, x, y, color){
    var circle = new Circle(radius);
    circle.setPosition(x, y);
    circle.setColor(color);
    add(circle);
}
function makeArc(x1,y1,x2,y2){
    arc = new Arc(5,x1, y1, x2, y2);
    
    arc.setColor(Color.gray);
    add(arc);
}
function animateSight(e){
    if (e.keyCode == Keyboard.UP) {
		sight.rotate(-27.5,0)
	}
	if (e.keyCode == Keyboard.DOWN) {
		sight.rotate(27.5,0)
	}
}
function angle(){
    remove(txtDX);
    remove(txtDY);
    
    if(isUnder == false){
        txtDX = new Text("Width: " + dx, "30pt Arial");
        txtDX.setPosition(250, 30);
    
        txtDY = new Text("Height: " + dy, "30pt Arial");
        txtDY.setPosition(25, 30);
    
        add(txtDX);
    
        add(txtDY);
    }
    if(isUnder){
        stopTimer(angle);
    }
}
function bounceBall(){
    if(isUnder){
        checkWalls();
        gravity();
        ball.move(dx, dy);
    }
    if(ball.getY()+15 > getHeight() && dy < 2 && dy >-2){
        isUnder = false;
        remove(ball);
    }
}
function shootBall(e){
    if (e.keyCode == Keyboard.LEFT && isUnder == false) {
		dx=dx-3
	}
	if (e.keyCode == Keyboard.RIGHT && isUnder == false) {
		dx=dx+3
	}
	if (e.keyCode == Keyboard.UP && isUnder == false) {
		dy=dy-3
	}
	if (e.keyCode == Keyboard.DOWN && isUnder == false) {
		dy=dy+3
	}
	if (e.keyCode == Keyboard.SPACE) {
		isUnder = true;
	}
}
function gravity (){
    if (dy <= getHeight()){
        dy = dy+1/3;
        if(dx < 0){
            dx = dx+1/30;
        }else{
            dx = dx-1/30;
        } 
        if(dy < 0){
            dy = dy+1/15;
        }else{
            dy = dy-1/15;
        } 
    }
}
function checkWalls(){
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
	}
	 
	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
	}
	
	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
		dy = -dy;
	}
	
	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
	}
}