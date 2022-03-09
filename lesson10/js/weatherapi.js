const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5861897&units=imperial&APPID=f3c723af6991221a76f6d1976bbfd2c7";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
