CREATE TABLE products_orders (
                                 id SERIAL PRIMARY KEY,
                                 product_id bigint REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
                                 quantity INT,
                                 order_id bigint REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE
)

