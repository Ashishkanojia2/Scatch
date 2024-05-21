const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const ownersRouter = require('./routes/ownersRouters')
const productsRouter = require('./routes/productsRouters')
const usersRouter = require('./routes/usersRouters')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs') 

//require mongodb
const db = require('./config/mongoose-connection')



//sending the request on the basic of router
app.use ('/owners', ownersRouter)
app.use('/products' , productsRouter)
app.use('/users', usersRouter)


app.get("/", (req, res) => {
  res.send("working");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
