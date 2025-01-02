




//board 
let board ;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34; //width/height = 400/228 = 17/22
let birdHeight = 30; 
let birdX =  boardWidth / 8 
let birdY = boardHeight / 2 ;
let birdImg;

let bird = {
    x : birdX,  
    y : birdY,
    width : birdWidth,
    height : birdHeight,
}

//pipes 

let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512; //width/height = 384/3072 = 1/8
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//gamephysics
let velocityX = -0.5; //pipes moving left speed
let velocityY = 0; //bird jump speed 
let gravity = 0.03;

let gameOver = false;
let score = 0;
let start = false;

let wingSound = new Audio("./sounds/sfx_wing.wav");
let hitSound = new Audio("./sounds/sfx_hit.wav");
//let bgm = new Audio("./sounds/01. Ground Theme.mp3");
let bgm = new Audio("./sounds/01. Ground Theme.mp3");
let pointSound = new Audio("./sounds/sfx_point.wav");
let falls = new Audio("./sounds/sfx_swooshing.wav");
let die = new Audio("./sounds/sfx_die.wav");
wingSound.volume = 0.5;
bgm.loop = true;

window.onload = function(){
    board  = document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;
    context = board.getContext("2d");

    //draw flappy bird
    //context.fillStyle = "green";
    //context.fillRect(bird.x, bird.y, bird.width, bird.height);

    //load img 
    birdImg = new Image();
    birdImg.src = "./images/burgericon.png";
    birdImg.onload = function(){
        context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    }
    topPipeImg = new Image();
    topPipeImg.src = "./images/toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./images/bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes , 1500) // every 1.5s 

    document.addEventListener("keydown", moveBird);

}


function update(){
    
    requestAnimationFrame(update);
    if(start == false ){
        context.fillStyle ="white";
        context.font ="45px sans-serif";
        context.fillText("TAP SPACE/UP ",10,200)
        context.fillText(" KEY TO START",2,250)

    }

    if(gameOver == true || start == false){
        bgm.pause();
        bgm.currentTime = 0 ;
        return;
    }

    context.clearRect(0,0, board.width, board.height);

    //bird
    velocityY += gravity;
    //bird.y += velocityY;
    bird.y =Math.max(bird.y+velocityY,0); // apply gravity to current bird.y , limite the bird.y to top og the canvas
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    //if the bird falls off the board
    if(bird.y > board.height){
        gameOver = true;
        falls.play();
    }

    //pipes 
    for(let i =0 ; i<pipeArray.length ; i++){
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img,pipe.x,pipe.y,pipe.width,pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width){
            pointSound.play();
            score +=2.5; //because there is two pipes every one is 50pts
            pipe.passed = true;
        }
        if(detectCollision(bird,pipe)){
            hitSound.play();
            gameOver = true;

        }
    }
    //clear the pipes 

    while(pipeArray.length > 0 && pipeArray[0].x < 0 - pipeWidth){
        pipeArray.shift();//removes first element from the array 
    } 

    //score 
    context.fillStyle ="Green";
    context.font ="45px sans-serif";
    context.fillText(score+" MAD",5,45);

    if(gameOver == true || start == false ){
        die.play();
        context.fillStyle ="white";
        context.fillText("GAME OVER",42,250)
        context.fillText("YOUR SCORE:",35,300)
        context.font ="60px sans-serif";
        context.fillStyle ="Green";
        context.fillText(score+" MAD",100,350)
        

    }


  
}

function placePipes(){

    if(gameOver == true || start == false){
        return;
    }

    let randomPipeY =  pipeY - pipeHeight / 4 - Math.random()*(pipeHeight / 2);
    let openingSpace = board.height/4 ;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false 
    }

    pipeArray.push(topPipe);

    let bottomPipe={
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottomPipe);

}

function moveBird(e){

    if(e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX"){
        if(bgm.paused){
          bgm.play();    
        }
        wingSound.play();
        start = true;
        velocityY = -2; //jumping speed

        //reset the game 
        if(gameOver){
            let x=score;
            console.log(x);
            window.location.href = `/SandwichPage/index.html?x=${encodeURIComponent(x)}`;


           bird.y = birdY;
           pipeArray = [];
           score = 0;
           gameOver = false;
        }
    }

}

function detectCollision(a ,b){
    return  a.x <= b.x + b.width &&
            a.x + a.width >= b.x &&
            a.y <= b.y + b.height &&
            a.y + a.height >= b.y;

}
