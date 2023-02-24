import * as React from "react";
import Layout from "../components/Layout/Layout";
import PokemonTable from "./PokemonTable";
import pokedex from "../src/pokedex";

export default function Index() {
  return (
    <Layout>
      <h1>Retrouvez tous les outils essentiels pour la stratégie Pokemon</h1>
      <PokemonTable pokemonData={pokedex}/>
    </Layout>
  );
}
