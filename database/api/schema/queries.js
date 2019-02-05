export const CREATE_USER_TABLE = `CREATE TABLE users (
    id integer,
    username varchar(60) UNIQUE,
    password varchar(60),
    level integer,
    PRIMARY KEY(id)
);`