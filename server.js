// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();


// Set up static directory
app.use(express.static("public"))

// Add body parser
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

// Set up view engine
app.engine('handlebars', exphbs({defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// Add mongoose
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/news-scraper");

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Application started");
});