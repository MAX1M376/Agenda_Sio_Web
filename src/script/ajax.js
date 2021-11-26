function GetDevoirs() {
    var request = $.ajax({
        url: "http://madsioagenda.alwaysdata.net/api/devoirs",
        method: "GET",
        dataType: "json",
        crossDomain: true
    });

    request.done(function (data) {
        console.log(data);
    })

    request.fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus);
    })
}