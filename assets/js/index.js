function showtestimonials() {
    $.post("update", {randuri: "0", cate: "3"}, function (data) {

        $("#raspuns").prepend(data);
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
                $("#raspuns").prepend(data);
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
        $("#myTable").append(data);
    })
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
}

