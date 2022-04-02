/*
Bethesda MD Weather info-- API
        "id": 4348599,
        "name": "Bethesda",
        "state": "MD",
        "country": "US",
        "coord": {
            "lon": -77.100258,
            "lat": 38.980671
*/
// I had some issues doing the 3 day API call, so I just did the one day since I could make it work

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=59b43925192d7e7ef9b4e20400de7d81&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temp = (document.querySelector("#temp").textContent =
      jsObject.main.temp.toFixed(1));

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const wspeed = jsObject.wind.speed;
    const humid = jsObject.main.humidity;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
    document.querySelector("#speed").textContent = wspeed;
    document.querySelector("#humid").textContent = humid;
    let wchill = "";

    if (temp <= 50 && wspeed > 3) {
      wchill = windchill(temp, wspeed);
      wchill = `${wchill}&deg;F`;
    } else {
      wchill = "N/A";
    }

    document.querySelector("#wchill").innerHTML = wchill;

    function windchill(temp, wspeed) {
      windchill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wspeed, 0.16) +
        0.4275 * temp * Math.pow(wspeed, 0.16);
      return windchill.toFixed(1);
    }
  });
