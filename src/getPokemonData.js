import axios from "axios";

export default async function getPokemonData() {
  let pokemons = [];
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    );
    pokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        const abilities = await Promise.all(
          pokemonDetails.data.abilities.map(async (ability) => {
            const abilityDetails = await axios.get(ability.ability.url);
            const abilityName = abilityDetails.data.names.find(
              (name) => name.language.name === "fr"
            ).name;
            return abilityName;
          })
        );
        const stats = pokemonDetails.data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        }));
        const types = pokemonDetails.data.types.map((type) => type.type.name);
        return {
          englishName: pokemon.name,
          number: pokemonDetails.data.id,
          abilities,
          stats,
          types,
        };
      })
    );
  } catch (error) {
    console.log(error);
  }
  return pokemons;
}
