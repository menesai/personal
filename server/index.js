require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const {getInfo, create, deleteInfo, updateInfo, getProject} = require('./controller/controller');
const {register, login, logout, getUser} = require('./controller/authController');
const {usersOnly, adminsOnly} = require('./middleware/authMiddleware');
const {applyCreate} = require('./controller/applyController');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('Connected to database')
})

app.use(session ({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7  * 2
    }
}))

//this is controller endpoints // auth middleware
app.get('/api/info', getInfo);
app.post('/api/create', create, usersOnly);
app.delete('/api/delete/:id', deleteInfo);
app.put('/api/update/:id', updateInfo);
app.get('/api/project/:id', getProject);

//auth controller
app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/logout', logout);
app.get('/auth/user', getUser);

//apply Info
app.post('/api/apply', applyCreate);


const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {console.log(`Listening on port ${port}`)})