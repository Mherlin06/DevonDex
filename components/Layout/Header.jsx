import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import SearchBar from "./Layout/SearchBar";
import Pokedex from "pokedex-promise-v2";
const P = new Pokedex();

function getPokemonNames() {
  P.getPokemonsList()
    .then(function (response) {
      response.results.forEach((pokemon) => {
        P.getResource([`api/v2/pokemon-species/${pokemon.name}`]).then(
          (res) => {
            console.log(res);
          }
        );
      });
    })
    .catch(function (error) {
      console.log("There was an ERROR: ", error);
    });
}

function getMoveNames() {
  P.getMovesList()
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("There was an ERROR: ", error);
    });
}

const Header = () => {
  return (
    <header>
      <Box>
        <Image src="/umbreon-logo.png" alt="logo" width={200} height={100} />
        <h1>DevonDex</h1>
      </Box>
      <SearchBar />
      <button onClick={getPokemonNames}>attrapez-les tous!</button>
      <button onClick={getMoveNames}>get moves</button>
    </header>
  );
};
export default Header;
