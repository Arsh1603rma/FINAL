const mongoose = require('mongoose');

// Our schema
const MusicSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Music', MusicSchema);