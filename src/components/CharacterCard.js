import React from "react";
import { Grid, Paper } from '@material-ui/core';

export default function CharacterCard({ character }) {
  const { name, status, species, type, gender, location, image } = character;
  
  return (

      <Grid item lg={4} xs={6}>
        <Grid container justify="center" spacing={2}>
          <Paper>
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Type: {type}</p>
          <p>Gender: {gender}</p>
          <p>Location: {location.name}</p>
          <img src={image} alt={name} />
          </Paper>
        </Grid>
      </Grid>
  );
}
