-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
-- SELECT ucase('trybe');

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
-- SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- SELECT length('Uma frase qualquer');

-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
-- SELECT substring('A linguagem JavaScript está entre as mais usadas', 12, 11);

-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT lcase('RUA NORTE 1500, SÃO PAULO, BRASIL');
