const express = require("express"); 
 
const { addHelp } = require("./addHelp");
const { getHelps } = require("./getHelps");
const { updateHelp } = require("./updateHelp");

const helpRouter = express.Router();
// add a help
helpRouter.post('/', addHelp);
// get all helps
helpRouter.get('/', getHelps);
// update a help
helpRouter.patch('/', updateHelp);

module.exports = {
    helpRouter
}