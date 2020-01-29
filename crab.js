setSize(750 ,400);
var crab;
var shark;
var shark2;
var dx = -15;
var isOnTrack = true;
var count = 0;
var display;
var nemo;
var dory;
var crabRave;
var chomped; 
var meme1;
var meme2;
var meme3;

function start() {
    
    crabRave = new Audio("https://codehs.com/uploads/8a4d0e0739adc7c116da54963ad295d1");
    
    
    // crabRave.play();
    
    startMenu();
    mouseClickMethod(startGame);
    
    // inOcean();
    // keyDownMethod(jump);
    // setTimer(moveSharks, 50);
    // timer();
    // setTimer(timer, 50);
    // setTimer(moveFish, 65);
    
    // distractions();
}

function startGame(e){
    if(e.getX() > 210 && e.getX() < 510 && e.getY() > getHeight()/2 && e.getY() < getHeight()/2 + 100){
        inOcean();
        keyDownMethod(jump);
        setTimer(moveSharks, 50);
        timer();
        setTimer(timer, 50);
        setTimer(moveFish, 65);
    }
}

function startMenu(){
    var ocean = new WebImage("https://codehs.com/uploads/8c6e2e3fde513c9af2eb97426c23edbd");
    ocean.setSize(getWidth(), getHeight());
    ocean.setPosition(0,0);
    add(ocean);
    
    var menuText = new Text("Crab Run", "30pt Arcade Normal");
    menuText.setPosition(200, 100);
    menuText.setColor(Color.white);
    add(menuText);
    
    var playBox = new Rectangle(300, 100);
    playBox.setPosition(210, getHeight()/2);
    playBox.setColor("#000080");
    add(playBox);
    
    var playText = new Text("Play", "30pt Arcade Normal");
    playText.setPosition(275, getHeight()/2 + 70);
    playText.setColor(Color.white);
    add(playText);
}
function scoreboard(){
    
    var lBack = new Rectangle(getWidth(), getHeight());
    lBack.setPosition(0,0);
    lBack.setColor(Color.black);
    add(lBack);
    
    var title = new Text("Leaderboard:", "30pt Arial");
    title.setPosition(getWidth()/2 - 100, 50);
    title.setColor(Color.white);
    add(title);
    
    var spot1 = new Text("1. Trace 2034", "10pt Arial");
    spot1.setPosition(getWidth()/2 - 40, 100);
    spot1.setColor(Color.white);
    add(spot1);
    
    var spot2 = new Text("2. Mueller 2001", "10pt Arial");
    spot2.setPosition(getWidth()/2 - 40, 120);
    spot2.setColor(Color.white);
    add(spot2);
    
    var spot3 = new Text("3. ", "10pt Arial");
    spot3.setPosition(getWidth()/2 - 40, 140);
    spot3.setColor(Color.white);
    add(spot3);
    
    var spot4 = new Text("4. ", "10pt Arial");
    spot4.setPosition(getWidth()/2 - 40, 160);
    spot4.setColor(Color.white);
    add(spot4);
    
    var spot5 = new Text("5. Carter 507", "10pt Arial");
    spot5.setPosition(getWidth()/2 - 40, 180);
    spot5.setColor(Color.white);
    add(spot5);
    
    var mueller = new WebImage("https://codehs.com/uploads/62ec4cef05d960aaabacbace9a8b6fbe");
    mueller.setPosition(-100, 0);
    mueller.setSize(500, 400);
    add(mueller);
    
    var trace = new WebImage("https://codehs.com/uploads/f71022ee76a799003012799ea56c4e30");
    trace.setPosition(375, 50);
    trace.setSize(400, 400);
    add(trace);
}


function jump(e){
    if (e.keyCode == Keyboard.UP && isOnTrack) {
        crab.move(0, -70);
        isOnTrack = false;
        setTimeout(fall, 650);
    }
}

function fall(){
    crab.move(0 , 70);
    isOnTrack = true;
}

function moveSharks(){
    shark.move(dx,0);
    shark2.move(dx,0);
    if(shark2.getX() + shark2.getWidth() < 0){
        shark.setPosition(getWidth(), getHeight() - 80);
        dx--;
    }
    if(shark.getX() + shark.getWidth() > getWidth()/4){
        shark2.setPosition(getWidth(), getHeight() - 80);
    }
}

function inOcean(){
    var ocean = new WebImage("https://codehs.com/uploads/a4709d2318f9330e84cd0a3668ce45ed");
    ocean.setSize(getWidth(), getHeight());
    ocean.setPosition(0,0);
    add(ocean);
    
    crab = new WebImage("https://codehs.com/uploads/ad80a068fa913a2c10dd9eeab492980d");
    crab.setSize(75,75);
    crab.setPosition(0, getHeight() - 80);
    add(crab);
    
    shark = new WebImage("https://codehs.com/uploads/df72d5f4e59377e61df793683754f8d4");
    shark.setSize(100, 75);
    shark.isShark=true;
    shark.setPosition(getWidth(), getHeight() - 80);
    add(shark);
    
    shark2 = new WebImage("https://codehs.com/uploads/df72d5f4e59377e61df793683754f8d4");
    shark2.setSize(100,75);
    shark2.isShark2=true;
    shark2.setPosition(getWidth(), getHeight() - 80);
    add(shark2);
    
    nemo = new WebImage("https://codehs.com/uploads/a58c1a340522e01fc037b506ab1ce7ce");
    nemo.setSize(100,75);
    nemo.setPosition(getWidth()/2, getHeight()/2-15);
    add(nemo);
    
    dory = new WebImage("https://codehs.com/uploads/aed30671eec4a398f53d51cb6d6c83db");
    dory.setSize(100,75);
    dory.setPosition(getWidth()/2, getHeight()/3-50);
    add(dory);
}

function moveFish(){
    nemo.move(dx, 0);
    dory.move(-dx, 0);
    
    if(nemo.getX() + nemo.getWidth() < 0){
        nemo.setPosition(getWidth(), getHeight()/2-15);
    }
    if(dory.getX() > getWidth()){
        dory.setPosition(0, getHeight()/3-50);
    }
}

// function distractions(){ 
//     meme1 = new WebImage("https://codehs.com/uploads/8a8b517a7b75bc62355684143bb2d079");
//     meme1.setSize(150,150);
//     if(count = 500){
//         meme1.setPosition(0, 0);
//         add(meme1);
//         meme1.move(5,5);
//     }
    
//     meme2 = new WebImage("https://codehs.com/uploads/b2369f516350ada4533800e56c67ee45");
//     meme2.setSize(150,150);
//     if(count = 1000){
//         meme2.setPosition(0, 0);
//         add(meme2);
//         meme2.move(5,5);
//     }
    
//     meme3 = new WebImage("https://codehs.com/uploads/002d29828130ac4a00fb69da212d4535");
//     meme3.setSize(150,150);
//     if(count = 1500){
//         meme3.setPosition(0, 0);
//         add(meme3);
//         meme3.move(5,5);
//     }
// }


function timer(){
    remove(display);
    display = new Text(count);
    display.setPosition(10,30);
    display.setColor(Color.white);
    add(display);
    var hit = getElementAt(crab.getX() + crab.getWidth()-20, crab.getY() + 54);
    chomped = new Text("You got chomped!", "30pt Arcade Normal");
    chomped.setPosition(70, getHeight()/2);
    chomped.setColor(Color.white);
    if(hit.isShark){
        println ('you got chomped');
        stopTimer(timer);
        stopTimer(moveSharks);
        stopTimer(moveFish);
        crabRave.pause();
        add(chomped);
        setTimeout(scoreboard,3000);
    }
    if(hit.isShark2){
        println('you got chomped');
        stopTimer(timer);
        stopTimer(moveSharks);
        stopTimer(moveFish);
        crabRave.pause();
        add(chomped);
        setTimeout(scoreboard,3000);
        
    }
    count++;
}
