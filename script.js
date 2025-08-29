// ==========================
// Part 2: Functions & Scope
// ==========================

// Global variable
let animationCount = 0;

// Function with parameters + return value
function calculateArea(width, height) {
  return width * height;
}
console.log("Box area: " + calculateArea(100, 100));

// Local vs Global Scope
function incrementCounter() {
  let localMessage = "This is inside the function.";
  animationCount++;
  console.log(localMessage, "Animation count:", animationCount);
}

// ==========================
// Part 3: CSS + JS Integration
// ==========================

const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

// Trigger animation by adding class
animateBtn.addEventListener("click", () => {
  box.classList.add("animate");
  incrementCounter();
});

// Reset box by removing class
resetBtn.addEventListener("click", () => {
  box.classList.remove("animate");
});

// ==========================
// Modal Example
// ==========================

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none"; // hide modal
});

// Bonus: close modal if user clicks outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
