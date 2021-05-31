const dino = document.querySelector('.dino');
let isJumping = false;
const grid = document.querySelector(".grid")
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
let position = 0;
function jump () {
    let count = 0;
    if(!isJumping){
        isJumping = true;
    }
    let timerId =  setInterval(function (){
        if(count === 15) {
            clearInterval(timerId)
            console.log("down");
            position -= 30;
            dino.style.bottom = position + "px";
            let downTimerId = setInterval(function () {
                if(count === 0){
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 5; 
                count--;
                position = position * gravity;
                dino.style.bottom = position + "px";
            },20)
        }
        //move up
        console.log("up");
        count++;
        position += 30;
        position = position * gravity;
        dino.style.bottom = position + "px";
    },20)
}
function generateObstacles() {
    let obstaclePosition = 1000
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    grid.appendChild(obstacle)
    obstacle.style.left = obstaclePosition + "px";

    let timerId = setInterval(function(){
        if(obstaclePosition = 0) {
            clearInterval(timerId)
            alert("game over")
        }
        obstaclePosition -= 10;
        obstacle.style.left = obstaclePosition + "px"
    },20)

}
generateObstacles()