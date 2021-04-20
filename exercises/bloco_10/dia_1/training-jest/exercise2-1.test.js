const { encode, decode } = require('./exercise2-1');

describe('Teste Parte II', () => {
  test('Teste se encode e decode são funções;', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  test('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    const string = 'aeiou';
    expect(encode(string)).toEqual('12345');
  });
  test('teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u ', () => {
    const numbers = '12345';
    expect(decode(numbers)).toEqual('aeiou');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    const string = 'abc';
    expect(encode(string)).toEqual('1bc');
    const numbers = '1926';
    expect(decode(numbers)).toEqual('a9e6');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const paramEncode = 'abcu';
    const resultEncode = encode(paramEncode);
    const paramDecode = '127';
    const resultDecode = decode(paramDecode);
    expect(resultEncode.length).toBe(paramEncode.length);
    expect(resultDecode.length).toBe(paramDecode.length);
  });
});