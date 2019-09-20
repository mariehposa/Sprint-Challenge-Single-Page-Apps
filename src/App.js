import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <main>
      <Navigation />
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
    </main>
  );
}
