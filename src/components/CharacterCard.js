import React from "react";
import {CharacterStyle} from './CharacterStyle';

export default function CharacterCard({person}) {
  return (
      <CharacterStyle>
        <h2>{person.name}</h2>
        <img src= {person.image} />
        <p>Species: {person.species}</p>
        <p>Gender: {person.gender}</p>
        <p>Status: {person.status}</p>
      </CharacterStyle>
    );  
}
