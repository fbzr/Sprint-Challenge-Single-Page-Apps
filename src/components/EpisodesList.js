import React, { useEffect, useState } from "react";
import Axios from 'axios';
import SearchForm from './SearchForm';
import EpisodeCard from './EpisodeCard';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default function EpisodesList() {
    // constant data
    const [data, setData] = useState([]);
    // search mutable data
    const [searchData, setSearchData] = useState([]);

    const handleSearch = (searchText) => {
        const result = data.filter(episode => episode.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchData(result);
    }

    useEffect(() => {
        Axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/')
        .then(res => {
          setData(res.data.results);
          setSearchData(res.data.results);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <section>
        <SearchForm handleSearch={handleSearch} />
        
        <FlexDiv>
          { searchData.map((episode) => (
            <EpisodeCard key={episode.id} episodeObj={episode} />
          )) }
        </FlexDiv>
        </section>
    )
}