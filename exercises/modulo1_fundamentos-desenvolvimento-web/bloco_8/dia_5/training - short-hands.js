const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

// Utiluzando short-hand
const getPositionWithShortHand = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPositionWithShortHand(-19.8157, -43.9542));
