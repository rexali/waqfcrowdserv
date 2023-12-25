const express = require("express");

const { registerUser } = require("./registerUser");
const { loginUser } = require("./loginUser");
const { requestPassword } = require("./requestPassword");
const { changePassword } = require("./changePassword");
const { confirmRegistration } = require("./confirmRegistration");
const { verifyUserToken } = require("./verifyUserToken");

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