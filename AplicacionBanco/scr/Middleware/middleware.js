const jws=require('jsonwebtoken');
require('dotenv').config();
require('cookie-parser');

const secret=process.env.secret;
const authMiddleware=(req,res,next)=>{
    const cookie = req.cookies['Token'];
    if(!cookie){
        res.redirect('/login')
    }else {
        jws.verify(token,secret,(err,decode) => {
            if(err){
                res.status(401).send({msg:'Token no valido. Favor de iniciar sesion'});
            }else{
                next();
            }
        }) 
    }

};

module.exports=authMiddleware;