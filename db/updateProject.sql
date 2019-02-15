UPDATE projects
SET name = $2,
    type = $3,
    length = $4,
    location = $5,
    details = $6,
    img = $7,
    description = $8,
    goals = $9,
    availability = $10
    WHERE projects_id = $1;

SELECT * FROM projects;