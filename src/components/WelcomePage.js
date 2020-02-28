import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const Title = styled.h1`
  text-align: center;
`
const Image = styled.img`
  object-fit: contain;
`

export default function WelcomePage() {
  return (
    <Section className="welcome-page">
      <Header>
        <Title>Welcome to the ultimate fan site!</Title>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
      <Button variant="contained">
        <Link to='/characters'>
          <p>See characters</p>
        </Link>
      </Button>
      <Button variant="contained">
        <Link to='/location'>
          <p>See locations</p>
        </Link>
      </Button>
      <Button variant="contained">
        <Link to='/episodes'>
          <p>See episodes</p>
        </Link>
      </Button>
    </Section>
  );
}
