var mongoose = require('mongoose');

var testimonialSchema = new mongoose.Schema({
    companie: String,
    user: String,
    mesaj: String,
    datamesaj: Date,
    trimis: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);