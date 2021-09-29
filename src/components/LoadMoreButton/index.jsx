import React from 'react';
import styled from 'styled-components';
import { getData } from '../../utils/getData';

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin-bottom: 50px;
  background-image: url('../../assets/images/plus.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  cursor: pointer;
`;

const LoadMoreButton = ({ url, setUrl, setCharacters, characters }) => {
  const handleLoadMore = async () => {
    const { data } = await getData(url);
    const newCharacters = data.results;
    setCharacters([...characters, ...newCharacters]);
    setUrl(data.info.next);
  };

  return <Button onClick={handleLoadMore} aria-label="load more characters" />;
};

export { LoadMoreButton };
