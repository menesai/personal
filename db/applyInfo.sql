INSERT INTO apply (bio_one, bio_two, job_title, organization_name, from_month, from_year, to_month, to_year, bio_three)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);

SELECT * FROM apply;