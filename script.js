const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const body = document.body;
const toggleBtn = document.getElementById("modeToggle");
const clock = document.getElementById("clockBox");

// Arrays for day/month
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = days[now.getDay()];
  const date = `${String(now.getDate()).padStart(2, '0')} ${months[now.getMonth()]} ${now.getFullYear()}`;

  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
  dayEl.textContent = day;
  dateEl.textContent = date;
}
setInterval(updateClock, 1000);
updateClock();

// Toggle between .day and .night
toggleBtn.addEventListener("click", () => {
  const isNight = body.classList.contains("night");
  body.classList.toggle("night", !isNight);
  body.classList.toggle("day", isNight);
  toggleBtn.textContent = isNight ? "🌙 Night Mode" : "☀️ Day Mode";
  localStorage.setItem("clockMode", isNight ? "day" : "night");
});

// Load saved mode
const savedMode = localStorage.getItem("clockMode");
if (savedMode === "night") {
  body.classList.add("night");
  toggleBtn.textContent = "☀️ Day Mode";
} else {
  body.classList.add("day");
  toggleBtn.textContent = "🌙 Night Mode";
}

// Touch click to trigger yellow hover effect
clock.addEventListener("click", () => {
  clock.classList.add("clicked");
  setTimeout(() => {
    clock.classList.remove("clicked");
  }, 300);
});
