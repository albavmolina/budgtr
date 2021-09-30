const express = require('express');
const budgets= require('./models/budgets);
const logger = require('morgan');

// initialize the express app
const app = express();

// configure application settings
require('dotenv').config();

// mount middleware - app.use()
// this turns incoming json data into req.body
app.use(express.json());
app.use(logger('dev'));


// Index Route - See an index of all the things!
// GET -> /resource_name_pluralized
app.get('/budgets', (req, res) => {
    res.render('bugets_index.ejs', {
    allBudgets: budgets,

});
});

// New Route - Send the user to a dedicated page with a form
app.get('/budgets/new', (req, res) => {
    res.render('budgets_new.ejs');
    });

    // Create Route - Create a resource
// POST -> /resource_name_pluralized

// Create Route - Create a resource
// POST -> /resource_name_pluralized

app.post('/budgets', (req, res) => {

    budgets.push(req.body);
    res.redirect('/budgets')
    }); 
// Show Route - Show me one specific thing
// GET -> /resource_name_pluralized/:resource_identifier
app.get('/budgets/:budgets_index'), (req, res) => {
    res.render('budgets_show.ejs'), {
    budget: budgets[req.params.indexOfFruitsArray]
    });
    });

// tell the app to listen on port 3000 for requests from the client

const port = process.env.PORT;

// process.env is an object that lives in the node environment
// we use it to store environment variable

app.listen(port, () => {
console.log(`Express is listening on port:${port}`);
});