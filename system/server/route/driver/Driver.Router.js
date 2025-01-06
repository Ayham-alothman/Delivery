import express from 'express';

import { ChangeStateDriverContollar } from '../../controllar/Driver/ChangeState.Driver.Controllar.js';
import { AprovalRequestDriver } from '../../controllar/Driver/AprovalRequest.Driver.js';
import { SendRequestDriverControllar } from '../../controllar/Driver/SendRequest.Driver.js';
import { GetOrderDriverControllar } from '../../controllar/getOrder/GetOrder.Driver.Controllar.js';
const Router= express.Router();

Router.post(`/changestate`,ChangeStateDriverContollar);

Router.post('/aprovalfactory',AprovalRequestDriver);

Router.post('/sendsupermarket',SendRequestDriverControllar);

Router.post('/getorder',GetOrderDriverControllar);

export default Router;