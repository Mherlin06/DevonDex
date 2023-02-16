import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import createPokemonsData from "../../src/createPokemonsData";

const Header = () => {
  return (
    <header>
      <Box>
        <Image src="/umbreon-logo.png" alt="logo" width={200} height={100} />
        <h1>DevonDex</h1>
        <button onClick={createPokemonsData}>log pokemons</button>
      </Box>
    </header>
  );
};
export default Header;
