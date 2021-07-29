-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
-- USE sakila;
-- DELIMITER $$

-- CREATE FUNCTION showTotalPayment(client_id INT)
-- RETURNS INT READS SQL DATA
-- BEGIN
-- 	DECLARE count_payments INT;
-- 	SELECT COUNT(*)
--     FROM sakila.payment
--     WHERE customer_id = client_id
--     INTO count_payments;
--     RETURN count_payments;
-- END $$

-- DELIMITER ;

-- SELECT showTotalPayment(2);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
-- USE sakila;
-- DELIMITER $$
-- CREATE FUNCTION showFilmName(id INT)
-- RETURNS VARCHAR(500) READS SQL DATA
-- BEGIN
-- 	DECLARE name_film VARCHAR(500);
--     SELECT F.title FROM sakila.film as F
--     INNER JOIN sakila.inventory as I
--     ON I.film_id = F.film_id
--     WHERE id = I.inventory_id INTO name_film;
--     RETURN name_film;
-- END $$

-- DELIMITER ;

-- SELECT showFilmName(5);

