const getRepos = require('./exercise4');

describe('Teste Exercício 4', () => {
  it('Checa se há os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', async () => {
    expect.assertions(2);
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result).toContainEqual('sd-01-week4-5-project-todo-list');
    expect(result).toContainEqual('sd-01-week4-5-project-meme-generator');
  });
});

// OU com promise
/* describe('Teste Exercício 4 - Promise', () => {
  it('Checa se há os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', () => getRepos('https://api.github.com/orgs/tryber/repos').then((directory) => {
    expect.assertions(2);
    expect(directory).toContain('sd-01-week4-5-project-todo-list'); 
    expect(directory).toContain('sd-01-week4-5-project-meme-generator');
    }));
}); */