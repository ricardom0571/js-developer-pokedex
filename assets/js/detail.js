backButton.addEventListener('click', () => {
    location.href = '/index.html';
})

const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get('number');

function loadPokemon(number) {
    pokeApi.getPokemon(number)
        .then((detail) => {
            const pokemon = new Pokemon();

            const types = detail.types.map((typeSlot) => typeSlot.type.name)
            const [type] = types
            pokemon.types = types
            pokemon.type = type
            
            pokemon.number = detail.id;
            pokemon.name = detail.name;
            pokemon.height = detail.height;
            pokemon.weight = detail.weight;
            pokemon.photo = detail.sprites.other.dream_world.front_default;
            const pokemonDet = `<li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
            </li>`;
            const pokemonList = `
            <div class="info">
            <li>

                <span>Height:  </span>
                <span>${pokemon.height}</span>
            </li>
            <li>
            <div>
                <span>Weight: </span>
                <span>${pokemon.weight}</span>
            </div>
            </div>
            </li>
            </div>`;
        pokemonDetail.innerHTML = pokemonDet;
        pokemonDetails.innerHTML = pokemonList;
        })
}

loadPokemon(number);
