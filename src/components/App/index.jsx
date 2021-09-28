import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { ContainerCharacters } from '../../containers/ContainerCharacters';
import { Character } from '../Character';
import { Title } from '../Title';
import { SearchBar } from '../SearchBar';
import { useApi } from '../../hooks/useApi';

const App = () => {
  const { characters, setCharacters } = useApi(
    'https://rickandmortyapi.com/api/character'
  );
  const mainCharacters = characters.slice(0, 5);
  const [searchedCharacters, setSearchedCaracters] = useState(characters);
  useEffect(() => {
    setSearchedCaracters(characters);
  }, [characters]);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <Header />
      <section className="Characters__container">
        <Title text="Main Characters" />
        <ContainerCharacters>
          {mainCharacters.map(character => (
            <Character
              key={character.id}
              name={character.name}
              location={character.location.name}
              status={character.status}
              image={character.image}
            />
          ))}
        </ContainerCharacters>
      </section>
      <section className="Characters__container">
        <Title text="All Characters" />
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setSearchedCaracters={setSearchedCaracters}
          characters={characters}
        />
        <ContainerCharacters>
          {searchedCharacters.map(character => (
            <Character
              key={character.id}
              name={character.name}
              location={character.location.name}
              status={character.status}
              image={character.image}
            />
          ))}
        </ContainerCharacters>
      </section>
    </>
  );
};
export { App };
