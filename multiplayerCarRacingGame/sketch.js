var database;
var backgroundImg;
var onlineSprite, friendsSprite;
var display = "main";
var userId;
var b;
var signUpForm, signInForm;
var finalKey;
var path1,path2,path3;
var player1;
var x;
var player;8
var gameState;
var onlineForm;
var lastKeyName;
var car1, car2, car3, car4;
var xPos, yPos;
var cars=[]

function preload(){
    backgroundImg = loadImage("assets/background.png");
  // backgroundImg = loadImage("assets/lengthyTrack.png");
    titleImg = loadImage("assets/title.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    database = firebase.database();
    b =   createSprite(width/2, height/2);
    b.addImage("bg", backgroundImg);
    title = createSprite(width/2, height/2-250);
    title.addImage("title", titleImg);
    title.scale = 0.7;

    // playOnline = createSprite(width/2-220,height/2-50, 200,80);
    
    // playWithFriends = createSprite(width/2+185,height/2-50, 200,80);

    // signin = createSprite(width/2-220,height/2-50, 200,80);
    // signin.shapeColor = "blue";

    // signup = createSprite(width/2+185,height/2-50, 200,80);
    // signup.shapeColor = "red";
    
    onlineSprite = createSprite(width/2-220,height/2-50, 200,80);
    onlineSprite.shapeColor = "brown";
    onlineSprite.visible = true;
    
    friendsSprite = createSprite(width/2+185,height/2-50, 200,80);
    friendsSprite.shapeColor = "violet";
    friendsSprite.visible = true;

    two = createSprite(width/2-250,height/2, 200,50);
    three = createSprite(width/2,height/2, 200,50);
    four = createSprite(width/2+250,height/2, 200,50);

    two.shapeColor = "lightblue";
    three.shapeColor = "blue";
    four.shapeColor = "darkblue";

    two.visible = false;
    three.visible = false;
    four.visible = false;

    startSprite = createSprite(width/2-220,height/2+150, 200,80);
    startSprite.shapeColor = "pink";
    startSprite.visible = false;
    
    enterSprite = createSprite(width/2+185,height/2+150, 200,80);
    enterSprite.shapeColor = "lightblue";
    enterSprite.visible = false;


    
}

function draw(){
    background(0);

    if(display == "main"){
        if(mousePressedOver(onlineSprite)){
            onlineSprite.visible=false;
            friendsSprite.visible=false;
            path1="online";
            display ="numberOfPlayers";
        }
        else if(mousePressedOver(friendsSprite)){
            onlineSprite.visible=false;
            friendsSprite.visible=false;
            path1="friends";
            display ="numberOfPlayers";
        }

    }

    else if(display == "numberOfPlayers"){
        two.visible = true;
        three.visible = true;
        four.visible = true;
        if(path1 == "online"){
            if(mousePressedOver(two)){
                path2="two";
                display = "onlineForm";
             //   display = "start_enter";
            }
            else if(mousePressedOver(three)){
                path2="three";
                display = "onlineForm";
             //   display = "start_enter";
            }
            else if(mousePressedOver(four)){
                path2="four";
                display = "onlineForm";
              //  display = "start_enter";
            }
        }
        else if(path1 == "friends"){
            if(mousePressedOver(two)){
                path2="two";
                display = "start_enter";
            }
            else if(mousePressedOver(three)){
                path2="three";
                display = "start_enter";
            }
            else if(mousePressedOver(four)){
                path2="four";
                display = "start_enter";
            }
        }
        

    }

    else if(display == "start_enter"){
        onlineSprite.visible=false;
        friendsSprite.visible=false;
        two.visible = false;
        three.visible = false;
        four.visible = false;
        startSprite.visible = true;
        enterSprite.visible = true;

        if(mousePressedOver(startSprite)){
            display="startForm";
           
    }

        else if(mousePressedOver(enterSprite)){
            display = "enterForm";
        }

    }

    else if(display == "startForm"){
        onlineSprite.visible=false;
        friendsSprite.visible=false;
        two.visible = false;
        three.visible = false;
        four.visible = false;
        startSprite.visible = false;
        enterSprite.visible = false;

        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        var charactersLength = characters.length;
        for (var i = 0; i < charactersLength; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          finalKey = result.slice(0,5);
          console.log(finalKey);
          path3=path1+"/"+path2+"/"+finalKey;
          //path3=path2+"/"+finalKey+"/count";
            }
        player1 = new StartPlayer(finalKey, path3, path2);
        player1.display();
        display = "displayedStartForm";

        console.log("^^^^^^^^^^^^^");
        console.log(player1.numberOfPlayers);
        console.log("%%%%%%%%%%")

    }

    else if(display == "enterForm"){
        onlineSprite.visible=false;
        friendsSprite.visible=false;
        two.visible = false;
        three.visible = false;
        four.visible = false;
        startSprite.visible = false;
        enterSprite.visible = false;

        player = new EnterPlayer(path2);
        player.display();

        display ="displayedEnterForm";
        console.log("^^^^^^^^^^^^^");
        console.log(player.numberOfPlayers);
        console.log("%%%%%%%%%%")

    }

    else if(display == "onlineForm"){
        onlineSprite.visible=false;
        friendsSprite.visible=false;
        two.visible = false;
        three.visible = false;
        four.visible = false;
        startSprite.visible = false;
        enterSprite.visible = false;

        onlineForm = new OnlineForm(path2); //online player
        onlineForm.display();

        console.log("^^^^^^^^^^^^^");
        console.log(onlineForm.numberOfPlayers);
        console.log("%%%%%%%%%%")

        display ="displayedOnlineForm";
    }

    else if(display == "gameMain"){
        if(player!==undefined){
            player.check()
            console.log(">>>>>>>>");
            console.log(player.mode);
            console.log(player.numberOfPlayers);
            console.log(player.key);
            console.log("<<<<<<<<<<")
        }
    }

    //console.log(path3);
    drawSprites();
}
