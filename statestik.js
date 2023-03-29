let rigtigTast = false
let antalRigtige = 0

let tekst = 'Hej med dig Micheal, det er ligegyldig, det skal være tekst med mellemrum'
let bogstav = tekst.split('');
console.log(bogstav);

function keyTyped(){
    if(key === bogstav[antalRigtige]){
        console.log('rigtigt')
        rigtigTast = true
        antalRigtige++
    }
    else{
        console.log('forkert')
        rigtigTast = false
    }
}

