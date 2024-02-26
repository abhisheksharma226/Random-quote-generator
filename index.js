const express = require("express");

const quotes = require("./quotes.json");


const app = express();
const PORT = 8000;

app.set("view engine" , "ejs");
app.set('views', './views');

app.get("/" , (req , res) => {
    res.redirect("/home");
})
app.get("/home" , (req , res) => {
    const randomNum = Math.floor(Math.random() * 98);
    const randomQuote = quotes[randomNum];
    res.render('index', { randomQuote });
})


app.listen( PORT , () => {
    console.log(`Server Started At ${PORT}`);
});