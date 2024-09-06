let pokemonRenderArea = document.getElementById("pokemonEncounterArea");


// Create HTML elements and append them to the page
function renderPokemonData(pokemonData) {
    if (!pokemonData.name) {
        return;
    }
    // Keep adding more Pokemon to the screen
    // pokemonRenderArea.innerText += pokemonData.name;

    // <div>
            
    //         <h1>Pikachu</h1>
    //         <img src="">
    //         <h3>Types:</h3>
    //         <ul>
    //             <li>
    //                 Electric
    //             </li>
    //         </ul>
    //         <button>Play Cry</button>
    //     </div>


    // Container
    let pokemonContainerDiv = document.createElement("div");
    pokemonContainerDiv.classList += "pokemonCardEntry";

    let pokemonImage = document.createElement("img");
    pokemonImage.src = pokemonData.image;
    pokemonContainerDiv.appendChild(pokemonImage);

    let pokemonHeading = document.createElement("h1");
    pokemonHeading.innerText = pokemonData.name;
    pokemonContainerDiv.appendChild(pokemonHeading);

    let pokemonTypesHeading =  document.createElement("h3");
    pokemonTypesHeading.innerText = "Types:";
    pokemonContainerDiv.appendChild(pokemonTypesHeading);



    let pokemonTypeList = document.createElement("ul");
    pokemonData.types.forEach((typeObject) => {
        // PokemonData.types is an array

        // need to make one li element per type

        // and append that to the ul element 

        let pokemonTypeListItem = document.createElement("li");
        pokemonTypeListItem.innerText = typeObject.type.name;
        pokemonTypeList.appendChild(pokemonTypeListItem);
    });

    pokemonContainerDiv.appendChild(pokemonTypeList);


    let pokemonAudioButton = document.createElement("button");
    pokemonAudioButton.innerText = "Play Sound";
    pokemonAudioButton.addEventListener("click", () => {
        let pokemonAudioObject = new Audio(pokemonData.sound);
        pokemonAudioObject.play();

    })
    pokemonContainerDiv.appendChild(pokemonAudioButton);

    pokemonRenderArea.appendChild(pokemonContainerDiv);
}



function getRandomPokemonId(){

    // Random number between 1 and 1025 inclusive
    return Math.floor(Math.random() * 1025) + 1;
}

async function getPokemon() {

    console.log("Getting Pokemon now!");

    // Get data from API, hardcoded for development, replace 'pikachu' with a 
    // random number ID between 1 and 1025
    // getRandomPokemonId function concatenated to end of api URL string 
    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId());
    // Convert data to JSON
    let apiData = await apiResponse.json();

    // Name, Types, Image, Sound
    // let pokemonName = apiData.name;

    return {
        name: apiData.name,
        types: apiData.types,
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

    // wait for data to come through
    let pokemonResult = await getPokemon();
    // logged the data
    console.log(pokemonResult);
    // pass data to another function
    renderPokemonData(pokemonResult)
    });

