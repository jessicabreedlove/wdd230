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

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  p.textContent = `Birth Date: ${prophet.birthdate}  
  Birth Place: ${prophet.birthplace}`;
  console.log(p.textContent);

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portrait of ${prophet.name} ${prophet.lastname}`
  );
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}
