function kelvinToFarenheit(num){
    //converts to farenheit and rounds to nearist decimal
    var far = Math.round(((num*9/5)-459.67)*10)/10;
    return far;
}

$(document).ready(function() {

    $('form').submit(()=> {

        var location = $('#city').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID=2163f3b53c6aa44d236c18da7a4262eb";

        $.get(url, function(res) {
            console.log(res);
            var temp = kelvinToFarenheit(res.main.temp);
            $('#results').html(
                `
                <h1>${location}</h1>
                <p>Temperature: ${temp} &#8457</p>
                `
            );
        }, 'json');
        return false;
    });
});