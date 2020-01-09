### Schema

CREATE DATABASE project2_db;
USE project2_db;

DROP TABLE posts;
DROP TABLE topics;
DROP TABLE users;

CREATE TABLE topics
(
	id int NOT NULL AUTO_INCREMENT,
	topicname varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE posts
(
	id int NOT NULL AUTO_INCREMENT,
	poster_id int NOT NULL,
	topic_id int NOT NULL,
	post_content TEXT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (poster_id)
	REFERENCES users(id),
	FOREIGN KEY (topic_id)
	REFERENCES topics(id)
);