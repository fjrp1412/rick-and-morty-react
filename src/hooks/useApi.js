import { useState, useEffect } from 'react';

const useApi = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setCharacters(data.results);
        setUrl(data.info.next);
      });
  }, []);

  return { characters, setCharacters, url, setUrl };
};

export { useApi };
