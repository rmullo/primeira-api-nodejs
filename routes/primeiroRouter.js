const express = require("express");
const {
    helloWorldCtrl 
} = require("../controller/primeiroCtrl");   
const primeiroRouter = express.Router();

primeiroRouter.get('/', helloWorldCtrl)

module.exports = primeiroRouter;