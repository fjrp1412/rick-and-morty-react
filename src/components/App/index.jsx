import React from 'react';
import { Header } from '../Header';
import { ContainerCharacters } from '../../containers/ContainerCharacters';
import { Character } from '../Character';
import { Title } from '../Title';

const App = () => {
  return (
    <>
      <Header />
      <section className="Characters__container">
        <Title text="Main Characters" />
        <ContainerCharacters>
          <Character />
          <Character />
          <Character />
          <Character />
        </ContainerCharacters>
      </section>
      <section className="Characters__container">
        <Title text="All Characters" />
        <ContainerCharacters>
          <Character />
          <Character />
          <Character />
          <Character />
          <Character />
          <Character />
          <Character />
          <Character />
        </ContainerCharacters>
      </section>
    </>
  );
};
export { App };
