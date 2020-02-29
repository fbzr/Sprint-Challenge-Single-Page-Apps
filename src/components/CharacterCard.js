import React from "react";
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  }
}));

export default function CharacterCard({ character }) {
  const { name, status, species, type, gender, location, image } = character;
  const classes = useStyles();
  return (
      <Grid item lg={4} sm={6} xs={12}>
          <Paper className={classes.paper}>
            <p>Name: {name}</p>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Type: {type}</p>
            <p>Gender: {gender}</p>
            <p>Location: {location.name}</p>
            <Grid container justify="center">
              <img src={image} alt={name} />
            </Grid>
          </Paper>
      </Grid>
  );
}
