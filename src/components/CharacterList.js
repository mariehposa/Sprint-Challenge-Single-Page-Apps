import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

const characterApi = `https://rickandmortyapi.com/api/character`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(characterApi)
      .then(res => {
        console.log(res.data);
        setCharacterData(res.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <section className="character-list">
        {
          characterData.map(character => <CharacterCard key={character.id} person={character} /> )
        }
    </section>
  );
}
