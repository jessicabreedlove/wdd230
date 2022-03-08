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
    const business = jsonObject["business"];
    business.forEach(displayBusiness);
  });

function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let logo = document.createElement("img");

  // card.setAttribute("class", "card grid-view");

  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}<br/>
    ${business.city}, ${business.state} ${business.zip}<br/>
    ${business.phone}</br>
    ${business.website}`;

  // Build the image attributes
  logo.setAttribute("src", business.imageurl);
  logo.setAttribute("alt", `logo of ${business.name}}`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("class", "company-logo grid-view");

  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}

// function gridView() {
//   document.getElementById("gridBtn").classList.toggle("show");
//   console.log("This is working");
// }

// function listView() {
//   document.getElementById("listBtn").classList.toggle("show");
// }

// const listViewButton = document.getElementById("listBtn");
// listViewButton.onclick = listView;

// const gridViewButton = document.getElementById("gridBtn");
// gridViewButton.onclick = gridView;
