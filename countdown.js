
// Laver en countdown som tæller ned fra 3 sekunder.
let counter = 0
let timeleft = 3
const myInterval = setInterval(timeleft, 1000)

function setup(){
let timer = select('#timer');
timer.html(timeleft - counter);


function timeIt() {
counter++;
timer.html(timeleft - counter);
}
if (timeleft <= 0){
    clearInterval(myInterval)
    };
    setInterval(timeIt, 1000)
}
