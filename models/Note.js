// Require Mongoose
const mongoose = require('mongoose');

// Use an alias schema
const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    // Store note title
    title: {
        type: String,
        required: true,
    },
    // Store note body
    body: {
        type: String,
        required: true,
    }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;