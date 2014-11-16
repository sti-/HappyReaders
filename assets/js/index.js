function createTableRows(data) {
    var rows = "";
    for (var i = 0; i < data.length; i++) {
        rows += '<tr><td>';
        rows += data[i].companie;
        rows += '</td><td>';
        rows += data[i].user;
        rows += '</td><td><div id="cristi" class="allmesaj">';
        rows += data[i].mesaj;
        rows += '</div></td><td>';
        var date = new Date(data[i].datamesaj);
        rows += date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        rows += '</td><td>';
        rows += data[i].trimis || "";
        rows += '</td></tr>';
    }
    return rows;
}

function showtestimonials(cate) {
    if (typeof(cate) == "undefined") { cate = 3; }
    $.post("update", {randuri: "0", cate: cate}, function (data) {

        $("#myTable").remove();

        var tabel = '<table id="myTable">';
        tabel += '<tr><td>Companie</td><td>User</td><td>Mesaj</td><td>Data</td><td></td></tr>';

        tabel += createTableRows(data);

        tabel += "</table>";
        $("#raspuns").prepend(tabel);
        $("table").mouseover(function(e) {
            var event = $(e.target);
            if (event.is("div")) {
                event.addClass("showallmesaj");
            }
        });
    })
}

function showsave() {
    var datatosave = $("form").serializeArray();
    $.post("savemessage", datatosave, function(data) {
        if (data=="yes") {
            var cate = 3;
            var tableElem = document.getElementById("myTable");
            if (tableElem) {
                if (tableElem.rows.length < 4) {
                cate = tableElem.rows.length;
                } else {
                cate = tableElem.rows.length - 1; }
            }
            alert(cate);
            showtestimonials(cate);
         }
    })
$("#companie").val(1);
$("#user").val("");
$("#mesaj").val("");
$("#trimis").prop("checked", false);

}

function showmore() {
    var x = document.getElementById("myTable").rows.length;
    $.post("update", {randuri: x - 1, cate: "3"}, function (data) {
        $("#myTable").append(createTableRows(data));
    });
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
}

