drop database if exists burgers_db;
create database if not exists burgers_db;
use burgers_db;

create table burgers (
id int not null auto_increment,
burger_name varchar(100) not null,
devoured bool default false,
primary key (id)  
);
 
insert into burgers (burger_name, devoured) 
values 
('Cheese burger', false), 
('Bacon n Cheese burger', false),
('Egg, Bacon n Cheese burger', false);
