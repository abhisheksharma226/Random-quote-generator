const express = require("express");

const quotes = require("./quotes.json");


const app = express();
const PORT = 8000;


app.get("/" , (req , res) => {
    const randomNum = Math.floor(Math.random() * 98);
    const ranodmQuote = quotes[randomNum];
    res.send({ranodmQuote});
})


app.set("view engine" , "ejs");
app.set('views', './views');

app.get("/home" , (req , res) => {
    res.render("index");
})



app.listen( PORT , () => {
    console.log(`Server Started At ${PORT}`);
});