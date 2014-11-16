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
    var tabel = '<table id="myTable">';
    tabel += '<tr><td>Companie</td><td>User</td><td>Mesaj</td><td>Data</td><td></td></tr>';
    var i = 0;
    Testimonial.find().sort({datamesaj: -1}).exec(function (err, testimoniale) {
        if (err) throw err;
        var start = Number(req.body.randuri);
        var end = start + Number(req.body.cate);
        end = Math.min(end,testimoniale.length);
        for (i=start; i<end; i++) {
            tabel += '<tr><td>';
            tabel += testimoniale[i].companie;
            tabel += '</td><td>';
            tabel += testimoniale[i].user;
            tabel += '</td><td><div id="cristi" class="allmesaj">';
            tabel += testimoniale[i].mesaj;
            tabel += '</div></td><td>';
            var date = new Date(testimoniale[i].datamesaj);
            tabel += date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            tabel += '</td><td>';
            var trimis = testimoniale[i].trimis;
            if (trimis=="trimis") {
            tabel += trimis;
            }
            tabel += '</td></tr>';
        }
        tabel += '</table>';
        res.send(tabel);
    })
});

app.post('/updatemore', function(req, res) {
    var tabel = '';
    tabel += '';
    var i = 0;
    var start = Number(req.body.randuri);
    var end = start + Number(req.body.cate);
    var catesunt = 0;
    Testimonial.find(function (err, testimoniale) {
        if (err) throw err;
        testimoniale.forEach(function () {
            catesunt++;
        });
        if (end > catesunt) {
            end = catesunt;
        }
    })
    Testimonial.find().sort({datamesaj: -1}).exec(function (err, testimoniale) {
        if (err) throw err;
        for (i=start; i<end; i++) {
            tabel += '<tr><td>';
            tabel += testimoniale[i].companie;
            tabel += '</td><td>';
            tabel += testimoniale[i].user;
            tabel += '</td><td><div id="cristi" class="allmesaj">';
            tabel += testimoniale[i].mesaj;
            tabel += '</div></td><td>';
            var date = new Date(testimoniale[i].datamesaj);
            tabel += date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
            tabel += '</td><td>';
            var trimis = testimoniale[i].trimis;
            if (trimis=="trimis") {
                tabel += trimis;
            }
            tabel += '</td></tr>';
        }
        res.send(tabel);
    })
});

app.listen(process.env.PORT || 5000);