CREATE TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR);
INSERT INTO users (first_name, last_name, password) VALUES ('John', 'Doe', '111');
INSERT INTO users (first_name, last_name, password) VALUES ('John1', 'Doe2', '111ggg');