import Pokedex from "pokedex-promise-v2";
const P = new Pokedex({ timeout: 30000 });
import axios from "axios";

const getPokemonList = async () => {
  try {
    const response = await P.getPokemonsList();
    return response.results;
  } catch (error) {
    console.log("There was an ERROR during getPokemonList: ", error);
  }
};

const getPokemonData = async (pokemon) => {
  try {
    const response = await P.getResource(pokemon.url);
    return response;
  } catch (error) {
    console.log("There was an ERROR during getPokemonData: ", error);
  }
};

const getPokedexEntry = async (data) => {
  try {
    const response = await axios.get(data.species.url, { timeout: 30000 });
    const entry = response.data.id;
    return entry;
  } catch (error) {
    console.log("There was an ERROR during getPokedexEntry: ", error);
  }
};

const getPokemonFrenchName = async (data) => {
  try {
    const response = await axios.get(data.species.url, { timeout: 30000 });
    return response.data.names.find((name) => name.language.name === "fr").name;
  } catch (error) {
    console.log("There was an ERROR during getPokemonFrenchName: ", error);
  }
};

const buildPokemon = async (pokemon) => {
  try {
    const data = await getPokemonData(pokemon);
    const name = data.name;
    const id = data.id;
    const miniSprite = data.sprites.front_default;
    const largeSprite = data.sprites.other["official-artwork"].front_default;
    const types = data.types.map((type) => type.type.name);
    const abilities = data.abilities.map((ability) => ability.ability.name);
    const [pokedexEntry, frenchName] = await Promise.all([
      getPokedexEntry(data),
      getPokemonFrenchName(data),
    ]);
    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const specialAttack = data.stats[3].base_stat;
    const specialDefense = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;
    const finalPokemon = {
      name,
      frenchName,
      id,
      pokedexEntry,
      miniSprite,
      largeSprite,
      types,
      abilities,
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed,
    };
    return finalPokemon;
  } catch (error) {
    console.log("There was an ERROR during buildPokemon: ", error);
  }
};

const buildPokedex = async () => {
  try {
    const pokemonList = await getPokemonList();
    const pokedex = await Promise.all(
      pokemonList.map((pokemon) => buildPokemon(pokemon))
    );
    return pokedex;
  } catch (error) {
    console.log("There was an ERROR during buildPokedex: ", error);
  }
};

const newPokedex = buildPokedex();

export {
  getPokemonList,
  getPokemonData,
  getPokemonFrenchName,
  buildPokemon,
  getPokedexEntry,
  buildPokedex,
  newPokedex,
};
