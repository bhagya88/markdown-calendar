// this database will have schedules/calender for all the cohorts
// this schema is for reference only. because we will be creating tables from sequelize or bookshelf
// we can skip primary key and foreign key relationships in sequelize to avoid problems or keep them if we like. 
// also we may not need ids as sequelize will create them for us
// feel free to make any changes :)
// we need to decide on the orm sequelize or bookshelf?

CREATE DATABASE utbootcamp;
USE utbootcamp;

CREATE TABLE classes(
id INTEGER(5 class_name VARCHAR(100),
class_length NUMBER(1),
PRIMARY KEY (id)
);

CREATE TABLE students(
id INTEGER(5),
name VARCHAR(100),
email VARCHAR(100),
schedule_id INTEGER(5),
PRIMARY KEY (id),
FOREIGN KEY (schedule_id) REFERENCES schedule(id)
);

CREATE TABLE cohorts(
id INTEGER(5),
cohort_name VARCHAR(100),
cohort_campus VARCHAR(100),
cohort_city VARcHAR(100),
schedule_id INTEGER(5) FOREIGN KEY
PRIMARY KEY (id),
FOREIGN KEY (schedule_id) REFERENCES schedule(id)
)

CREATE TABLE schedule(
id INTEGER(5),
class_id INTEGER(5),
class_name VARCHAR(100),
class_length NUMBER(1),
start_date DATE,
PRIMARY KEY (id),
FOREIGN KEY (class_id) REFERENCES schedule(id)
)
