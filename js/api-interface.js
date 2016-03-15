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
        current.weather[0].description
      );
      $('.gallery').append(createCard(forecast));
    }
    $('.forecast').click(function(){
      var current = $(this);
    $(current).find('.card').addClass('flipped')
    .mouseleave(function(){
        $(current).find('.card').removeClass('flipped');
    });
    return false;
});
  });

  });
});


function createCard(forecast){
  var card = '<div class="forecast"><div class="card"><div class="face front"><h1>%city%</h1><h3>%date%</h3><h3>%description%</h3></div><div class="face back"><h2>C :%celsius%</h2><h2>F: %fahr%</h2></div></div></div>';

  var current = card.replace('%city%', forecast.city)
    .replace('%date%', forecast.date)
    .replace('%description%', forecast.description)
    .replace('%celsius%', forecast.celsius)
    .replace('%fahr%', forecast.fahr);
  return current;
  }
