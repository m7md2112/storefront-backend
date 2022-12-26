CREATE TABLE products_orders (
                                 id SERIAL PRIMARY KEY,
                                 product_id bigint REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
                                 quantity INT,
                                 order_id bigint REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO products_orders (product_id, quantity, order_id) VALUES (1, 1, 1);
INSERT INTO products_orders (product_id, quantity, order_id) VALUES (2, 3, 1);
INSERT INTO products_orders (product_id, quantity, order_id) VALUES (3, 4, 2);