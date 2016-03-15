

var Forecast = function(city, date, temp, description) {
  this.city = city;
  this.date = date;
  this.fahr = this.fConvert(temp);
  this.celsius = this.cConvert(temp);
  this.description = description;
};

Forecast.prototype.fConvert = function(temp) {
  return Math.floor((temp - 273.15)* 1.8000 + 32.00);
}

Forecast.prototype.cConvert = function(temp) {
  return Math.floor(temp - 273.15);
}

exports.Forecast = Forecast;
