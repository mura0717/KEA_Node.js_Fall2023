function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

const randomPokemonId = randomIntFromInterval(1,151);

function escapeHTML(string) {
    if (!string) return "";

    return string.replaceAll(`&`, "&amp;")
        .replaceAll(`>`, "&gt;")
        .replaceAll(`<`, "&lt;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`/`, "&#039;");
}

// const nameHeader = document.getElementById("pokemon-name"); //making it global makes the website slower
 
// fetch a random pokemon and print on frontpage & console log data

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
.then(((response) => {
    if (!response.ok) {
        throw new Error("Error getting a pokemon.");
    }
    return response.json();
}))
.then((result) => {
    const nameHeader = document.getElementById("pokemon-name");
    console.log(result.name);
    nameHeader.innerText = result.name; //against Cross-Site Scripting (instead of innerHTML)

    const imageWrapperDiv = document.getElementById("image-wrapper");
    imageWrapperDiv.innerHTML = `
    <img src= ${result.sprites.other.home.front_default}>`
});




