import express from 'express';

import { LoginContorllar } from '../../controllar/Login.Controllar.js';

const Router= express.Router();

Router.post(`/`,LoginContorllar);


export default Router;