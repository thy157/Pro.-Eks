//Genere vores tekst(quote)
const TILFÆLDIG_CITAT_API_URL = "https://api.quotable.io/random"

function genere_tilfældig_citat(){
    return fetch(TILFÆLDIG_CITAT_API_URL)
        .then(Response => Response.json())
        .then(data => data.content)
}

async function genere_næste_citat(){
    const citat = await genere_tilfældig_citat()
    console.log(citat)
}

genere_næste_citat()