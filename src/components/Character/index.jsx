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
  box-shadow: 1px 14px 20px 4px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 1px 14px 20px 4px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 1px 14px 20px 4px rgba(0, 0, 0, 0.7);
`;

const Character = ({ name, location, status, image }) => {
  return (
    <CharacterUI>
      <CharacterImage src={image} alt={name} />
      <CharacterInfo>
        <span>{name}</span>
        <span>{location}</span>
        <span>{status}</span>
      </CharacterInfo>
    </CharacterUI>
  );
};

export { Character };
