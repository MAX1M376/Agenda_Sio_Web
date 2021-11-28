var request = $.ajax({
    url: "https://madsioagenda.alwaysdata.net/api/devoirs",
    method: "GET",
    dataType: "json"
});

request.done(function (data) {
    console.log(data);
});

request.fail(function (jqXHR, textStatus) {
    console.log(jqXHR);
    console.log(textStatus);
});