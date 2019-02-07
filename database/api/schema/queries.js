export const CREATE_USER_TABLE = `CREATE TABLE users (
    id integer,
    username varchar(60) UNIQUE,
    password varchar(60),
    level integer,
    PRIMARY KEY(id)
);`

export const CREATE_LOCATION_TABLE = `CREATE TABLE locations (
    id varchar(6),
    name varchar(60),
    description text,
    PRIMARY KEY(id)
);`

export const CREATE_TYPE_TABLE = `CREATE TABLE tables (
    id varchar(6),
    name varchar(60),
    description text,
    PRIMARY KEY(id)
);`

export const CREATE_GROUP_TABLE = `CREATE TABLE groups (
    id varchar(6),
    name varchar(60),
    description text,
    PRIMARY KEY(id)
);`

export const CREATE_SUPPLIER_TABLE = `CREATE TABLE suppliers (
    id varchar(6),
    name varchar(60),
    address varchar(60),
    phone varchar(60),
    description text,
    PRIMARY KEY(id)
);`

export const CREATE_CUSTOMER_TABLE = `CREATE TABLE customers (
    id varchar(6),
    name varchar(60),
    cut integer,
    description text,
    PRIMARY KEY(id)
);`

export const CREATE_CUSTOMER_TABLE = `CREATE TABLE retail_sales (
    id varchar(6),
    name varchar(60),
    starting_date date,
    ending_date date,
    description text,
    PRIMARY KEY(id)
);`
