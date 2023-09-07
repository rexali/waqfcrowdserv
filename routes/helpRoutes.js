const express = require("express"); 
 
const { addHelp } = require("../helps/addHelp");
const { getHelps } = require("../helps/getHelps");
const { updateHelp } = require("../helps/updateHelp");

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