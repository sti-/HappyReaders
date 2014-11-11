var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Testimonial = require('./testimonial_model.js');

//var uristring =
//    process.env.MONGOLAB_URI ||
//    process.env.MONGOHQ_URL ||
//    'mongodb://localhost/test';

var app = express();

//app.configure('production', function() {
    mongoose.connect('mongodb://'+process.env.MONGOLAB_URI+'/test');
//});

app.use(express.static(__dirname + '/assets'));

app.use(bodyParser());

app.post('/savemessage', function(req) {

    var new_testimonial = new Testimonial({
        companie: req.body.companie,
        user: req.body.user,
        mesaj: req.body.mesaj
    });

    new_testimonial.save(function(err){
        if (err) throw err;
    });
});

app.post('/showmessages', function(req, res) {

   // if ((req.body.username == "playgo") && (req.body.password == "123")) {

        Testimonial.find(function (err, testimoniale) {
            var tabel = '<table border="1">';
            tabel += '<tr><td>Email</td><td>Telefon</td><td>Oras</td><td>Adresa</td>';
            if (err) throw err;
            testimoniale.forEach(function (testimonial) {
                tabel += '<tr><td>';
                tabel += testimonial.companie;
                tabel += '</td><td>';
                tabel += testimonial.user;
                tabel += '</td><td>';
                tabel += testimonial.mesaj;
                tabel += '</td><td>';

            });
            tabel += '</table>';
            res.send(tabel);
        })
//    } else {
  //      res.send("You wished!")
   // }
});

app.listen(process.env.PORT || 5000);