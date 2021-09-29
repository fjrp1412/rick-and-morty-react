import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarUI = styled.input`
  width: 70%;
  max-width: 720px;
  margin-top: 20px;
  height: 30px;
  border-radius: 25px;
  text-align: center;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.6);

  @media screen and (max-width: 480px) {
    width: calc(100% - 40px);
  }
`;

const SearchBar = ({
  setSearchedCaracters,
  characters,
  setSearchText,
  searchText,
}) => {
  const handleSearch = event => {
    const text = event.target.value;
    const newCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchedCaracters(newCharacters.length > 0 ? newCharacters : []);

    if (!text) {
      setSearchedCaracters(characters);
    }
    setSearchText(text);
  };

  return (
    <SearchBarUI
      value={searchText}
      onChange={handleSearch}
      aria-label="search character"
    />
  );
};
export { SearchBar };
