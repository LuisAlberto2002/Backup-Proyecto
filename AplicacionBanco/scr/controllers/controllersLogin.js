require('mongoose');
require('dotenv').config();
const CryptoJS = require('crypto-js');
const jws=require('jsonwebtoken');
const userModel=require('./../models/userModel');
const hash = process.env.HASH;
const secret=process.env.secret;
class userControllers{
    login(req,res){
        const {email,password} = req.body.email;
       // const password = CryptoJS.AES.encrypt(req.body.password,hash);
        userModel.findOne({email, password}).then((response)=>{  
            if(response){
                const token=jws.sign({
                    _id:response._id,
                    email:response.email,
                    rol: response.rol
                },secret);

                res.send({
                    token,
                    rol: response.rle,
                });
            }else{
                res.sendStatus(400);
            }

        }).catch((err)=>{
            res.status(400).send({message: 'No se pudo verificar el usuario'});
        });
    }
}
module.exports=new userControllers();