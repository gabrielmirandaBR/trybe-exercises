import React from 'react';
import { render, fireEvent, cleanup, getByRole } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const addButton = getByText('Adicionar');

    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveValue('Adicionar')
  });

  test.only(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText} = render(<App />);

    const addButon = queryByText('Adicionar');
    const input = getByLabelText('Tarefa:');

    fireEvent.change(input, { target: { value: 'Fazer almoço' } });
    expect(queryByText('Fazer almoço')).not.toBeInTheDocument();
    
    fireEvent.click(addButon);
    expect(queryByText('Fazer almoço')).toBeInTheDocument();
  });
});
