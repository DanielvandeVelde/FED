const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    theme.textContent === "🌞" ? theme.textContent = "🌚" : theme.textContent = "🌞"
})