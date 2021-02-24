window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  const values = {
    amount: document.getElementById("loan-amount").value = 100000,
    years: document.getElementById("loan-years").value = 15,
    rate: document.getElementById("loan-rate").value = 4,
  }
  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let inputs = getCurrentUIValues();
  calculated = calculateMonthlyPayment(inputs);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  const interest = (values.rate/100)/12; 
  const numOfPay = (values.years) * 12;
  const payment = (principle * interest) / (1 - Math.pow((1 + interest), -numOfPay));
  const finalPayment = payment.toFixed(2);
  // append to UI
  updateMonthly(finalPayment);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = `$ ${monthly}`;
}

