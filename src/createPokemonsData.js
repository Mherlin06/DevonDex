import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();
import pokedex from "./pokedex";

const getPokemonList = () => {
  return P.getPokemonsList()
    .then((response) => {
      console.log(response.results);
    })
    .catch((error) => {
      console.log("There was an ERROR: ", error);
    });
};

const getfrenchName = (pokemon) => {
  P.getPokemonSpeciesByName(pokemon)
    .then((response) => {
      const frenchName = response.names.find(
        (name) => name.language.name === "fr"
      ).name;
      const id = response.id;
      console.log(frenchName + " " + id);
      return { frenchName, id };
    })
    .catch((error) => {
      console.log("There was an ERROR: ", error);
    });
};

const getPokemonData = (pokemon) => {
  return new Promise((resolve, reject) => {
    const newPokemon = {};
    P.getPokemonByName(pokemon)
      .then((response) => {
        newPokemon.sprite = response.sprites.front_default;
        newPokemon.types = response.types.map((type) => type.type.name);
        newPokemon.hp = {
          base: response.stats[0].base_stat,
          name: response.stats[0].stat.name,
        };
        newPokemon.attack = {
          base: response.stats[1].base_stat,
          name: response.stats[1].stat.name,
        };
        newPokemon.defense = {
          base: response.stats[2].base_stat,
          name: response.stats[2].stat.name,
        };
        newPokemon.specialAttack = {
          base: response.stats[3].base_stat,
          name: response.stats[3].stat.name,
        };
        newPokemon.specialDefense = {
          base: response.stats[4].base_stat,
          name: response.stats[4].stat.name,
        };
        newPokemon.speed = {
          base: response.stats[5].base_stat,
          name: response.stats[5].stat.name,
        };
        resolve(newPokemon);
      })
      .catch((error) => {
        console.log("There was an ERROR: ", error);
        reject(error);
      });
  });
};

const logpokemon = async () => {
  const pokemon1 = await getPokemonData("gyarados");

  for (const prop in pokemon1) {
    console.log(`${prop}: ${pokemon1[prop]}`);
  }
};

export { getPokemonList, getfrenchName, getPokemonData, logpokemon };
