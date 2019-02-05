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