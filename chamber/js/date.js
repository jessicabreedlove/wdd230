const lastmod = document.querySelector("#lastmod");
lastmod.textContent = document.lastModified;

const datefield = document.querySelector(".date");

//Derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

/*form date*/
//Get date and time
var datetime =
  "Last Sync: " +
  d.getDate() +
  "/" +
  (d.getMonth() + 1) +
  "/" +
  d.getFullYear() +
  " || " +
  d.getHours() +
  ":" +
  d.getMinutes() +
  ":" +
  d.getSeconds();
console.log(datetime);
document.getElementById("formdate").value = datetime;
