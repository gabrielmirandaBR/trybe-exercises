const { fetchJoke } = require('./bonus1');

const returnfetch = ({
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  });

jest.mock('./bonus1', () => ({
  fetchJoke: jest.fn(),
}));

describe('Teste Exercício Bônus', () => {
  test('checa o retorno da função fetchJoke', async () => {
    const asyncFetch = fetchJoke.mockResolvedValue(returnfetch.joke);
    asyncFetch();
    expect(asyncFetch).toHaveBeenCalledTimes(1);
    
    return fetchJoke().then((joke) => {
      expect(joke).toBe('Whiteboards ... are remarkable.');
    });
  });
});