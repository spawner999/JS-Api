var apiKey = '7a42b28fa741f660a3f282781c46170c';

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city= $('#location').val();
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    $('.showWeather').append('<br>' + 'The rain is: ' + response.clouds.all).append('<br>' + 'The forecast is: ' + response.weather[0].description);
    console.log(response);
    })

  });
});
