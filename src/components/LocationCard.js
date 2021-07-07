import React from "react";
import styled from 'styled-components';

const FlexItem = styled.div`
  width: 30%;
  border: 1px solid #ccc;
  margin: 5px 0;
`

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <FlexItem>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
    </FlexItem>
  );
}
