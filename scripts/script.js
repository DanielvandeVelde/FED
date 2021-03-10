const themeButton = document.getElementsByTagName("button")[0];
const firstSpan = document.getElementsByTagName("span")[0];

//Check if user prefers darkmode
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
  themeButton.textContent = "🌚";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.textContent === "🌞" ? themeButton.textContent = "🌚" : themeButton.textContent = "🌞"
})

const currentDate = new Date().toLocaleDateString('nl-nl', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
firstSpan.textContent = currentDate;