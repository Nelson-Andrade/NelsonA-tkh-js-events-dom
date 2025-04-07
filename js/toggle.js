let toggleBtn = document.getElementById("toggle");
console.log(toggleBtn);
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    toggleBtn.classList.toggle("light-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});