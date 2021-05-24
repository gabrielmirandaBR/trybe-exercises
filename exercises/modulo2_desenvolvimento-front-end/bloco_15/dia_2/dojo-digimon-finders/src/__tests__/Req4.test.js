import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// ATENÇÃO!!! removam o ".skip" do describe

describe('Teste da nova funcionalidade', () => {
  it('Renderiza os 5 primeiros digimons da API', async () => {
    render(<App />);
    const resultAPI = await fetch('https://digimon-api.herokuapp.com/api/digimon')
    const firstFiveDigimons = (await resultAPI.json()).splice(0, 5);

    firstFiveDigimons.forEach((digimon) => {
      const digimonNameElement = screen.queryByText(digimon.name)
      expect(digimonNameElement).not.toBeInTheDocument();
    })
    // nesse caso utilizei um forEach
    // mas caso o array fosse muito grande o melhor seria
    // apenas testar o primeiro e o ultimo elemento do array

    const firstFiveBtn = screen.getByRole('button', { name: /^primeiros 5$/i }); // ^ indica o início de uma linha e $ indica o fim de uma linha https://medium.com/xp-inc/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f
    fireEvent.click(firstFiveBtn);
    // percebam o uso dos sinais "^", "$" e "i" no regex
    // considerem pesquisar para entender melhor o que cada um é

    await waitFor(() => {
      firstFiveDigimons.forEach((digimon) => {
        const digimonNameElement = screen.getByText(digimon.name)
        expect(digimonNameElement).toBeInTheDocument();
      })
    })
  });
});
