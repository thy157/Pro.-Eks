let timer;
let sec = 0;

function Timer() {
    timer = setInterval(function () { sec++ }, 1000)
}

function StopTimer() {
    clearInterval(timer)
}


