'use strict'

const bird = document.querySelector('.bird');
const body = document.querySelector('body');

let height = 50;


document.addEventListener('keydown', (event)=>{
    if(event.code === "ArrowUp" && height > 20){
        height -= 30;
        bird.style.top = `${height}%`;
    } else if (event.code === "ArrowDown" && height < 80) {
        height += 30;
        bird.style.top = `${height}%`;
    } 
})
