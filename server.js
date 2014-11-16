var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Testimonial = require('./testimonial_model.js');

var uristring = process.env.MONGOLAB_URI ||
    'mongodb://localhost/test';

var app = express();

mongoose.connect(uristring);

app.use(express.static(__dirname + '/assets'));

app.use(bodyParser());

app.post('/savemessage', function(req,res) {

    var new_testimonial = new Testimonial({
        companie: req.body.companie,
        user: req.body.user,
        mesaj: req.body.mesaj,
        datamesaj: req.body.datamesaj,
        trimis: req.body.trimis
    });

    new_testimonial.save(function(err){
        if (err) throw err;
    });
    res.send("yes");
});

app.post('/update', function(req, res) {
    Testimonial.find().sort({datamesaj: -1}).exec(function (err, testimoniale) {
        if (err) throw err;
        var start = Number(req.body.randuri);
        var end = start + Number(req.body.cate);

        res.send(testimoniale.slice(start, end));
    })
});

app.listen(process.env.PORT || 5000);
