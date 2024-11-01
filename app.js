const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
const dotenv = require('dotenv');
dotenv.config();

// const csrf = require('csurf');
// handle payment
const { getTransactionUrl } = require("./payment/getTransactionUrl");
const { verifyTransaction } = require("./payment/verifyTransaction");
const { getWebhookData } = require("./payment/getWebhookData");
// handle error and log
const { logHandler } = require("./utils/logHandler");
const { errorHandler } = require("./utils/errorHandler");
// import routes
const { profileRouter } = require('./profiles/profileRoutes');
const { commentRouter } = require("./comments/commentRoutes");
const { replyRouter } = require("./replies/replyRoutes");
const { authRouter } = require("./auth/authRoutes");
const { donationRouter } = require("./donations/donationRoutes");
const { notificationRouter } = require("./notifications/notificationRoutes");
const { waqfRouter } = require("./waqfs/waqfRoutes");
const { cartRouter } = require("./carts/cartRoutes");
const { shareRouter } = require("./shares/shareRoutes");
const { likeRouter } = require("./likes/likeRoutes");
const { fileRouter } = require("./files/fileRoutes");
const { volunteerRouter } = require("./volunteers/volunteerRoutes");
const { beneficiaryRouter } = require("./beneficiaries/beneficiaryRoutes");
const { partnerRouter } = require("./partners/partnerRoutes");
const { searchRouter } = require("./searchs/searchRoutes");
const { ratingRouter } = require("./ratings/ratingRoutes");
const { messageRouter } = require("./messages/messageRoutes");
const { postRouter } = require("./posts/postRoutes");
const { helpRouter } = require("./helps/helpRoutes");
const { updateRouter } = require("./updates/updateRoutes");
const { securedToken, decodeSecuredToken } = require("./auth/securedToken");
const { subscriptionRouter } = require('./subscriptions/subscriptionRoute')
// instantiate express
const app = express();
// port
const PORT = process.env.PORT || 4004;
// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse cookies
app.use(cookieParser());
// apply default cors to the server 
app.use(cors());
// set view engine
app.set('view engine', 'ejs');
// set views
app.set('views', 'views');
// get error 
app.use(errorHandler);
//log req info
app.use(logHandler);
// cross site request forgery protection
// app.use(csrf({ cookie: true })); 
// use this public files
app.use(express.static('public'));
// verify jwt 
app.use(expressjwt({
     secret: process.env.SECRET_KEY,
     getToken: req => {
          try {
               return req.headers.authorization?.split(' ')[1] || req.cookies.jwtoken;
          } catch (error) {
               console.warn(error);
          }
     },
     algorithms: ['HS256'],
}).unless({
     // verify not these routes
     path: [
          '/',
          '/webhook',
          '/webhook-server',
          '/verify_transaction',
          '/waqfs',
          '/waqfs/*/comments',
          '/waqfs/*/comments/*/replies',
          '/waqfs/*/updates',
          '/csrf-token',
          '/jwt',
     ]
})
);
// the routes
app.use("/profiles", profileRouter);
app.use("/waqfs", waqfRouter);
app.use("/comments", commentRouter);
app.use("/replies", replyRouter);
app.use("/auth", authRouter);
app.use("/donations", donationRouter);
app.use("/notifications", notificationRouter);
app.use("/carts", cartRouter);
app.use("/donations", donationRouter);
app.use("/shares", shareRouter);
app.use("/likes", likeRouter);
app.use("/files", fileRouter);
app.use("/volunteers", volunteerRouter);
app.use("/beneficiaries", beneficiaryRouter);
app.use("/partners", partnerRouter);
app.use("/searchs", searchRouter);
app.use("/ratings", ratingRouter);
app.use("/messages", messageRouter);
app.use("/posts", postRouter);
app.use("/helps", helpRouter);
app.use("/updates", updateRouter);
app.use("/subscriptions", subscriptionRouter);
// get json web token
app.get("/jwt", (req, res) => {
     try {
          const jwtoken = jsonwebtoken.sign({ user: "aly" }, process.env.SECRET_KEY);
          res.cookie('jwtoken', jwtoken, { httpOnly: true });
          res.json({ jwtoken: jwtoken })
     } catch (error) {
          console.warn(error);
     }
});
// get csrf-token from request
// app.get("/csrft", (req, res) => {
//      res.json({ csrfToken: req.csrfToken() })
// });
// get paystack webhook response
app.post("/webhook-server", getWebhookData);
// verify paystack transaction
app.post('/verify_transaction', verifyTransaction);
// get paystack transaction url
app.post('/get_trasaction_url', getTransactionUrl);
// server home
app.get("/", (req, res) => {
     try {
          res.status(200);
          res.type('html');
          res.render("home", {});
     } catch (error) {
          console.warn(error);
     }
});
// server home
app.get("/health", async (req, res) => {
     res.send("I am fine");
 });
// render 404 page
app.use((req, res) => {
     try {
          if (res.statusCode === 401) {
               res.status(404).render("404", {});
          }
          res.status(404).render("404", {});
     } catch (error) {
          console.warn(error);
     }
});

// listent to server  
// (1) 192.168.1.107 (2) 192.168.70.35 (3) 192.168.1.101
// listent to server  
const server = app.listen(PORT, () => {
     // log to the console
     console.log(`The server is listening at port ${PORT} !!!`);
 });
 
 server.keepAliveTimeout = 120 * 1000;
 server.headersTimeout = 120 * 1000
// module.exports = app;