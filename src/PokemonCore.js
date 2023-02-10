import axios from "axios";

const pokemons = [];

async function fetchPokemons() {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=1200&offset=0`
    );
    pokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        const name = pokemonDetails.data.names.find(
          (name) => name.language.name === "fr"
        ).name;
        const abilities = await Promise.all(
          pokemonDetails.data.abilities.map(async (ability) => {
            const abilityDetails = await axios.get(ability.ability.url);
            const abilityName = abilityDetails.data.names.find(
              (name) => name.language.name === "fr"
            ).name;
            return abilityName;
          })
        );
        const moves = await Promise.all(
          pokemonDetails.data.moves.map(async (move) => {
            const moveDetails = await axios.get(move.move.url);
            const moveName = moveDetails.data.names.find(
              (name) => name.language.name === "fr"
            ).name;
            return moveName;
          })
        );
        const stats = pokemonDetails.data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        }));
        const types = pokemonDetails.data.types.map((type) => type.type.name);
        const weaknesses = pokemonDetails.data.weaknesses.map(
          (weakness) => weakness.type.name
        );
        return {
          name,
          englishName: pokemon.name,
          number: pokemonDetails.data.id,
          abilities,
          moves,
          stats,
          types,
          weaknesses,
        };
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export default fetchPokemons;
