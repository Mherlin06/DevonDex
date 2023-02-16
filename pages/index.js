import * as React from "react";
import Layout from "../components/Layout/Layout";
import Pokedex from "./Pokedex";

export default function Index() {
  return (
    <Layout>
      <h1>Retrouvez tous les outils essentiels pour la stratégie Pokemon</h1>
      <Pokedex />
    </Layout>
  );
}
