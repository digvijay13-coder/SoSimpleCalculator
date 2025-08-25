// Wait for the button to be clicked for calculation
document.getElementById("btn").addEventListener("click", function () {
  // Get the values entered by the user
  const num1 = document.querySelector(".num1").value;
  const num2 = document.querySelector(".num2").value;
  const operation = document.getElementById("selectOp").value;

  // Convert the inputs to numbers
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  // Check if the inputs are valid
  if (isNaN(number1) || isNaN(number2)) {
    document.querySelector(".result").textContent = "Please enter valid numbers!";
    return;
  }

  // Perform the calculation
  let result;
  if (operation === "plus") {
    result = number1 + number2;
  } else if (operation === "min") {
    result = number1 - number2;
  } else if (operation === "dev") {
    result = number1 / number2;
  } else if (operation === "multi") {
    result = number1 * number2;
  }

  // Show the result
  document.querySelector(".result").textContent = "Result: " + result;
});

// Refresh the inputs and result
document.getElementById("refreshBtn").addEventListener("click", function () {
  // Clear the input fields
  document.querySelector(".num1").value = "";
  document.querySelector(".num2").value = "";
  
  // Clear the result
  document.querySelector(".result").textContent = "RESULTS";
});
