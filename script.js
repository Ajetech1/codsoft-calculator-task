document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = Array.from(document.getElementsByClassName("button"));
  let currentInput = "";
  let operator = "";
  let previousInput = "";

  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.innerText;

      if (value === "C") {
        currentInput = "";
        operator = "";
        previousInput = "";
        display.innerText = "";
      } else if (value === "=") {
        if (currentInput && previousInput && operator) {
          currentInput = eval(`${previousInput}${operator}${currentInput}`);
          display.innerText = currentInput;
          previousInput = "";
          operator = "";
        }
      } else if (["+", "-", "x", "/"].includes(value)) {
        operator = value === "x" ? "*" : value;
        previousInput = currentInput;
        currentInput = "";
      } else {
        currentInput += value;
        display.innerText = currentInput;
      }
    });
  });
});
