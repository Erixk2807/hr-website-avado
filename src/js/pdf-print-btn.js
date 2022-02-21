window.addEventListener("DOMContentLoaded", (event) => {
  const printBtn = document.getElementById("print-btn");

  // Adds event listener to launch print screen on button press
  printBtn.addEventListener("click", () => {
    window.print();
  });
});
