let block = document.querySelector('#block');
let hole = document.querySelector('#hole');
let bird = document.querySelector('#bird');
let jumping = 0;

hole.addEventListener('animationiteration', ()=> {
    
    // Change The Top Position Of The Hole;
    let randomTop = -((Math.random()*300)+150)
    hole.style.top = randomTop + "px";
})


setInterval(()=> {
   let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
   if(jumping == 0){
     bird.style.top = (birdTop+3)+"px";
   }
},10)


function jump(){
    jumping = 1;
    let jumpCount = 0; 
    let jumpInterval = setInterval(()=> {
        jumpCount++
        let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
        if((birdTop>6) && (jumpCount<15)){
            bird.style.top = (birdTop-5)+"px";
        }

        if(jumpInterval>20){
            clearInterval(jumpInterval);
            jumping = 0
            jumpCount =0;
        }
    },10)
}