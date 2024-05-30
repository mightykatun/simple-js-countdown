var start = document.getElementById("start-date").innerHTML;
var end = document.getElementById("end-date").innerHTML;
var StartDate = new Date(start).getTime();
var countDownDate =  new Date(end).getTime();
var Span = countDownDate - StartDate;
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var time_to = distance - Span;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	var percent = 100 - (distance / Span * 100);
	var days_to = Math.floor(time_to / (1000 * 60 * 60 * 24));
	var hours_to = Math.floor((time_to % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes_to = Math.floor((time_to % (1000 * 60 * 60)) / (1000 * 60));
	var seconds_to = Math.floor((time_to % (1000 * 60)) / 1000);
	document.getElementById("timer_header").innerHTML = "please wait...";
	if (distance > 0 && distance <= Span) {
		document.getElementById("timer").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
		document.getElementById("cent").innerHTML = percent.toFixed(2) + " %";
		document.getElementById("bar").value = percent.toFixed(6);
	}
	if (distance <= 0) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "timer ended";
		document.getElementById("cent").innerHTML = "100.00 %";
		document.getElementById("bar").value = 100;
	}
	if (distance > Span) {
		document.getElementById("timer_header").innerHTML = "starting in";
		document.getElementById("timer").innerHTML = days_to + " days " + hours_to + " hours " + minutes_to + " minutes " + seconds_to + " seconds ";
		document.getElementById("cent").innerHTML = 0 + " %";
		document.getElementById("bar").value = 0;
	}
}, 1000);
