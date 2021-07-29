-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
-- USE sakila;
-- DELIMITER $$
-- CREATE PROCEDURE showMostPopularActors()
-- BEGIN
-- 	SELECT actor_id, COUNT(*) as 'quantidade_filmes' FROM sakila.film_actor
--     GROUP BY actor_id
--     ORDER BY `quantidade_filmes` DESC
--     LIMIT 10;
-- END $$
-- DELIMITER ;

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
-- USE sakila;
-- DELIMITER $$
-- CREATE PROCEDURE showCategory(IN category VARCHAR(100))
-- BEGIN
-- 	SELECT Fcat.film_id, F.title, Fcat.category_id,Cat.name 
--     FROM sakila.film_category as Fcat
--     INNER JOIN sakila.film as F ON Fcat.film_id = F.film_id
--     INNER JOIN sakila.category as Cat ON Cat.category_id = Fcat.category_id
-- 	WHERE Cat.name = category;
-- END $$

-- DELIMITER ;

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
-- USE sakila;
-- DELIMITER $$
-- CREATE PROCEDURE isClientActived(IN client_email VARCHAR(100), OUT actived BOOL)
-- BEGIN
-- 	SET actived = (
-- 		SELECT active FROM sakila.customer
--         WHERE client_email = email
--     );
-- END $$

-- DELIMITER ;

-- CALL isClientActived('MARY.SMITH@sakilacustomer.org', @actived);
-- SELECT @actived;
