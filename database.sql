-- Creates a table called "artist" with three columns (id, name, and birthdate)
CREATE TABLE "artist" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "birthdate" date
);

-- Creates a table called "song" with four columns (id, title, length, and released)
CREATE TABLE "song" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "length" VARCHAR(10) NOT NULL,
    "released" date
);

-- Insertes four entries into the artist table.
INSERT INTO "artist" (name, birthdate)
VALUES ('Ella Fitzgerald', '04-25-1917'), ('Dave Brubeck', '12-06-1920'),
('Miles Davis', '05-26-1926'), ('Esperanza Spalding', '10-18-1984');

-- Insertes three entries into the song table.
INSERT INTO "song" (title, length, released)
VALUES ('Take Five', '5:24', '1959-09-29'), ('So What', '9:22', '1959-08-17'),
('Black Gold', '5:17', '2012-02-01');

-- 'Grabs' all entries in the 'song' table and orders them by title.
SELECT * FROM "song" ORDER BY "title";

-- 'Grabs' all entries in the 'artist' table and orders them by date of birth from youngest to oldest.
SELECT * FROM "artist" ORDER BY "birthdate" DESC;