const express = require('express');
const mainRouter = express.Router();

const {homeCon} = require('./controllers/homeCon');
const {fileCon} = require('./controllers/fileCon');


mainRouter.use('/home',homeCon)
mainRouter.use('/file', fileCon)




module.exports = mainRouter;
