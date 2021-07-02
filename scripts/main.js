//Credits: https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  document.getElementById("days").innerText = Math.floor(distance / (day)),
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById("days").innerText = 0,
    document.getElementById("hours").innerText = 0,
    document.getElementById("minutes").innerText = 0,
    document.getElementById("seconds").innerText = 0;
  }
}, 1000);