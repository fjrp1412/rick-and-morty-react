import React from 'react';
import styled from 'styled-components';

const CharacterImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

const CharacterUI = styled.div`
  display: flex;
  width: 100%;
  max-width: 315px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  color: white;
  border: solid 1px var(--border-color);
`;

const Character = () => {
  return (
    <CharacterUI>
      <CharacterImage src="../../assets/images/rick.jpeg" alt="rick" />
      <CharacterInfo>
        <span>Rick Sanchez</span>
        <span>Earth C-77</span>
        <span>Alive</span>
      </CharacterInfo>
    </CharacterUI>
  );
};

export { Character };
