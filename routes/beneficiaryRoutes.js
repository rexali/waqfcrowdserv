const express = require("express");

const { getBeneficiaries } = require("../beneficiaries/getBeneficiaries");
const { addBeneficiary } = require("../beneficiaries/addBeneficiary");

const beneficiaryRouter = express.Router();
// add a beneficiary route
beneficiaryRouter.post('/', addBeneficiary);
beneficiaryRouter.get('/', getBeneficiaries);

module.exports = {
    beneficiaryRouter
}