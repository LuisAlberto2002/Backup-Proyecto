
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const cors=require('cors');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(cookieParser());
const port=process.env.PORT || 3000;
const rutaLogin=require('./scr/rutas/rutasLogin');
const rutas=require('./scr/rutas/rutas');
const mongoUrl='mongodb+srv://VulpesBlack:36944757Ara@vbdb.7dcjohk.mongodb.net/VBCompany?retryWrites=true&w=majority';
app.use('', rutaLogin);
app.use('',rutas);


mongoose.connect(mongoUrl).then(client=>{
    app.listen(port,()=>{
        console.log('VBDB ONLINE');
    })
}).catch(err=>{
    console.log('VBDB DISSABLE', err);
});
