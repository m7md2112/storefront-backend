CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id bigint REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    status_id bigint REFERENCES status(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO orders (user_id, status_id) VALUES (1, 1);
INSERT INTO orders (user_id, status_id) VALUES (2, 1);
INSERT INTO orders (user_id, status_id) VALUES (2, 1);