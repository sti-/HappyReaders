function showtestimonials() {
    $.post("update", {randuri: "0", cate: "3"}, function (data) {
        var newdata = data;
        var x = newdata.indexOf("00:00:00 GMT+0200 (GTB Standard Time)");
        while (x > -1) {
            newdata = newdata.replace("00:00:00 GMT+0200 (GTB Standard Time)", " ");
            x = newdata.indexOf("00:00:00 GMT+0200 (GTB Standard Time)");
        }
        $("#raspuns").prepend(newdata);
        $("table").mouseover( function (e) {
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
            $("#myTable").remove();
            $.post("update", {randuri: "0", cate: "3"}, function(data) {
                var newdata = data;
                var x = newdata.indexOf("00:00:00 GMT+0200 (GTB Standard Time)");
                while (x > -1) {
                    newdata = newdata.replace("00:00:00 GMT+0200 (GTB Standard Time)", " ");
                    x = newdata.indexOf("00:00:00 GMT+0200 (GTB Standard Time)");
                }
                $("#raspuns").prepend(newdata);
                $("table").mouseover( function (e) {
                    var event = $(e.target);
                    if (event.is("div")) {
                        event.addClass("showallmesaj");
                    }
                });
            });
         }
    })
}

function showmore() {
    var x = document.getElementById("myTable").rows.length;
    $.post("updatemore", {randuri: x-1, cate: "3"}, function (data) {
        var newdata = data;
        var x = newdata.indexOf("00:00:00 GMT+0200 (GTB Standard Time)");
        while (x > -1) {
            newdata = newdata.replace("00:00:00 GMT+0200 (GTB Standard Time)", " ");
            x = newdata.indexOf("00:00:00 GMT+0200 (GTB Standard Time)");
        }
        $("#myTable").append(newdata);
    })
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
}

