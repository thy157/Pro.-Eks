let rigtigTast = false
let antalRigtige = 0
let antalForkerte = 0
let bogstav = ''
let citat = ''

async function næste_citat(){
citat = await genere_tilfældig_citat();
console.log('citat: ' + citat)
bogstav = citat.split('')
}

næste_citat()


function keyTyped(){
    if(key === bogstav[antalRigtige]){
        console.log('rigtigt')
        rigtigTast = true
        antalRigtige++
    }
    else{
        console.log('forkert')
        rigtigTast = false
        antalForkerte++
    }
}

