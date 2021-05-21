import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    const { getByText, getByRole, getByLabelText } = render(<App />);

    const addBtn = getByRole('button');
    const input = getByLabelText('Tarefa:');

    listTodo.forEach((task) => {
      fireEvent.change(input, { target:  { value: task } } );
      fireEvent.click(addBtn);
    });

    listTodo.forEach((task) => {
      expect(getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content='Caminhar' />);

    expect(getByText('Caminhar')).toBeInTheDocument();
  });
});
