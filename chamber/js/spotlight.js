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
    spotlight.forEach(displaySpotlight);
  });

function displaySpotlight(spotlight) {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "spotlight-1");
  let spotlighth3 = document.createElement("h3");
  let spotlightimg = document.createElement("img");
  let divcontact = document.createElement("spotlight-contact");
  let pemail = document.createElement("p");
  let pphone = document.createElement("p");
  let psite = document.createElement("p");

  spotlightimg.setAttribute("src", spotlight.imageurl);
  spotlightimg.setAttribute("alt", `logo of ${spotlight.name}}`);
  spotlightimg.setAttribute("loading", "lazy");
  spotlightimg.setAttribute("class", "dilogo");

  div1.appendChild(spotlighth3);
  div1.appendChild(spotlightimg);
  div1.appendChild(divcontact);
  divcontact.appendChild(pemail);
  divcontact.appendChild(pphone);
  divcontact.appendChild(psite);

  document.querySelector("div.spotlights").appendChild(div1);
}
