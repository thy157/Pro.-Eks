let indput = false

let tekst = 'Hej med dig Micheal'
let bogstav = tekst.split('');
console.log(bogstav);

function keyTyped(){
    if(key === 'b'){
        console.log('rigtigt')
        indput = true
    }
    else{
        console.log('forkert')
        
    }
}

