// Require Mongoose
const mongoose = require('mongoose');

// Use an alias schema
const Schema = mongoose.Schema;

// Define article model
let ArticleSchema = new Schema({
    // Store title
    title: {
        type: String,
        required: true,
    },
    // Store URL
    url: {
        type: String,
        required: true,
    },
    // Store notes about the article
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Note'
        },
    ]
});

// Create article object
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;