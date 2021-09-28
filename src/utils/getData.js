const getData = async url => {
  let characters;
  try {
    const response = await fetch(url);
    const data = await response.json();
    characters = data.results;
  } catch (error) {
    console.log('error');
  }
  return { characters };
};

export { getData };
