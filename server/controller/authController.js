const bcrypt = require('bcryptjs');

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
        } catch(err){
            console.log(err)
            res.status(401).json("error with register")
        }
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