import { useState, useEffect } from 'react';

const useApi = url => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => setCharacters(data.results));
  }, []);

  return { characters, setCharacters };
};

export { useApi };
