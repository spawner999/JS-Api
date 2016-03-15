var apiKey = '7a42b28fa741f660a3f282781c46170c';
var Forecast = require('./../js/forecast.js').Forecast;

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city= $('#location').val();
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey).then(function(response){
    for (var i=0; i<24; i++){
      var current = response.list[i];
      var forecast = new Forecast(
        response.city.name,
        current.dt_txt,
        current.main.temp,
        current.weather[0].main,
        current.clouds.all + "% cloud cover"
      );
      console.log(forecast);
    }
    console.log(response);
  });

  });
});
