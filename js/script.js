const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const calculateButton = document.querySelector(".calculator .button");
const sizeInput = document.getElementById("sizeInput");
const resultDiv = document.getElementById("result");

const colorChange = document.querySelector(".sun-icon");

menuToggle.addEventListener("click", function () {
  // Make menu visible
  navLinks.classList.toggle("show");

  // Toggle between hamburgericon and crossicon
  menuToggle.innerHTML = navLinks.classList.contains("show")
    ? "&#10005;"
    : "&#9776;";
});

colorChange.addEventListener("click", function () {
  const letters = "0123456789AB";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  // Set primary-color to random color
  document.documentElement.style.setProperty("--primary-color", color);
});

// Add event if calculateButton exist - correct page
if (calculateButton) {
  calculateButton.addEventListener("click", function () {
    // Get the input value
    const size = parseFloat(sizeInput.value);

    // Check if the input is a valid number
    if (!isNaN(size)) {
      // Calculate 0.8 pounds per sq m
      const result = (size + 20) * 0.8;

      // Format result to british pounds
      const formatter = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      });

      // Display result
      resultDiv.textContent = "Estimate: " + formatter.format(result);
      sizeInput.value = "";
    } else {
      // Clear if invalid
      resultDiv.textContent = "";
    }
  });
}
