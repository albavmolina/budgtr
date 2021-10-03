const express = require("express");
const budgets = require("./models/budget.js")

//initialize app
const app = express();

//Mount middleware
app.use(express.urlencoded({ extended: false})); // This is the only middleware we have been using up to date!!!!!!!!!!!!!! this middleware takes shit and turns it into objects 

app.get('/', (req, res) => {
    res.send('welcome to our budgeting app');
})

//Index
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        budget: budgets,
    });
});

//NEW 
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
})

//POST
app.post("/budgets", (req, res) => {
    console.log(req.body);
    const budget = {
            date: req.body.date, 
            name: req.body.name,
            from: req.body.from,
            amount:req.body.amount,
            tags: req.body.tags
        }; 
    budgets.push(budget)
    res.redirect("/budgets");
});

//Show route
app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", { 
        budget: budgets[req.params.index]    
    })   
});

app.listen(3000);