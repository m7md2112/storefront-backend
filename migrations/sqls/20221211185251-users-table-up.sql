CREATE TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR);
INSERT INTO users (first_name, last_name, password) VALUES ('John', 'Doe', '$2b$10$qvx7MWAsjeoEqbfaXhlRXeECZhC8ltuSZj8ohggfnJxYlHkjrj5Ae');
INSERT INTO users (first_name, last_name, password) VALUES ('Doe', 'John', '$2b$10$qvx7MWAsjeoEqbfaXhlRXeECZhC8ltuSZj8ohggfnJxYlHkjrj5Ae');
