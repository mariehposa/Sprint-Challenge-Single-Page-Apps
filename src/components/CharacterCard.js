import React from "react";

export default function CharacterCard({person}) {
  return 
    (
      <span>
        <h3>Name: {person.name}</h3>
        <p>Image: {person.image}</p>
        <p>Species: {person.species}</p>
        <p>Gender: {person.gender}</p>
        <p>Status: {person.status}</p>
      </span>
    );  
}
