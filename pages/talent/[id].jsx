import React from "react";
import Layout from "../../components/Layout/Layout";
import { getAllAbilitiesIds, getAbilityData } from "../../src/pokemonData";

export async function getStaticProps({ params }) {
    const abilityData = await getAbilityData(params.id);
    return {
        props: {
            abilityData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllAbilitiesIds();
    return {
        paths,
        fallback: false,
    };
}

const ability = ({abilityData}) => {
  return (
    <Layout>
      <h1>{abilityData.name}</h1>
    </Layout>
  );
};

export default ability;
