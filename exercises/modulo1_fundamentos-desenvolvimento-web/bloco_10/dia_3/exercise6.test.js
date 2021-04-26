const { fechDogPictures } = require('./exercise6');

jest.mock('./exercise6', () => ({
  fechDogPictures: jest.fn(),
}));

describe('Testes Exercício 6', () => {
  test('testa se a função obteve sucesso na requisição da API', async () => {
    fechDogPictures.mockResolvedValue('request sucess');

    fechDogPictures();
    expect(fechDogPictures).toHaveBeenCalled();
    expect(fechDogPictures()).resolves.toMatch('request sucess');
    expect(fechDogPictures).toHaveBeenCalledTimes(2);
  });

  test('testa se a função obteve uma promise seja rejeitada', async () => {
    fechDogPictures.mockRejectedValue('request failed');

    fechDogPictures();
    expect(fechDogPictures).toHaveBeenCalled();
    expect(fechDogPictures()).rejects.toMatch('request failed');
    expect(fechDogPictures).toHaveBeenCalledTimes(4);
  });
});