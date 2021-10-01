var timer = document.getElementById('stopwatch');

// used in parseInt below
var hr = 0;
var min = 0;
var sec = 0;

// variable to check if timer is running
var stoptime = true;

// when Start button is pushed, if timer is not running, then go to timerCycle()
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

// verifies whether timer is running and if so, Stop button turns it off
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    //verifies timer is on (start button pushed)
    if (stoptime == false) { 
    //takes the strings sec, min, hr and converts to integer declared above
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    
   //adding 1 sec incrementally
   sec = sec + 1;
   // turning secs into mins after 60, and restart at 0
   if (sec == 60) {
       min = min + 1;
       sec = 0;
     }
   // turning mins into hrs after 60, restart at 0
     if (min == 60) {
       hr = hr + 1;
       min = 0;
       sec = 0;
     }
 // if sec, min, hr are < 10, add a '0' in front
     if (sec < 10 || sec == 0) {
       sec = '0' + sec;
     }
     if (min < 10 || min == 0) {
       min = '0' + min;
     }
     if (hr < 10 || hr == 0) {
       hr = '0' + hr;
     }
   // these values are added to the timer div
     timer.innerHTML = hr + ':' + min + ':' + sec;
   // time of 1 sec (1000ms) before repeating timerCycle()
     setTimeout('timerCycle()', 1000);
}
}

//when called, timer resets to 00:00:00
function resetTimer() {
timer.innerHTML = '00:00:00';
stoptime = true;
hr = 0;
sec = 0;
min = 0;
}
