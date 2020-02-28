import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core'

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
    </section>
  );
}
