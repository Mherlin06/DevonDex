import * as React from "react";
import Layout from "../components/Layout/Layout";
import PokemonTable from "../components/PokemonTable";
import { getPokedex } from "../src/pokemonData";

export async function getStaticProps() {
  return {
    props: {
      pokedex: getPokedex(),
    },
  };
}

export default function Index({pokedex}) {
  return (
    <Layout>
      <h1>Retrouvez tous les outils essentiels pour la stratégie Pokemon</h1>
      <PokemonTable pokemonData={pokedex}/>
    </Layout>
  );
}
