UPDATE projects
SET length = $2,
    location = $3,
    type = $4,
    goals = $5,
    description = $6,
    details = $7,
    skills = $8,
    availability = $9,
    name = $10
    WHERE projects_id = $1;

SELECT * FROM projects;