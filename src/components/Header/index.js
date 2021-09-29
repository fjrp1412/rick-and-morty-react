import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/logo-image.svg';
import titleImage from '../../assets/images/title-image.svg';

const HeaderIcon = styled.span`
  width: 80px;
  height: 60px;
  border-radius: 25;
  background-image: url(${logoImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 30px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const HeaderTitle = styled.span`
  width: 250px;
  height: 95px;
  background-image: url(${titleImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Header = () => {
  return (
    <>
      <header>
        <HeaderIcon />
        <HeaderTitle />
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          className="Header__api"
          rel="noreferrer"
        >
          API
        </a>
      </header>
      <span className="Background__image" />
    </>
  );
};

export { Header };
