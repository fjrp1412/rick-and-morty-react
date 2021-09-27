import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarUI = styled.input`
  width: calc(100% - 200px);
  height: 40px;
  border-radius: 25px;
  text-align: center;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.6);
`;

const SearchBar = ({ setCharacters, characters }) => {
  const [search, setSearch] = useState('');
  const handleSearch = event => {
    const text = event.target.value;
    const newCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(text)
    );
    setCharacters(newCharacters);
    setSearch(text);
  };

  return <SearchBarUI value={search} onChange={handleSearch} />;
};
export { SearchBar };
