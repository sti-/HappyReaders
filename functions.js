/**
 * Created by STI on 11/15/2014.
 */
app.get('/showmessages', function(req, res) {

    // if ((req.body.username == "playgo") && (req.body.password == "123")) {

    Testimonial.find(function (err, testimoniale) {

        var tabel = '<table id="myTable">';
        tabel += '<tr><td>Companie</td><td>User</td><td>Mesaj</td><td>Data</td></tr>';
        if (err) throw err;
        var i = 0;
        testimoniale.forEach(function (testimonial) {
            i++;
            if (i<4) {
                tabel += '<tr><td>';
                tabel += testimonial.companie;
                tabel += '</td><td>';
                tabel += testimonial.user;
                tabel += '</td><td>';
                tabel += testimonial.mesaj;
                tabel += '</td><td>';
                tabel += testimonial.datamesaj;
                tabel += '</td></tr>';
            };
        });
        tabel += '</table>';
        res.send(tabel);
    })
});

app.post('/shownext', function(req, res) {

    // if ((req.body.username == "playgo") && (req.body.password == "123")) {
    var tabel = '';
    Testimonial.find().sort({datamesaj: -1}).exec(function (err, testimoniale) {

        tabel += testimoniale[0].companie;
        tabel += '<td>';
        tabel += testimoniale[0].user;
        tabel += '<td>';
        tabel += testimoniale[0].mesaj;
        tabel += '<td>';
        tabel += testimoniale[0].datamesaj;
        tabel += '<td>';
        res.send(tabel);
    })

//         tabel += '</tr>';



//    } else {
    //      res.send("You wished!")
    // }
});

app.post('/update', function(req, res) {

    // if ((req.body.username == "playgo") && (req.body.password == "123")) {
    var tabel = '<table id="myTable">';
    tabel += '<tr><td>Companie</td><td>User</td><td>Mesaj</td><td>Data</td></tr>';
    var i = 0;
    Testimonial.find().sort({datamesaj: -1}).exec(function (err, testimoniale) {
        if (err) throw err;
        for (i=0; i<4; i++) {
            tabel += '<tr><td>';
            tabel += testimoniale[i].companie;
            tabel += '</td><td>';
            tabel += testimoniale[i].user;
            tabel += '</td><td>';
            tabel += testimoniale[i].mesaj;
            tabel += '</td><td>';
            tabel += testimoniale[i].datamesaj;
            tabel += '</td></tr>';
        }
        tabel += '</table>';
        console.log(tabel);
        res.send(tabel);
    })

//         tabel += '</tr>';



//    } else {
    //      res.send("You wished!")
    // }
});

app.post('/showmore', function(req, res) {

    // if ((req.body.username == "playgo") && (req.body.password == "123")) {
    Testimonial.find(function (err, testimoniale) {
        var tabel = '';
        if (err) throw err;
        var i = 0;
        testimoniale.forEach(function (testimonial) {
            i++;
            if (i == req.body.no) {
                tabel += '<td>';
                tabel += testimonial.companie;
                tabel += '<td>';
                tabel += testimonial.user;
                tabel += '<td>';
                tabel += testimonial.mesaj;
                tabel += '<td>';
            };
        });
        // tabel += '</tr>';
        res.send(tabel);
    })

//    } else {
    //      res.send("You wished!")
    // }
});

function insertTopRow() {
//var table = document.getElementById("myTable");
//var row = table.insertRow(1);
//var cell1 = row.insertCell(0);
//var cell2 = row.insertCell(1);
//var cell3 = row.insertCell(2);
//var cell4 = row.insertCell(3);
//var td = data.search("<td>");
//cell1.innerHTML = data.substr(0,td);
//data = data.substr(td+4);
//var td = data.search("<td>");
//cell2.innerHTML = data.substr(0,td);
//data = data.substr(td+4);
//var td = data.search("<td>");
//cell3.innerHTML = data.substr(0,td);
//data = data.substr(td+4);
//var td = data.search("00:00");
//cell4.innerHTML = data.substr(0,td);
}