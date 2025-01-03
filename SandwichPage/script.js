const params = new URLSearchParams(window.location.search);
const x = params.get("x");
console.log(x); // Outputs: JohnDoe






let breadUp = document.querySelector(".bread-up");
let breadDown = document.querySelector(".bread-down");
let tomato = document.querySelector(".tomato-figure2")
let meat = document.querySelector(".meat-figure2");
let cucumber =  document.querySelector(".cucumber-figure2");
let cheese = document.querySelector(".cheesefig3");
let onion = document.querySelector(".onion-figure2");

let haram=document.querySelector('.haram');


let priceclass = document.querySelector(".price");

let breadY = -38;
let price = 2;
let positionY = -73;
let zIndex = 2;

let sandwich = document.getElementById("maa");

let score = x!=null ?x:0;
let scorespan = document.querySelector(".score");
let pricespan = document.querySelector(".price1");

let onionclass =0;
let tomatoclass = 0;
let meatclass = 0;
let cheeseclass = 0;
let cucumberclass =0;

let finalise2 = document.querySelector(".sandwich-area");

let container = document.querySelector(".container");

let wrongsound = new Audio("./sounds/wrong.m4a");
let win = new Audio("./sounds/yaay.m4a");

pricespan.innerHTML = `Price : ${price}MAD`;
scorespan.innerHTML=`Your Score : ${score}MAD`;


breadUp.style.visibility = "hidden";

function finalise(){
    breadUp.style.visibility = "visible";

    const sandwichC = finalise2.cloneNode(true);
    
    container.appendChild(sandwichC);

    sandwichC.style.display = "block";
    sandwichC.className = "sandwich-area sandwich2";
    sandwichC.children[1].className = "sandwich ok";
    sandwichC.children[2].children[0].children[0].style.display = "none";
    sandwichC.children[2].children[0].className = "clefin restart";
    sandwichC.children[2].children[0].children[1].innerHTML = "Restart";
    const restart = sandwichC.children[2].children[0].children[1];
    restart.addEventListener('click',()=>{
        window.location.href = "https://yassinelamsaaf.github.io/SandwichMaker/flappySandwich/index.html"
        
    });

    
    

    sandwichC.children[2].children[1].className = "price pricecenter"
    win.play();

}


function clearA(){
    pricespan.innerHTML = `Price : ${price}MAD`;
    scorespan.innerHTML=`Your Score : ${score}MAD`;

    let k=0;
    price = 2;
    while(k < 10){
        let j=0;
        while(j< 2*onionclass){
            removes('onion');
            j++;
        }
        j=0;
        while(j< 2*cheeseclass){
            removes('cheese');
            j++;
        }
        j=0;
        while(j< 2*meatclass){
            removes('meat');
            j++;
        }
        j=0;
        while(j< 2*tomatoclass){
            console.log(tomatoclass +"hi");
            removes('tomato');
            j++;
        }
        j=0;
        while(j< 2*cucumberclass){
            removes('cucumber');
            j++;
        }
            breadUp.style.transform = "translateY(-38px) rotateX(80deg) rotateZ(180deg)"
            tomato.style.display = "none";
        meat.style.display = "none";
        cucumber.style.display = "none";
        cheese.children[0].style.display = "none";
        onion.style.display = "none";
        positionY = -73;
        breadY = -38;
    k++;
}
}
function addElement(e){
    if(breadY < -310){
        finalise();
        return ; 
    }
    let element;
    if(e == 'cheese' && price + 2 <= score){
        element = cheese;
        breadY = breadY - 17;
        const clone1 = element.cloneNode(true);
        sandwich.appendChild(clone1);
        cheeseclass++;
        clone1.className = `cheesefig3 cheese${cheeseclass}`;
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`
        clone1.children[0].style.display = "block";
        clone1.children[0].style.transform =` translateY(${positionY}px) rotateX(75deg) rotateY(4deg) rotateZ(2deg) translateX(0px) translateZ(2px)`;
        clone1.children[0].style.zIndex = zIndex;
        zIndex+=1;
        positionY-=10
        price+=2;
    }
    else if(e == 'cheese' && price + 2 > score){
        scorespan.style.color = "red";
        setTimeout(() => {scorespan.style.color = "#625b00"}, 400);
        scorespan.style.transform ="scale(1.7)";
        setTimeout(() => {scorespan.style.transform ="scale(1)";},2000);
        wrongsound.play();

    }
    if(e == 'onion' && price + 1 <= score){
        element = onion;
        breadY = breadY - 17;
        const clone2 = element.cloneNode(true);
        sandwich.appendChild(clone2);
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`
        clone2.style.display = "block";
        clone2.style.transform =` translateY(${positionY}px) rotateX(75deg)`;
        clone2.style.zIndex = zIndex;
        zIndex+=1;
        positionY-=10;
    
        
        onionclass++;
        clone2.className = `onion-figure2 figures onion${onionclass}`;
        price+=1;
    }
    else if(e == 'onion' && price + 1 > score){
        scorespan.style.color = "red";
        setTimeout(() => {scorespan.style.color = "#625b00"}, 400);
        wrongsound.play();

    }
    if(e == 'tomato' && price + 3 <= score ){
        element = tomato;
        breadY = breadY - 17;
        const clone3 = element.cloneNode(true);
        sandwich.appendChild(clone3);
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`
        clone3.style.display = "block";
        clone3.style.transform =` translateY(${positionY}px) rotateX(75deg)`;
        clone3.style.zIndex = zIndex;
        zIndex+=1;
        positionY-=10;

        tomatoclass++;
        clone3.className = `tomato-figure2 figures tomato${tomatoclass}`;
        price+=3;
    }
    else if(e == 'tomato' && price + 3 > score){
        scorespan.style.color = "red";
        setTimeout(() => {scorespan.style.color = "#625b00"}, 400);
        wrongsound.play();

    }
    if(e == 'meat' && price + 5 <= score){
        element = meat;
        breadY = breadY - 17;
        const clone4 = element.cloneNode(true);
        sandwich.appendChild(clone4);
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`
        clone4.style.display = "block";
        clone4.style.transform =` translateY(${positionY}px) rotateX(75deg)`;
        clone4.style.zIndex = zIndex;
        zIndex+=1;
        positionY-=10;

        meatclass++;
        clone4.className = `meat-figure2 figures meat${meatclass}`;
        price+=5;
    }
    else if(e == 'meat' && price + 5 > score){
        scorespan.style.color = "red";
        setTimeout(() => {scorespan.style.color = "#625b00"}, 400);
        wrongsound.play();

    }
    if(e == 'cucumber' && price + 3 <= score ){
        element = cucumber;
        breadY = breadY - 17;
        const clone6 = element.cloneNode(true);
        sandwich.appendChild(clone6);
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`
        clone6.style.display = "block";
        clone6.style.transform =` translateY(${positionY}px) rotateX(75deg)`;
        clone6.style.zIndex = zIndex;
        zIndex+=1;
        positionY-=10;

        cucumberclass++;
        clone6.className = `cucumber-figure2 figures cucumber${cucumberclass}`;
        price+=3;
    }
    else if(e == 'cucumber' && price + 3 > score){
        scorespan.style.color = "red";
        setTimeout(() => {scorespan.style.color = "#625b00"}, 400);
        wrongsound.play();

    }
    if(e == 'pork'){
        haram.style.transform = "scale(1.7)";
        setTimeout(() => {
            haram.style.transform = "scale(1)";
        }, 1000);
        wrongsound.play();
    }
    pricespan.innerHTML = `Price : ${price}MAD`;
    scorespan.innerHTML=`Your Score : ${score}MAD`;
}

function removes(e){
    if(e == 'cucumber'){
        const removed = document.querySelector(`.cucumber${cucumberclass}`)
        if(removed.style.zIndex == zIndex-1){
            sandwich.removeChild(removed);
            cucumberclass--;
            breadY+=17;
            positionY+=10;
            zIndex--;
            breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`;
            console.log(zIndex);
            price-=3;
        }
    }
    if(e == 'onion'){
        const removed = document.querySelector(`.onion${onionclass}`)
        if(removed.style.zIndex == zIndex-1){
        sandwich.removeChild(removed);
        onionclass--;
        breadY+=17;
        positionY+=10;
        zIndex--;
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`;
        console.log(zIndex);
        price-=1;

        }
    }
    if(e == 'tomato'){
        const removed = document.querySelector(`.tomato${tomatoclass}`)
        if(removed.style.zIndex == zIndex-1){
        sandwich.removeChild(removed);
        tomatoclass--;
        breadY+=17;
        positionY+=10;
        zIndex--;
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`;
        console.log(zIndex);
        price-=3;

        }
    }
    if(e == 'meat'){
        const removed = document.querySelector(`.meat${meatclass}`)
        if(removed.style.zIndex == zIndex-1){
        sandwich.removeChild(removed);
        meatclass--;
        breadY+=17;
        positionY+=10;
        zIndex--;
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`;
        console.log(zIndex);
        price-=5;

        }
    }
    if(e == 'cheese'){
        const removed = document.querySelector(`.cheese${cheeseclass}`)
        if(removed.children[0].style.zIndex == zIndex-1){
        sandwich.removeChild(removed);
        cheeseclass--;
        breadY+=17;
        positionY+=10;
        zIndex--;
        breadUp.style.transform = `translateY(${breadY*0.9}px) rotateX(80deg) rotateZ(180deg)`;
        console.log(zIndex);
        price-=2;

        }
    }
    if(zIndex==2){

        clearA();

    }
    pricespan.innerHTML = `Price : ${price}MAD`;
    scorespan.innerHTML=`Your Score : ${score}MAD`;
}
// function updating(e,numberclass){
//     for(let i = 1; i <=numberclass; i++) {
//         const temp = document.querySelector(`.${e+i}`)
//         temp.style.transform =` translateY(${positionY}px) rotateX(75deg)`;

//     }
// }

