-- Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
-- SELECT M.title, B.domestic_sales, B.international_sales
-- from Pixar.Movies as M
-- INNER JOIN Pixar.BoxOffice as B
-- ON M.id = B.movie_id;

-- Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
-- SELECT M.title, B.domestic_sales, B.international_sales
-- FROM Pixar.Movies as M
-- INNER JOIN Pixar.BoxOffice as B
-- ON M.id = B.movie_id
-- WHERE B.international_sales > B.domestic_sales;

-- Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
-- SELECT M.title, B.rating
-- FROM Pixar.Movies as M
-- INNER JOIN Pixar.BoxOffice as B
-- ON M.id = B.movie_id
-- ORDER BY B.rating DESC;

-- Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
-- SELECT * FROM Pixar.Theater as T
-- LEFT JOIN Pixar.Movies as M
-- ON T.id = M.id
-- ORDER BY T.name;

-- Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
-- SELECT * FROM Pixar.Theater as T
-- RIGHT JOIN Pixar.Movies as M
-- ON M.id = T.id
-- ORDER BY T.name;

--  Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- INNER JOIN

-- SELECT M.title
-- FROM Pixar.Movies as M
-- INNER JOIN Pixar.BoxOffice as B
-- ON M.id = B.movie_id
-- WHERE B.rating > 7.5;

-- SUBQUERY
-- SELECT title 
-- FROM Pixar.Movies
-- WHERE id IN (SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);

-- Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
-- INNER JOIN
-- SELECT B.rating 
-- FROM Pixar.BoxOffice as B
-- INNER JOIN Pixar.Movies as M
-- ON B.movie_id = M.id
-- WHERE M.year > 2009;

-- SUBQUERY
-- SELECT rating 
-- FROM Pixar.BoxOffice
-- WHERE movie_id IN(SELECT id FROM Pixar.Movies WHERE year > 2009);
