INSERT INTO projects (name, type, length, location, details, img, description, goals, availability, skills)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

SELECT * FROM projects;