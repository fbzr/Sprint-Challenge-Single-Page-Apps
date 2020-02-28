import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    Axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
