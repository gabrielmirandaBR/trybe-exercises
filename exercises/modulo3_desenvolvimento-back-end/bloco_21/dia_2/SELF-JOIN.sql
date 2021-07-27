-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
-- SELECT F1.film_id, F1.replacement_cost, F2.film_id, F2.replacement_cost
-- FROM sakila.film as F1, sakila.film as F2
-- WHERE F1.replacement_cost = F2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
-- SELECT F1.title, F1.rental_duration, F2.title, F2.rental_duration
-- FROM sakila.film as F1, sakila.film as F2
-- WHERE F1.rental_duration = F2.rental_duration
-- HAVING F1.rental_duration BETWEEN 2 AND 4;