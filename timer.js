let timer; 
let ele = document.getElementById('timer');

(function(){
let sec = 0;
timer = setInterval(() =>{
    ele.innerHTML = +sec;
    sec ++;
}, 1000)
if (antalRigtige == bogstav){
    clearInterval(timer)
}
})()