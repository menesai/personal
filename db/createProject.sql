INSERT INTO projects (length, location, type, goals, description, details, skills, availability, name)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);

SELECT * FROM projects;