const requestURL =
  "https://jessicabreedlove.github.io/wdd230/chamber/data/data.json";

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
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let thead = document.createElement("thead");
  let th = document.createElement("th");
  let td = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  // let logo = document.createElement("img");

  tr.setAttribute("class", "row");

  thead.textContent = `${business.name}`;
  td.innerHTML = `${business.address}
    ${business.city}, ${business.state} ${business.zip}`;
  td1.innerHTML = `${business.phone}`;
  td2.innerHTML = `${business.website}`;

  // Add/append the section(card) with the h2 element

  tr.appendChild(th);
  tr.appendChild(thead);
  tr.appendChild(td);
  tr.appendChild(td1);
  table.appendChild(tr);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(table);
}
