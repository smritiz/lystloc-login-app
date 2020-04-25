const express = require("express");
const app = express();
const port = 4002
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost:27017/lystlocDB";
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

app.listen(port , ()=>{
    console.log("server listening at port "+ port);
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS")
    next()
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true }, ()=>
{
    console.log("database connected");
});


app.use('/lystloc', routes);