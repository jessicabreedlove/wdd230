const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid={f3c723af6991221a76f6d1976bbfd2c7}";
// "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f3c723af6991221a76f6d1976bbfd2c7";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
