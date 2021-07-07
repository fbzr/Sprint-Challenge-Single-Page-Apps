import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function CharacterList() {
  // constant data
  const [data, setData] = useState([]);
  // search mutable data
  const [searchData, setSearchData] = useState([]);
  // Material ui
  const classes = useStyles();

  const handleSearch = (searchText) => {
    const result = data.filter(character => {
      return character.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchData(result);
  }

  useEffect(() => {
      Axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(res => {
        setData(res.data.results);
        setSearchData(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className={classes.root}>
    <SearchForm handleSearch={handleSearch} />
    <br/>
    <Grid container spacing={2}>
      { searchData.map((character) => (
        <CharacterCard character={character} key={character.id} />
      )) }
    </Grid>
    </section>
  );
}
