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