import Pokedex from "pokedex-promise-v2";
const P = new Pokedex({ timeout: 30000 });

const abilities = P.getAbilitiesList()
  .then((response) => {
    return response.results;
  })
  .catch((error) => {
    console.log("There was an ERROR during getAbilitiesList: ", error);
  });

const getAbilityData = async (ability) => {
  try {
    const response = await P.getResource(ability.url);
    return response;
  } catch (error) {
    console.log("There was an ERROR during getAbilityData: ", error);
  }
};

const buildAbility = async (ability) => {
  try {
    const data = await getAbilityData(ability);
    const name = data.name;
    const id = data.id;
    // let effect = "";
    // if (data && data.flavor_text_entries === []) {
    //     effect = "Pas de description";
    //   } else if (data) {
    //     effect = data.flavor_text_entries.find(
    //       (description) =>
    //         description.language.name === "fr" &&
    //         description.version_group.name === "sword-shield"
    //     ).flavor_text;
    //   } else {
    //     effect = "Données indisponibles";
    //   }
      
    const frenchName = data.names.find(
      (name) => name.language.name === "fr"
    ).name;
    return { name, id, frenchName };
  } catch (error) {
    console.log("There was an ERROR during buildAbility: ", error);
  }
};

const buildAbilityList = async () => {
  try {
    const abilityList = await abilities;
    const abilityData = await Promise.all(
      abilityList.map((ability) => buildAbility(ability))
    );

    console.log(abilityData);
  } catch (error) {
    console.log("There was an ERROR during buildAbilityList: ", error);
  }
};
export default buildAbilityList;
