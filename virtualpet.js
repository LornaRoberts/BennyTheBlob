var resetBtn = document.querySelector(".reset");

var aging = document.getElementById("days")

var start =
document.querySelectorAll(".start");

var counter = document.getElementById("days");

$(resetBtn).click(function() { 
    if ($(this).text() == "Birth Benny") { 
        $(this).text("Restart"); 
    } else { 
        $(this).text("Birth Benny"); 
    }; 
 });

$(resetBtn).click(function(){
  $(".start").toggle();
});


$(aging).text(function (age){
  var age=1;
  return age;
});









