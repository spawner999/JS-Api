

var Forecast = function(city, date, temp, sky, clouds) {
  this.city = city;
  this.date = date;
  this.temp = this.tempConvert(temp);
  this.sky = sky;
  this.clouds = clouds;
};

Forecast.prototype.tempConvert = function(temp) {
  return Math.floor((temp - 273.15)* 1.8000 + 32.00);
}

exports.Forecast = Forecast;
