var mongoose = require('mongoose');

var testimonialSchema = new mongoose.Schema({
    companie: String,
    user: String,
    mesaj: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);