function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const hamBtn = document.getElementById("hamburgerBtn");
hamBtn.onclick = toggleMenu;

const lastmod = document.querySelector("#lastmod");
lastmod.textContent = document.lastModified;

const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

/*banner JS */
const day = current.getDay();
const banner = document.querySelector("#banner");
console.log(day);
if (day == 6 || day == 7) {
  banner.classList.add("show");
} else {
  banner.classList.add("hide");
}
