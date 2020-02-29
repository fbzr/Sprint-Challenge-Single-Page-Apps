import React, { useEffect, useState } from "react";
import Axios from 'axios';
import SearchForm from './SearchForm';
import LocationCard from './LocationCard';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default function LocationsList() {
    // constant data
    const [data, setData] = useState([]);
    // search mutable data
    const [searchData, setSearchData] = useState([]);

    const handleSearch = (searchText) => {
        const result = data.filter(location => location.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchData(result);
    }

    useEffect(() => {
        Axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/')
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
          { searchData.map((location) => (
            <LocationCard name={location.name} dimension={location.dimention} key={location.id} type={location.type} residents={location.residents} />
          )) }
        </FlexDiv>
        </section>
    )
}
