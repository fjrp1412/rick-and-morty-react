import React from 'react';
import styled from 'styled-components';

const ContainerCharactersUI = styled.div`
  display: grid;
  margin: 40px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, minmax(150px, 250px));
  grid-auto-flow: row;
  grid-gap: 40px;
`;

const ContainerCharacters = ({ children }) => {
  return <ContainerCharactersUI>{children}</ContainerCharactersUI>;
};

export { ContainerCharacters };
