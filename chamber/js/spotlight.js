const requestURL =
  "https://jessicabreedlove.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //uses json() method
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const spotlight = jsonObject["business"];
    // spotlight.forEach(displaySpotlight);
    randomNum = getRandomInt(0, 11);
    displaySpotlight(spotlight[4]);
  });

//generate a random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.floor() * (max - min + 1) + min);
}

function displaySpotlight(spotlight) {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "spotlight-1");
  let spotlighth3 = document.createElement("h3");
  let spotlightimg = document.createElement("img");
  let divcontact = document.createElement("spotlight-contact");
  let pphone = document.createElement("p");
  let psite = document.createElement("p");

  spotlighth3.textContent = `${spotlight.name}`;
  pphone.innerHTML = `${spotlight.phone}`;
  psite.innerHTML = `${spotlight.website}`;

  spotlightimg.setAttribute("src", spotlight.imageurl);
  spotlightimg.setAttribute("alt", `logo of ${spotlight.name}}`);
  spotlightimg.setAttribute("loading", "lazy");
  spotlightimg.setAttribute("class", "spotlightlogo");

  div1.appendChild(spotlighth3);
  div1.appendChild(spotlightimg);
  div1.appendChild(divcontact);
  divcontact.appendChild(pphone);
  divcontact.appendChild(psite);

  document.querySelector("div.spotlights").appendChild(div1);
}
