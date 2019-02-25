 const usersOnly = (req,res,next) => {
     if(!req.sesssion.users){
         return res.status(401).json('Please Login/ Make a Account')
     }
     next();
 }

 const adminsOnly = (req,res,next) => {
     if(!req.sesssion.user.admin){
         return res.status(200).json("You're Not an Admin")
     }
     next();
 }

 module.exports ={
     usersOnly,
     adminsOnly
 }