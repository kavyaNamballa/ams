document.addEventListener("DOMContentLoaded", function() {
    const darkModeBtn = document.getElementById("dark-mode-btn");

    darkModeBtn.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "Light Mode";
        darkModeBtn.classList.remove("btn-dark");
        darkModeBtn.classList.add("btn-light");
      } else {
        darkModeBtn.textContent = "Dark Mode";
        darkModeBtn.classList.remove("btn-light");
        darkModeBtn.classList.add("btn-dark");
      }
    });
  });
