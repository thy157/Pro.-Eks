let timer; 
let sec = 0;

function Timer(){
timer = setInterval(function(){ sec ++ }, 10000)
if (antalRigtige == bogstav){
    clearInterval(timer)
}
}
