--creating databse

create database LMS;
use lms;


--registraion table
create table registration
(
	id bigint primary key auto_increment,
    name varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(100) not null,
    confirm_password varchar(100) not null,
    registration_date timestamp not null default current_timestamp
);

select *from registration; 

-- login table

create table login
(
	user_id bigint primary key auto_increment,
	email varchar(100) not null unique,
    password varchar(100) not null,
    foreign key (user_id) references registration(id)
);
insert into login(email,password) values('prasanjeetdas44@gmail.com','p1234');
insert into login(email,password) values('monu44@gmail.com','m124');
select *from login;

--apply_leave table

create table apply_leave
(
	user_id bigint primary key auto_increment,
    name varchar(100) not null,
    email varchar(100) not null unique,
    reason varchar(100) not null,
    from_date varchar(10) not null,
    to_date varchar(10) not null,
    foreign key (user_id) references login(user_id)
);
insert into apply_leave(name,email,reason,from_date,to_date) values('prasanjeet das','prasanjeetdas44@gmail.com','leave for personal reason','12/11/2020','15/11/20');
insert into apply_leave(name,email,reason,from_date,to_date) values('monu','monu44@gmail.com','leave for some reason','15/11/2020','20/11/20');
select *from apply_leave;