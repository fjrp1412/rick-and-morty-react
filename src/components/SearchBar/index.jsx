import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarUI = styled.input`
  width: 50%;
  min-width: 380px;
  height: 40px;
  border-radius: 25px;
  text-align: center;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.6);
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
    setSearchedCaracters(newCharacters.length > 0 ? newCharacters : characters);
    setSearchText(text);
  };

  return <SearchBarUI value={searchText} onChange={handleSearch} />;
};
export { SearchBar };
