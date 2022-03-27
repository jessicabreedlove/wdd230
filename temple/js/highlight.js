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
    // temple.forEach(displaytemple);
    let random1 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
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
  pphone.innerHTML = `${temple.phone}`;
  psite.innerHTML = `${temple.website}`;
  pclothing.textContent = `${temple.clothing}`;
  pcafeteria.textContent = `${temple.cafeteria}`;
  phousing.textContent = `${temple.patronhousing}`;
  pdist.textContent = `${temple.distribution}`;
  pannounced.textContent = `${temple.announced}`;
  pgroundb.textContent = `${temple.groundbreaking}`;
  pdedicated.textContent = `${temple.dedicated}`;
  prdedicated.textContent = `${temple.rededicated}`;
  pordinances.innerHTML = `${temple.ordinances}`;
  pschedule.innerHTML = `${temple.schedule}`;
  pclosures.innerHTML = `${temple.closures}`;
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
  divhighlight.appendChild(divordinances);
  divordinances.appendChild(pphase);
  divordinances.appendChild(pordinances);
  divordinances.appendChild(pschedule);
  divhighlight.appendChild(divservices);
  divservices.appendChild(pclothing);
  divservices.appendChild(pcafeteria);
  divservices.appendChild(phousing);
  divservices.appendChild(pdist);
  divschedule.appendChild(pclosures);
  divhistory.appendChild(pannounced);
  divhistory.appendChild(pgroundb);
  divhistory.appendChild(pdedicated);
  divhistory.appendChild(prdedicated);

  document.querySelector("div.temples").appendChild(divhighlight);
}
