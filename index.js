let game = document.getElementById("game");
let blueCar = document.getElementById("blue-car");
let redCar = document.getElementById("red-car");
let result = document.getElementById("result");
let score = document.getElementById("score");
let count = "";
//code for blue car 
blueCar.addEventListener("animationiteration",()=>{
    let direction = ((Math.floor(Math.random()*3)) * 130);
    blueCar.style.left = direction + "px";
    count++;
})

//code for red car
window.addEventListener("keydown" , (e)=>{
   if(e.keyCode == "39") {let raceCar = parseInt( window.getComputedStyle(redCar).getPropertyValue("left"))
   if(raceCar < 260){ redCar.style.left = (raceCar + 130) + "px"}};

   if(e.keyCode == "37") {let raceCar = parseInt( window.getComputedStyle(redCar).getPropertyValue("left"))
   if(raceCar > 0){ redCar.style.left = (raceCar - 130) + "px"}};
  
})

const gameOver = ()=>{
    let blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    let redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
    if((blueCarLeft  == redCarLeft ) && (blueCarTop > 250) && (blueCarTop < 450)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${count}`
        count = 0;
    }
    
}
