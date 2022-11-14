use master
GO
IF NOT EXISTS (
   SELECT name
   FROM sys.databases
   WHERE name = N'atmscamalert'
)

create database atmscamalert;
GO

create table users(
	account_no varchar(9),
	pin int,
	balance float,
    dlimit float
);

insert into users
values ('0000 0000', 123456, 1000.00, 2000.00)
insert into users
values ('1111 1111', 123456, 2000.00, 2000.00)
insert into users
values ('2222 2222', 654321, 3000.00, 2000.00)
insert into users
values ('3333 3333', 123456, 4000.00, 500.00)