const express = require("express");

const { getBeneficiaries } = require("./getBeneficiaries");
const { addBeneficiary } = require("./addBeneficiary");

const beneficiaryRouter = express.Router();
// add a beneficiary route
beneficiaryRouter.post('/', addBeneficiary);
beneficiaryRouter.get('/', getBeneficiaries);

module.exports = {
    beneficiaryRouter
}