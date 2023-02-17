import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { getfrenchName, getPokemonData, getPokemonList, logpokemon} from "../../src/createPokemonsData";


const Header = () => {
  return (
    <header>
      <Box>
        <Image src="/umbreon-logo.png" alt="logo" width={200} height={100} />
        <h1>DevonDex</h1>
        <p>site en test et en construction</p>
        <button onClick={logpokemon}>attrapez les tous!</button>
      </Box>
    </header>
  );
};
export default Header;
