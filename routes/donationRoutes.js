const express = require("express");

const { getDonations } = require("../donations/getDonations");
const { getDonation } = require("../donations/getDonation");
const { addDonation } = require("../donations/addDonation");
const { getUserWaqfDonations } = require("../donations/getUserWaqfDonations");
const { getUserZakatDonations } = require("../donations/getUserZakatDonations");

const donationRouter = express.Router();
// get all replies
donationRouter.get('/', getDonations);
// get a single reply
donationRouter.get('/:id', getDonation);
// get a user's donations
donationRouter.get('/:id/users', getUserWaqfDonations);

donationRouter.get('/:id/:category', getUserZakatDonations);
// add a single reply
donationRouter.post('/', addDonation);

module.exports = {
    donationRouter
}