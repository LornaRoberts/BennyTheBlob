//set up a timer that counts up in 1 min increments
let hunger=3;
let happiness=3;
let health=3;

function answer(){
     return  Math.floor(Math.random() * 3)+1;
   }

var i = 0;

var timer = setInterval(mechanics, 1000);
function mechanics(){
     i++;
     answer();
     decrease();
     if (hunger==0|| happiness==0|| health==0){
   clearInterval(timer);
   hideScreen();
        }
}
if (hunger<=0||happiness<=0||health<=0){
      clearInterval(timer);
          }

//start x, y and z at 3



 //every minute take away 1 randomly from x, y or z 
function decrease(){
     if (answer() === 1){
       hunger--;
     }else if (answer()===2){
       health--;
     }else if(answer()===3){
       happiness--;
     }};

    
    function restartButton(){
  clearInterval(counter);
  showScreen();
 }



//on reaching 0, change screen. Give minutes survived.
function showScreen() {
  var x = document.getElementById("game");
     x.style.display = "block";
}
function hideScreen() {
  var x = document.getElementById("game");
     x.style.display = "none";
}
   
  

//when clicking on pill, food , game or drink, make a sound.
//on dying, make a sound.
//have a restart button on the death screen






  

  




// Change the inputs below to test
rot13("SERR PBQR PNZC");
