import express from 'express';
const Router= express.Router();

import { GetAllOrderControllar } from '../../controllar/getOrder/GetAllOrder.Controllar.js';

Router.get('/getallorder',GetAllOrderControllar)



export default Router;