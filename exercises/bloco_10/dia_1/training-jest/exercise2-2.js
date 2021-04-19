const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  } 
  const objResult = array
    .sort()
    .map((stack) => ({
        tech: stack,
        name,
      }));
  return objResult;
};

module.exports = techList;
