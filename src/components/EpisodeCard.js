import React from "react";
import styled from 'styled-components';

const FlexItem = styled.div`
  width: 30%;
  border: 1px solid #ccc;
  margin: 5px 0;
  padding: 0 5px;
`

export default function LocationCard({ episodeObj }) {

const { name, airdate, episode } = episodeObj;

  return (
    <FlexItem>
        <p>Name: {name}</p>
        <p>Airdate: {airdate}</p>
        <p>Episode: {episode}</p>
    </FlexItem>
  );
}