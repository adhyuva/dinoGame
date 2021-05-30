const dino = document.querySelector('.dino');
let isJumping = false;
let gravity = 0.9;

function control (event) {
    if(event.keyCode === 32){
        if(!isJumping){
            isJumping = true;
            jump();
        }
    }
}

document.addEventListener('keyup', control);

function jump () {
    if(!isJumping){
        isJumping = true;
    }
    let position = 0;
    let timerId =  setInterval(function (){
        if(position === 150) {
            clearInterval(timerId)
            console.log("down");
            position -= 30;
            dino.style.bottom = position + "px";
            let downTimerId = setInterval(function () {
                if(position === 30){
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 30
                dino.style.bottom = position + "px";
            },20)
        }
        //move up
        console.log("up");
        position += 30;
        position = poisition * gravity;
        dino.style.bottom = position + "px";
    },20)
}