const fetchPokemon = () => {

    const pokemonsPromises = []
    let html = ""

    for (let i = 1; i <= 150; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + i

        pokemonsPromises.push(
            fetch(url)
            .then(Response => Response.json())
       )
    }

Promise.all(pokemonsPromises)
    .then(pokemons => {
        pokemons.forEach(pokemon => {
            html += `
                <li class="cartao">
                    <h2 class="cartao-titulo">${pokemon.id} - ${pokemon.name} </h2>
                    <img src="${pokemon.sprites.front_default}">
                </li>
            `
        });
        document.querySelector(".pokedex").innerHTML = html
    })
}

fetchPokemon()