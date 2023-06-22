const express = require("express");

const { getPartners } = require("../partners/getPartners");
const { addPartner } = require("../partners/addPartner");

const partnerRouter = express.Router();
// add a volunteer route
partnerRouter.post('/', addPartner);
partnerRouter.get('/', getPartners);

module.exports = {
    partnerRouter
}