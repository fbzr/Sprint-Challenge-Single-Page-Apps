import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import { Container } from "@material-ui/core";


export default function App() {
  return (
    <Container maxWidth='md'>
      <Header />
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route exact path='/characters'>
        <CharacterList />
      </Route>
      <Route exact path='/locations'>
        <LocationsList />
      </Route>
      <Route exact path='/episodes'>
        <EpisodesList />
      </Route>
    </Container>
  );
}
