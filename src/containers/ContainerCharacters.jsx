import React from 'react';
import styled from 'styled-components';

const ContainerCharactersUI = styled.div`
  display: grid;
  margin: 40px;
  grid-template-columns: repeat(3, minmax(150px, 250px));
  grid-auto-flow: row;
  grid-gap: 40px;

  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(2, minmax(150px, 250px));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(130px, 250px));
  }
`;

const ContainerCharacters = ({ children }) => {
  return <ContainerCharactersUI>{children}</ContainerCharactersUI>;
};

export { ContainerCharacters };
