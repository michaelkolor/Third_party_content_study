$.ajax({
    url: "https://api-us.mouseflow.com/websites",
    dataType: "json",
    type: "GET",
    headers: {
        "Authorization": "Basic " + btoa("mkolor10@gmail.com:3F2B2156DC264F0195C12503A793BAF1")
    }
}).always(function (data) {
    console.log(JSON.stringify(data));
});
