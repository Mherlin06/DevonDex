import * as React from "react";
import Layout from "../components/Layout/Layout";
import PokemonTable from "./PokemonTable";
import { getPokedex } from "../src/pokemonData";

export default function Index() {
  const pokedex = getPokedex();
  
  return (
    <Layout>
      <h1>Retrouvez tous les outils essentiels pour la stratégie Pokemon</h1>
      <PokemonTable pokemonData={pokedex}/>
    </Layout>
  );
}
