/* Take the number of pokemons and the type of pokemon from the user and 
render pokemon cards using the API provided. */


async function fetchPokemon(inpVal){
    remove_result();
   
    if(isNaN(inpVal) || inpVal<1){
        alert("Please enter correct numbers.");
        return;
    }
    

    // array of pokemons fetched from the api(max=100)
    const pokemons = [];

    for(let i = 1; i <= inpVal; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemons.push(data);
        console.log(pokemons);

        // selected types
        const selected = document.querySelector("#inputs");
        const selected_type = selected.value;

        // checking if pokemon matches the selected type
        const pokemon_types = data.types.map((typeInfo) => typeInfo.type.name);
        if(!pokemon_types.includes(selected_type)){
            continue; 
        }

        // parent div for appending 
        const card_info = document.querySelector("#card_info");

        //seperator
        const line = document.createElement("p");
        line.textContent = "-----------------------------";
        card_info.appendChild(line);
        
        // display information
        const name = document.createElement("h2");
        name.textContent = `Name: ${data.forms[0]?.name || "N\A"}`;
        card_info.appendChild(name);

        const info = document.createElement("h2");
        info.textContent = ` Moves: ${data.moves[0]?.move.name || "N\A"}`;
        card_info.appendChild(info);

        const abilities = document.createElement("h2");
        abilities.textContent = `Abilities: ${data.abilities[0]?.ability.name || "N\A"}`;
        card_info.appendChild(abilities);
    }
}

function remove_result(){
    // clean before displaying
    document.getElementById("card_info").innerHTML = "";
}


// button eventlistener to pass the tyoe of pokemon through the fetch function.
const button = document.querySelector("button");
button.addEventListener("click", () => {
    // input value
    const inpVal = parseInt(document.querySelector("input").value);
    fetchPokemon(inpVal);
});