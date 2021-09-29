const getData = async url => {
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log('error get data');
  }
  return { data };
};

export { getData };
