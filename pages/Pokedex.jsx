import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import pokedex from "../src/pokedex";

const Pokedex = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Pokedex National</TableCell>
            <TableCell align="center">Sprite</TableCell>
            <TableCell align="center">Nom</TableCell>
            <TableCell align="center">Types</TableCell>
            <TableCell align="center">Capacités Spéciales</TableCell>
            <TableCell align="center">HP</TableCell>
            <TableCell align="center">Attaque</TableCell>
            <TableCell align="center">Defense</TableCell>
            <TableCell align="center">Attaque Spéciale</TableCell>
            <TableCell align="center">Defense Spéciale</TableCell>
            <TableCell align="center">Vitesse</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokedex.map((pokemon) => (
            <TableRow
              key={pokemon.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="pokemon">
                {pokemon.pokedexEntry}
              </TableCell>
              <TableCell align="center">{pokemon.sprite}</TableCell>
              <TableCell align="center">{pokemon.frenchName} <br></br> {pokemon.name}</TableCell>
              <TableCell align="center">{pokemon.types}</TableCell>
              <TableCell align="center">{pokemon.abilities}</TableCell>
              <TableCell align="center">{pokemon.stats.hp}</TableCell>
              <TableCell align="center">{pokemon.stats.attack}</TableCell>
              <TableCell align="center">{pokemon.stats.defense}</TableCell>
              <TableCell align="center">{pokemon.stats.specialAttack}</TableCell>
              <TableCell align="center">{pokemon.stats.specialDefense}</TableCell>
              <TableCell align="center">{pokemon.stats.speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Pokedex;
