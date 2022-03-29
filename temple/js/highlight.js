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
    // temple.forEach(displayTemple);
    let random1 = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    displayTemple(temple[random1]);
  });

function displayTemple(temple) {
  // make all the elements
  let divhighlight = document.createElement("div");
  divhighlight.setAttribute("class", "highlight");
  let templeName = document.createElement("h2");
  let templeimg = document.createElement("img");
  let divcontact = document.createElement("div");
  let divordinances = document.createElement("div");
  let pphone = document.createElement("p");
  let psite = document.createElement("a");
  let pordinances = document.createElement("p");
  let pphase = document.createElement("p");
  // text content and inner html
  templeName.innerHTML = temple.name;
  pphone.innerHTML = `Phone: ${temple.phone}`;
  psite.innerHTML = `${temple.name} Website`;
  psite.setAttribute("href", temple.website);
  pordinances.innerHTML = `${temple.ordinances}`;
  pphase.innerHTML = temple.phase;
  // img stuff
  templeimg.setAttribute("src", temple.img);
  templeimg.setAttribute("alt", `logo of ${temple.name}}`);
  templeimg.setAttribute("loading", "lazy");
  templeimg.setAttribute("class", "templeimg");
  // append all the children
  divhighlight.appendChild(templeName);
  divhighlight.appendChild(templeimg);
  divhighlight.appendChild(divcontact);
  divcontact.appendChild(pphone);
  divcontact.appendChild(psite);
  divhighlight.appendChild(pphase);
  divhighlight.appendChild(divordinances);

  document.querySelector("div.temple-highlight").appendChild(divhighlight);
}
