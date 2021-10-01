CREATE DATABASE lojaRoupas;

USE lojaRoupas;

CREATE TABLE itemRoupa(
item_id int not null AUTO_INCREMENT,
descricao varchar(40),
valor float,
PRIMARY KEY (item_id));

