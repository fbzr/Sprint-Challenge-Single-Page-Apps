import React, { useState } from "react";
import { TextField } from '@material-ui/core'

export default function SearchForm() {
 
  return (
    <section className="search-form">
      <TextField label='Search' />
    </section>
  );
}
