async function fetchPokemon(){
    remove_result();
    // input value
    let inpVal = parseInt(document.querySelector("input").value);

    if(isNaN(inpVal) || inpVal<1){
        alert("Please enter correct numbers.");
        return;
    }
    
    for(let i = 1; i <= inpVal; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        console.log(data);

        // types
        const selected = document.querySelector("#inputs");
        const selected_type = selected.value;

        const poke_type = data.types[0].type.name;
        console.log(poke_type);


        // parent div for appending 
        const card_info = document.querySelector("#card_info");

        //seperator
        const line = document.createElement("p");
        line.textContent = "-----------------------------";
        card_info.appendChild(line);
        
        // display information
        const name = document.createElement("h2");
        name.textContent = data.forms[0].name;
        card_info.appendChild(name);

        const info = document.createElement("h2");
        info.textContent = data.moves[0].move.name;
        card_info.appendChild(info);

        const abilities = document.createElement("h2");
        abilities.textContent = data.abilities[0].ability.name;
        card_info.appendChild(abilities);

    }
}

function remove_result(){
    // clean before displaying
    document.getElementById("card_info").innerHTML = "";
}
    