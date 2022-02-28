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
const formdate = new Date();
let date =
  formdate.getFullYear() +
  "-" +
  (formdate.getMonth() + 1) +
  "-" +
  formdate.getDate(); /*getMonth starts in 0 that is why we add 1 to show the correct number of the month*/
let time =
  formdate.getHours() +
  ":" +
  formdate.getMinutes() +
  ":" +
  formdate.getSeconds();
let dateTime = date + " " + time;
console.log(dateTime);

document.querySelector("#formdate").innerHTML = dateTime;
