
async function getPokemon() {
    console.log("Getting Pokemon now!");



    // Get data from API, hardcoded for development, replace 'pikachu' with a 
    // random number ID between 1 and 1025
    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    // Convert data to JSON
    let apiData = await apiResponse.json();

    // Name, Types, Image, Sound
    // let pokemonName = apiData.name;

    return {
        name: apiData.name,
        types: apiData.tpyes,
        image: apiData.sprites.other.home.front_default,
        sound: apiData.cries.latest
    }

}

let encounterButton = document.getElementById("pokemonEncounterButton");

// When click happens, pass the function 
// encounterButton.addEventListener("click", getPokemon);
// Same as:
// encounterButton.addEventListener("click", (event) => getPokemon(event));
encounterButton.addEventListener("click", async (event) => {
    console.log("Some block of code in the event listener");
    let pokemonResult = await getPokemon();
    console.log(pokemonResult);
    });

