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
  let divservices = document.createElement("div");
  let divhistory = document.createElement("div");
  let divschedule = document.createElement("div");
  let pphone = document.createElement("p");
  let psite = document.createElement("p");
  let asite = document.createElement("a");
  let pclothing = document.createElement("p");
  let pcafeteria = document.createElement("p");
  let phousing = document.createElement("p");
  let pdist = document.createElement("p");
  let pannounced = document.createElement("p");
  let pgroundb = document.createElement("p");
  let pdedicated = document.createElement("p");
  let prdedicated = document.createElement("p");
  let pordinances = document.createElement("p");
  let pphase = document.createElement("p");
  let pschedule = document.createElement("p");
  let pclosures = document.createElement("p");
  // text content and inner html
  templeName.textContent = `${temple.name}`;
  pphone.innerHTML = `Phone: ${temple.phone}`;
  psite.innerHTML = `${temple.name}`;
  // asite.setAttribute = ("href", `"${temple.website}"`);
  pclothing.textContent = `${temple.clothing}`;
  pcafeteria.textContent = `${temple.cafeteria}`;
  phousing.textContent = `${temple.patronhousing}`;
  pdist.textContent = `${temple.distribution}`;
  pannounced.innerHTML = `Announced: ${temple.announced}`;
  pgroundb.innerHTML = `Groundbreaking: ${temple.groundbreaking}`;
  pdedicated.innerHTML = `Dedicated: ${temple.dedicated}`;
  prdedicated.innerHTML = `Rededicated: ${temple.rededicated}`;
  pordinances.innerHTML = `${temple.ordinances}`;
  pschedule.innerHTML = `${temple.schedule}`;
  pclosures.innerHTML = `Closures: ${temple.closures}`;
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
  // asite.appendChild(psite);
  divhighlight.appendChild(divordinances);
  divordinances.appendChild(pphase);
  divordinances.appendChild(pordinances);
  divordinances.appendChild(pschedule);
  divhighlight.appendChild(divservices);
  divservices.appendChild(pclothing);
  divservices.appendChild(pcafeteria);
  divservices.appendChild(phousing);
  divservices.appendChild(pdist);
  divhighlight.appendChild(divschedule);
  divschedule.appendChild(pclosures);
  divhighlight.appendChild(divhistory);
  divhistory.appendChild(pannounced);
  divhistory.appendChild(pgroundb);
  divhistory.appendChild(pdedicated);
  divhistory.appendChild(prdedicated);

  document.querySelector("div.temple-highlight").appendChild(divhighlight);
}
