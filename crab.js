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
var dariush;
var meme3;
var meme4;
var trace;
var grant;
var muellerSkin;
var traceSkin;
var lindseySkin;
var johnSkin;
var distractions = [];
var menuText;
var playBox;
var playText;
var skinText;
var carterSkin;
var ocean;
var sadness;
var grantVoice;
var spencer;
var spurlin;
var sponge;
var servicePrefect;
var jeff;

function start() {

    crabRave = new Audio("https://codehs.com/uploads/8a4d0e0739adc7c116da54963ad295d1");

    startMenu();
    mouseClickMethod(startGame);

}

function startMenu(){
    var ocean = new WebImage("https://codehs.com/uploads/8c6e2e3fde513c9af2eb97426c23edbd");
    ocean.setSize(getWidth(), getHeight());
    ocean.setPosition(0,0);
    add(ocean);

    menuText = new Text("Crab Run", "30pt Arcade Normal");
    menuText.setPosition(200, 100);
    menuText.setColor(Color.white);
    add(menuText);

    playBox = new Rectangle(300, 100);
    playBox.setPosition(210, getHeight()/2);
    playBox.setColor("#000080");
    add(playBox);

    playText = new Text("Play", "30pt Arcade Normal");
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

    var spot1 = new Text("1. Mueller 2135", "10pt Arial");
    spot1.setPosition(getWidth()/2 - 40, 100);
    spot1.setColor(Color.white);
    add(spot1);

    var spot2 = new Text("2. Spurlin 2084", "10pt Arial");
    spot2.setPosition(getWidth()/2 - 40, 120);
    spot2.setColor(Color.white);
    add(spot2);

    var spot3 = new Text("3. Trace 2034", "10pt Arial");
    spot3.setPosition(getWidth()/2 - 40, 140);
    spot3.setColor(Color.white);
    add(spot3);

    var spot4 = new Text("4. Josh 2002", "10pt Arial");
    spot4.setPosition(getWidth()/2 - 40, 160);
    spot4.setColor(Color.white);
    add(spot4);

    var spot5 = new Text("5. Mueller and Spurlin 2001", "10pt Arial");
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

    var yourScore= println("Your score was " + count);
}

function skinMenu(){
    skinText = new Text("Select Your Skin", "30pt Arcade Normal");
    skinText.setPosition(60, 100);
    skinText.setColor(Color.white);
    add(skinText);

    muellerSkin = new WebImage("https://codehs.com/uploads/9a7fc089b8e4e9704278ce1a62bf6590");
    muellerSkin.setSize(75, 75);
    muellerSkin.setPosition(40, 175);
    muellerSkin.isMueller = true;
    add(muellerSkin);

    traceSkin = new WebImage("https://codehs.com/uploads/f24d1e08e21ce16bd2929365f77b4a65");
    traceSkin.setSize(75, 75);
    traceSkin.setPosition(180, 175);
    traceSkin.isTrace = true;
    add(traceSkin);

    lindseySkin = new WebImage("https://codehs.com/uploads/e61aa994ba9b19957b6d26c7e623c01e");
    lindseySkin.setSize(75, 75);
    lindseySkin.setPosition(460, 175);
    lindseySkin.isLindsey = true;
    add(lindseySkin);

    johnSkin = new WebImage("https://codehs.com/uploads/295748d73d03fdad77fdd537ea1091f4");
    johnSkin.setSize(75, 75);
    johnSkin.setPosition(605, 175);
    johnSkin.isJohn = true;
    add(johnSkin);

    carterSkin = new WebImage("https://codehs.com/uploads/85f4e705c4fd6aa6ba6bc6bf3696883d");
    carterSkin.setSize(75, 75);
    carterSkin.setPosition(325, 175);
    carterSkin.isCarter = true;
    add(carterSkin);
}

function startGame(e){
    // get elem at the click
    var elem = getElementAt(e.getX(), e.getY());
    var crabSelected = false;

    if(e.getX() > 210 && e.getX() < 510 && e.getY() > getHeight()/2 && e.getY() < getHeight()/2 + 100){
        remove(menuText);
        remove(playBox);
        remove(playText);
        skinMenu();
    }

    // if clicked on Mueller
    if(elem.isMueller) {
        crab = muellerSkin;
        //if clicked on Trace
    } else if (elem.isTrace){
        crab = traceSkin;
        //if clicked on Standard
    } else if (elem.isLindsey){
        crab = lindseySkin;
        //if clicked on John
    } else if (elem.isJohn){
        crab = johnSkin;
        //if clicked on Carter
    } else if (elem.isCarter){
        crab = carterSkin;
    }

    if (crab) {
        crabRave.play();
        keyDownMethod(jump);
        //timer();
        setTimer(timer, 50);
        setTimer(moveFish, 65);
        inOcean();
        setTimer(moveSharks, 50);
    }

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

    // move distractions
    for(var elm of distractions){
        elm.move(elm.dx,elm.dy)
    }
}

function inOcean(){ println('ocean')
    ocean = new WebImage("https://codehs.com/uploads/a4709d2318f9330e84cd0a3668ce45ed");
    ocean.setSize(getWidth(), getHeight());
    ocean.setPosition(0,0);
    add(ocean);

    crab.setSize(75,75);
    crab.setPosition(0, getHeight() - 80);
    add(crab);

    shark = new WebImage("https://codehs.com/uploads/df72d5f4e59377e61df793683754f8d4");
    shark.setSize(100, 75);
    shark.isShark=true;
    shark.setPosition(getWidth(), getHeight() - 80);
    add(shark);

    shark2 = new WebImage("https://codehs.com/uploads/5108934d804696d098506ca66d95f21c");
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

function distract(e){ 
  dariush = new WebImage("https://codehs.com/uploads/5174fbcdd9a178dc499bd490c42bd747");
  dariush.setSize(800,600);
  dariush.setPosition(-200,-200);
  if(count == 500){
      dariush.dx = 2;
      dariush.dy = 2;
      distractions.push(dariush)
      add(dariush);
  }

  trace = new WebImage("https://codehs.com/uploads/7a78c0123b928f6466e615e8163a858f");
  trace.setSize(600,400);
  trace.setPosition(100,0);
  if(count == 750){
      trace.dx = -2;
      trace.dy = 2;
      distractions.push(trace);
      add(trace);
  }
  grant = new WebImage("https://codehs.com/uploads/b05ac59e1ffd4f1f58403dd9a168c70c");
  grant.setSize(400, 600);
  grant.setPosition(0,0);
  if(count == 1000){
      grant.dx = 2;
      grant.dy = 2;
      distractions.push(grant);
      add(grant);
  }
  spencer = new WebImage("https://codehs.com/uploads/e3b659784e3ed54bb81b06ab869800af");
  spencer.setSize(600, 600);
  spencer.setPosition(600, getHeight());
  if(count == 1250){
      spencer.dx = -2;
      spencer.dy = -2;
      distractions.push(spencer);
      add(spencer);
  }
  servicePrefect = new WebImage("https://codehs.com/uploads/b3ab574ba84325174758c3b175a2d537");
  servicePrefect.setSize(400, 400);
  servicePrefect.setPosition(0, 0);
  if(count == 1750){
      servicePrefect.dx = 2;
      servicePrefect.dy = 2;
      distractions.push(servicePrefect);
      add(servicePrefect);
  }
  jeff = new WebImage("https://codehs.com/uploads/20f7cabf1c7047ee3731d96d696e7335");
  jeff.setSize(500, 500);
  jeff.setPosition(300, -200);
  if(count == 2250){
      jeff.dx = -2;
      jeff.dy = 2;
      distractions.push(jeff);
      add(jeff);
  }
  grantVoice = new Audio("https://codehs.com/uploads/5da351a8fc9eb2e62875f920a82a8261");
  if(count == 250){
      grantVoice.play();
  }
}

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
    if (count== 1300){
        crabRave.pause();
        sponge = new Audio("https://codehs.com/uploads/4dfce7a0ec35b878b6b4888fa7fd903d");
        sponge.play();
    }
    if(hit.isShark || hit.isShark2){
        println ('you got chomped');
        stopTimer(timer);
        stopTimer(moveSharks);
        stopTimer(moveFish);
        crabRave.pause();
        sadness= new Audio ("https://codehs.com/uploads/3d7882cbccba9daf84bbbd1eea7aba61");
        sadness.play();
        add(chomped);
        setTimeout(scoreboard,3000);
    }
    if(hit.isShark || hit.isShark2 && count > 1300){
        println ('you got chomped');
        stopTimer(timer);
        stopTimer(moveSharks);
        stopTimer(moveFish);
        crabRave.pause();
        sadness= new Audio ("https://codehs.com/uploads/3d7882cbccba9daf84bbbd1eea7aba61");
        sadness.play();
        sponge.pause();
        add(chomped);
        setTimeout(scoreboard,3000);
        
    }
    

    count++;
    if(count%250 == 0){
       distract();
    }
}
