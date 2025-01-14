import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app=express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));


import RouterFactory from './route/factory/Factory.Route.js';
import RouterDriver from './route/driver/Driver.Router.js';
import RouterSuper from './route/supermarket/Supermarket.Router.js';
import Signup from './route/signup/Signup.Router.js';
import Login from './route/login/Login.Router.js'
import Ceo from './route/ceo/Ceo.Roue.js'

app.use('/factory',RouterFactory);
app.use('/driver',RouterDriver);
app.use('/supermarket',RouterSuper);
app.use('/ceo',Ceo);
app.use('/signup',Signup);
app.use(`/login`,Login);

app.get('/',(req,res)=>{ 
    res.status(200).send(`this route runing `);
})

const port=process.env.port||4000;

app.listen(port,(err)=>{
    if(err){console.log(err)}
    console.log(`the server is runing on port :${port}`)
})