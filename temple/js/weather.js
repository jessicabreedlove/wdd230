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
// let lat = 38;
// let lon = -77;
// let key = "59b43925192d7e7ef9b4e20400de7d81";
// let cnt = 3;
// const apiURL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&units=imperial&appid=${key}`;

const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast/daily?lat=38&lon=-77&cnt=3&appid=59b43925192d7e7ef9b4e20400de7d81&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const wdate = (document.querySelector("#wdate").textContent =
      jsObject.list.dt);
    const temp = (document.querySelector("#temp").textContent =
      jsObject.list.temp.day.toFixed(1));
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const wspeed = jsObject.list.speed;
    const humid = jsObject.list.humidity;
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
