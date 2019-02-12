INSERT INTO new_users (username, password, email, first_name, last_name)
VALUES (${username}, ${password}, ${email}, ${first_name}, ${last_name})

RETURNING *