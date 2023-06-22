const express = require("express");

const { registerUser } = require("../auth/registerUser");
const { loginUser } = require("../auth/loginUser");
const { requestPassword } = require("../auth/requestPassword");
const { changePassword } = require("../auth/changePassword");
const { confirmRegistration } = require("../auth/confirmRegistration");
const { verifyUserToken } = require("../auth/verifyUserToken");

var authRouter = express.Router();

authRouter.post("/",(req,res,next)=>{});

authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.get("/request", requestPassword); // request password change

authRouter.post("/change", changePassword); // change the password

authRouter.get("/confirm", confirmRegistration);

authRouter.post("/verify", verifyUserToken);


module.exports={
    authRouter
}