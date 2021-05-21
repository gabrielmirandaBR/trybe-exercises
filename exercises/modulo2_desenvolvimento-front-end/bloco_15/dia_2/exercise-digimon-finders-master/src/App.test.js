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
});