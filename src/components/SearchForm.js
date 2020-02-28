import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';



export default function SearchForm({ handleSearch }) {
  const [text, setText] = useState('');
  
  const changeText = e => {
    setText(e.target.value);
  }
  
  useEffect(() => {
    console.log(text);
    handleSearch(text);
  }, [text]);

  return (
    <Grid container justify='center'>
      <TextField onChange={changeText} label='Search' />
    </Grid>
  );
}
