const express = require("express");

const { getDonations } = require("./getDonations");
const { getDonation } = require("./getDonation");
const { addDonation } = require("./addDonation");
const { getUserWaqfDonations } = require("./getUserWaqfDonations");
const { getUserZakatDonations } = require("./getUserZakatDonations");

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