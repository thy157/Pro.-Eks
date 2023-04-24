//Genere vores tekst(quote)
const TILFÆLDIG_CITAT_API_URL = "https://api.quotable.io/random"

async function genere_tilfældig_citat() {
    return await fetch(TILFÆLDIG_CITAT_API_URL)
        .then(Response => Response.json())
        .then(data => data.content)

}
