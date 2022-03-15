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
    let random1 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
    let random2 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
    let random3 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
    if (random1 !== random2 && random2 !== random3 && random1 !== random3) {
      displaySpotlight(spotlight[random1]);
      displaySpotlight(spotlight[random2]);
      displaySpotlight(spotlight[random3]);
    } else {
      displaySpotlight(spotlight[0]);
      displaySpotlight(spotlight[1]);
      displaySpotlight(spotlight[2]);
    }
  });

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
