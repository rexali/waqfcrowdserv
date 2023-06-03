const express = require("express");

const { userRouter } = require('./routes/userRoute');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use("/users", userRouter);

// server home
app.get("/", (req, res) => {
     res.render("home", {});
});
// render 404 page
app.use((req, res) => {
     res.status(404).render("404", {});
});
// listent to server
app.listen(PORT, () => {
     console.log('The server is listening at port ' + PORT);
});