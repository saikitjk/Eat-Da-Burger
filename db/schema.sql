DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured Boolean,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
) -- UPDATE burgers SET devoured = 	True where id in (21)
- -
DELETE FROM BURGERS
WHERE id > 24 -- SELECT * FROM burgers