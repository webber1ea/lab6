function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
fToC(0);
fToC(100);

function convertToF(celsius) {
  var fahrenheit;
  fahrenheit = celsius;
  fahrenheit*=9;
  fahrenheit/=5;
  fahrenheit+=32;
  return fahrenheit;
}
console.log(convertToF(10));
