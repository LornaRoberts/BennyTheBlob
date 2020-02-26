//set up a timer that counts up in 1 min increments
let hunger=4;
let happiness=4;
let health=4;

function answer(){
return Math.floor(Math.random() * 3)+1;
     }

var i=0;


  function timePassed(){
    i++;
     answer();
     decrease();
     changeStar();
  changeDonut();
  changeHeart();
     if (hunger==0|| happiness==0|| health==0){
   clearInterval(timer);
   hideScreen();
       x();
  }
  }  
    var timer= setInterval('timePassed()', 1000);

//start x, y and z at 4



 //every minute take away 1 randomly from x, y or z 
function decrease(){
     if (answer() === 1){
       hunger--;
     }else if (answer()===2){
       health--;
     }else if(answer()===3){
       happiness--;
     }};

    
  



//on reaching 0, change screen. Give minutes survived.
function showX(){
 var x = document.getElementById("game");
     x.style.display = "block";
}
document.getElementById("restart").onclick = function restart() {
  hideX();
  showX();
  timePassed();
  health=4;
  happiness=4;
  hunger=4;
    if (hunger==0|| happiness==0|| health==0){
   clearInterval(timer);
   hideScreen();
       x();
  }
}
function hideScreen() {
  var y = document.getElementById("game");
     y.style.display = "none";
}
 
function hideX() {
  var z = document.getElementById("dead");
     z.style.display = "none";
}
 function changeStar() {
            var star = document.getElementById('star');
            if (happiness===4) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s1.png";
            }
            else if (happiness===3){
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s2.png";
            }else if (happiness===2){
              star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s3.png";
            }else if (happiness===1){
              star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s4.png";
            }
 }
            
    
 function changeDonut() {
            var star = document.getElementById('donut');
            if (hunger===4) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h1.png";
            }
            else if (hunger===3){
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h2.png";
            }else if (hunger===2){
              star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h3.png";
            }else if (hunger===1){
              star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h4.png";
            }
 }           

       
    
 function changeHeart() {
            var star = document.getElementById('heart');
            if (health===4) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725918/virtual%20pet/l1.png";
            }
            else if (health===3){
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l2.png";
            }else if (health===2){
              star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l3.png";
            }else if (health===1){
              star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l4.png";
            }
 }      

function x(){
    document.getElementById('dead').innerHTML = '<span class="deadline">Oh, no! You killed Benny! You survived for ' + i + ' seconds. Can you do better next time?</span>';
}
  
//when clicking on pill, food , game or drink, make a sou
//on dying, make a sound.
//have a restart button on the death screen

document.getElementById("food").onclick= function feed(){
  if (hunger<4){
    hunger++;
  }
}

document.getElementById("drink").onclick= function feed(){
  if (hunger<4){
    hunger++;
  }
}


document.getElementById("pill").onclick= function heal(){
  if (health<4){
    health++;
  }
}


document.getElementById("games").onclick= function play(){
  if (happiness<4){
    happiness++;
  }
}

  var munchAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562342736/sounds/zapsplat_human_eat_biscuit_mouth_closed_28532.mp3');
     var slurpAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562342736/sounds/zapsplat_human_drink_from_glass_slurp_single_21665.mp3');
var laughAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562343433/sounds/zapsplat_human_male_middle_aged_laugh_slightly_sinister_003_32379.mp3');
var pillAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562343433/sounds/noisecreations_SFX-NCFREE02_Synth-Swell.mp3');
     function myAudioFunction(verb) {
         if(verb === 'munch') {
             munchAudio.play();
         } else if(verb === 'slurp') {
             slurpAudio.play();
         } else if(verb === 'laugh'){
           laughAudio.play();
         }else if(verb === 'pill'){
           pillAudio.play();
         }
     }