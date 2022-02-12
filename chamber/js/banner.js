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
