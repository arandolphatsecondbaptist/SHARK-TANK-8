setSize(800,400);
var redCar;
var blueCar;
var dxRed = 2;
var dyRed = 0;
var dxBlue = 2;
var dyBlue=0;
var blockRed = false;
var blockBlue = false;
var redBoarder = Color.RED;
function start(){
    track();
    car1();
    car2();
    keyDownMethod(direction);
}
function track(){
    var border = new Rectangle(getWidth(),getHeight());
    border.setColor(Color.BLACK);
    add(border);
    var grass = new Rectangle(getWidth()-10,getHeight()-10);
    grass.setPosition(5,5);
    grass.setColor("#2d5438");
    add(grass);
    var outerBoarder = new Oval(getWidth()/4*3+65,getHeight()/2+100);
    outerBoarder.setPosition(getWidth()/2,getHeight()/2);
    outerBoarder.setColor(redBoarder);
    add(outerBoarder);
    var track = new Oval(getWidth()/4*3+50,getHeight()/2+90);
    track.setPosition(getWidth()/2,getHeight()/2);
    track.setColor(Color.BLACK);
    add(track);
    var innerBoarder = new Oval(getWidth()/4*3-80,getHeight()/2-10);
    innerBoarder.setPosition(getWidth()/2,getHeight()/2);
    innerBoarder.setColor(redBoarder);
    add(innerBoarder);
    var innerGrass = new Oval(getWidth()/4*3-90,getHeight()/2-25);
    innerGrass.setPosition(getWidth()/2,getHeight()/2);
    innerGrass.setColor("#2d5438");
    add(innerGrass);
    var finishLine = new Rectangle(10,50);
    finishLine.setPosition(getWidth()/2,55);
    finishLine.setColor(Color.WHITE);
    add(finishLine);
}
function car1(){
    redCar = new WebImage("https://cdn.clipart.email/64392a3e948da407e2747d636fa6f9e9_red-car-top-down-opengameartorg_960-476.svg");
    redCar.setPosition(getWidth()/2-35,55);
    redCar.setSize(35,20);
    add(redCar);
    setTimer(movement1,20);
}
function car2(){
    blueCar = new WebImage("https://cdn.clipart.email/38a4cffedd34f6c60aa4e341317ea8a1_blue-car-top-view-270-clip-art-at-clkercom-vector-clip-art-_300-600.png");
    blueCar.setPosition(getWidth()/2-28,75);
    blueCar.setRotation(-90);
    blueCar.setSize(20,35);
    add(blueCar);
    setTimer(movement2,20);
}
function movement1(){
    if(blockRed == false){
    wallCheck1();
    redCar.move(dxRed,dyRed);
    }
}
function movement2(){
    wallCheck2();
    blueCar.move(dxBlue,dyBlue);
}
function wallCheck1(){
    var elem = getElementAt(redCar.getX() + redCar.getWidth() + 1,redCar.getY()+redCar.getHeight()/2);
        // The black oval is breaking at elem.getColor(), setting a condition to avoid this bug based on its width
        if (elem.width != 650){
            if(elem.getColor() == redBoarder){
                dxRed = 0;
                dyRed = 0;
            }
        }
    
}
function wallCheck2(){
    var elem = getElementAt(blueCar.getX() + blueCar.getWidth() + 1,blueCar.getY()+blueCar.getHeight()/2);
     if (elem.width != 650){
            if(elem.getColor() == redBoarder){
                dxBlue = 0;
                dyBlue = 0;
            }
        }
}
function direction(e){
    if(e.keyCode == Keyboard.letter('W')){
        println("W");
    }
    if(e.keyCode==Keyboard.letter('S')){
        println("S");
    }
    if(e.keyCode==Keyboard.letter('D')){
        println("D");
    }
    if(e.keyCode==Keyboard.letter('A')){
        println("A");
    }
    if(e.keyCode==Keyboard.LEFT){
        println("UP");
    }
    if(e.keyCode==Keyboard.DOWN){
        println("DOWN");
    }
    if(e.keyCode==Keyboard.LEFT){
        println("LEFT");
    }
    if(e.keyCode==Keyboard.RIGHT){
        println("RIGHT");
    }
}
