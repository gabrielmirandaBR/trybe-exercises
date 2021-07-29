CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sexo VARCHAR(9) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL
);

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    data_contratacao DATETIME DEFAULT NOW()
);

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    data_contratacao DATETIME DEFAULT NOW(),
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE relacoesTrabalhistas(
	animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    gerente_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id, gerente_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id),
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);
