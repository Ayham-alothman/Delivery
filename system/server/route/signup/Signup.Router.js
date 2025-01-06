import express from 'express';

import {SignupFactoryControllar,SignupDriverControllar,SignupSupermarketControllar,SignupProductControllar} from '../../controllar/Signup.Contollar.js'

const Router= express.Router();

Router.post(`/factory`,SignupFactoryControllar);

Router.post(`/driver`,SignupDriverControllar);

Router.post('/supermarket',SignupSupermarketControllar);

Router.post('/product',SignupProductControllar);


export default Router;