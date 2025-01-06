import express from 'express';

import {UpdateProductNameControllar} from '../../controllar/update/Update.Name.Product.js'
import {UpdatePriceProductControllar} from '../../controllar/update/Update.Price.Product.js'

import { SendRequestFactoryControllar } from '../../controllar/factory/SendRequest.Controllar.js';
import { GetOrderFactoryControllar } from '../../controllar/getOrder/GetOrder.Factory.Controllar.js';
const Router= express.Router();

Router.post(`/update/name`,UpdateProductNameControllar);

Router.post(`/update/price`,UpdatePriceProductControllar);

Router.post('/sendrequest',SendRequestFactoryControllar);

Router.post('/getorder',GetOrderFactoryControllar);

export default Router;