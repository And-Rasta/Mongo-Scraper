// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// Initialize express
const app = express();


// Set up static directory
app.use(express.static("public"))

// Add body parser
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

// Set up view engine / handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// Add mongoose
// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost:27017/news-scraper");

// Require routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Application started");
});

// Connect to Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the server
app.listen(PORT, function () {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});