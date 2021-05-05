CREATE DATABASE leadersLikeMe;
USE leadersLikeMe;
CREATE TABLE leaders (
  id INT auto_increment,
  name VARCHAR(255),
  image,
  category ENUM ('BIPOC',),
  division ENUM (
    'Science',
    'Technology',
    'Engineering',
    'Arts',
    'Math',
    'Social Justice'
  ),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);
INSERT INTO
  leaders(
    location,
    mascot,
    abbreviation,
    conference,
    division
  )
VALUES
  ()