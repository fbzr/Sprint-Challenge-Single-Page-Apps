import React, { useState, useEffect } from "react";
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



export default function SearchForm({ handleSearch }) {
  const [text, setText] = useState('');
  
  const changeText = e => {
    setText(e.target.value);
    // console.log(e.target.value);
  }
  
  useEffect(() => {
    console.log(text);
    handleSearch(text);
  }, [text]);

  return (
    <section className="search-form">
      <TextField onChange={changeText} label='Search' />
      <Link to='/'>
        <Button variant="contained">Home</Button>
      </Link>
    </section>
  );
}
