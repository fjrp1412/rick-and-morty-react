const handleSearch = (event, setCharacters, characters) => {
  const text = event.target.value;
  const newCharacters = characters.filter(character =>
    character.name.toLowerCase.include(text)
  );
  setCharacters(newCharacters);
};

export { handleSearch };
