# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.


## How to run this app ?
    1-create database and user via SQL query:

        CREATE DATABASE store_front;
        CREATE DATABASE store_front_test;
        CREATE USER db_user_store WITH PASSWORD 'qwerty';
        GRANT ALL PRIVILEGES ON DATABASE store_front TO db_user_store;
        GRANT ALL PRIVILEGES ON DATABASE store_front_test TO db_user_store;

    note: if you use PostgreSQL 15 please refer to this article  https://www.cybertec-postgresql.com/en/error-permission-denied-schema-public/
***
    2-create .env file in project root.
***
    3-use this variables as example:

     HTTP_PORT="8000"
     POSTGRES_HOST="127.0.0.1"
     POSTGRES_PORT="55000"
     POSTGRES_DATABASE="store_front"
     POSTGRES_DATABASE_TEST="store_front_test"
     POSTGRES_USER="db_user_store"
     POSTGRES_PASSWORD="qwerty"
     NODE_ENV="dev"
     SALT_ROUND=10
     PASSWORD_PEPPER="%&yf2A3sfX^xJfwn6e"
     PRIVATE_KEY="%o3GqBZ$ZLd42ajb2M"
     TEST_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkpvaG4iLCJsYXN0X25hbWUiOiJEb2UiLCJpYXQiOjE2NzIxNDQxMTd9.KA3t8Dq5nXoX-RhKLvn4c2GdCbgCVIvKqnTzQzuGiBk"
***
    4-install db-migrate via [npm install -g db-migrate]
    and run in terminal [db-migrate up]
***
    5-run in terminal npm run dev

## Database Schema 
````
List of relations
Schema |          Name          |   Type   |  Owner   
--------+------------------------+----------+----------
public | migrations             | table    | postgres
public | migrations_id_seq      | sequence | postgres
public | orders                 | table    | postgres
public | orders_id_seq          | sequence | postgres
public | products               | table    | postgres
public | products_id_seq        | sequence | postgres
public | products_orders        | table    | postgres
public | products_orders_id_seq | sequence | postgres
public | status                 | table    | postgres
public | status_id_seq          | sequence | postgres
public | users                  | table    | postgres

````
## Endpoints

### /api/user/
- create user [NO TOKEN REQUIRED as you cant generate token without user]

***[post] localhost:8000/api/user/***

`{
    "first_name": "First",
    "last_name": "Last",
    "password": "Password"
}
`
- login user [NO TOKEN REQUIRED so you can get TOKEN after user login]

***[post] localhost:8000/api/user/login***

`{
    "id": 1,
    "password": "Password"
}
`

- Delete user [TOKEN REQUIRED]

***[delete] localhost:8000/api/user/:ID***

- Get User By Id [TOKEN REQUIRED ]

***[get] localhost:8000/api/user/:ID***


- Get all Users at once [TOKEN REQUIRED]

***[get] localhost:8000/api/user/***

- Update User Data [TOKEN REQUIRED]

***[patch] localhost:8000/api/user/***

`{
    "first_name": "First",
    "last_name": "Last",
    "password": "Password updated"
}
`

--------------------------------------


### /api/product/

- Create Product[TOKEN REQUIRED]

***[post] localhost:8000/api/product/***

`{
"name": "product name",
"price": "product price"
}
`

- Delete Product[TOKEN REQUIRED]

***[Delete] localhost:8000/api/product/:ID***


- Get Product By Id [NO TOKEN REQUIRED]

***[get] localhost:8000/api/product/:ID***


- Get all Products at once [NO TOKEN REQUIRED]

***[get] localhost:8000/api/product/***

----------------------------------------


### /api/order/

- create order [token required]

***[post] localhost:8000/api/order/***

`{
"user_id":7,
"status_id":1
}`

- add product to order [token required]

***[post] localhost:8000/api/order/:ID***

`{
"order_id": 5,
"product_id":2,
"quantity":6
}`


- delete order [token required]

***[delete] localhost:8000/api/order/:ID***

- get all order products by order id

***[get] localhost:8000/api/order/:ID***
