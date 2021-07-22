-- Insira um novo funcionário na tabela sakila.staff
-- INSERT INTO sakila.staff (first_name, last_name, address_id,email, store_id, active, username, password)
-- VALUES ('Gabriel', 'Miranda', 3, 'gabriel@gmail.com', 1, 1, 'gbrl', '123')

-- Insira dois funcionários novos em apenas uma query
-- INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, username, password) VALUES
-- ('Manuel', 'Do Céu', 2, 'manu@gmail.com', 2, 'manu123', '123'),
-- ('João', 'Canabrava', 3, 'cana@gmail.com', 1, 'joao123', '123');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
-- INSERT INTO sakila.actor (first_name, last_name)
-- 	SELECT first_name, last_name
--     FROM sakila.customer
--     ORDER BY customer_id
--     LIMIT 5

-- Cadastre três categorias de uma vez só na tabela sakila.category
-- INSERT INTO sakila.category (name) VALUES
-- ('Terror'),
-- ('Aventura'),
-- ('Romance');

-- Cadastre uma nova loja na tabela sakila.store
-- INSERT INTO sakila.store (manager_staff_id, address_id)
-- VALUES (3, 3);