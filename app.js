const express = require("express");
const cookieParser = require("cookie-parser"); 
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");
const dotenv = require('dotenv');
dotenv.config();
// const csrf = require('csurf');
// const expressFormidable = require("express-formidable");

const { profileRouter } = require('./routes/profileRoutes');
const { projectRouter } = require('./routes/projectRoutes');
const { commentRouter } = require("./routes/commentRoutes");
const { replyRouter } = require("./routes/replyRoutes");
const { authRouter } = require("./routes/authRoutes");
const { logHandler } = require("./utils/logHandler");
const { errorHandler } = require("./utils/errorHandler");
const { donationRouter } = require("./routes/donationRoutes");
const { notificationRouter } = require("./routes/notificationRoutes");
const { causeRouter } = require("./routes/causeRoutes");
const { waqfRouter } = require("./routes/waqfRoutes");
const { cartRouter } = require("./routes/cartRoutes");
const { shareRouter } = require("./routes/shareRoutes");
const { likeRouter } = require("./routes/likeRoutes");
const { fileRouter } = require("./routes/fileRoutes");
const { volunteerRouter } = require("./routes/volunteerRoutes");
const { beneficiaryRouter } = require("./routes/beneficiaryRoutes");
const { partnerRouter } = require("./routes/partnerRoutes");
const { searchRouter } = require("./routes/searchRoutes");
const { transact } = require("./dbase/transact");

const app = express();

const PORT = 3000;

const HOST = "192.168.24.35"; 

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse cookies
app.use(cookieParser()); 

// apply cors option
// const corsOption = {
//      origin: ["http://191.168.70.35:3000", "http://192.168.1.107"],
//      // origin: '*',
//      credentials: true,
//      allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
//      methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
//      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
// }

// apply default cors to the server
// app.use(cors());
// set view engine
app.set('view engine', 'ejs');
// set views
app.set('views', 'views');
// get error 
app.use(errorHandler);
//log req info
app.use(logHandler);

// handle file with formidable
// app.use(expressFormidable());

// cross site request forgery protection
// const csrfProtection = csrf({cookie:true});
// app.use(csrfProtection);

// use this public files
app.use(express.static('public'));

// getToken: req => {
     //      if (req.headers["user-agent"] === null || undefined) {
     //           return req.headers.authorization;
     //      } else {
     //           return req.headers.cookie.token;
     //      }
     // },

// verify jwt
app.use(expressjwt({
     secret: process.env.SECRET_KEY,
     getToken: req => req.headers.authorization,
     algorithms: ['HS256']
}).unless({
     path: [ 
          '/',
          // '/public/index.html',
          // '/initializedb',
          // '/csrf-token',
          '/rex',
          '/favicon.ico',
          '/waqfs/1/favourites',
          '/jwt',
     ]
})
);

// the routers
app.use("/profiles", profileRouter);
app.use("/projects", projectRouter);
app.use("/causes", causeRouter);
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

// get web token
app.get("/jwt", (req, res) => {
     const token = jsonwebtoken.sign({ user: "aly" }, process.env.SECRET_KEY);
     res.cookie('token', token, { httpOnly: true });
     res.json({ jwtoken: token })
});

//  get csrf-token from request
// app.get("/csrf-token", (req, res) => {
//      res.json({ csrfToken: req.csrfToken() })
//  });
// app.get("/rex",async (req,res)=>res.json({affectedRows:0}));
// server home
app.get("/", (req, res) => res.render("home", {}));
// render 404 page
app.use((req, res) => res.status(404).render("404", {}));
// listent to server (1) 192.168.1.107 (2) 192.168.70.35 (3) 192.168.1.101
app.listen(PORT, HOST, () => {
     console.log(`The server host is ${HOST} and is listening at port ${PORT}`);
});