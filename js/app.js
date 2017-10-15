$(document).ready(function(){
		$("#button1").click(function(){
			$("#right2").slideToggle("slow");
			$("#right1").slideToggle("slow");
		});
		$("#close").click(function(){
			$("#right2").slideToggle("slow");
			$("#right1").slideToggle("slow");
		});
});

var countDownDate = new Date("Oct 22, 2017 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = days + " <strong>DAYS</strong><br> " + hours + " <strong>HRS</strong> "
    + minutes + " <strong>MINS</strong> " + seconds + " <strong>SECS</strong>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "We are live!";
    }
}, 1000);

