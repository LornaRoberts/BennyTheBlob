var resetBtn = document.querySelector(".reset");

var start =
document.querySelectorAll(".start");

var ageing = document.getElementById("days");

$(resetBtn).click(function(){
	//game pannel is toggled from invisible to visible
    $(".start").toggle();
    //restart button text is changed
     if ($(this).text() == "Birth Benny") { 
        $(this).text("Restart"); 
    } else { 
        $(this).text("Birth Benny"); 
    };
    //timer counts up +1 every minute
  var count=0;
  $(function() {
    clearInterval(interv);
    var cd = $('#days');
    var c = count;
    var interv = setInterval(function() {
        c++;
        cd.html(c);
    }, 60000);
});
     });












