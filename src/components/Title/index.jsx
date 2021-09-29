import React from 'react';
import styled from 'styled-components';

const TitleUI = styled.h1`
  font-size: 4rem;
  color: var(--green-font);
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Title = ({ text }) => {
  return <TitleUI>{text}</TitleUI>;
};

export { Title };
