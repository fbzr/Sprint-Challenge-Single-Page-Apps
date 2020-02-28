import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route exact path='/characters'>
        <CharacterList />
      </Route>
      <Route exact path='/location'>
        <LocationsList />
      </Route>
      <Route exact path='/episodes'>
        <EpisodesList />
      </Route>
    </main>
  );
}
