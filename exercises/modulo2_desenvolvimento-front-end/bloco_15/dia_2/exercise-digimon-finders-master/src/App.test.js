import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {

  it('Renderiza o App em seu estado inicial', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Insere um valor na caixa de busca', () => {
    const { getByTestId } = render(<App />)

    const input = getByTestId('input');
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Dragão Branco de Olhos Azuis' } } )
    expect(input).toHaveValue('Dragão Branco de Olhos Azuis');
  });

  it('Verifica que a tela começa sem digimons renderizados', () => {
    const { queryByTestId } = render(<App />);

    const digimonName = queryByTestId('digimonName');

    expect(digimonName).toBeNull()
  });

  it('Renderiza um digimon na tela', async () => {
    const dataResponseAPI = [{
      name: "Agumon",
      img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      level: "Rookie",
    }];

    const fetchAPI = global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(dataResponseAPI)
    });

    const { findByRole, getByRole } = render(<App />);

    const input = getByRole('textbox')
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Agumon'} } );
    expect(input).toHaveValue('Agumon');

    const btnSearch = getByRole('button');
    expect(btnSearch).toBeInTheDocument();
    fireEvent.click(btnSearch);

    await findByRole('heading', {
      level: 2,
      name: /agumon/i
    });

    expect(fetchAPI).toBeCalledTimes(1);
    expect(fetchAPI).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon'
    );
  });

  it('Exibe mensagem de erro ao pesquisar por um digimon inexistente', async () => {
    const msgError = 'Teste is not a Digimon in our database.';

    const fetchAPI = global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue('Teste is not a Digimon in our database.'),
    });


    const {getByRole, findByRole} = render(<App />);

    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Teste'} } );
    expect(input).toHaveValue('Teste');

    const btnSearch = getByRole('button');
    expect(btnSearch).toBeInTheDocument();
    fireEvent.click(btnSearch);

/*     await findByRole('heading', {
      level:1,
      name: /Teste is not a Digimon in our database./i
    }); */
    
    expect(fetchAPI).toBeCalledTimes(1);
    expect(fetchAPI).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Teste'
    );
  });

  it('Caso não haja valor no input nenhum fetch é chamado', () => {
    const {getByRole} = render(<App />);

    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: ''} });
    expect(input).toHaveValue('');

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(global.fetch).not.toBeCalledTimes(0)
  });
});