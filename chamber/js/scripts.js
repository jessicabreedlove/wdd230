//Hamburger Button

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const hamBtn = document.getElementById("hamburgerBtn");
hamBtn.onclick = toggleMenu;

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
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//Banner display date

const today = new Date();
let dayOfWeek;
dayOfWeek = today.getDay();
let banner;
if (dayOfWeek >= 1 && dayOfWeek <= 2) {
  banner =
    ":handshake::skin-tone-3: Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
  banner = "";
}
document.querySelector("#banner").textContent = banner;
