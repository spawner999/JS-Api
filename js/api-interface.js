var apiKey = '7a42b28fa741f660a3f282781c46170c';
var Forecast = require('./../js/forecast.js').Forecast;

$(document).ready(function(){
  $('#weatherLocation1').click(function(){
    $(this).off('click');
    var city1= $('#location1').val();
    $('.showWeather1').text("The city you have chosen is " + city1 + ".");
    apiCall(city1, 1);
  });
  $('#weatherLocation2').click(function(){
    $(this).off('click');
    var city2= $('#location2').val();
    $('.showWeather2').text("The city you have chosen is " + city2 + ".");
    apiCall(city2, 2);
  });
});


function apiCall(location, index){
  $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=' + apiKey).then(function(response){
    for (var i=0; i<8; i++){
      var current = response.list[i];
      var forecast = new Forecast(
        response.city.name,
        current.dt_txt,
        current.main.temp,
        current.weather[0].description
      );
      if(index===1){
        $('.1').append(createCard(forecast));
      }
      else {
        $('.2').append(createCard(forecast));
      }
    }
    addFlip();
  });
}

function createCard(forecast){
  var card = '<div class="forecast"><div class="card"><div class="face front"><h1>%city%</h1><h3>%date%</h3><h3>%description%</h3></div><div class="face back"><h2>C :%celsius%</h2><h2>F: %fahr%</h2></div></div></div>';

  var current = card.replace('%city%', forecast.city)
    .replace('%date%', forecast.date)
    .replace('%description%', forecast.description)
    .replace('%celsius%', forecast.celsius)
    .replace('%fahr%', forecast.fahr);
  return current;
  }

function addFlip(){
  $('.forecast').click(function(){
    var current = $(this);
    $(current).find('.card').addClass('flipped')
    .mouseleave(function(){
      $(current).find('.card').removeClass('flipped');
    });
    return false;
  })

}
