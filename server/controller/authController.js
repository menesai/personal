const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


const register = async (req,res,next) => {
    const db = req.app.get('db');
    console.log(req.body)
    const hash = await bcrypt.hash(req.body.password, 10)
        try{
            const response = await db.addUser({
                username: req.body.username,
                password: hash,
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            })
            res.json({username: response[0].username})
            console.log(err)
            res.status(401).json("error with register")
        } catch(err){
        }
            
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'menesai99@gmail.com',
              pass: '@Meneses480'
            }
          });
          
          var mailOptions = {
            from: 'menesai99@gmail.com',
            to: 'saidmeneses1@live.com',
            subject: 'Project',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
}

const login = (req,res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;

    db.findUser({username, password})
    .then(async users => {
        console.log(users)
        if(!users.length){
            res.status(401).json({error: "No user Found"})
        } else{
            const isMatch = await bcrypt.compare(
                req.body.password,
                users[0].password
            )
            if(!isMatch){
                res.status(401).json({error: "Incorrect password"})
            } else{
                req.session.user = {username: users[0].username}

                return res.json(req.session.user)
                //res.json({username: users[0].username}
            }
        }
    })

}

const logout = (req,res,next) => {
    req.session.destroy()
    return res.sendStatus(200)
}

const getUser = (req,res,next) => {
    // const db = req.app.get('db');
    res.json(req.session.user)
}







module.exports ={
    register,
    login,
    logout,
    getUser
}