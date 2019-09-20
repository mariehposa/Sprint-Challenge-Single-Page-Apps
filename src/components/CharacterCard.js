import React from "react";
import styled from 'styled-components';

export default function CharacterCard({person}) {
  return (
      <div>
        <h3>Name: {person.name}</h3>
        <p>Image: {person.image}</p>
        <p>Species: {person.species}</p>
        <p>Gender: {person.gender}</p>
        <p>Status: {person.status}</p>
      </div>
    );  
}
