import React from "react";
import {CharacterStyle} from './CharacterStyle';

export default function CharacterCard({person}) {
  return (
      <CharacterStyle>
        <h3>Name: {person.name}</h3>
        <img src= {person.image} />
        <p>Species: {person.species}</p>
        <p>Gender: {person.gender}</p>
        <p>Status: {person.status}</p>
      </CharacterStyle>
    );  
}
