import React, { useEffect, useState } from 'react';

const useApi = url => {
  const [characters, setCharacters] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log('error');
    }
  }, [url]);
  const mainCharacters = characters.slice(0, 5);

  return { characters, setCharacters, mainCharacters };
};

export { useApi };
