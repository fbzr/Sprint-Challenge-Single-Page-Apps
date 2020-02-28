import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

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
    <section className="character-list">
    <SearchForm handleSearch={handleSearch} />
        { searchData.map((character) => (
          <CharacterCard character={character} key={character.id} />
        )) }
    </section>
  );
}
