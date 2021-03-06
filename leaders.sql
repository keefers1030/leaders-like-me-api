CREATE DATABASE leaders;
USE leaders;
CREATE TABLE leaders (
  id INT auto_increment,
  name VARCHAR(255),
  image LOAD_FILE,
  category ENUM (
    'Female',
    'BIPOC',
    'AAPI',
    'LGBTQIA',
    'Disabled',
    'Neurodivergent',
  ),
  steam ENUM (
    'Science',
    'Technology',
    'Engineering',
    'Arts',
    'Math',
    'Social Justice'
  ),
  link VARCHAR (255),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);
INSERT INTO
  leaders(
    name,
    image,
    category,
    steam,
    link
  )
VALUES
  ();

  CREATE USER 'leaders' @'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';