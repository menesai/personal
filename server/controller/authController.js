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
            subject: 'codeTribute Account',
            text: 'Thank you for creating your code tribute Account'
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
                req.session.user = {
                    username: users[0].username,
                    isAdmin: users.admin,
                    id: users.users_id,
                }

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

const oneUser = (req,res) => {
    const db = req.app.get('db');
    const {id} = req.params;

    db.userProfile(id)
    .then( info => {
        res.status(200).json(info)
    })
    .catch(err => {
        res.status(500).json({error: "Erorr in get"})
    })
}



module.exports ={
    register,
    login,
    logout,
    getUser,
    oneUser
}