function showtestimonials() {
    $.get("showmessages", function (data) {
        $("#raspuns").append(data);
    })
}

function shownext() {
    $.get("shownext", function (data) {
        $("#raspuns").append(data);
    })
}