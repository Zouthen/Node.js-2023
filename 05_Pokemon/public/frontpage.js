function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function escapeHTML(string) {
    if (!string) return "";

    return string.replaceAll(`&`, "&amp;")
        .replaceAll(`>`, "&gt;")
        .replaceAll(`<`, "&lt;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`/`, "&#039;");
}

const randomPokemonId = randomIntFromInterval(1, 151);

// https://pokeapi.co/api/v2/pokemon/1

fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
.then(((response) => {
    if (!response.ok) {
        throw new Error(`Error getting a pokemone with id ${randomPokemonId}`);
    }
    return response.json();
}))
.then((result) => {
    const nameHeader = document.getElementById("randomPokemonName");
    nameHeader.innerText = result.name;

    const imageWrapperDiv = document.getElementById("image-wrapper");
    imageWrapperDiv.innerHTML = `<img src="${result.sprites.other.home.front_default}"/>`;
})

