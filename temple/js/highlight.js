const requestURL =
  "https://jessicabreedlove.github.io/wdd230/temple/data/data.json";
const highlight = document.querySelector(".temple-highlight");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //uses json() method
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const temple = jsonObject["temples"];
    // spotlight.forEach(displaySpotlight);
    let random1 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
    displayTemple(temple[random1]);
  });

function displayTemple(temple) {
  let divhighlight = document.createElement("div");
  divhighlight.setAttribute("class", "highlight");
  let templeName = document.createElement("h2");
  let templeimg = document.createElement("img");
  let divcontact = document.createElement("div");
  let divordinances = document.createElement("div");
  let divservices = document.createElement("div");
  let divhistory = document.createElement("div");
  let divschedule = document.createElement("div");
  let pphone = document.createElement("p");
  let psite = document.createElement("p");
  let pclothing = document.createElement("p");
  let pcafeteria = document.createElement("p");
  let phousing = document.createElement("p");
  let pdist = document.createElement("p");
  let pannounced = document.createElement("p");
  let psite = document.createElement("p");
  let psite = document.createElement("p");
  let psite = document.createElement("p");
  let psite = document.createElement("p");
  let psite = document.createElement("p");
  let psite = document.createElement("p");
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
