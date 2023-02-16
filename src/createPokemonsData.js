import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

const createPokemonsData = () => {
P.getPokemonsList()
  .then((response) => {
    const pokemons = response.results;
    pokemons.map((pokemon) => pokemon.name);
    console.table(pokemons);
  }) 
  .catch((error) => {
    console.log("There was an ERROR: ", error);
  });
};

export default createPokemonsData;
