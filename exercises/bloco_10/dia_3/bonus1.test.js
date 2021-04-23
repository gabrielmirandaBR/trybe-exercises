const { fetchJoke } = require('./bonus1');

jest.mock('./bonus1', () => ({
  fetchJoke: jest.fn().mockResolvedValue({
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }),
}));

describe('Teste Exercício Bônus', () => {
  test('checa o retorno da função fetchJoke', () => {
    fetchJoke();
    expect(fetchJoke).toHaveBeenCalledTimes(1);
    
    return fetchJoke().then((data) => {
      expect(data.joke).toBe('Whiteboards ... are remarkable.');
    });
  });
});