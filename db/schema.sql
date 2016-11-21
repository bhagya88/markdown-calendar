// this database will have schedules/calender for all the cohorts
// this schema is for reference only. because we will be creating tables from sequelize or bookshelf
// we can skip primary key and foreign key relationships in sequelize to avoid problems or keep them if we like. 
// also we may not need ids as sequelize will create them for us
// feel free to make any changes :)
// we need to decide on the orm sequelize or bookshelf?

CREATE DATABASE utbootcamp;
USE utbootcamp;

CREATE TABLE Lessons(
id INTEGER(5),
chapter VARCHAR(100),
subject VARCHAR(100)
length NUMBER(1),
PRIMARY KEY (id)
);


CREATE TABLE Classes(
id INTEGER(5),
lesson_id INTEGER(5),
date1 DATE,
date2 DATE,
instructor1 VARCHAR(100),
instructor2 VARCHAR(100),
recording1 VARCHAR(100),
recording2 VARCHAR(100),
cohort_name VARCHAR(100),
PRIMARY KEY (id),
FOREIGN KEY (lesson_id) REFERENCES lessons(id)



CREATE TABLE students(
id INTEGER(5),
name VARCHAR(100),
email VARCHAR(100),
cohort_name INTEGER(5),
PRIMARY KEY (id),
FOREIGN KEY (schedule_id) REFERENCES schedule(id)
);

CREATE TABLE cohorts(
id INTEGER(5),
cohort_name
name VARCHAR(100),
campus VARCHAR(100),
city VARcHAR(100),
schedule VARCHAR(100),
PRIMARY KEY (id)
)

