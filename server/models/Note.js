const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['answer', 'code'], // Only allow these two types
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const noteSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  content: [contentSchema], // Use the content schema for an array
  technology: {
    type: String, // Adding technology field
    required: true // Make it required or optional depending on your use case
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
