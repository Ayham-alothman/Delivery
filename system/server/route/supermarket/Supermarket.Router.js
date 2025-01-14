import express from 'express';


import {TakeOrderControllar} from '../../controllar/Supermarket/TakeOrder.Controllar.js'
import { AprovalRequestSuperControllar } from '../../controllar/Supermarket/AprovalReqest.Supermarket.Controllar.js';
import {GeTOrderSupermarketControllar} from '../../controllar/getOrder/GetOrder.Supermarket.Controllar.js'
import { GetAllProductsControllar } from '../../controllar/Supermarket/GetAllProducts.Controllar.js';
const Router= express.Router();

Router.post(`/takeorder`,TakeOrderControllar);

Router.post('/aprovalrequest',AprovalRequestSuperControllar);

Router.get('/getproducts',GetAllProductsControllar);

Router.post('/getorder',GeTOrderSupermarketControllar);

export default Router;