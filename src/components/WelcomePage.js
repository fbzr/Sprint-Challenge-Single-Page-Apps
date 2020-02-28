import React from "react";
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
    </Section>
  );
}
