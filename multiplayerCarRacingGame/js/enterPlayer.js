class EnterPlayer{
    constructor(numberOfPlayers){
       // this.secretKey = secretKey;
       // this.path=startpath;
        this.numberOfPlayers=numberOfPlayers;
        this.mode = "friends";
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.rank = 0;
        this.fuel = 185;
        this.life = 185;
        this.score = 0;
        this.key = null;

        this.nameLabel = createElement("Label","Enter your name :");
        this.nameInput = createInput();
        this.uniqueIDLabel = createElement("Label","Enter your secret word :");
        this.uniqueIDInput = createInput();
        this.submitButton = createButton("Submit");
        this.greeting = createElement("h1");
    
    }
    positionElements(){
        this.nameLabel.position(width/2-100,height/2-100);
        this.nameInput.position(width/2-100,height/2-80);
        this.uniqueIDLabel.position(width/2-100,height/2-50);
        this.uniqueIDInput.position(width/2-100,height/2-30);
        this.submitButton.position(width/2-100, height/2+100);
    }

    hide(){
        this.nameLabel.hide();
        this.nameInput.hide();
        this.uniqueIDLabel.hide();
        this.uniqueIDInput.hide();
        this.submitButton.hide();

    }

    handleMousePressed(){
        gameState=0;
        var nop;
        this.submitButton.mousePressed(()=>{
            console.log("inisde submit button");

            database.ref("friends/two").once("value",(data)=>{
                var k = data.val();
                var uniqueKeys = Object.keys(k);

                for(var i=0; i<uniqueKeys.length; i++){
                    if(uniqueKeys[i] == this.uniqueIDInput.value()){
                        database.ref("friends/two/"+this.uniqueIDInput.value()+"/playerCount").once("value",(data)=>{
                            var pCount = data.val();
                            console.log("***");
                            console.log(pCount);
                            nop = "two";
                            console.log("***");
                            if(pCount <2){
                                this.key=this.uniqueIDInput.value();
                                x=(width)-(width/2);
                                database.ref("friends/two/"+this.uniqueIDInput.value()+"/player"+(pCount+1)).update({
                                    choice : nop,
                                    mode: "friends",
                                    secretKey:this.uniqueIDInput.value(),
                                    name:this.nameInput.value(),
                                    positionX:int(x),
                                    positionY:height-200,
                                    rank:this.rank,
                                    score:this.score,
                                    fuel:this.fuel,
                                    life:this.life
                                });
                                if((pCount+1) == 2){
                                    gameState = 1;
                                    
                                display = "gameMain";
                                }
                                database.ref("friends/two/"+this.uniqueIDInput.value()).update({
                                    playerCount:pCount+1,
                                    gameState:gameState
                                })
                                this.hide();
                                // game = new Game( this.uniqueIDInput.value(), "two");
                            }
                            else{
                                alert("Wrong Key");
                            }
                        });
                    }

                }
            });


            /* ******************************************************************************************** */

            database.ref("friends/three").once("value",(data)=>{
                var k = data.val();
                var uniqueKeys = Object.keys(k);

                for(var i=0; i<uniqueKeys.length; i++){
                    if(uniqueKeys[i] == this.uniqueIDInput.value()){
                        database.ref("friends/three/"+this.uniqueIDInput.value()+"/playerCount").once("value",(data)=>{
                            var pCount = data.val();
                            console.log("***");
                            console.log(pCount);
                            nop="three";
                            console.log("***");
                            
                            this.hide();
                            if(pCount <3){
                                this.key=this.uniqueIDInput.value();
                                if((pCount+1) == 2)
                                {
                                    x=width/2;
                                    var message = `
      Hello ${this.nameInput.value()}
      </br>wait for other player to join...
      </br> The secret key = ${this.uniqueIDInput.value()}`;
      this.greeting.html(message);
            this.greeting.position(width/2-150,height/2);
                                }
                                else if((pCount+1)==3){
                                    x=width-(width/3);
                                    gameState = 1;
                                    
                                display = "gameMain";
                                }

                                database.ref("friends/three/"+this.uniqueIDInput.value()+"/player"+(pCount+1)).update({
                                    choice : nop,
                                    mode: "friends",
                                    secretKey:this.uniqueIDInput.value(),
                                    name:this.nameInput.value(),
                                    positionX:int(x),
                                    positionY:height-200,
                                    rank:this.rank,
                                    score:this.score,
                                    fuel:this.fuel,
                                    life:this.life
                                });
                                database.ref("friends/three/"+this.uniqueIDInput.value()).update({
                                    playerCount:pCount+1,
                                    gameState:gameState
                                })
                                // game = new Game( this.uniqueIDInput.value(), "three");
                            }
                            else{
                                alert("Wrong Key");
                            }
                        });
                    }
                }
            });


            ////////////////////////////////////////////////////////////////////////////////////////////

            database.ref("friends/four").once("value",(data)=>{
                var k = data.val();
                var uniqueKeys = Object.keys(k);

                for(var i=0; i<uniqueKeys.length; i++){
                    if(uniqueKeys[i] == this.uniqueIDInput.value()){
                        database.ref("friends/four/"+this.uniqueIDInput.value()+"/playerCount").once("value",(data)=>{
                            var pCount = data.val();
                            console.log("***");
                            console.log(pCount);
                            nop="four";
                            console.log("***");
                            
                            this.hide();
                            if(pCount <4){
                                this.key=this.uniqueIDInput.value();
                                if((pCount+1) == 2)
                                {
                                    x=(width/8)+2*(width/8);
                                    var message = `
      Hello ${this.nameInput.value()}
      </br>wait for other player to join...
      </br> The secret key = ${this.uniqueIDInput.value()}`;
      this.greeting.html(message);
            this.greeting.position(width/2-150,height/2);
                                }
                                else if((pCount+1)==3){
                                    x=(2*(width/8))+3*(width/8);
                                    var message = `
      Hello ${this.nameInput.value()}
      </br>wait for other player to join...
      </br> The secret key = ${this.uniqueIDInput.value()}`;
      this.greeting.html(message);
            this.greeting.position(width/2-150,height/2);
                                }
                                else if((pCount+1)==4){
                                    x=(3*(width/8))+4*(width/8);
                                    gameState = 1;
                                    
                                display = "gameMain";
                                }

                                database.ref("friends/four/"+this.uniqueIDInput.value()+"/player"+(pCount+1)).update({
                                    choice : nop,
                                    mode: "friends",
                                    secretKey:this.uniqueIDInput.value(),
                                    name:this.nameInput.value(),
                                    positionX:int(x),
                                    positionY:height-200,
                                    rank:this.rank,
                                    score:this.score,
                                    fuel:this.fuel,
                                    life:this.life
                                });
                                database.ref("friends/four/"+this.uniqueIDInput.value()).update({
                                    playerCount:pCount+1,
                                    gameState:gameState
                                })


                                // game = new Game( this.uniqueIDInput.value(), "four");
                            }
                            else{
                                alert("Wrong Key");
                            }
                        });
                    }
                }
            });


            /////////////////////////////////////////////////////////////////////



                








        });


    }
check(){
    database.ref("/"+this.mode+"/"+this.numberOfPlayers+"/").once("value",(data)=>{
        var keysdata = data.val();
        var uKeys = Object.keys(keysdata);


        for(var i=0; i<keysdata.length; i++){
            if(keysdata[i] == this.uniqueIDInput.value()){
                console.log("inside checking game state");
                console.log("IIIIIIIIII");

                database.ref("/"+this.mode+"/"+this.numberOfPlayers+"/"+this.key+"/+gameState").once("value",(data)=>{
                    var gs = data.val();
                    if(gs==1){
                        console.log("Game State = "+gs);
                    }

                });
            }
        }


    })
}
    display(){
        this.positionElements();
        this.handleMousePressed();
        
    }
}