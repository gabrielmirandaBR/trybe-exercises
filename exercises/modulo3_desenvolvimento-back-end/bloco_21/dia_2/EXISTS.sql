-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
-- SELECT Id, Title FROM hotel.Books as B
-- WHERE NOT EXISTS (
-- 	SELECT returned FROM hotel.Books_Lent
--     WHERE book_id = B.Id
-- );

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
-- SELECT Id, Title from hotel.Books as B
-- WHERE EXISTS (
-- 	SELECT returned from hotel.Books_Lent
--     WHERE book_id = B.Id AND B.Title LIKE ('%lost%')
-- );

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
-- SELECT Name FROM hotel.Customers as C
-- WHERE NOT EXISTS (
-- 	SELECT CustomerID from hotel.CarSales
--     WHERE CustomerID = C.CustomerId
-- );

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
-- SELECT Cus.Name, Car.Name FROM hotel.Cars as Car
-- INNER JOIN hotel.Customers as Cus
-- WHERE EXISTS (
-- 	SELECT * FROM hotel.CarSales
--     WHERE CustomerID = Cus.CustomerId AND Car.Id = CarID
-- );
