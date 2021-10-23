class OnlineForm{
    constructor(numberOfPlayers){
        this.numberOfPlayers=numberOfPlayers;
        this.key=null;
        this.mode ="online";
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.rank = 0;
        this.fuel = 185;
        this.life = 185;
        this.score = 0;

        this.nameLabel = createElement("Label","Enter your name :");
        this.nameInput = createInput();
        this.submitButton = createButton("Submit");
        this.greeting = createElement("h1");
    }

    positionElements(){
        this.nameLabel.position(width/2-100,height/2-100);
        this.nameInput.position(width/2-100,height/2-80);
        this.submitButton.position(width/2-100, height/2-50);
    }

    hide(){
        this.nameLabel.hide();
        this.nameInput.hide();
        this.submitButton.hide();

    }

    handleMousePressed(){
        this.submitButton.mousePressed(()=>{
            var numOfPlr = this.numberOfPlayers;
            var onlineName = this.nameInput.value();
            var pCount;
            var uKey;
            var gameState = 0;
            var nop;

            if(numOfPlr == "two"){
                database.ref("online/two/lastKey").once("value", (data)=>{
                    this.key = data.val();
                    console.log(this.key);
                    uKey = this.key;

                    
                    database.ref("online/two/"+this.key+"/playerCount").once("value",(data)=>{
                        pCount = data.val();
                        console.log("***");
                        console.log(pCount);
                        nop="two";
                        console.log("***");
                    
                    if((pCount+1)<=2){ 
                        if((pCount+1)==1){
                            x=width/4;
                        }
                        else if((pCount+1) == 2){
                            x = width-(width/4);
                            gameState = 1;
                        }
                    database.ref("online/two/"+this.key+"/player"+(pCount+1)).update({
                        choice : nop,
                        mode: "friends",
                        name:onlineName,
                        positionX:int(x),
                        positionY:height-200,
                        rank:this.rank,
                        score:this.score,
                        fuel:this.fuel,
                        life:this.life
                    });

                    database.ref("online/two/"+this.key).update({
                        playerCount:(pCount+1),
                        gameState:gameState
                    })

                    if((pCount+1)==2){
                        database.ref("online/two").update({
                            lastKey: (this.key+1)
                        });
                        database.ref("online/two/"+(this.key+1)).update({
                            playerCount:0
                        });
                    }
                }
                });
                });
            }




///////////////////////////////////////////////////////////////////////////////////////////////////////////



else if(numOfPlr == "three"){
    database.ref("online/three/lastKey").once("value", (data)=>{
        this.key = data.val();
        console.log(this.key);
        uKey = this.key;

        database.ref("online/three/"+this.key+"/playerCount").once("value",(data)=>{
            pCount = data.val();
            console.log("***");
            console.log(pCount);
            nop="three";
            console.log("***");
        
        if((pCount+1)<=3){ 
            if((pCount+1)==1){
                x=(width/3);
            }
            else if((pCount+1) == 2){
                x = (width/2);
            }
            else if((pCount+1) == 3){
                x = width-(width/3);
                gameState = 1;
            }
        database.ref("online/three/"+this.key+"/player"+(pCount+1)).update({
            choice : nop,
            mode: "friends",
            name:onlineName,
            positionX:int(x),
            positionY:height-200,
            rank:this.rank,
            score:this.score,
            fuel:this.fuel,
            life:this.life
        });

        database.ref("online/three/"+this.key).update({
            playerCount:(pCount+1),
            gameState:gameState
        })

        if((pCount+1)==3){
            database.ref("online/three").update({
                lastKey: (this.key+1)
            });
            database.ref("online/three/"+(this.key+1)).update({
                playerCount:0
            });
        }
    }
    });
    });
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




else if(numOfPlr == "four"){
    database.ref("online/four/lastKey").once("value", (data)=>{
        this.key = data.val();
        console.log(this.key);
        uKey = this.key;

        database.ref("online/four/"+this.key+"/playerCount").once("value",(data)=>{
            pCount = data.val();
            console.log("***");
            console.log(pCount);
            nop="four";
            console.log("***");
        
        if((pCount+1)<=4){ 
            if((pCount+1)==1){   //width = 800
                x=(width/8);   // 100  //100
            }
            else if((pCount+1) == 2){
                x = (width/8)+2*(width/8);  //200 //300
            }
            else if((pCount+1) == 2){
                x = (2*(width/8))+3*(width/8); //300 //500
            }
            else if((pCount+1) == 4){
                x = (3*(width/8))+4*(width/8); //400 //700
                gameState = 1;
            }
        database.ref("online/four/"+this.key+"/player"+(pCount+1)).update({
            choice : nop,
            mode: "friends",
            name:onlineName,
            positionX:int(x),
            positionY:height-200,
            rank:this.rank,
            score:this.score,
            fuel:this.fuel,
            life:this.life
        });

        database.ref("online/four/"+this.key).update({
            playerCount:(pCount+1),
            gameState:gameState
        })

        if((pCount+1)==4){
            database.ref("online/four").update({
                lastKey: (this.key+1)
            });
            database.ref("online/four/"+(this.key+1)).update({
                playerCount:0
            });
        }
    }
    });
    });
}










            // database.ref("online/"+this.numberOfPlayers+"/lastKey").once("value",(data)=>{
            //     this.key = data.val();
            //     console.log(this.key);
            // });
            // database.ref("online/"+this.numberOfPlayers+"/"+this.key).once("value",(data)=>{
            //     var pCount = data.val();
            //     console.log(pCount);
            // });

            // if(this.numberOfPlayers == "two"){
            //     x = width/4;
            // }
            // else if(this.numberOfPlayers == "three"){
            //     x = width/3;
            // }
            // else if(this.numberOfPlayers == "four"){
            //     x = width/8;

            // }se.ref("online/"+this.numberOfPlayers+"/"+this.key).update({
                
            // });
            

            

            


        });
    }
    
    display(){
        this.positionElements();
        this.handleMousePressed();
    }
}