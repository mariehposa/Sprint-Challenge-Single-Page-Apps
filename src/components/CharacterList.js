import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

const characterApi = `https://rickandmortyapi.com/api/character`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  const [url, setUrl] = useState(characterApi);
  

  function search(formValues, actions){
    const term = `?name=${formValues.name}`
    const newUrl = url+term
    console.log(newUrl);
    setUrl(newUrl)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(url)
      .then(res => {
        console.log(res.data);
        setCharacterData(res.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }, [url]);

  return (
    <section className="character-list">
      <SearchForm onSubmit={search} />
        {
          characterData.map(character => <CharacterCard key={character.id} person={character} /> )
        }
    </section>
  );
}
