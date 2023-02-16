import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  sprite,
  id,
  name,
  type,
  hp,
  attaque,
  defense,
  specialAttack,
  specialDefense,
  speed
) {
  return {
    sprite,
    id,
    name,
    type,
    hp,
    attaque,
    defense,
    specialAttack,
    specialDefense,
    speed,
  };
}

const pokemons = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0),createData("Frozen yoghurt", 19, 6.0, 24, 4.0)];

const Pokedex = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell></TableCell>
            <TableCell align="center">Nom</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">HP</TableCell>
            <TableCell align="center">Attaque</TableCell>
            <TableCell align="center">Defense</TableCell>
            <TableCell align="center">Attaque Spéciale</TableCell>
            <TableCell align="center">Defense Spéciale</TableCell>
            <TableCell align="center">Vitesse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon) => (
            <TableRow
              key={pokemon.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="pokemon">
                {pokemon.id}
              </TableCell>
                <TableCell align="center">{pokemon.sprite}</TableCell>
                <TableCell align="center">{pokemon.name}</TableCell>
                <TableCell align="center">{pokemon.type}</TableCell>
                <TableCell align="center">{pokemon.hp}</TableCell>
                <TableCell align="center">{pokemon.attaque}</TableCell>
                <TableCell align="center">{pokemon.defense}</TableCell>
                <TableCell align="center">{pokemon.specialAttack}</TableCell>
                <TableCell align="center">{pokemon.specialDefense}</TableCell>
                <TableCell align="center">{pokemon.speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Pokedex;
