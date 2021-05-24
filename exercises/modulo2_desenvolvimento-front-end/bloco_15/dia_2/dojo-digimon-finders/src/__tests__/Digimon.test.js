import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from '../Digimon';
import data from '../__mocks__/data';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    render(<Digimon digimon={data[0]} />);
   
    const nomeDigimon = screen.getByRole('heading',{
      level:2,
      name: /Koromon/i,
    });

    expect(nomeDigimon).toBeInTheDocument();

  });
});
