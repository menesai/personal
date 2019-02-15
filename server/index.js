require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const {getInfo, create, deleteInfo, updateInfo, getProject} = require('./controller/controller');
const {register, login, logout, getUser} = require('./controller/authController');
// const {send} = require('./controller/nodeMailer')
const nodeMailer = require('nodemailer');


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

//this is controller endpoints 
app.get('/api/info', getInfo);
app.post('/api/create', create);
app.delete('/api/delete/:id', deleteInfo);
app.put('/api/update/:id', updateInfo);
app.get('/api/project/:id', getProject);

//auth controller
app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/logout', logout);
app.get('/auth/user', getUser);

//nodemailer
// app.post('/send/email', function (req, res) {
//     let transporter = nodeMailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'menesai99@gmail.com',
//             pass: '@Meneses480'
//         }
//     });
//     let mailOptions = {
//         from: '"Uriel Menese" <menesai99@gmail.com>', // sender address
//         to: 'saidmeneses1@live.com', // list of receivers
//         subject: 'Projects', // Subject line
//         text: 'this is a example', // plain text body
//         html: '<b>NodeJS Email Tutorial</b>' // html body
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message %s sent: %s', info.messageId, info.response);
//             res.render('index');
//         });
//     });

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {console.log(`Listening on port ${port}`)})