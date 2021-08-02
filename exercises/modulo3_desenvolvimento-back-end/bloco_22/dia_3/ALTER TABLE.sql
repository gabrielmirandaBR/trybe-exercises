-- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.locations CHANGE COLUMN street_address address VARCHAR(40);
SELECT address from hr.locations;

-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.regions CHANGE COLUMN region_name region VARCHAR(25);
SELECT region from hr.regions;

-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.countries CHANGE COLUMN country_name country VARCHAR(40);
SELECT country from hr.countries;