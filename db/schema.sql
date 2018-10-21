### Schema
drop database if exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
    PRIMARY KEY (id),
	burger_name varchar(255) NOT NULL,
	devoured boolean default false
);
