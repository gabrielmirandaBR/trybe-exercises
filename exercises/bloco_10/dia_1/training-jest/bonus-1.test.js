const searchEmployee = require('./bonus-1');

describe('Questão Bônus', () => {
  test('Checa se a função existe', () => {
    expect(searchEmployee).toBeDefined();
  });
  
  test('Checa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toEqual('function');
  });

  test('Checa se passar firstName como detail retorna o firstName do id', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  test('Checa se passar specialities como detail retorna o specialities do id', () => {
    expect(searchEmployee('4456-4', 'specialities')).toContain('Context API', 'RTL', 'Bootstrap');
  });

  test('Checa se aparece mensagem de erro quando passa um ID inexistente', () => {
    expect(() => {
      searchEmployee('8579-9', 'firstName');
    }).toThrow();
  });
  
  test('Checa se aparece a mensagem de erro ID não identificada', () => {
    expect(() => {
      searchEmployee('8579-9', 'firstName');
    }).toThrowError(new Error('ID não identificada'));
  });

  test('Checa se aparece mensagem de erro quando passa um detail inexistente', () => {
    expect(() => {
      searchEmployee('8579-6', 'stack');
    }).toThrow();
  });

  test('Checa se aparece mensagem de erro Informação inexistente', () => {
    expect(() => {
      searchEmployee('8579-6', 'stack');
    }).toThrowError(new Error('Informação Indisponível'));
  });
});
