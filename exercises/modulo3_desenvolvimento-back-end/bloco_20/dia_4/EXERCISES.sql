-- Insira as produções da Pixar abaixo na tabela Movies :
-- INSERT INTO Pixar.Movies (title, director, year, length_minutes) VALUES
-- ('Monstros SA', 'Pete Docter', 2001, 92),
-- ('Nemo', 'John Lasseter', 2003, 107),
-- ('Os Incríveis', 'Brad Bird', 2004, 116),
-- ('WALL-E', 'Pete Docter', 2008, 104);

-- Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .
-- INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) 
-- VALUES (8, 6.8, 450000000, 370000000);

--  O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .
-- UPDATE Pixar.Movies
-- SET director = 'Andrew Staton'
-- WHERE title = 'Procurando Nemo';

-- O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
-- UPDATE Pixar.Movies
-- SET title = 'Ratatouille', year = 2007
-- WHERE title = 'ratatui';

-- Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies
-- INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES
-- (9, 8.5, 300000000, 250000000),
-- (10, 7.4, 460000000, 510000000),
-- (11, 9.9, 290000000, 280000000);

-- Exclua da tabela Movies o filme "WALL-E".
-- SELECT id FROM Pixar.Movies
-- WHERE title = 'WALL-E';

-- DELETE FROM Pixar.BoxOffice
-- WHERE movie_id = 11;

-- DELETE FROM Pixar.Movies
-- WHERE title = 'WALL-E';


-- Exclua da tabela Movies todos os filmes dirigidos por "John Lasseter".
-- SELECT id FROM Pixar.Movies
-- WHERE director = 'John Lasseter';

-- DELETE FROM Pixar.BoxOffice
-- WHERE movie_id IN (1, 5, 6, 9);

-- DELETE FROM Pixar.Movies
-- WHERE director = 'John Lasseter';

-- Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
-- UPDATE Pixar.BoxOffice
-- SET rating = 9
-- WHERE domestic_sales > 400000000;

-- Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
-- UPDATE Pixar.BoxOffice
-- SET rating = 6
-- WHERE international_sales < 300000000 AND domestic_sales > 200000000;

-- Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
-- SELECT id FROM Pixar.Movies
-- WHERE length_minutes < 100;

-- DELETE FROM Pixar.BoxOffice
-- WHERE movie_id IN (2, 7, 8);

-- DELETE FROM Pixar.Movies
-- WHERE length_minutes < 100;
