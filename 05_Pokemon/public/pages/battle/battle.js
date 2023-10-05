fetch("/battlepokemon")
.then((response) => response.json())
.then((result) => {    
    const nameHeader = document.getElementById("pokemon-name");
    nameHeader.innerText = result.data.name;
    
    const strengthHeader = document.getElementById("pokemon-strength");
    strengthHeader.innerText = "Remaining strength: " + result.data.strength;

    const imageWrapperDiv = document.getElementById("image-wrapper");
    imageWrapperDiv.innerHTML = `
        <img id="pokemon-image" src="${result.data.imageURL}">`;
});
