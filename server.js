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

app.get('/showmessages', function(req, res) {

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
});
app.get('/shownext', function(req, res) {

        // if ((req.body.username == "playgo") && (req.body.password == "123")) {

        Testimonial.find(function (err, testimoniale) {
            var tabel = '<table border="1"><tr>';
            if (err) throw err;
            var i = 0;
            testimoniale.forEach(function (testimonial) {
                i++;
                if (i == 4) {
                    tabel += '<td>';
                    tabel += testimonial.companie;
                    tabel += '</td><td>';
                    tabel += testimonial.user;
                    tabel += '</td><td>';
                    tabel += testimonial.mesaj;
                    tabel += '</td>';
                };
            });
            tabel += '</tr></table>';
            res.send(tabel);
        })

//    } else {
  //      res.send("You wished!")
   // }
});

app.listen(process.env.PORT || 5000);