function convertTemperature() {
  var temperature = parseFloat(document.getElementById('temperatureInput').value);
  var unit = document.getElementById('unitSelect').value;
  var result = document.getElementById('result');

  if (isNaN(temperature)) {
    result.innerHTML = "⚠️ Please enter a valid number!";
    return;
  }

  let converted;

  if (unit === 'celsius') {
    converted = (temperature * 9/5) + 32;
    result.innerHTML = `${temperature}°C = ${converted.toFixed(2)}°F`;
  } else if (unit === 'fahrenheit') {
    converted = (temperature - 32) * 5/9;
    result.innerHTML = `${temperature}°F = ${converted.toFixed(2)}°C`;
  } else if (unit === 'kelvin') {
    converted = temperature - 273.15;
    result.innerHTML = `${temperature}K = ${converted.toFixed(2)}°C`;
  }
}
