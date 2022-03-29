const requestURL =
  "https://jessicabreedlove.github.io/wdd230/temple/data/data.json";
const card = document.querySelector(".temple-cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //uses json() method
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const temple = jsonObject["temples"];
    temple.forEach(displayTemple);
  });

function displayTemple(temple) {
  // make all the elements
  let card = document.createElement("section");
  card.setAttribute("class", "card");
  let templeName = document.createElement("h2");
  let templeimg = document.createElement("img");
  let divcontact = document.createElement("div");
  let divordinances = document.createElement("div");
  let divservices = document.createElement("div");
  let divhistory = document.createElement("div");
  let divschedule = document.createElement("div");
  let pphone = document.createElement("p");
  let psite = document.createElement("a");
  let pservices = document.createElement("p");
  let pannounced = document.createElement("p");
  let pgroundb = document.createElement("p");
  let prdedicated = document.createElement("p");
  let pordinances = document.createElement("p");
  let pphase = document.createElement("p");
  let pschedule = document.createElement("p");
  let pclosures = document.createElement("p");
  // text content and inner html
  templeName.innerHTML = `${temple.name}`;
  pphone.innerHTML = `Phone: ${temple.phone}`;
  psite.innerHTML = `${temple.name} Website`;
  psite.setAttribute("href", temple.website);
  pservices.innerHTML = `Services:<br/>${temple.clothing}<br/>${temple.cafeteria}<br/>${temple.patronhousing}<br/>${temple.distribution}`;
  pannounced.innerHTML = `Announced: ${temple.announced}`;
  pgroundb.innerHTML = `Groundbreaking: ${temple.groundbreaking}`;
  pordinances.innerHTML = `Ordinances:<br/>${temple.ordinances}`;
  pschedule.innerHTML = `${temple.schedule}`;
  pclosures.innerHTML = `Closures:<br/>${temple.closures}`;
  // img stuff
  templeimg.setAttribute("src", temple.img);
  templeimg.setAttribute("alt", `logo of ${temple.name}}`);
  templeimg.setAttribute("loading", "lazy");
  templeimg.setAttribute("class", "templeimg");
  // append all the children
  card.appendChild(templeName);
  card.appendChild(templeimg);
  card.appendChild(divcontact);
  divcontact.appendChild(pphone);
  divcontact.appendChild(psite);
  // asite.appendChild(psite);
  card.appendChild(divordinances);
  divordinances.appendChild(pphase);
  divordinances.appendChild(pordinances);
  divordinances.appendChild(pschedule);
  card.appendChild(divservices);
  divservices.appendChild(pservices);
  card.appendChild(divschedule);
  divschedule.appendChild(pclosures);
  card.appendChild(divhistory);
  divhistory.appendChild(pannounced);
  divhistory.appendChild(pgroundb);
  divhistory.appendChild(prdedicated);

  document.querySelector("div.temple-cards").appendChild(card);
}
