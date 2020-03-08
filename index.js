//game starts with life stats of 4 
        let hunger = 4;
        let happiness = 4;
        let health = 4;

        //generate random number which determines which stat will decrease next
        function answer() {
            return Math.floor(Math.random() * 3) + 1;
        }

        //duration counter
        var i = 0, timer;

        //initiates game on page load
        function timePassed() {
            if (health === 0 || happiness === 0 || hunger === 0) {
                    clearInterval(timer);
                    dodo(); 
              timer =null;   
              groan();
            }
          
            message();
            screen();
            i++;
            decrease();
            changeStar();
            changeDonut();
            changeHeart();
            console.log(i)
            console.log(`health: ${health}, happiness: ${happiness}, hunger: ${hunger}`)  
        } 
        
        timer = setInterval(timePassed, 1000);

        //every minute take away 1 from one of the stats
        function decrease() {
            if (answer() === 1) {
                hunger--;
            } else if (answer() === 2) {
                health--;
            } else if (answer() === 3) {
                happiness--;
            }
        }

        //screen of death once one of the stats runs to zero
        function dodo() {
            console.log('called dodo');
            document.getElementById('dead').innerHTML = '<span class="deadline">Oh, no! You killed Benny! </br>You survived for ' + i + ' blips.</br>   Can you do better next time?</span>';

        }
        //click restart button and new game runs
        function restart() {
          hello();
            i = 0;
            health = 4;
            happiness = 4;
            hunger = 4;
            timer = setInterval(timePassed, 1000);
        }


        var button = document.getElementById('restart');

        button.onclick = function () {
            restart();
        };

        //game elements are shown if all stats are above 0 or hidden if any stat is 0
        function screen() {
            var y = document.getElementById("game");
            if (hunger > 0 && health > 0 && happiness > 0) {
                y.style.display = "block";
            } else if (hunger === 0 || health === 0 || happiness === 0) {
                y.style.display = "none";
            }
        };

        //either hides or shows life length depending on being dead or alive
        function message() {
            var z = document.getElementById("dead");
            if (hunger > 0 && health > 0 && happiness > 0) {
                z.style.display = "none";
            } else if (hunger === 0 || health === 0 || happiness === 0) {
                z.style.display = "block";
            }
        }

        //changes star jpg depending on stat level
        function changeStar() {
            var star = document.getElementById('star');
            if (happiness === 4) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s1.png";
            }
            else if (happiness === 3) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s2.png";
            } else if (happiness === 2) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s3.png";
            } else if (happiness === 1) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s4.png";
            }
        }

        //changes donut jpg depending on hunger stat

        function changeDonut() {
            var star = document.getElementById('donut');
            if (hunger === 4) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h1.png";
            }
            else if (hunger === 3) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h2.png";
            } else if (hunger === 2) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h3.png";
            } else if (hunger === 1) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725898/virtual%20pet/h4.png";
            }
        }

        //changes heart jpg depending on health stat level
        function changeHeart() {
            var star = document.getElementById('heart');
            if (health === 4) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725918/virtual%20pet/l1.png";
            }
            else if (health === 3) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l2.png";
            } else if (health === 2) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l3.png";
            } else if (health === 1) {
                star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725919/virtual%20pet/l4.png";
            }
        }

        //increase hunger stat if donut clicked

        document.getElementById("food").onclick = function feed() {
            if (hunger < 4) {
                hunger++;
            }
        }

        document.getElementById("drink").onclick = function feed() {
            if (hunger < 4) {
                hunger++;
            }
        }

        //increase health stat if pill clicked
        document.getElementById("pill1").onclick = function heal() {
            if (health < 4) {
                health++;
            }
        }

        //increase happiness stat if toys played with
        document.getElementById("games").onclick = function play() {
            if (happiness < 4) {
                happiness++;
            }
        }

        //audio files
        var munchAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562342736/sounds/zapsplat_human_eat_biscuit_mouth_closed_28532.mp3');
        var slurpAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562342736/sounds/zapsplat_human_drink_from_glass_slurp_single_21665.mp3');
        var laughAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562343433/sounds/zapsplat_human_male_middle_aged_laugh_slightly_sinister_003_32379.mp3');
        var pillAudio = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562343433/sounds/noisecreations_SFX-NCFREE02_Synth-Swell.mp3');
    
        function myAudioFunction(verb) {
            if (verb === 'munch') {
                munchAudio.play();
            } else if (verb === 'slurp') {
                slurpAudio.play();
            } else if (verb === 'laugh') {
                laughAudio.play();
            } else if (verb === 'pill') {
                pillAudio.play();
            } 
        };

        var audioGroan = new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562344222/sounds/zapsplat_human_breath_last_dying_003_15986.mp3');

        function groan() {
            audioGroan.play();
        }var deathRattle = setTimeout(groan, 1000);

var audioHello= new Audio('https://res.cloudinary.com/dytmcam8b/video/upload/v1562343433/sounds/zapsplat_human_male_middle_aged_says_hello_002_15455.mp3');

function hello() {
  audioHello.play();
}var greeting = setTimeout(hello, 4000);