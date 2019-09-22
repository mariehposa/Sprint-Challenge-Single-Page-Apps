import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import {StyledButton, ParentStyle} from './CharacterStyle';

const characterApi = `https://rickandmortyapi.com/api/character`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  const [url, setUrl] = useState(characterApi);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  function search(formValues, actions){
    const term = `?name=${formValues.name}`
    const newUrl = url+term
    console.log(newUrl);
    setUrl(newUrl)

    // const name = formValues.name.toLowerCase();
    // const newCharacters = characterData.filter(character => character.name.toLowerCase().includes(name))
    // setCharacterData(newCharacters)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(url)
      .then(res => {
        //console.log(res.data);
        setCharacterData(res.data.results);
        setNext(res.data.info.next);
        setPrevious(res.data.info.prev);
      })
      .catch(err => {
        //console.log(err);
      })
  }, [url]);

  function onClicked(newUrl){
    setUrl(newUrl)
  }

  return (
    <section className="character-list">
      <SearchForm onSubmit={search} />
        <ParentStyle>
          {
            characterData.map(character => <CharacterCard key={character.id} person={character} /> )
          }
        </ParentStyle>
        <StyledButton onClick={() => onClicked(next)}>Next Page</StyledButton>
        <StyledButton onClick={() => onClicked(previous)}>Previous Page</StyledButton>
    </section>
  );
}
