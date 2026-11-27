create database if not exists games_db;
use games_db;

create table Game (
    pk_game_id int auto_increment not null,
	nome varchar(100),
    estudio varchar(100),
    categoria varchar(100),
    idade int,
    valor decimal(10, 2),
    disponibilidade boolean default false
);