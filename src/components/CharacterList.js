import React, { useEffect, useState } from "react";
import axios from 'axios';

const characterApi = `https://rick-api.herokuapp.com/api/`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = ([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(characterApi)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
