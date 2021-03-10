const themeButton = document.getElementsByTagName("button")[0];

//Check if user prefers darkmode
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
  themeButton.textContent = "🌚";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.textContent === "🌞" ? themeButton.textContent = "🌚" : themeButton.textContent = "🌞"
})