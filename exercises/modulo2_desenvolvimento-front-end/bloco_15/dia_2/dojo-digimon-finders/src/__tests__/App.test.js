import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import data from '../__mocks__/data'

 
describe('Teste da aplicação toda', () => {
  it('Renderiza o input e verifica se ao inserir um texto o seu "value" é alterado', async () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value:'agumon' } });
    expect(input).toHaveValue('agumon');
  });

  it('Verifica se ao carregar a página o pokémon nao foi renderizado', () => {
    render(<App />);

    const nomeDigimon = screen.queryByTestId('digimonName');

    expect(nomeDigimon).toBeNull()
  });

  it('Verifica se ao clicar no botão um digimon é renderizado', async () => {
    const dataResponseAPI = [data[0]];

    const fetchAPI = global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(dataResponseAPI)
    });

    render(<App />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value:'koromon' } });
    expect(input).toHaveValue('koromon');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    await screen.findByRole('heading', {
      level: 2,
      name: /koromon/i,
    });

    expect(fetchAPI).toBeCalledTimes(1);
    expect(fetchAPI).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/koromon'
    );
  });
  it('Verifica se o valor do input for nulo não é chamado o fetch', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value:'' } });
    expect(input).toHaveValue('');

    expect(global.fetch).toBeCalledTimes(0);
  });

  it('Verifica se ao passar um digimon inexistente é retornado uma mensagem de erro', async () => {
    const ErrorMsg = 'A is not a Digimon in our database.'

    const fetchAPI = global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ ErrorMsg })
    });

    render(<App />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'Teste'} });
    expect(input).toHaveValue('Teste');
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument(); 
    fireEvent.click(button);

    await screen.findByText('A is not a Digimon in our database.');
    
    expect(fetchAPI).toBeCalledTimes(1);
    expect(fetchAPI).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Teste'
    );
  }); 
});
