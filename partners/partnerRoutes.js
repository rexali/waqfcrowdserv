const express = require("express");

const { getPartners } = require("./getPartners");
const { addPartner } = require("./addPartner");

const partnerRouter = express.Router();
// add a volunteer route
partnerRouter.post('/', addPartner);
partnerRouter.get('/', getPartners);

module.exports = {
    partnerRouter
}