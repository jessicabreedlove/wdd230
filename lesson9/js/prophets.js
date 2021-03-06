const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //uses json() method
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let portrait = document.createElement("img");

  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  p.innerHTML = `<strong>Birth Date:</strong> ${prophet.birthdate} <br/>  
  <strong>Birth Place:</strong> ${prophet.birthplace}`;

  // Build the image attributes
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`
  );
  portrait.setAttribute("loading", "lazy");

  if (prophet.order == 1) {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`
    );
  } else if (prophet.order == 2) {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`
    );
  } else if (prophet.order == 3) {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`
    );
  } else {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
    );
  }

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}
