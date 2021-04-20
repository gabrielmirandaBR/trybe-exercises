function encode(string) {
  const encodeArray = string.split('');
  const objectEncode = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (let index = 0; index < encodeArray.length; index += 1) {
    for (const key in objectEncode) {
      if (encodeArray[index] === key) {
        encodeArray[index] = objectEncode[key];
      }
    }
  }
  const encodeArrayToString = encodeArray.join('');
  return encodeArrayToString;
}

function decode(string) {
  const decodeArray = string.split('');
  const objectDecodes = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (let index = 0; index < decodeArray.length; index += 1) {
    for (const key in objectDecodes) {
      if (decodeArray[index] === key) {
        decodeArray[index] = objectDecodes[key];
      }
    }
  }
  const decodeArrayToString = decodeArray.join('');
  return decodeArrayToString;
}

module.exports = { encode, decode };